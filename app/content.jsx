'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import CtaSection from './_components/CtaSection';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Counter from './_components/Counter';
import TestimonialCarousel from './_components/TestimonialCarousel';
import { createClient } from './_lib/supabase/client';

const DEST_CARDS = [
  {
    href: '/country-usa',
    flag: '🇺🇸',
    name: 'United States',
    badge: '⭐ Popular',
    cats: ['english'],
    img: '/images/dest-usa.jpg',
    tags: [
      ['fas fa-university', 'Top Universities'],
      ['fas fa-dollar-sign', 'Scholarships'],
    ],
  },
  {
    href: '/country-uk',
    flag: '🇬🇧',
    name: 'United Kingdom',
    badge: 'Top Ranked',
    cats: ['english', 'europe'],
    img: '/images/dest-uk.jpg',
    tags: [
      ['fas fa-university', 'Russell Group'],
      ['fas fa-graduation-cap', 'Postgrad Focus'],
    ],
  },
  {
    href: '/country-australia',
    flag: '🇦🇺',
    name: 'Australia',
    badge: 'High Demand',
    cats: ['english', 'asia'],
    img: '/images/dest-australia.jpg',
    tags: [
      ['fas fa-university', 'Group of Eight'],
      ['fas fa-graduation-cap', 'Quality Education'],
    ],
  },
  {
    href: '/country-japan',
    flag: '🇯🇵',
    name: 'Japan',
    badge: 'MEXT Funded',
    cats: ['asia'],
    img: '/images/dest-japan.jpg',
    tags: [
      ['fas fa-university', 'Top Colleges'],
      ['fas fa-yen-sign', 'Scholarships'],
    ],
  },
  {
    href: '/country-germany',
    flag: '🇩🇪',
    name: 'Germany',
    badge: 'Free Tuition',
    cats: ['europe'],
    img: '/images/dest-germany.jpg',
    tags: [
      ['fas fa-university', 'TU Universities'],
      ['fas fa-euro-sign', 'Low Fees'],
    ],
  },
  {
    href: '/country-canada',
    flag: '🇨🇦',
    name: 'Canada',
    badge: 'Top Education',
    cats: ['english'],
    img: '/images/dest-canada.jpg',
    tags: [
      ['fas fa-university', 'Top Schools'],
      ['fas fa-graduation-cap', 'Scholarships'],
    ],
  },
  {
    href: '/country-korea',
    flag: '🇰🇷',
    name: 'South Korea',
    badge: 'KGSP Funded',
    cats: ['asia'],
    img: '/images/dest-korea.jpg',
    tags: [
      ['fas fa-university', 'KGSP Scholarship'],
      ['fas fa-graduation-cap', 'Fully Funded'],
    ],
  },
  {
    href: '/country-newzealand',
    flag: '🇳🇿',
    name: 'New Zealand',
    badge: 'Quality Study',
    cats: ['english', 'asia'],
    img: '/images/dest-newzealand.jpg',
    tags: [
      ['fas fa-university', 'Top Universities'],
      ['fas fa-graduation-cap', 'Student Life'],
    ],
  },
];

