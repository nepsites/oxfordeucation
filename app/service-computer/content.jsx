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
            <a href="/services">Our Services</a>
            <span className="sep">›</span>
            <span>Computer Courses</span>
          </div>
          <h1>
            Computer <span>Courses</span>
          </h1>
          <p>
            Practical, job-oriented computer training from basic IT skills to professional software
            — with flexible batches and recognised certificates.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Job-Oriented Training</div>
            <h2 className="section-title">
              Computer <span>Courses We Offer</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              From basic computer literacy to professional software skills — all courses are
              practical, job-oriented, and taught by experienced instructors.
            </p>
          </div>
          <div
            className="sp-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '22px',
              marginTop: '44px',
            }}
          >
            <div className="info-card">
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-blue">
                  <i className="fas fa-desktop"></i>
                </div>
                <h3 className="u-h2-primary4">Basic to Advanced Computer</h3>
              </div>
              <ul className="check-list">
                <li>Windows OS — setup, settings, file management</li>
                <li>MS Office: Word, Excel, PowerPoint, Access</li>
                <li>Internet, Email, Google Workspace</li>
                <li>Typing & Data Entry (Nepali + English)</li>
                <li>Introduction to Programming concepts</li>
              </ul>
              <div className="u-footer-meta">
                <i className="u-gold-mr5 fas fa-clock"></i>Duration: 3 months  | {' '}
                <i className="u-gold-mr5 fas fa-certificate"></i>Certificate Included
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-gold">
                  <i className="fas fa-calculator"></i>
                </div>
                <h3 className="u-h2-primary4">Accounting & Tally</h3>
              </div>
              <ul className="check-list">
                <li>Tally ERP 9 / Tally Prime (latest)</li>
                <li>FACT Accounting Software</li>
                <li>QuickBooks (international standard)</li>
                <li>Financial Statements & Reporting</li>
                <li>GST / VAT Processing in Tally</li>
              </ul>
              <div className="u-footer-meta">
                <i className="u-gold-mr5 fas fa-clock"></i>Duration: 3–4 months  | {' '}
                <i className="u-gold-mr5 fas fa-certificate"></i>Certificate Included
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-blue">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="u-h2-primary4">Graphics Design</h3>
              </div>
              <ul className="check-list">
                <li>Adobe Photoshop — photo editing, compositing</li>
                <li>Adobe Illustrator — logo & vector design</li>
                <li>CorelDRAW — print & layout design</li>
                <li>Adobe InDesign — brochures, magazines</li>
                <li>Video Editing — Premiere / CapCut basics</li>
              </ul>
              <div className="u-footer-meta">
                <i className="u-gold-mr5 fas fa-clock"></i>Duration: 4–6 months  | {' '}
                <i className="u-gold-mr5 fas fa-certificate"></i>Certificate Included
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-gold">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="u-h2-primary4">Hardware & Networking</h3>
              </div>
              <ul className="check-list">
                <li>PC Assembly, Disassembly & Repair</li>
                <li>Operating System Installation & Troubleshooting</li>
                <li>LAN / WAN Network Setup</li>
                <li>Router & Switch Configuration</li>
                <li>CompTIA A+ / N+ Certification Prep</li>
              </ul>
              <div className="u-footer-meta">
                <i className="u-gold-mr5 fas fa-clock"></i>Duration: 4–5 months  | {' '}
                <i className="u-gold-mr5 fas fa-certificate"></i>Certificate Included
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-blue">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="u-h2-primary4">Web Design Basics</h3>
              </div>
              <ul className="check-list">
                <li>HTML5 & CSS3 — build real websites</li>
                <li>Responsive Design & Bootstrap</li>
                <li>JavaScript fundamentals</li>
                <li>WordPress — build websites without code</li>
                <li>Portfolio project included</li>
              </ul>
              <div className="u-footer-meta">
                <i className="u-gold-mr5 fas fa-clock"></i>Duration: 4 months  | {' '}
                <i className="u-gold-mr5 fas fa-certificate"></i>Certificate Included
              </div>
            </div>
            <div
              className="info-card"
              style={{
                background: 'linear-gradient(135deg,#293294,#1a1f5e)',
                color: '#fff',
                borderColor: '#293294',
              }}
            >
              <div className="u-flex-c8-mb16">
                <div className="icon-box icon-gold">
                  <i className="fas fa-star"></i>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#EBB011' }}>
                  All-in-One Package
                </h3>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,.85)',
                  lineHeight: '1.75',
                  marginBottom: '16px',
                }}
              >
                Can't decide? Our All-in-One Computer Package covers Basic Computing + MS Office +
                Tally + Graphics at a discounted bundle rate.
              </p>
              <a
                className="btn"
                href="/contact"
                style={{
                  background: '#EBB011',
                  color: '#1a1a3a',
                  borderColor: '#EBB011',
                  fontWeight: '900',
                }}
              >
                <i className="fas fa-info-circle"></i> Ask for Bundle Price
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="u-grid-2s sp-grid-2">
            <div>
              <div className="section-tag">Class Schedule</div>
              <h2 className="section-title">
                Flexible <span>Batches</span>
              </h2>
              <div className="divider"></div>
              <div className="u-flex-col">
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-sun"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Morning Batch</h4>
                      <p className="u-txt-sm-555b">
                        7:00 AM – 9:00 AM  ·  9:00 AM – 11:00 AM
                        <br />
                        Ideal for school/college students and homemakers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-gold">
                      <i className="fas fa-moon"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Evening Batch</h4>
                      <p className="u-txt-sm-555b">
                        4:00 PM – 6:00 PM  ·  6:00 PM – 8:00 PM
                        <br />
                        Perfect for working adults and those with daytime commitments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-user-friends"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Private / Group Classes</h4>
                      <p className="u-txt-sm-555b">
                        Need a custom schedule? We offer 1-on-1 and small-group private training at
                        mutually convenient times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-tag">After You Finish</div>
              <h2 className="section-title">
                Career <span>Outcomes</span>
              </h2>
              <div className="divider"></div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginTop: '24px',
                }}
              >
                <div className="u-info-box3">
                  <i className="u-icon-26-p fas fa-file-invoice-dollar"></i>
                  <h4 className="u-fw7-p-f14-mb4">Accountant / Bookkeeper</h4>
                  <p className="u-txt-125-grey">With Tally & accounting skills</p>
                </div>
                <div className="u-info-box3">
                  <i className="u-icon-26-p fas fa-palette"></i>
                  <h4 className="u-fw7-p-f14-mb4">Graphic Designer</h4>
                  <p className="u-txt-125-grey">Freelance or full-time creative roles</p>
                </div>
                <div className="u-info-box3">
                  <i className="u-icon-26-p fas fa-tools"></i>
                  <h4 className="u-fw7-p-f14-mb4">IT Technician</h4>
                  <p className="u-txt-125-grey">Hardware & networking jobs</p>
                </div>
                <div className="u-info-box3">
                  <i className="u-icon-26-p fas fa-globe"></i>
                  <h4 className="u-fw7-p-f14-mb4">Web Developer</h4>
                  <p className="u-txt-125-grey">Build websites for businesses</p>
                </div>
              </div>
              <div className="u-mt20 highlight-bar">
                <i className="fas fa-certificate"></i>
                <div>
                  <strong className="u-mb4">Recognised Certificate</strong>
                  <span className="u-txt-sm-555e">
                    Oxford International certificates are trusted by employers across Nepal and used
                    in abroad visa applications.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Enrol in a Computer Course Today"
        text="Morning & evening batches available — visit Sukedhara Chowk or call us."
        actions={[
          { href: '/contact', icon: 'fas fa-calendar-check', label: 'Enrol Now', variant: 'white' },
          {
            href: 'tel:+9779851158991',
            icon: 'fas fa-phone',
            label: 'Call Us',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
