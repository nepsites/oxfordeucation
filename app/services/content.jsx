'use client';

import { useEffect, useState } from 'react';
import CtaSection from '../_components/CtaSection';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function PageContent() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = popupOpen ? 'hidden' : '';
    function onKeyDown(e) {
      if (e.key === 'Escape') setPopupOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [popupOpen]);

  return (
    <>
      <Header />

      <div className="ann-bar" id="annBar">
        🎓 <strong>Admissions Open 2026!</strong> Free Counselling for Australia, UK, USA & Japan.
        <a href="/contact">Book Now</a> — Limited Seats!
        <button
          type="button"
          className="ann-close"
          aria-label="Dismiss announcement"
          onClick={(e) => {
            e.currentTarget.parentElement.style.display = 'none';
          }}
        >
          ✕
        </button>
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

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">›</span>
            <span>Our Services</span>
          </div>
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            From language courses and computer training to complete abroad study consultancy — we
            offer everything under one roof at Sukedhara Chowk, Kathmandu.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">
              Complete <span>Education Services</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              We are more than a consultancy. Oxford International is a full academic institute
              offering a wide range of courses and services for students of all backgrounds.
            </p>
          </div>
          {/*  Consultancy  */}
          <div style={{ marginTop: '60px' }} id="consultancy">
            <div className="u-flex-c8-mb28">
              <div className="u-icon-box-p2">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h3 className="u-phead2">Abroad Study Consultancy</h3>
                <p className="u-txt-sm-body5">
                  Expert guidance for studying in 25+ countries worldwide
                </p>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}
              className="dest-mini-grid"
            >
              <a
                className="u-card-pad3"
                href="/country-australia"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇦🇺</div>
                <h4 className="u-h4-primary5">Australia</h4>
                <p className="u-txt-sm-muted">
                  Student Visa 500 · PR Pathway · Group of Eight Unis
                </p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-usa"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇺🇸</div>
                <h4 className="u-h4-primary5">United States</h4>
                <p className="u-txt-sm-muted">F-1 Visa · Top Universities · Scholarships</p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-uk"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇬🇧</div>
                <h4 className="u-h4-primary5">United Kingdom</h4>
                <p className="u-txt-sm-muted">Tier 4 Visa · Russell Group · Graduate Route</p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-japan"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇯🇵</div>
                <h4 className="u-h4-primary5">Japan</h4>
                <p className="u-txt-sm-muted">Student Visa · MEXT Scholarship · JLPT Prep</p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-canada"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇨🇦</div>
                <h4 className="u-h4-primary5">Canada</h4>
                <p className="u-txt-sm-muted">Study Permit · PR Pathway · Top Colleges</p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-germany"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇩🇪</div>
                <h4 className="u-h4-primary5">Germany</h4>
                <p className="u-txt-sm-muted">Free Tuition · DAAD Scholarship · TU Universities</p>
              </a>
              <a
                className="u-card-pad3"
                href="/country-korea"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#293294';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(41,50,148,.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.borderColor = '#e0e4f0';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="u-fs50-mb10">🇰🇷</div>
                <h4 className="u-h4-primary5">South Korea</h4>
                <p className="u-txt-sm-muted">Student Visa · KGSP Scholarship · Top Universities</p>
              </a>
              <div
                className="u-card-pad3"
                onClick={() => setPopupOpen(true)}
                style={{ border: '1.5px dashed #c8cdf0', cursor: 'pointer' }}
              >
                <div className="u-fs50-mb10">🌍</div>
                <h4 className="u-h4-primary5">And Many More</h4>
                <p className="u-txt-sm-muted">Click to see all 25+ countries</p>
              </div>
            </div>
          </div>
          {/*  Language  */}
          <div
            style={{
              marginTop: '60px',
              background: '#fff',
              borderRadius: '20px',
              padding: '40px',
              border: '1.5px solid #e0e4f0',
            }}
            id="language"
          >
            <div className="u-flex-c8-mb28">
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#EBB011',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#293294',
                  fontSize: '22px',
                  flexShrink: '0',
                }}
              >
                <i className="fas fa-language"></i>
              </div>
              <div>
                <h3 className="u-phead2">Language Courses</h3>
                <p className="u-txt-sm-body5">
                  Develop communication skills in your destination country's language
                </p>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}
              className="lang-grid"
            >
              <div className="u-info-box">
                <span className="u-fs28">🇬🇧</span>
                <div>
                  <h4 className="u-h4-primary10">
                    English <span className="u-label-block">English</span>
                  </h4>
                  <p className="u-txt-xs-muted">Spoken, Written, IELTS Prep</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇯🇵</span>
                <div>
                  <h4 className="u-h4-primary10">
                    日本語 <span className="u-label-block">Japanese</span>
                  </h4>
                  <p className="u-txt-xs-muted">JLPT N5–N1 Preparation</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇰🇷</span>
                <div>
                  <h4 className="u-h4-primary10">
                    한국어 <span className="u-label-block">Korean</span>
                  </h4>
                  <p className="u-txt-xs-muted">TOPIK Preparation</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇩🇪</span>
                <div>
                  <h4 className="u-h4-primary10">
                    Deutsch <span className="u-label-block">German</span>
                  </h4>
                  <p className="u-txt-xs-muted">A1–B2 Level Courses</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇫🇷</span>
                <div>
                  <h4 className="u-h4-primary10">
                    Français <span className="u-label-block">French</span>
                  </h4>
                  <p className="u-txt-xs-muted">Alliance Française Standard</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇸🇦</span>
                <div>
                  <h4 className="u-h4-primary10">
                    العربية <span className="u-label-block">Arabic</span>
                  </h4>
                  <p className="u-txt-xs-muted">Modern Standard Arabic</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🇮🇱</span>
                <div>
                  <h4 className="u-h4-primary10">
                    עברית <span className="u-label-block">Hebrew</span>
                  </h4>
                  <p className="u-txt-xs-muted">Beginner to Intermediate</p>
                </div>
              </div>
              <div className="u-info-box">
                <span className="u-fs28">🌐</span>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#293294', fontSize: '15px' }}>
                    And More...
                  </h4>
                  <p className="u-txt-xs-muted">Other world languages</p>
                </div>
              </div>
            </div>
          </div>
          {/*  Computer  */}
          <div
            style={{
              marginTop: '30px',
              background: '#fff',
              borderRadius: '20px',
              padding: '40px',
              border: '1.5px solid #e0e4f0',
            }}
            id="computer"
          >
            <div className="u-flex-c8-mb28">
              <div className="u-icon-box-p2">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div>
                <h3 className="u-phead2">Computer Courses</h3>
                <p className="u-txt-sm-body5">
                  Basic to advanced, job-oriented, and professional computer training
                </p>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }}
              className="comp-grid"
            >
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-desktop"></i>Basic to Advanced Computer
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• MS Office (Word, Excel, PowerPoint)</li>
                  <li>• Internet & Email</li>
                  <li>• Operating Systems</li>
                  <li>• Typing & Data Entry</li>
                </ul>
              </div>
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-calculator"></i>Accounting & Professional
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• Tally ERP 9 / Prime</li>
                  <li>• FACT Accounting</li>
                  <li>• QuickBooks</li>
                  <li>• Financial Reporting</li>
                </ul>
              </div>
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-paint-brush"></i>Graphics Design
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• Adobe Photoshop</li>
                  <li>• Illustrator & CorelDRAW</li>
                  <li>• InDesign / DTP</li>
                  <li>• Video Editing</li>
                </ul>
              </div>
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-network-wired"></i>Hardware & Networking
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• Computer Hardware Repair</li>
                  <li>• Network Setup</li>
                  <li>• A+ / N+ Certification Prep</li>
                  <li>• Troubleshooting</li>
                </ul>
              </div>
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-book"></i>Test Preparation
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• IELTS (All Bands)</li>
                  <li>• TOEFL iBT</li>
                  <li>• GRE / GMAT</li>
                  <li>• SAT / JLPT</li>
                </ul>
              </div>
              <div className="u-info-box4">
                <h4 className="u-h4-primary7">
                  <i className="u-gold fas fa-chalkboard-teacher"></i>Tuition Classes
                </h4>
                <ul className="u-txt-sm-555d">
                  <li>• MBS / MBA & BBS / BBA</li>
                  <li>• +2 All Faculties</li>
                  <li>• SLC / SEE / Private SLC</li>
                  <li>• Bridge Course</li>
                </ul>
              </div>
            </div>
          </div>
          {/*  Personality  */}
          <div
            style={{
              marginTop: '30px',
              background: '#EBB011',
              borderRadius: '20px',
              padding: '40px',
              border: '1.5px solid #c99200',
            }}
          >
            <div className="u-flex-c8-mb28">
              <div className="u-icon-box-p2">
                <i className="fas fa-user-tie"></i>
              </div>
              <div>
                <h3 className="u-phead2">Personality Development</h3>
                <p style={{ fontSize: '14px', color: 'rgba(41,50,148,.75)' }}>
                  Build your personal brand, communication, and professional skills
                </p>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}
              className="pd-grid"
            >
              <div className="u-glass-card2">
                <i className="u-icon-32-p fas fa-microphone"></i>
                <h4 className="u-fw7-p-mb6">RJ / VJ Training</h4>
                <p className="u-body-1b">Radio Jockey and Video Jockey skills for media careers</p>
              </div>
              <div className="u-glass-card2">
                <i className="u-icon-32-p fas fa-theater-masks"></i>
                <h4 className="u-fw7-p-mb6">MC Training</h4>
                <p className="u-body-1b">
                  Master of Ceremonies — event hosting and public speaking
                </p>
              </div>
              <div className="u-glass-card2">
                <i className="u-icon-32-p fas fa-file-alt"></i>
                <h4 className="u-fw7-p-mb6">Proposal & Report Writing</h4>
                <p className="u-body-1b">Professional writing skills for business and academics</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-calendar-check"></i>Enrol Now — Free Consultation
            </a>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Enrol or Study Abroad?"
        text="Visit us at Sukedhara Chowk or call — Free counselling, zero fees."
        actions={[
          { href: '/contact', icon: 'fas fa-calendar-check', label: 'Book Now', variant: 'white' },
          {
            href: 'tel:+9779851158991',
            icon: 'fas fa-phone',
            label: 'Call Now',
            variant: 'outline',
          },
        ]}
      />

      {/*  Country Popup Modal  */}

      <div
        id="countryPopupOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) setPopupOpen(false);
        }}
        style={{
          display: popupOpen ? 'flex' : 'none',
          position: 'fixed',
          inset: '0',
          background: 'rgba(0,0,0,.5)',
          backdropFilter: 'blur(4px)',
          zIndex: '9999',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '20px',
            maxWidth: '760px',
            width: '100%',
            maxHeight: '88vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 80px rgba(0,0,0,.22)',
            animation: 'cpopIn .25s ease',
          }}
        >
          {/*  Header  */}
          <div
            style={{
              padding: '24px 28px 20px',
              borderBottom: '1px solid #f0f2f8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: '0',
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', color: '#1a1a3a', margin: '0 0 4px' }}>
                All Study Destinations
              </h3>
              <p style={{ fontSize: '13px', color: '#888', margin: '0' }}>
                Popular countries for Nepali students — click any to explore
              </p>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid #e0e4f0',
                background: '#fff',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#888',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#f0f2f8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#fff';
              }}
            >
              ×
            </button>
          </div>
          {/*  Country Grid — ordered by NOC data for Nepali students  */}
          <div
            style={{
              padding: '24px 28px',
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '12px',
            }}
          >
            {/*  Top 5: ~80% of all Nepali students  */}
            <a href="/country-japan" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇯🇵</span>
              <span className="cpop-name">Japan</span>
              <span className="cpop-rank">#1 Most Popular</span>
            </a>
            <a href="/country-canada" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇨🇦</span>
              <span className="cpop-name">Canada</span>
              <span className="cpop-rank">#2</span>
            </a>
            <a href="/country-australia" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇦🇺</span>
              <span className="cpop-name">Australia</span>
              <span className="cpop-rank">#3</span>
            </a>
            <a href="/country-uk" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇬🇧</span>
              <span className="cpop-name">UK</span>
              <span className="cpop-rank">#4</span>
            </a>
            <a href="/country-usa" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇺🇸</span>
              <span className="cpop-name">USA</span>
              <span className="cpop-rank">#5</span>
            </a>
            <a href="/country-korea" className="cpop-card cpop-hot">
              <span className="cpop-flag">🇰🇷</span>
              <span className="cpop-name">South Korea</span>
              <span className="cpop-rank">#6</span>
            </a>
            {/*  Growing destinations  */}
            <a href="/country-germany" className="cpop-card">
              <span className="cpop-flag">🇩🇪</span>
              <span className="cpop-name">Germany</span>
            </a>
            <a href="/country-newzealand" className="cpop-card">
              <span className="cpop-flag">🇳🇿</span>
              <span className="cpop-name">New Zealand</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇮🇳</span>
              <span className="cpop-name">India</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇲🇾</span>
              <span className="cpop-name">Malaysia</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇸🇬</span>
              <span className="cpop-name">Singapore</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇮🇪</span>
              <span className="cpop-name">Ireland</span>
            </a>
            {/*  Europe  */}
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇫🇷</span>
              <span className="cpop-name">France</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇳🇱</span>
              <span className="cpop-name">Netherlands</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇮🇹</span>
              <span className="cpop-name">Italy</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇪🇸</span>
              <span className="cpop-name">Spain</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇵🇱</span>
              <span className="cpop-name">Poland</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇭🇺</span>
              <span className="cpop-name">Hungary</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇩🇰</span>
              <span className="cpop-name">Denmark</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇸🇪</span>
              <span className="cpop-name">Sweden</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇫🇮</span>
              <span className="cpop-name">Finland</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇳🇴</span>
              <span className="cpop-name">Norway</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇨🇭</span>
              <span className="cpop-name">Switzerland</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇵🇹</span>
              <span className="cpop-name">Portugal</span>
            </a>
            {/*  Others  */}
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇬🇪</span>
              <span className="cpop-name">Georgia</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇦🇪</span>
              <span className="cpop-name">UAE</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇨🇾</span>
              <span className="cpop-name">Cyprus</span>
            </a>
            <a href="#" className="cpop-card">
              <span className="cpop-flag">🇹🇷</span>
              <span className="cpop-name">Turkey</span>
            </a>
          </div>
          {/*  Footer  */}
          <div
            style={{
              padding: '16px 28px',
              borderTop: '1px solid #f0f2f8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: '0',
              background: '#fafbff',
            }}
          >
            <p style={{ fontSize: '12.5px', color: '#aaa', margin: '0' }}>
              Countries marked with{' '}
              <a href="/contact" style={{ color: '#293294' }}>
                contact us
              </a>{' '}
              links are coming soon
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '9px 20px',
                background: '#293294',
                color: '#fff',
                borderRadius: '9px',
                fontSize: '13px',
                textDecoration: 'none',
                transition: '.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#1a1f5e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#293294';
              }}
            >
              <i className="fas fa-calendar-check"></i> Free Consultation
            </a>
          </div>
        </div>
      </div>

      <style>
        {
          '\n@keyframes cpopIn{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}\n.cpop-card{display:flex;flex-direction:column;align-items:center;gap:5px;padding:14px 8px;border-radius:12px;border:1.5px solid #e8eaf0;text-decoration:none;color:inherit;transition:all .2s;background:#fff}\n.cpop-card:hover{border-color:#293294;background:#f5f7ff;transform:translateY(-3px);box-shadow:0 6px 20px rgba(41,50,148,.10)}\n.cpop-hot{border-color:#d6daf5;background:#f9fafe}\n.cpop-hot:hover{border-color:#293294;background:#eef1fd}\n.cpop-flag{font-size:28px;line-height:1}\n.cpop-name{font-size:12px;color:#333;text-align:center;line-height:1.3}\n.cpop-rank{font-size:10px;color:#293294;background:#eef0fb;padding:2px 8px;border-radius:20px;line-height:1.4}\n@media(max-width:600px){\n  #countryPopupOverlay>div>div:nth-child(2){grid-template-columns:repeat(3,1fr)}\n}\n@media(max-width:400px){\n  #countryPopupOverlay>div>div:nth-child(2){grid-template-columns:repeat(2,1fr)}\n}\n'
        }
      </style>

      <Footer />
    </>
  );
}
