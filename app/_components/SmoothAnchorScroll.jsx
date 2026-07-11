'use client';

import { useEffect } from 'react';

// Delegated smooth-scroll for same-page anchor links (href="#section"),
// offset for the fixed header, and closes the mobile nav on navigation.
export default function SmoothAnchorScroll() {
  useEffect(() => {
    function onClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const header = document.getElementById('header');
      const offset = header ? header.offsetHeight + 10 : 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav) mobileNav.classList.remove('open');
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
