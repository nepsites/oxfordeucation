'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  <div className="footer-logo-icon">
                    <Image
                      alt="Oxford International Logo"
                      src="/images/logo.png"
                      width={46}
                      height={46}
                    />
                  </div>
                  <div className="footer-logo-text">
                    <div className="name">Oxford International</div>
                    <div className="sub">Education Centre &amp; Consultancy</div>
                  </div>
                </div>
                <p className="footer-desc">
                  Oxford International Education Center and Consultancy — Nepal&apos;s trusted
                  academic institute for abroad study, language classes, and computer courses since
                  2015.
                </p>
                <p className="footer-reg">
                  <i className="fas fa-certificate"></i> Regd. No. 136103/71/072 | Recognized by
                  Govt. of Nepal &amp; Ministry of Education
                </p>
                <div className="footer-socials">
                  <a
                    aria-label="Facebook"
                    href="https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    aria-label="YouTube"
                    href="https://www.youtube.com/watch?v=LZaV-QDBQwQ"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a aria-label="Twitter" href="#" title="Twitter (Coming Soon)">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a aria-label="TikTok" href="#" title="TikTok (Coming Soon)">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a aria-label="Google" href="#" title="Google (Coming Soon)">
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Our Services</a>
                  </li>
                  <li>
                    <a href="/team">Our Team</a>
                  </li>
                  <li>
                    <a href="/students">Students</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col destinations">
                <h4>Study Destinations</h4>
                <ul>
                  <li>
                    <a href="/country-usa">
                      <span className="dest-flag">🇺🇸</span>
                      <span className="dest-name">United States</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-uk">
                      <span className="dest-flag">🇬🇧</span>
                      <span className="dest-name">United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-australia">
                      <span className="dest-flag">🇦🇺</span>
                      <span className="dest-name">Australia</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-japan">
                      <span className="dest-flag">🇯🇵</span>
                      <span className="dest-name">Japan</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-germany">
                      <span className="dest-flag">🇩🇪</span>
                      <span className="dest-name">Germany</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-canada">
                      <span className="dest-flag">🇨🇦</span>
                      <span className="dest-name">Canada</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-newzealand">
                      <span className="dest-flag">🇳🇿</span>
                      <span className="dest-name">New Zealand</span>
                    </a>
                  </li>
                  <li>
                    <a href="/country-korea">
                      <span className="dest-flag">🇰🇷</span>
                      <span className="dest-name">South Korea</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col newsletter">
                <h4>Stay Updated</h4>
                <p>Get latest visa news, scholarship alerts &amp; study tips.</p>
                <form
                  className="newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const btn = e.currentTarget.querySelector('button');
                    if (btn) {
                      const original = btn.innerHTML;
                      btn.innerHTML = '<i class="fas fa-check"></i>';
                      setTimeout(() => {
                        btn.innerHTML = original;
                      }, 2500);
                    }
                    e.currentTarget.reset();
                  }}
                >
                  <label htmlFor="newsletterEmail" className="u-visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletterEmail"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    required
                  />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
                <div className="footer-contact-mini">
                  <p>
                    <i className="fas fa-map-marker-alt"></i>Sukedhara Chowk, Kathmandu, Nepal
                  </p>
                  <p>
                    <i className="fas fa-phone"></i>+977-9851158991
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>info@oxfordeducation.com.np
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-inner">
              <p>
                © 2026 <span>Oxford International Education Centre &amp; Consultancy</span>. All
                Rights Reserved.
              </p>
              <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms &amp; Conditions</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="sticky-actions">
        <a
          className="sticky-btn sticky-wa"
          href="https://wa.me/9779851158991"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Us"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <button
          type="button"
          className="sticky-btn sticky-top"
          id="scrollTop"
          title="Back to Top"
          style={{ display: showTop ? 'flex' : 'none' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}
