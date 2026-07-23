'use client';

import CtaSection from '../_components/CtaSection';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function PageContent() {
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
            <span>Blog</span>
          </div>
          <h1>
            Blog & <span>News</span>
          </h1>
          <p>
            Latest visa news, scholarship alerts, and study abroad tips for Nepali students from
            Oxford International experts.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <div
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1.5px solid #e0e4f0',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(30,37,112,.82),rgba(30,37,112,.82)),url('/images/dest-australia.jpg') center/cover no-repeat",
                    padding: '50px 36px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#EBB011',
                      color: '#293294',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '5px 14px',
                      borderRadius: '20px',
                      marginBottom: '16px',
                      letterSpacing: '1.2px',
                    }}
                  >
                    FEATURED
                  </div>
                  <h2
                    style={{
                      fontSize: '26px',
                      fontWeight: '900',
                      color: '#fff',
                      marginBottom: '12px',
                      lineHeight: '1.4',
                    }}
                  >
                    Australia Student Visa 2026: Complete Requirements & Process for Nepali Students
                  </h2>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
                  >
                    <span className="u-txt-sm-w75">
                      <i className="fas fa-calendar"></i> January 15, 2026
                    </span>
                    <span className="u-txt-sm-w75">
                      <i className="fas fa-clock"></i> 8 min read
                    </span>
                    <span
                      style={{
                        background: 'rgba(255,255,255,.15)',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '700',
                        padding: '4px 12px',
                        borderRadius: '20px',
                      }}
                    >
                      🇦🇺 Australia
                    </span>
                  </div>
                </div>
                <div style={{ padding: '28px 36px' }}>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#666688',
                      lineHeight: '1.75',
                      marginBottom: '20px',
                    }}
                  >
                    Planning to study in Australia in 2026? This comprehensive guide covers
                    everything Nepali students need to know about the Australian Student Visa
                    Subclass 500.
                  </p>
                  <a href="/blog-australia-visa" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> Read Full Article
                  </a>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' }}>
                <a href="/blog-ielts-tips" className="u-card-ov2 blog-card-link">
                  <div
                    style={{
                      background: "url('/images/news-ielts.jpg') center/cover no-repeat",
                      height: '160px',
                    }}
                  ></div>
                  <div className="u-p22">
                    <div className="u-flex-8-mb12">
                      <span className="u-tag-primary2">IELTS</span>
                    </div>
                    <h3 className="u-h2-p-lh">
                      10 Proven Tips to Score 7+ Band in IELTS — From Nepal's Top Trainer
                    </h3>
                    <p className="u-txt-sm-body3">
                      Our senior IELTS instructor shares battle-tested strategies for each section.
                    </p>
                    <div className="u-flex-sb">
                      <span className="u-txt-xs-muted">
                        <i className="fas fa-calendar"></i> Dec 28, 2025
                      </span>
                      <span className="u-h5-primary">Read more →</span>
                    </div>
                  </div>
                </a>
                <a href="/blog-japan-scholarship" className="u-card-ov2 blog-card-link">
                  <div
                    style={{
                      background: "url('/images/dest-japan.jpg') center/cover no-repeat",
                      height: '160px',
                    }}
                  ></div>
                  <div className="u-p22">
                    <div className="u-flex-8-mb12">
                      <span className="u-tag-primary2">Japan</span>
                      <span
                        style={{
                          background: '#fff3e0',
                          color: '#e65100',
                          fontSize: '12px',
                          fontWeight: '700',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          border: '1.5px solid #ffe0b2',
                        }}
                      >
                        Scholarship
                      </span>
                    </div>
                    <h3 className="u-h2-p-lh">
                      MEXT Scholarship 2026: Complete Guide for Nepali Students
                    </h3>
                    <p className="u-txt-sm-body3">
                      Japan's MEXT covers full tuition, monthly stipend, and travel. Here's how to
                      apply.
                    </p>
                    <div className="u-flex-sb">
                      <span className="u-txt-xs-muted">
                        <i className="fas fa-calendar"></i> Dec 10, 2025
                      </span>
                      <span className="u-h5-primary">Read more →</span>
                    </div>
                  </div>
                </a>
                <a href="/blog-australia-visa" className="u-card-ov2 blog-card-link">
                  <div
                    style={{
                      background: "url('/images/dest-germany.jpg') center/cover no-repeat",
                      height: '160px',
                    }}
                  ></div>
                  <div className="u-p22">
                    <div className="u-flex-8-mb12">
                      <span className="u-tag-primary2">Germany</span>
                      <span className="blog-coming-tag">Coming Soon</span>
                    </div>
                    <h3 className="u-h2-p-lh">
                      Study in Germany for Free: DAAD Scholarship Guide 2026
                    </h3>
                    <p className="u-txt-sm-body3">
                      Germany offers free education at public universities. Learn how Nepali
                      students can apply.
                    </p>
                    <div className="u-flex-sb">
                      <span className="u-txt-xs-muted">
                        <i className="fas fa-calendar"></i> Nov 20, 2025
                      </span>
                      <span className="u-h5-primary">Coming soon →</span>
                    </div>
                  </div>
                </a>
                <a href="/blog-australia-visa" className="u-card-ov2 blog-card-link">
                  <div
                    style={{
                      background: "url('/images/dest-uk.jpg') center/cover no-repeat",
                      height: '160px',
                    }}
                  ></div>
                  <div className="u-p22">
                    <div className="u-flex-8-mb12">
                      <span className="u-tag-primary2">UK</span>
                      <span className="blog-coming-tag">Coming Soon</span>
                    </div>
                    <h3 className="u-h2-p-lh">
                      UK Student Visa 2026: What's New for Nepali Applicants
                    </h3>
                    <p className="u-txt-sm-body3">
                      The UK updated its student visa rules. Here's what changed and how to prepare.
                    </p>
                    <div className="u-flex-sb">
                      <span className="u-txt-xs-muted">
                        <i className="fas fa-calendar"></i> Oct 5, 2025
                      </span>
                      <span className="u-h5-primary">Coming soon →</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Quick Apply</h4>
                <div className="u-dark-card3">
                  <p className="u-txt-w80-mb16">Talk to our counsellors FREE!</p>
                  <a href="/contact" className="u-flex-center btn btn-white btn-sm">
                    Book Free Session
                  </a>
                </div>
              </div>
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Recent Posts</h4>
                <ul className="u-list-none">
                  <li className="u-pb-row">
                    <span
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: "url('/images/dest-australia.jpg') center/cover no-repeat",
                        flex: '0 0 44px',
                      }}
                    ></span>
                    <div>
                      <a className="u-txt-sm-link" href="/blog-australia-visa">
                        Australia Student Visa 2026 Requirements
                      </a>
                      <span className="u-txt-xs-muted">Jan 15, 2026</span>
                    </div>
                  </li>
                  <li className="u-pb-row">
                    <span
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: "url('/images/news-ielts.jpg') center/cover no-repeat",
                        flex: '0 0 44px',
                      }}
                    ></span>
                    <div>
                      <a className="u-txt-sm-link" href="/blog-ielts-tips">
                        10 Proven Tips to Score 7+ Band in IELTS
                      </a>
                      <span className="u-txt-xs-muted">Dec 28, 2025</span>
                    </div>
                  </li>
                  <li style={{ padding: '12px 0', display: 'flex', gap: '10px' }}>
                    <span
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: "url('/images/dest-japan.jpg') center/cover no-repeat",
                        flex: '0 0 44px',
                      }}
                    ></span>
                    <div>
                      <a className="u-txt-sm-link" href="/blog-japan-scholarship">
                        MEXT Scholarship 2026 Complete Guide
                      </a>
                      <span className="u-txt-xs-muted">Dec 10, 2025</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Contact Us</h4>
                <ul className="u-list-sm">
                  <li>
                    <i className="u-icon-p18 fas fa-phone"></i> +977-9851158991
                  </li>
                  <li>
                    <i className="u-icon-p18 fas fa-envelope"></i> info@oxfordeducation.com.np
                  </li>
                  <li>
                    <i className="u-icon-p18 fas fa-map-marker-alt"></i> Sukedhara Chowk, Kathmandu
                  </li>
                </ul>
                <a className="u-flex-wa" href="https://wa.me/9779851158991" target="_blank">
                  <i className="fab fa-whatsapp"></i> WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a Question About Studying Abroad?"
        text="Talk to our expert counsellors — completely free!"
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

      <Footer />
    </>
  );
}
