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
            <a href="/blog">Blog</a>
            <span className="sep">›</span>
            <span>Australia Visa 2026</span>
          </div>
          <h1>
            Australia Student Visa <span>2026</span>
          </h1>
          <p>
            Complete guide for Nepali students applying for the Australia Student Visa Subclass 500
            in 2026.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="blog-layout">
            <article className="blog-main">
              <div className="u-card-pad2">
                <div className="u-flex-row-meta">
                  <span
                    style={{
                      background: '#e3f2fd',
                      color: '#1565c0',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '4px 12px',
                      borderRadius: '20px',
                    }}
                  >
                    Australia
                  </span>
                  <span className="u-txt-sm-muted">
                    <i className="fas fa-calendar"></i> January 15, 2026
                  </span>
                  <span className="u-txt-sm-muted">
                    <i className="fas fa-clock"></i> 8 min read
                  </span>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#293294,#1e2570)',
                    borderRadius: '14px',
                    padding: '36px',
                    textAlign: 'center',
                    marginBottom: '34px',
                  }}
                >
                  <div style={{ fontSize: '64px', marginBottom: '14px' }}>🇦🇺</div>
                  <h2 className="u-txt-white-h1">Australia Student Visa Subclass 500</h2>
                  <p className="u-txt-w75-mb20">Complete 2026 Guide for Nepali Students</p>
                  <div className="u-flex-c-wrap28">
                    <div className="u-txt-center">
                      <div className="u-gold-h2">5 Years</div>
                      <div className="u-txt-xs-muted2">Max Duration</div>
                    </div>
                    <div className="u-txt-center">
                      <div className="u-gold-h2">48 hrs/fortnight</div>
                      <div className="u-txt-xs-muted2">Work Rights</div>
                    </div>
                    <div className="u-txt-center">
                      <div className="u-gold-h2">AUD 2,000</div>
                      <div className="u-txt-xs-muted2">Visa Fee</div>
                    </div>
                    <div className="u-txt-center">
                      <div className="u-gold-h2">4-8 Weeks</div>
                      <div className="u-txt-xs-muted2">Processing</div>
                    </div>
                  </div>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-info-circle"></i> What is the Student Visa Subclass
                  500?
                </h2>
                <p className="u-body-15-mb16">
                  The Australian Student Visa Subclass 500 allows international students including
                  Nepali students to study full-time in a registered course in Australia. It grants
                  the right to work up to 48 hours per fortnight during term time and unlimited
                  hours during scheduled breaks.
                </p>
                <p className="u-txt-sm-body6">
                  Most students from Nepal who want to study in Australia will need this visa. This
                  visa replaced all previous study-stream subclasses.
                </p>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-list-check"></i> Key Eligibility Requirements
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '14px',
                    marginBottom: '28px',
                  }}
                >
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">CRICOS Enrolment</h4>
                      <p className="u-txt-sm-muted">
                        Must be enrolled in a CRICOS-registered course at an Australian institution
                      </p>
                    </div>
                  </div>
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">English Proficiency</h4>
                      <p className="u-txt-sm-muted">
                        IELTS 6.0+ overall or equivalent PTE/TOEFL score
                      </p>
                    </div>
                  </div>
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">Financial Capacity</h4>
                      <p className="u-txt-sm-muted">
                        Proof of the current Home Affairs financial capacity amount for living
                        costs, plus tuition and travel
                      </p>
                    </div>
                  </div>
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">OSHC Insurance</h4>
                      <p className="u-txt-sm-muted">
                        Overseas Student Health Cover for the full visa period is mandatory
                      </p>
                    </div>
                  </div>
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">Genuine Student (GS) Requirement</h4>
                      <p className="u-txt-sm-muted">
                        Must show you are a genuine student with clear study plans and supporting
                        evidence
                      </p>
                    </div>
                  </div>
                  <div className="u-info-box2">
                    <i className="u-gold-20 fas fa-check-circle"></i>
                    <div>
                      <h4 className="u-h4-primary11">Health and Character</h4>
                      <p className="u-txt-sm-muted">
                        Medical exam by approved panel physician and police clearance from Nepal
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-folder-open"></i> Required Documents Checklist
                </h2>
                <div className="u-info-box11">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Valid passport (6+ months
                      validity)
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Confirmation of Enrolment CoE
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> IELTS / PTE / TOEFL score
                      report
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Bank statements (last 6 months)
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> OSHC health insurance policy
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Genuine Student (GS)
                      responses/evidence
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Academic transcripts and
                      certificates
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Police clearance certificate
                      Nepal
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Medical examination results
                    </div>
                    <div className="u-txt-body">
                      <i className="u-gold-shrink fas fa-check"></i> Statement of Purpose SOP
                    </div>
                  </div>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-route"></i> Step-by-Step Application Process
                </h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-num primary">1</div>
                    <div>
                      <h4>Choose Your Course and University</h4>
                      <p>
                        Research CRICOS-registered universities. Consider rankings, course fees,
                        location, and post-study work rights.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">2</div>
                    <div>
                      <h4>Get Your IELTS Score</h4>
                      <p>
                        Most universities require IELTS 6.0-6.5 overall. Register and prepare with
                        Oxford International IELTS coaching.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num primary">3</div>
                    <div>
                      <h4>Apply to University and Get Offer Letter</h4>
                      <p>
                        Submit your application with transcripts, SOP, and IELTS score. Upon
                        acceptance receive a Letter of Offer.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">4</div>
                    <div>
                      <h4>Accept Offer and Get CoE</h4>
                      <p>
                        Pay the initial tuition fee deposit and sign the enrollment agreement to
                        receive your Confirmation of Enrolment.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num primary">5</div>
                    <div>
                      <h4>Buy OSHC Insurance</h4>
                      <p>
                        Purchase Overseas Student Health Cover for the full visa period before
                        lodging your application.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">6</div>
                    <div>
                      <h4>Lodge Visa Application Online</h4>
                      <p>
                        Create an ImmiAccount and submit your visa application with all documents.
                        Pay the current visa application charge, from AUD 2,000 unless exempt.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num primary">7</div>
                    <div>
                      <h4>Complete Medical Exam</h4>
                      <p>
                        Book a health examination with an approved panel physician in Kathmandu.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">8</div>
                    <div>
                      <h4>Wait for Visa Decision</h4>
                      <p>
                        Processing typically takes 4-8 weeks. Check your ImmiAccount regularly for
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#EBB011,#c99200)',
                    borderRadius: '14px',
                    padding: '26px',
                    marginTop: '32px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <i className="u-icon-28-p fas fa-lightbulb"></i>
                  <div>
                    <h4 className="u-h2-primary2">Oxford International Tip</h4>
                    <p className="u-body-primary">
                      The Genuine Student (GS) requirement is one of the most important parts of
                      your Australia visa application. Our counsellors help students prepare clear
                      GS responses, financial evidence, and supporting documents. Book a free
                      session!
                    </p>
                  </div>
                </div>
                <div className="u-flex-row-sb">
                  <div className="u-flex-wrap8">
                    <span className="u-txt-sm-w7c">Tags:</span>
                    <span className="u-tag-primary">Australia Visa</span>
                    <span className="u-tag-primary">Student Visa 500</span>
                  </div>
                  <a href="/blog" className="btn btn-dark btn-sm">
                    <i className="fas fa-arrow-left"></i> Back to Blog
                  </a>
                </div>
              </div>
            </article>
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
                  <li className="u-pb-border">
                    <a className="u-txt-sm-link" href="/blog-australia-visa">
                      Australia Student Visa 2026 Requirements
                    </a>
                    <span className="u-txt-xs-muted">Jan 15, 2026</span>
                  </li>
                  <li className="u-pb-border">
                    <a className="u-txt-sm-link" href="/blog-ielts-tips">
                      10 Proven Tips to Score 7+ Band in IELTS
                    </a>
                    <span className="u-txt-xs-muted">Dec 28, 2025</span>
                  </li>
                  <li className="u-p12-0">
                    <a className="u-txt-sm-link" href="/blog-japan-scholarship">
                      MEXT Scholarship 2026 Complete Guide
                    </a>
                    <span className="u-txt-xs-muted">Dec 10, 2025</span>
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
        title="Ready to Study Abroad?"
        text="Book your free counselling session with Oxford International experts."
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
