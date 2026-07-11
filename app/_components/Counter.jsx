'use client';

import { useEffect, useRef, useState } from 'react';

// Animated count-up, triggered once when scrolled into view.
export default function Counter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setValue(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="counter">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