export default function PageContent() {
  const [destFilter, setDestFilter] = useState('all');
  const visibleDest = DEST_CARDS.filter((d) => destFilter === 'all' || d.cats.includes(destFilter));

  const [user, setUser] = useState(null);
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Header />

      {/*  ANN BAR  */}

      <div className="ann-bar" id="annBar">
        🎓 <strong>Admissions Open 2026!</strong> Free Counselling for Australia, UK, USA & Japan.
        <a href="/contact">Book Now</a> — Limited Seats!
        <span
          className="ann-close"
          onClick={(e) => {
            e.currentTarget.parentElement.style.display = 'none';
          }}
        >
          ✕
        </span>
      </div>

      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <a href="tel:+977-9851158991">
                <i className="fas fa-phone"></i>+977-9851158991
              </a>
              <a href="tel:+977-1-4377050">
                <i className="fas fa-phone"></i>+977-1-4377050
              </a>
              <a href="mailto:info@oxfordeducation.com.np">
                <i className="fas fa-envelope"></i>info@oxfordeducation.com.np
              </a>
              <span>
                <i className="fas fa-map-marker-alt"></i>Sukedhara Chowk, Kathmandu, Nepal
              </span>
            </div>
            <div className="top-bar-right">
              <span>
                <i className="fas fa-clock"></i>Sun–Fri: 9AM–5PM
              </span>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/watch?v=LZaV-QDBQwQ" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  HERO  */}

      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg,#1e2570 0%,#293294 55%,#3b47b8 100%)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
              position: 'relative',
              zIndex: '1',
              padding: '80px 0',
            }}
            className="hero-inner-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(235,176,17,.2)',
                  border: '1px solid rgba(235,176,17,.4)',
                  color: '#EBB011',
                  fontSize: '13px',
                  fontWeight: '700',
                  padding: '7px 16px',
                  borderRadius: '30px',
                  marginBottom: '24px',
                  letterSpacing: '.5px',
                }}
                className="fade-in-up"
              >
                <i className="fas fa-star"></i> Nepal's Trusted Education Consultancy Since 2015
              </div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#fff',
                  lineHeight: '1.15',
                  marginBottom: '20px',
                }}
                className="fade-in-up d1"
              >
                Your Gateway to <span className="u-gold">World-Class Education</span> Abroad
              </h1>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,.82)',
                  lineHeight: '1.75',
                  marginBottom: '36px',
                  maxWidth: '520px',
                }}
                className="fade-in-up d2"
              >
                Oxford International guides Nepali students to top universities worldwide. From
                career counselling and language classes to visa success — we walk every step with
                you. <strong className="u-gold">Free Initial Counselling.</strong>
              </p>
              <div
                style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
                className="fade-in-up d3"
              >
                <a href="/contact" className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i>Book Free Session
                </a>
                <a href="/services" className="btn btn-outline">
                  <i className="fas fa-globe"></i>Explore Services
                </a>
              </div>
              <div
                style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '32px' }}
                className="fade-in-up d4"
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
                    fontSize: '13px',
                    padding: '7px 14px',
                    borderRadius: '20px',
                  }}
                >
                  <i className="fas fa-check-circle" style={{ color: '#EBB011' }}></i>Free Initial
                  Counselling
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
                    fontSize: '13px',
                    padding: '7px 14px',
                    borderRadius: '20px',
                  }}
                >
                  <i className="fas fa-check-circle" style={{ color: '#EBB011' }}></i>Visa
                  Application Support
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
                    fontSize: '13px',
                    padding: '7px 14px',
                    borderRadius: '20px',
                  }}
                >
                  <i className="fas fa-check-circle" style={{ color: '#EBB011' }}></i>IELTS &
                  Language Classes
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
                    fontSize: '13px',
                    padding: '7px 14px',
                    borderRadius: '20px',
                  }}
                >
                  <i className="fas fa-check-circle" style={{ color: '#EBB011' }}></i>SOP & Document
                  Prep
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
              }}
              className="hero-visual-col"
            >
              {/*  Logo showcase  */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/*  Animated outer glow rings  */}
                <div
                  style={{
                    position: 'absolute',
                    width: '290px',
                    height: '290px',
                    borderRadius: '50%',
                    border: '2px solid rgba(235,176,17,.25)',
                    animation: 'heroRingPulse 3s ease-in-out infinite',
                  }}
                ></div>
                <div
                  style={{
                    position: 'absolute',
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    border: '2px solid rgba(235,176,17,.4)',
                    animation: 'heroRingPulse 3s ease-in-out infinite .6s',
                  }}
                ></div>
                {/*  Logo image  */}
                <Image
                  src="/images/logo.png"
                  alt="Oxford International Education Centre and Consultancy Nepal"
                  width={220}
                  height={220}
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    display: 'block',
                    boxShadow: '0 0 40px rgba(235,176,17,.35), 0 0 80px rgba(41,50,148,.5)',
                    animation: 'heroLogoSpin 0s linear infinite',
                  }}
                />
                {/*  Floating badge: Est. 2015  */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '-14px',
                    background: '#EBB011',
                    color: '#293294',
                    fontWeight: '900',
                    padding: '8px 13px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    boxShadow: '0 6px 20px rgba(235,176,17,.45)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <i className="fas fa-certificate"></i>Est. 2015
                </div>
                {/*  Floating badge: student support  */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '-14px',
                    background: '#EBB011',
                    color: '#293294',
                    fontWeight: '900',
                    padding: '8px 13px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    boxShadow: '0 6px 20px rgba(235,176,17,.45)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <i className="fas fa-user-graduate"></i>Student Support
                </div>
              </div>
              {/*  Destinations mini-card  */}
              <div
                style={{
                  background: 'rgba(255,255,255,.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,.2)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  color: '#fff',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '14.5px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <i className="u-gold fas fa-map-marked-alt"></i>Popular Study Destinations
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
                  <a href="/country-australia" className="u-dd-glass dest-btn">
                    <span>🇦🇺</span>Australia
                  </a>
                  <a href="/country-uk" className="u-dd-glass dest-btn">
                    <span>🇬🇧</span>UK
                  </a>
                  <a href="/country-japan" className="u-dd-glass dest-btn">
                    <span>🇯🇵</span>Japan
                  </a>
                  <a href="/country-usa" className="u-dd-glass dest-btn">
                    <span>🇺🇸</span>USA
                  </a>
                  <a href="/country-germany" className="u-dd-glass dest-btn">
                    <span>🇩🇪</span>Germany
                  </a>
                  <a href="/country-canada" className="u-dd-glass dest-btn">
                    <span>🇨🇦</span>Canada
                  </a>
                </div>
                <a
                  href="/services"
                  style={{
                    display: 'block',
                    marginTop: '10px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,.6)',
                    textDecoration: 'none',
                    transition: '.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#EBB011';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,.6)';
                  }}
                >
                  + 20 more countries →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-strip">
        <div className="marquee-inner">
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in USA
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in UK
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Australia
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Canada
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Japan
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Germany
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in South Korea
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in New Zealand
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>IELTS Preparation
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Language Courses
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Computer Courses
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in USA
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in UK
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Australia
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Canada
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Japan
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in Germany
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in South Korea
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Study in New Zealand
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>IELTS Preparation
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Language Courses
          </div>
          <div className="marquee-item">
            <i className="fas fa-graduation-cap"></i>Computer Courses
          </div>
        </div>
      </div>

      {/*  STATS  */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="stat-number">Many</div>
              <div className="stat-label">Students Guided Abroad</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="stat-number">
                <Counter target={200} suffix="+" />
              </div>
              <div className="stat-label">Universities Across Our Network</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div className="stat-number">
                <Counter target={25} suffix="+" />
              </div>
              <div className="stat-label">Countries We Send Students To</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-number">
                <Counter target={98} suffix="%" />
              </div>
              <div className="stat-label">Visa Approval Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/*  SERVICES OVERVIEW  */}

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">
              Comprehensive <span>Education Services</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              From language classes and computer training to full study abroad counselling — all
              under one roof at Sukedhara Chowk, Kathmandu.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-badge">FREE</div>
              <div className="service-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="service-title">Free Career Counselling</h3>
              <p className="service-desc">
                Our certified counsellors assess your profile and goals to recommend the best
                course, university, and country for your future.
              </p>
              <a href="/service-counselling" className="service-link">
                Book Session <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3 className="service-title">Language Courses</h3>
              <p className="service-desc">
                English, Korean, Japanese, German, French, Arabic, Hebrew and more. Develop
                communication skills for your destination country.
              </p>
              <a href="/service-language" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="service-title">Computer Courses</h3>
              <p className="service-desc">
                Basic to advanced computer, Tally, Graphics Design, Hardware & Networking.
                Job-oriented professional courses for career growth.
              </p>
              <a href="/service-computer" className="service-link">
                View Courses <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3 className="service-title">Visa Assistance</h3>
              <p className="service-desc">
                Expert visa documentation for Australia, Japan, USA, UK, Canada and more — with our
                experienced visa team.
              </p>
              <a href="/service-visa" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3 className="service-title">Test Preparation</h3>
              <p className="service-desc">
                Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, SAT, and JLPT from experienced
                and qualified teachers.
              </p>
              <a href="/service-test-prep" className="service-link">
                Join Classes <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="service-title">Tuition Classes</h3>
              <p className="service-desc">
                Tuition for MBS/MBA, BBS/BBA, +2 All Faculties, SLC/SEE. Expert tutors helping
                students excel in their academic journey.
              </p>
              <a href="/service-tuition" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="u-txt-c-mt40">
            <a href="/services" className="btn btn-dark">
              View All Services <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/*  DESTINATIONS  */}

      <section className="u-bg-white section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Study Abroad</div>
            <h2 className="section-title">
              Explore <span>Top Destinations</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              We provide consultancy for 25+ countries. Find your dream destination and let us guide
              you every step of the way.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              margin: '28px 0 22px',
              paddingBottom: '14px',
              borderBottom: '2px solid #e0e4f0',
            }}
            id="destTabBar"
          >
            <button
              className={`dest-tab${destFilter === 'all' ? ' active' : ''}`}
              onClick={() => setDestFilter('all')}
            >
              All Countries<span className="tc">8</span>
            </button>
            <button
              className={`dest-tab${destFilter === 'english' ? ' active' : ''}`}
              onClick={() => setDestFilter('english')}
            >
              English Speaking<span className="tc">4</span>
            </button>
            <button
              className={`dest-tab${destFilter === 'asia' ? ' active' : ''}`}
              onClick={() => setDestFilter('asia')}
            >
              Asia Pacific<span className="tc">4</span>
            </button>
            <button
              className={`dest-tab${destFilter === 'europe' ? ' active' : ''}`}
              onClick={() => setDestFilter('europe')}
            >
              Europe<span className="tc">2</span>
            </button>
          </div>
          <div className="dest-card-grid" id="destGrid">
            {visibleDest.map((d) => (
              <a href={d.href} className="dc" key={d.href}>
                <div className="dc-img">
                  <div className="dcbg" style={{ backgroundImage: `url('${d.img}')` }}></div>
                  <span className="dc-badge">{d.badge}</span>
                </div>
                <div className="dc-body">
                  <div className="dc-name">
                    {d.flag} {d.name}
                  </div>
                  <div className="dc-tags">
                    {d.tags.map(([icon, label]) => (
                      <span className="dc-tag" key={label}>
                        <i className={icon}></i>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US  */}

      <section className="why-section" style={{ padding: '52px 0' }} id="why-oxford">
        <div className="why-bg-orb why-orb-1"></div>
        <div className="why-bg-orb why-orb-2"></div>
        <div className="u-rel-z1 container">
          {/*  Section Header  */}
          <div className="u-mb32 text-center">
            <div className="section-tag">Why Oxford International?</div>
            <h2 className="section-title" style={{ color: '#1a1a3a', marginTop: '8px' }}>
              Nepal's Most Trusted
              <br />
              <span>Education Consultancy</span>
            </h2>
            <div className="divider divider-center"></div>
            <p
              style={{
                color: '#555577',
                fontSize: '15px',
                maxWidth: '580px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              Since 2015, we have guided students from Sukedhara Chowk, Kathmandu toward
              universities across many study destinations with practical, honest counselling.
            </p>
          </div>
          {/*  6 Feature Cards  */}
          <div className="why-cards-grid">
            <div className="why-card why-card-accent-gold">
              <div className="why-card-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>Govt. Registered & MoE Recognized</h3>
              <p>
                Legally registered since 2015 (Regd. No. 136103/71/072) and recognized by Nepal's
                Ministry of Education — your assurance of credibility.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-check-circle"></i> Since 2015
              </div>
            </div>
            <div className="why-card why-card-accent-blue">
              <div className="why-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>High Visa Success Rate†</h3>
              <p>
                Our meticulous document preparation and honest counselling have delivered a strong
                visa success track record across all destinations.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-chart-line"></i> 2024 Results
              </div>
            </div>
            <div className="why-card why-card-accent-gold">
              <div className="why-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>Free Initial Counselling</h3>
              <p>
                Walk into our office, call, or WhatsApp — initial counselling is always free. Zero
                pressure, zero hidden fees, honest guidance you can trust.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-heart"></i> No Hidden Fees
              </div>
            </div>
            <div className="why-card why-card-accent-blue">
              <div className="why-card-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>Expert Teachers & Counsellors</h3>
              <p>
                Our instructors hold international qualifications and firsthand experience in
                destination countries — IELTS trainers, JLPT specialists, and certified visa
                experts.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-star"></i> Qualified Experts
              </div>
            </div>
            <div className="why-card why-card-accent-gold">
              <div className="why-card-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>Everything Under One Roof</h3>
              <p>
                Language courses, IELTS/TOEFL prep, computer training, tuition, and abroad
                consultancy — all at our Sukedhara Chowk campus, no running around.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-map-marker-alt"></i> Sukedhara, KTM
              </div>
            </div>
            <div className="why-card why-card-accent-blue">
              <div className="why-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="why-card-shine"></div>
              <h3>25+ Countries Network</h3>
              <p>
                From Australia to Japan, UK to Germany — our universities in our network and agency
                network spans 25+ countries so you always get the best options for your profile.
              </p>
              <div className="why-card-tag">
                <i className="fas fa-plane"></i> 25+ Destinations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  HOW IT WORKS  */}

      <section className="journey-section">
        <div className="journey-bg-orb jorb-1"></div>
        <div className="journey-bg-orb jorb-2"></div>
        <div className="u-rel-z1 container">
          <div className="text-center" style={{ marginBottom: '44px' }}>
            <div className="section-tag">How It Works</div>
            <h2
              style={{
                fontSize: 'clamp(26px,4vw,40px)',
                fontWeight: '900',
                color: '#fff',
                margin: '10px 0 14px',
              }}
            >
              Your Journey in <span className="u-gold">5 Easy Steps</span>
            </h2>
            <div className="divider divider-center"></div>
            <p
              style={{
                color: 'rgba(255,255,255,.6)',
                fontSize: '15px',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              From your first visit to flying abroad — we handle everything so you never have to
              worry.
            </p>
          </div>
          <div className="journey-steps">
            <div className="journey-step">
              <div className="js-num">STEP 01</div>
              <div className="js-icon gold">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Free Counselling</h3>
              <p>
                Visit our Sukedhara Chowk office or call us anytime for a free profile assessment
                with our senior counsellors.
              </p>
              <div className="js-badge">
                <i className="fas fa-check-circle"></i> Free Session
              </div>
            </div>
            <div className="journey-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="journey-step">
              <div className="js-num">STEP 02</div>
              <div className="js-icon blue">
                <i className="fas fa-search"></i>
              </div>
              <h3>Course Selection</h3>
              <p>
                We match you with the right course, university, and country based on your academic
                profile and career goals.
              </p>
              <div className="js-badge">
                <i className="fas fa-check-circle"></i> Personalised
              </div>
            </div>
            <div className="journey-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="journey-step">
              <div className="js-num">STEP 03</div>
              <div className="js-icon gold">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Application</h3>
              <p>
                We prepare your SOP, collect transcripts, and submit applications — tracking your
                offer letter every step.
              </p>
              <div className="js-badge">
                <i className="fas fa-check-circle"></i> Expert Help
              </div>
            </div>
            <div className="journey-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="journey-step">
              <div className="js-num">STEP 04</div>
              <div className="js-icon blue">
                <i className="fas fa-passport"></i>
              </div>
              <h3>Visa Process</h3>
              <p>
                Visa documentation guidance and support from our team — our strong visa success
                track record.
              </p>
              <div className="js-badge">
                <i className="fas fa-shield-alt"></i> High Visa Success
              </div>
            </div>
            <div className="journey-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="journey-step js-final">
              <div className="js-num">STEP 05</div>
              <div className="js-icon star">
                <i className="fas fa-plane-departure"></i>
              </div>
              <h3>Fly & Succeed!</h3>
              <p>
                Pre-departure orientation complete — you're fully prepared to soar to your dream
                university abroad!
              </p>
              <div className="js-badge js-badge-star">
                <i className="fas fa-star"></i> Dream Achieved
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-rocket"></i>Start Your Journey Today
            </a>
            <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', marginTop: '12px' }}>
              <i className="u-gold-mr5 fas fa-check"></i>Free consultation  · {' '}
              <i className="u-gold-mr5 fas fa-check"></i>No hidden fees  · {' '}
              <i className="u-gold-mr5 fas fa-check"></i>Expert guidance
            </p>
          </div>
        </div>
      </section>

      {/*  TESTIMONIALS  */}

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '36px' }}>
            <div className="section-tag">Student Stories</div>
            <h2 className="section-title">
              What Our <span>Students Say</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              Real stories from students we've helped move closer to their dream universities.
            </p>
          </div>
          <TestimonialCarousel />
          <div className="tc-rating-bar">
            <div className="tc-rating-score">
              4.9 <span>★</span>
            </div>
            <div>
              <div className="tc-rating-label">Average Rating</div>
              <div className="tc-rating-sub">Based on verified Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA  */}

      {/*  ═══════════════════════════════════════════════════
     STUDENT PORTAL SECTION
═══════════════════════════════════════════════════  */}

      <section className="section-pad" id="student-portal" style={{ background: '#f7f8fc' }}>
        <div className="container">
          <div className="u-grid-2-60 portal-grid">
            {/*  LEFT: Feature list  */}
            <div>
              <div className="section-tag">Student Portal</div>
              <h2 className="section-title">
                Track Your Journey,
                <br />
                <span>Every Step of the Way</span>
              </h2>
              <div className="divider"></div>
              <p
                style={{
                  color: '#555577',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  margin: '20px 0 28px',
                }}
              >
                Login to your personal portal — see real-time application status, chat with your
                counsellor, upload documents, and get notified instantly on every update.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <div className="u-flex-start14">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      minWidth: '42px',
                      background: 'linear-gradient(135deg,#293294,#3d44c4)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="u-txt-white-f16 fas fa-tasks"></i>
                  </div>
                  <div>
                    <strong className="u-txt-none">Application Tracker</strong>
                    <span className="u-txt-135-grey">
                      See live status — Applied → Under Review → Offer Received → Visa → Enrolled
                    </span>
                  </div>
                </div>
                <div className="u-flex-start14">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      minWidth: '42px',
                      background: '#293294',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="u-txt-white-f16 fas fa-comments"></i>
                  </div>
                  <div>
                    <strong className="u-txt-none">Direct Messaging</strong>
                    <span className="u-txt-135-grey">
                      Chat privately with your assigned counsellor — ask questions, get advice,
                      share updates
                    </span>
                  </div>
                </div>
                <div className="u-flex-start14">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      minWidth: '42px',
                      background: '#293294',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="u-txt-white-f16 fas fa-file-alt"></i>
                  </div>
                  <div>
                    <strong className="u-txt-none">Document Vault</strong>
                    <span className="u-txt-135-grey">
                      Upload transcripts, passports, SOP — all in one secure place, accessible
                      anytime
                    </span>
                  </div>
                </div>
                <div className="u-flex-start14">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      minWidth: '42px',
                      background: '#293294',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="u-txt-white-f16 fas fa-bell"></i>
                  </div>
                  <div>
                    <strong className="u-txt-none">Instant Notifications</strong>
                    <span className="u-txt-135-grey">
                      Get email & SMS alerts when your application status changes or counsellor
                      replies
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {user ? (
                  <a
                    href="/student-portal"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <i className="fas fa-arrow-right"></i> Go to Portal
                  </a>
                ) : (
                  <>
                    <a
                      href="/student-login"
                      className="btn btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <i className="fas fa-sign-in-alt"></i> Login to Portal
                    </a>
                    <a
                      href="/student-login"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '11px 20px',
                        border: '1.5px solid #293294',
                        borderRadius: '8px',
                        color: '#293294',
                        fontWeight: '700',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: '.2s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#f0f2ff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <i className="fab fa-google" style={{ color: '#DB4437' }}></i> Sign in with
                      Google
                    </a>
                  </>
                )}
              </div>
            </div>
            {/*  RIGHT: Portal mockup  */}
            <div style={{ position: 'relative' }}>
              {/*  Phone/app mockup  */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 24px 60px rgba(41,50,148,.18)',
                  overflow: 'hidden',
                  border: '1.5px solid #e0e4f0',
                  maxWidth: '380px',
                  margin: '0 auto',
                }}
              >
                {/*  Mockup header bar  */}
                <div
                  style={{
                    background: 'linear-gradient(135deg,#293294,#1a1f5e)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className="u-flex-c10">
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        background: 'rgba(255,255,255,.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <i className="fas fa-user" style={{ color: '#fff', fontSize: '14px' }}></i>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: '700', fontSize: '13px' }}>
                        Prabhat Sharma
                      </div>
                      <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '11px' }}>
                        Australia Application
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'rgba(235,176,17,.2)',
                      color: '#EBB011',
                      fontSize: '10px',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(235,176,17,.4)',
                    }}
                  >
                    ACTIVE
                  </div>
                </div>
                {/*  Status tracker  */}
                <div className="u-pb-row2">
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '12px',
                    }}
                  >
                    Application Status
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0',
                      overflowX: 'auto',
                      paddingBottom: '4px',
                    }}
                  >
                    <div className="u-txt-center-sh">
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#293294',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 4px',
                        }}
                      >
                        <i className="u-txt-w-10 fas fa-check"></i>
                      </div>
                      <div style={{ fontSize: '9px', color: '#293294', fontWeight: '700' }}>
                        Applied
                      </div>
                    </div>
                    <div
                      style={{ height: '2px', background: '#293294', flex: '1', minWidth: '16px' }}
                    ></div>
                    <div className="u-txt-center-sh">
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#293294',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 4px',
                        }}
                      >
                        <i className="u-txt-w-10 fas fa-check"></i>
                      </div>
                      <div style={{ fontSize: '9px', color: '#293294', fontWeight: '700' }}>
                        Review
                      </div>
                    </div>
                    <div
                      style={{
                        height: '2px',
                        background: 'linear-gradient(90deg,#293294,#EBB011)',
                        flex: '1',
                        minWidth: '16px',
                      }}
                    ></div>
                    <div className="u-txt-center-sh">
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#EBB011',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 4px',
                          animation: 'pulse 2s infinite',
                        }}
                      >
                        <i className="u-txt-w-10 fas fa-envelope-open"></i>
                      </div>
                      <div style={{ fontSize: '9px', color: '#EBB011', fontWeight: '700' }}>
                        Offer
                      </div>
                    </div>
                    <div
                      style={{ height: '2px', background: '#e0e4f0', flex: '1', minWidth: '16px' }}
                    ></div>
                    <div className="u-txt-center-sh">
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#e0e4f0',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 4px',
                        }}
                      >
                        <i
                          className="fas fa-passport"
                          style={{ color: '#aaa', fontSize: '10px' }}
                        ></i>
                      </div>
                      <div style={{ fontSize: '9px', color: '#aaa', fontWeight: '700' }}>Visa</div>
                    </div>
                    <div
                      style={{ height: '2px', background: '#e0e4f0', flex: '1', minWidth: '16px' }}
                    ></div>
                    <div className="u-txt-center-sh">
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: '#e0e4f0',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 4px',
                        }}
                      >
                        <i
                          className="fas fa-graduation-cap"
                          style={{ color: '#aaa', fontSize: '10px' }}
                        ></i>
                      </div>
                      <div style={{ fontSize: '9px', color: '#aaa', fontWeight: '700' }}>
                        Enrolled
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Messages preview  */}
                <div className="u-pb-row2">
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '10px',
                    }}
                  >
                    Messages
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      style={{
                        background: '#f0f2ff',
                        borderRadius: '10px 10px 10px 2px',
                        padding: '10px 12px',
                        maxWidth: '85%',
                      }}
                    >
                      <div style={{ fontSize: '10px', color: '#666', marginBottom: '3px' }}>
                        Counsellor Sarita · 2h ago
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#1a1a3a', lineHeight: '1.5' }}>
                        Your offer letter from Monash University has arrived! 🎉 Please review and
                        confirm by Friday.
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#293294',
                        borderRadius: '10px 10px 2px 10px',
                        padding: '10px 12px',
                        maxWidth: '85%',
                        marginLeft: 'auto',
                      }}
                    >
                      <div style={{ fontSize: '12.5px', color: '#fff', lineHeight: '1.5' }}>
                        Thank you! I'll review it today. What documents do I need next?
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#f0f2ff',
                        borderRadius: '10px 10px 10px 2px',
                        padding: '10px 12px',
                        maxWidth: '85%',
                      }}
                    >
                      <div style={{ fontSize: '10px', color: '#666', marginBottom: '3px' }}>
                        Counsellor Sarita · 1h ago
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#1a1a3a', lineHeight: '1.5' }}>
                        You'll need your Genuine Student (GS) responses and bank statement. I've
                        uploaded the checklist to your documents. 📋
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Documents  */}
                <div style={{ padding: '14px 20px' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '10px',
                    }}
                  >
                    Documents
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <div className="u-flex-sb-box">
                      <div className="u-flex-c8">
                        <i
                          className="fas fa-file-pdf"
                          style={{ color: '#e74c3c', fontSize: '14px' }}
                        ></i>
                        <span className="u-txt-12-dark">Offer Letter - Monash.pdf</span>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          background: '#d4edda',
                          color: '#155724',
                          padding: '2px 7px',
                          borderRadius: '10px',
                        }}
                      >
                        New
                      </span>
                    </div>
                    <div className="u-flex-sb-box">
                      <div className="u-flex-c8">
                        <i
                          className="fas fa-file-pdf"
                          style={{ color: '#e74c3c', fontSize: '14px' }}
                        ></i>
                        <span className="u-txt-12-dark">GS Checklist.pdf</span>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          background: '#fff3cd',
                          color: '#856404',
                          padding: '2px 7px',
                          borderRadius: '10px',
                        }}
                      >
                        Pending
                      </span>
                    </div>
                    <div className="u-flex-sb-box">
                      <div className="u-flex-c8">
                        <i
                          className="fas fa-file-image"
                          style={{ color: '#3498db', fontSize: '14px' }}
                        ></i>
                        <span className="u-txt-12-dark">Passport Copy.jpg</span>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          background: '#d4edda',
                          color: '#155724',
                          padding: '2px 7px',
                          borderRadius: '10px',
                        }}
                      >
                        Uploaded
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Floating badge  */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-10px',
                  background: '#EBB011',
                  color: '#1a1a3a',
                  fontSize: '11px',
                  fontWeight: '900',
                  padding: '8px 14px',
                  borderRadius: '20px',
                  boxShadow: '0 6px 20px rgba(235,176,17,.4)',
                  whiteSpace: 'nowrap',
                }}
              >
                <i className="fas fa-shield-alt" style={{ marginRight: '5px' }}></i>100% Secure
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '-10px',
                  background: '#293294',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '900',
                  padding: '8px 14px',
                  borderRadius: '20px',
                  boxShadow: '0 6px 20px rgba(41,50,148,.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                <i className="fas fa-bell" style={{ marginRight: '5px', color: '#EBB011' }}></i>Live
                Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={
          <>
            Ready to Begin Your
            <br />
            International Journey?
          </>
        }
        text="Talk to our expert counsellors today — Free Initial Session, Zero Obligation."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Book Free Session',
            variant: 'white',
          },
          {
            href: 'tel:+9779851158991',
            icon: 'fas fa-phone',
            label: 'Call Now',
            variant: 'outline',
          },
        ]}
      />

      {/*  RECENT BLOG  */}

      <section className="section-pad" style={{ background: '#f0f2f5' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '0',
            }}
          >
            <div>
              <div className="section-tag">Latest Updates</div>
              <h2 className="section-title">
                News & <span>Visa Updates</span>
              </h2>
              <div className="divider"></div>
            </div>
            <a href="/blog" className="btn btn-dark">
              View All <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="news-grid">
            <a href="/blog-australia-visa" className="news-card">
              <div
                className="news-img"
                style={{ background: "url('/images/dest-australia.jpg') center/cover no-repeat" }}
              >
                <span className="news-cat">Australia</span>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <i className="far fa-calendar-alt"></i>June 20, 2026
                </div>
                <h3 className="news-title">
                  Australia Student Visa: New 2026 Requirements for Nepali Students
                </h3>
                <p className="news-excerpt">
                  Updated financial requirements and processing timelines for Nepal students
                  applying for the Australian student visa subclass 500...
                </p>
              </div>
              <div className="news-footer">
                <span className="news-author">
                  <i className="far fa-user"></i>Visa Expert
                </span>
                <span className="news-readmore">
                  Read More <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
            <a href="/blog-ielts-tips" className="news-card">
              <div
                className="news-img"
                style={{ background: "url('/images/news-ielts.jpg') center/cover no-repeat" }}
              >
                <span className="news-cat">IELTS</span>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <i className="far fa-calendar-alt"></i>June 14, 2026
                </div>
                <h3 className="news-title">
                  Top 10 IELTS Preparation Tips to Score 7+ Band in Nepal
                </h3>
                <p className="news-excerpt">
                  Expert tips from our IELTS coaching team at Oxford International to help you
                  achieve the band score you need for your dream university...
                </p>
              </div>
              <div className="news-footer">
                <span className="news-author">
                  <i className="far fa-user"></i>IELTS Team
                </span>
                <span className="news-readmore">
                  Read More <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
            <a href="/blog-japan-scholarship" className="news-card">
              <div
                className="news-img"
                style={{ background: "url('/images/dest-japan.jpg') center/cover no-repeat" }}
              >
                <span className="news-cat">Japan</span>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <i className="far fa-calendar-alt"></i>June 8, 2026
                </div>
                <h3 className="news-title">
                  MEXT Scholarship 2026: Complete Guide for Nepali Students
                </h3>
                <p className="news-excerpt">
                  Everything Nepali students need to know about Japan's prestigious MEXT government
                  scholarship for 2026 — eligibility, process & deadlines...
                </p>
              </div>
              <div className="news-footer">
                <span className="news-author">
                  <i className="far fa-user"></i>Japan Team
                </span>
                <span className="news-readmore">
                  Read More <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/*  STICKY  */}

      <Footer />
    </>
  );
}
