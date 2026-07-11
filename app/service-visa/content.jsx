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
            <a href="/services">Our Services</a>
            <span className="sep">›</span>
            <span>Visa Assistance</span>
          </div>
          <h1>
            Visa <span>Assistance</span>
          </h1>
          <p>
            Expert documentation, SOP writing, and application support for student visas — with a
            strong track record across 10+ countries.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div
            className="sp-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            <div>
              <div className="section-tag">Strong Success Rate</div>
              <h2 className="section-title">
                Expert Visa <span>Assistance</span>
              </h2>
              <div className="divider"></div>
              <p
                style={{
                  fontSize: '15px',
                  color: '#555577',
                  lineHeight: '1.85',
                  marginBottom: '16px',
                }}
              >
                Getting a student visa wrong is costly — delays, refusals, and lost university
                offers. Our visa team has processed thousands of applications across 10+ countries
                with a strong success track record.
              </p>
              <p className="u-body-15-mb24">
                We handle everything from document preparation and financial proofs to SOP writing,
                interview coaching, and Genuine Student (GS) responses — so your application is
                complete, accurate, and compelling.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
                <div className="u-info-box7">
                  <div className="u-phead3">High</div>
                  <div className="u-txt-12-grey-mt2">Visa Success Rate</div>
                </div>
                <div className="u-info-box7">
                  <div className="u-phead3">Many</div>
                  <div className="u-txt-12-grey-mt2">Visa Cases Guided</div>
                </div>
                <div className="u-info-box7">
                  <div className="u-phead3">10+</div>
                  <div className="u-txt-12-grey-mt2">Countries Covered</div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: '#f5f7ff',
                borderRadius: '20px',
                padding: '26px',
                border: '1.5px solid #e0e4f0',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '900',
                  color: '#293294',
                  marginBottom: '16px',
                }}
              >
                <i className="u-gold-mr8 fas fa-passport"></i>Countries We Process
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="u-info-box10">
                  <span className="u-fs22">🇦🇺</span>
                  <div>
                    <div className="u-fw7-p-f14">Australia</div>
                    <div className="u-txt-12-grey">Student Visa (Subclass 500)</div>
                  </div>
                </div>
                <div className="u-info-box10">
                  <span className="u-fs22">🇬🇧</span>
                  <div>
                    <div className="u-fw7-p-f14">United Kingdom</div>
                    <div className="u-txt-12-grey">Student Visa (Tier 4)</div>
                  </div>
                </div>
                <div className="u-info-box10">
                  <span className="u-fs22">🇯🇵</span>
                  <div>
                    <div className="u-fw7-p-f14">Japan</div>
                    <div className="u-txt-12-grey">Student Visa (Ryugaku Visa)</div>
                  </div>
                </div>
                <div className="u-info-box10">
                  <span className="u-fs22">🇺🇸</span>
                  <div>
                    <div className="u-fw7-p-f14">United States</div>
                    <div className="u-txt-12-grey">F-1 Student Visa</div>
                  </div>
                </div>
                <div className="u-info-box10">
                  <span className="u-fs22">🇨🇦</span>
                  <div>
                    <div className="u-fw7-p-f14">Canada</div>
                    <div className="u-txt-12-grey">Study Permit</div>
                  </div>
                </div>
                <div className="u-info-box10">
                  <span className="u-fs22">🇩🇪 🇳🇿 🇰🇷</span>
                  <div>
                    <div className="u-fw7-p-f14">Germany, NZ, Korea</div>
                    <div className="u-txt-12-grey">National & Student Visas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Process</div>
            <h2 className="section-title">
              How We Prepare <span>Your Visa Application</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            className="sp-grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5,1fr)',
              gap: '16px',
              marginTop: '40px',
              position: 'relative',
            }}
          >
            <div className="u-txt-center info-card">
              <div className="u-gold-label">STEP 01</div>
              <div className="u-mx-auto14 icon-box icon-blue">
                <i className="fas fa-file-alt"></i>
              </div>
              <h4 className="u-h4-primary2">Document Checklist</h4>
              <p className="u-txt-sm-grey2">
                We give you a personalised document checklist based on your country, university, and
                financial situation.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-gold-label">STEP 02</div>
              <div className="u-mx-auto14 icon-box icon-gold">
                <i className="fas fa-pen-nib"></i>
              </div>
              <h4 className="u-h4-primary2">SOP & GS Writing</h4>
              <p className="u-txt-sm-grey2">
                Our writers craft a compelling Statement of Purpose and Genuine Student (GS)
                responses tailored to your profile.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-gold-label">STEP 03</div>
              <div className="u-mx-auto14 icon-box icon-blue">
                <i className="fas fa-check-double"></i>
              </div>
              <h4 className="u-h4-primary2">Application Review</h4>
              <p className="u-txt-sm-grey2">
                Every document is reviewed by our senior visa consultant before submission — no
                mistakes, no missing items.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-gold-label">STEP 04</div>
              <div className="u-mx-auto14 icon-box icon-gold">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h4 className="u-h4-primary2">Submission</h4>
              <p className="u-txt-sm-grey2">
                We submit or guide you through online submission on VFS, UKVI, ImmiAccount, or the
                relevant embassy portal.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-gold-label">STEP 05</div>
              <div className="u-mx-auto14 icon-box icon-blue">
                <i className="fas fa-plane-departure"></i>
              </div>
              <h4 className="u-h4-primary2">Visa & Departure</h4>
              <p className="u-txt-sm-grey2">
                Upon visa approval, we assist with pre-departure briefing, airport guidance, and
                accommodation information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Common Reasons for Refusal</div>
            <h2 className="section-title">
              We Solve the Problems <span>Others Miss</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            className="sp-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginTop: '40px',
              maxWidth: '820px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div className="info-card">
              <div className="u-flex-start12">
                <i className="u-red-icon fas fa-times-circle"></i>
                <div>
                  <h4 className="u-h4-dark">Weak Financial Evidence</h4>
                  <p className="u-txt-sm-555">
                    We help you present bank statements, sponsor letters, and financial proofs in
                    the exact format embassies require.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start12">
                <i className="u-red-icon fas fa-times-circle"></i>
                <div>
                  <h4 className="u-h4-dark">Poor SOP / GS Responses</h4>
                  <p className="u-txt-sm-555">
                    Generic or copy-paste SOPs are a common cause of refusals. We write
                    personalised, authentic statements that pass scrutiny.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start12">
                <i className="u-red-icon fas fa-times-circle"></i>
                <div>
                  <h4 className="u-h4-dark">Course Gap Explanation</h4>
                  <p className="u-txt-sm-555">
                    Academic gaps raise red flags. We prepare detailed gap year justification
                    letters that satisfy visa officers.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start12">
                <i className="u-red-icon fas fa-times-circle"></i>
                <div>
                  <h4 className="u-h4-dark">Incomplete Documents</h4>
                  <p className="u-txt-sm-555">
                    Missing a single document can cause refusal. Our checklist system ensures
                    nothing is overlooked before submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Get Your Visa Right the First Time"
        text="Talk to our visa experts today — free initial consultation at Sukedhara Chowk."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Book Consultation',
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
