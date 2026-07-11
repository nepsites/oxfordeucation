'use client';

import { useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  {
    flag: '🇦🇺 Australia',
    initials: 'PK',
    text: 'Oxford International made my dream of studying in Australia a reality. The counsellors guided me through every step — from choosing the right university to getting my student visa approved. Highly recommended!',
    name: 'Prabhat Kumar Sharma',
    info: 'Bachelor of IT — University of Melbourne, 2024',
  },
  {
    flag: '🇯🇵 Japan',
    initials: 'RP',
    text: "I wanted to study in Japan but had no idea where to start. Oxford International's Japan specialists were incredibly knowledgeable. They helped me secure admission and prepared me for the JLPT language requirement.",
    name: 'Rajan Poudel',
    info: 'Engineering — Kyoto University, Japan 2024',
  },
  {
    flag: '🇬🇧 UK',
    initials: 'SR',
    text: 'The IELTS coaching at Oxford International was excellent. The teachers are experienced and the study materials are top-notch. I scored 7.5 in my first attempt and got my UK student visa without any issues.',
    name: 'Sunita Rai',
    info: 'MSc — University of Manchester, UK 2025',
  },
  {
    flag: '🇩🇪 Germany',
    initials: 'BT',
    text: 'I never thought studying in Germany for free was possible. Oxford International explained the entire DAAD process, helped with my SOP, and I got accepted to TU Munich. The best decision of my life!',
    name: 'Bikram Thapa',
    info: 'MSc Computer Science — TU Munich, Germany 2024',
  },
  {
    flag: '🇰🇷 South Korea',
    initials: 'PM',
    text: "Oxford International's KGSP guidance was exceptional. They helped me prepare all documents, write my study plan, and I received a full scholarship to Seoul National University. Forever grateful!",
    name: 'Priya Maharjan',
    info: 'BA International Studies — Seoul National University, 2025',
  },
  {
    flag: '🇨🇦 Canada',
    initials: 'AS',
    text: 'From IELTS coaching to university application to visa — Oxford International handled everything professionally. My counsellor was always available to answer questions. Got into University of Toronto!',
    name: 'Aarav Shrestha',
    info: 'BEng Civil — University of Toronto, Canada 2025',
  },
  {
    flag: '🇯🇵 Japan',
    initials: 'SG',
    text: 'I studied Japanese at Oxford International for 6 months before applying. Their language teachers are outstanding and the JLPT N3 preparation was thorough. Now studying at Waseda University!',
    name: 'Saru Gurung',
    info: 'Japanese Language & Culture — Waseda University, 2024',
  },
  {
    flag: '🇦🇺 Australia',
    initials: 'RK',
    text: 'My visa was refused once before I came to Oxford International. Their team identified exactly what went wrong, rebuilt my application, and I got approved within 3 weeks. Truly expert guidance!',
    name: 'Roshan KC',
    info: 'MBA — University of Queensland, Australia 2025',
  },
];

function getPerView() {
  if (typeof window === 'undefined') return 3;
  return window.innerWidth <= 560 ? 1 : window.innerWidth <= 900 ? 2 : 3;
}

export default function TestimonialCarousel() {
  const trackRef = useRef(null);
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  const goTo = (idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };
  const resetAuto = () => startAuto();

  useEffect(() => {
    function onResize() {
      setPerView(getPerView());
    }
    setPerView(getPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, TESTIMONIALS.length - perView)));
  }, [perView]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('.tc-card');
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + 22;
    track.style.transform = `translateX(-${current * cardW}px)`;
  }, [current, perView]);

  const dotsCount = maxIndex + 1;

  return (
    <div
      className="tcarousel"
      id="testiCarousel"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startAuto}
    >
      <div className="tcarousel-window">
        <div className="tcarousel-track" id="testiTrack" ref={trackRef}>
          {TESTIMONIALS.map((t, i) => (
            <div className={`tc-card${i === current ? ' tc-active' : ''}`} key={t.name}>
              <div className="tc-top">
                <span className="tc-country">{t.flag}</span>
                <div className="tc-quote">&quot;</div>
              </div>
              <p className="tc-text">{t.text}</p>
              <div className="tc-stars">★★★★★</div>
              <div className="tc-author">
                <div className="tc-avatar" style={{ background: '#1a1f5e' }}>
                  {t.initials}
                </div>
                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-info">{t.info}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="tcarousel-btn tcarousel-prev"
        id="testiPrev"
        aria-label="Previous"
        onClick={() => {
          prev();
          resetAuto();
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="tcarousel-btn tcarousel-next"
        id="testiNext"
        aria-label="Next"
        onClick={() => {
          next();
          resetAuto();
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="tcarousel-dots" id="testiDots">
        {Array.from({ length: dotsCount }).map((_, i) => (
          <button
            key={i}
            className={`tdot${i === current ? ' active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              goTo(i);
              resetAuto();
            }}
          />
        ))}
      </div>
    </div>
  );
}
