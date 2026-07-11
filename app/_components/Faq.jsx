'use client';

import { useState } from 'react';

// items: [{ q: string, a: string }]
export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="u-max760">
      {items.map((item, i) => (
        <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
          <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {item.q} <i className="fas fa-chevron-down"></i>
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
