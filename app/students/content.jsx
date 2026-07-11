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

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">›</span>
            <span>Students</span>
          </div>
          <h1>
            Our <span>Student Success Stories</span>
          </h1>
          <p>
            Students have trusted Oxford International for practical study-abroad guidance. Here are
            their stories.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Student Testimonials</div>
            <h2 className="section-title">
              What Our <span>Students Say</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-badge">🇦🇺 Australia</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Oxford International made my dream of studying in Australia a reality. From choosing
                the right university to getting my visa approved — they supported me every step of
                the way. Highly recommended!
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div className="u-bg-grad-p author-avatar">PK</div>
                <div>
                  <div className="author-name">Prabhat Kumar Sharma</div>
                  <div className="author-info">Bachelor of IT — University of Melbourne, 2024</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">🇯🇵 Japan</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I learned Japanese at Oxford International and then they helped me get admission to
                a top Japanese university. The JLPT coaching was excellent and the visa process was
                smooth. Thank you!
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: 'linear-gradient(135deg,#880e4f,#ad1457)' }}
                >
                  RP
                </div>
                <div>
                  <div className="author-name">Rajan Poudel</div>
                  <div className="author-info">Engineering — Kyoto University, Japan 2024</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">🇬🇧 UK</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The IELTS coaching here is the best in Kathmandu. I scored 7.5 on my first attempt!
                The teachers are qualified, the materials are comprehensive, and the environment is
                perfect for learning.
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div className="u-bg-grad-g author-avatar">SR</div>
                <div>
                  <div className="author-name">Sunita Rai</div>
                  <div className="author-info">MSc — University of Manchester, UK 2025</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">🇩🇪 Germany</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I took German classes here and then applied for a university in Germany through
                Oxford International. The process was incredibly smooth. They knew exactly what
                documents were needed and guided me perfectly.
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: 'linear-gradient(135deg,#4a148c,#6a1b9a)' }}
                >
                  BT
                </div>
                <div>
                  <div className="author-name">Binita Thapa</div>
                  <div className="author-info">Masters — TU Munich, Germany 2025</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">🇨🇦 Canada</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                After failing at another consultancy, I came to Oxford International. Their team was
                honest about my profile and guided me to the right college in Canada. Got my visa in
                6 weeks. Forever grateful!
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: 'linear-gradient(135deg,#bf360c,#d84315)' }}
                >
                  AM
                </div>
                <div>
                  <div className="author-name">Ashish Maharjan</div>
                  <div className="author-info">Business Admin — Humber College, Canada 2024</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">🇰🇷 South Korea</div>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I completed my Korean language course at Oxford International and secured KGSP
                scholarship to study in South Korea. The Korean teachers here are native-level
                fluent and incredibly patient.
              </p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: 'linear-gradient(135deg,#e65100,#f57c00)' }}
                >
                  SK
                </div>
                <div>
                  <div className="author-name">Sushma KC</div>
                  <div className="author-info">
                    BA International Studies — Seoul National University 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap',
            }}
          >
            <div className="u-card-center">
              <div className="u-phead4">4.9/5</div>
              <div style={{ color: '#EBB011', fontSize: '18px', margin: '4px 0' }}>★★★★★</div>
              <div className="u-txt-sm-muted">Based on Google Reviews</div>
            </div>
            <div className="u-card-center">
              <div className="u-phead4">Many</div>
              <div className="u-txt-sm-grey-mt4">Students Guided Abroad</div>
              <div
                style={{ fontSize: '13px', color: '#c99200', fontWeight: '700', marginTop: '4px' }}
              >
                Since 2015
              </div>
            </div>
            <div className="u-card-center">
              <div className="u-phead4">High</div>
              <div className="u-txt-sm-grey-mt4">Visa Success Rate</div>
              <div
                style={{ fontSize: '13px', color: '#c99200', fontWeight: '700', marginTop: '4px' }}
              >
                All Destinations
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="u-bg-white section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Student Resources</div>
            <h2 className="section-title">
              Helpful <span>Resources for Students</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '22px',
              marginTop: '46px',
            }}
            className="res-grid"
          >
            <div className="u-info-box6">
              <i className="u-icon-40-p fas fa-file-alt"></i>
              <h4 className="u-h2-primary5">SOP Writing Guide</h4>
              <p className="u-body-mb16">
                Download our free guide on writing a compelling Statement of Purpose for your
                university application.
              </p>
              <a href="/resource-sop" className="btn btn-dark btn-sm">
                Download Free
              </a>
            </div>
            <div className="u-info-box6">
              <i className="u-icon-40-p fas fa-passport"></i>
              <h4 className="u-h2-primary5">Visa Checklist</h4>
              <p className="u-body-mb16">
                Country-specific visa document checklists for Australia, UK, Japan, Canada, USA and
                more.
              </p>
              <a href="/resource-visa-checklist" className="btn btn-dark btn-sm">
                Get Checklist
              </a>
            </div>
            <div className="u-info-box6">
              <i className="u-icon-40-p fas fa-award"></i>
              <h4 className="u-h2-primary5">Scholarship Database</h4>
              <p className="u-body-mb16">
                Browse scholarships available specifically for Nepali students — MEXT, KGSP,
                Chevening, DAAD and more.
              </p>
              <a href="/resource-scholarships" className="btn btn-dark btn-sm">
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Be Our Next Success Story!"
        text="Start your study-abroad journey with clear counselling and practical next steps."
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
