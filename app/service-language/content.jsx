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
            <span>Language Courses</span>
          </div>
          <h1>
            Language <span>Courses</span>
          </h1>
          <p>
            Master English, Japanese, Korean, German and more — build the language skills you need
            for study, scholarships, and life abroad.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">8 Languages</div>
            <h2 className="section-title">
              Language <span>Courses We Offer</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              Whether you're preparing to study abroad or simply expanding your skills, our
              experienced teachers guide you from beginner to proficiency level.
            </p>
          </div>
          <div className="lang-grid-new">
            <div className="lang-card-new">
              <div className="lang-card-top">
                <span className="lang-emoji">🇬🇧</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">English</div>
                  <div className="lang-card-native">English</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">Spoken & Written</span>
                <span className="lct">IELTS Prep</span>
                <span className="lct">All Levels</span>
              </div>
            </div>
            <div className="lang-card-new lang-card-featured">
              <div className="lang-card-badge">Popular</div>
              <div className="lang-card-top">
                <span className="lang-emoji">🇯🇵</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">Japanese</div>
                  <div className="lang-card-native">日本語</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">JLPT N5–N1</span>
                <span className="lct">NAT Test</span>
                <span className="lct">Conversational</span>
              </div>
            </div>
            <div className="lang-card-new lang-card-featured">
              <div className="lang-card-badge">Popular</div>
              <div className="lang-card-top">
                <span className="lang-emoji">🇰🇷</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">Korean</div>
                  <div className="lang-card-native">한국어</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">TOPIK I & II</span>
                <span className="lct">EPS-TOPIK</span>
                <span className="lct">Conversational</span>
              </div>
            </div>
            <div className="lang-card-new">
              <div className="lang-card-top">
                <span className="lang-emoji">🇩🇪</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">German</div>
                  <div className="lang-card-native">Deutsch</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">A1 to B2</span>
                <span className="lct">TestDaF Prep</span>
                <span className="lct">Goethe Standard</span>
              </div>
            </div>
            <div className="lang-card-new">
              <div className="lang-card-top">
                <span className="lang-emoji">🇫🇷</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">French</div>
                  <div className="lang-card-native">Français</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">DELF Prep</span>
                <span className="lct">A1 to B1</span>
                <span className="lct">Conversational</span>
              </div>
            </div>
            <div className="lang-card-new">
              <div className="lang-card-top">
                <span className="lang-emoji">🇸🇦</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">Arabic</div>
                  <div className="lang-card-native">العربية</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">Modern Standard</span>
                <span className="lct">Beginner</span>
                <span className="lct">Intermediate</span>
              </div>
            </div>
            <div className="lang-card-new">
              <div className="lang-card-top">
                <span className="lang-emoji">🇮🇱</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">Hebrew</div>
                  <div className="lang-card-native">עברית</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">Beginner</span>
                <span className="lct">Intermediate</span>
                <span className="lct">Conversational</span>
              </div>
            </div>
            <div className="lang-card-new lang-card-soon">
              <div className="lang-card-top">
                <span className="lang-emoji">🌐</span>
                <div className="lang-card-head">
                  <div className="lang-card-name">More Languages</div>
                  <div className="lang-card-native">Coming Soon</div>
                </div>
              </div>
              <div className="lang-card-divider"></div>
              <div className="lang-card-tags">
                <span className="lct">Spanish</span>
                <span className="lct">Chinese</span>
                <span className="lct">Italian</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="u-grid-2s sp-grid-2">
            <div>
              <div className="section-tag">Course Structure</div>
              <h2 className="section-title">
                How Our <span>Classes Work</span>
              </h2>
              <div className="divider"></div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}
              >
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Beginner → Advanced Levels</h4>
                      <p className="u-txt-sm-555b">
                        We assess your starting level and place you in the right batch. No prior
                        knowledge needed for beginner classes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-gold">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Morning & Evening Batches</h4>
                      <p className="u-txt-sm-555b">
                        Flexible schedules — morning batches (8 AM–10 AM) and evening batches (4
                        PM–7 PM) to suit students and working adults.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Small Class Sizes</h4>
                      <p className="u-txt-sm-555b">
                        Maximum 15 students per class ensures personal attention and faster
                        learning. Our teachers focus on each student's progress.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-gold">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Completion Certificate</h4>
                      <p className="u-txt-sm-555b">
                        Receive an Oxford International certificate upon course completion —
                        recognised and useful for visa applications and university admissions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-tag">Course Durations</div>
              <h2 className="section-title">
                Duration & <span>Details</span>
              </h2>
              <div className="divider"></div>
              <div className="u-card-table">
                <table className="u-table">
                  <thead>
                    <tr className="u-thead">
                      <th className="u-p12-16-l">Language</th>
                      <th className="u-p12-16-l">Duration</th>
                      <th className="u-p12-16-l">Levels</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-bot">
                      <td className="u-p12-16-h">🇬🇧 English</td>
                      <td className="u-p12-16">3–6 months</td>
                      <td className="u-p12-16">Beginner–Advanced</td>
                    </tr>
                    <tr className="u-border-bot-bg">
                      <td className="u-p12-16-h">🇯🇵 Japanese</td>
                      <td className="u-p12-16">6–18 months</td>
                      <td className="u-p12-16">N5 to N1</td>
                    </tr>
                    <tr className="u-border-bot">
                      <td className="u-p12-16-h">🇰🇷 Korean</td>
                      <td className="u-p12-16">4–12 months</td>
                      <td className="u-p12-16">Level 1–6</td>
                    </tr>
                    <tr className="u-border-bot-bg">
                      <td className="u-p12-16-h">🇩🇪 German</td>
                      <td className="u-p12-16">4–12 months</td>
                      <td className="u-p12-16">A1 to B2</td>
                    </tr>
                    <tr className="u-border-bot">
                      <td className="u-p12-16-h">🇫🇷 French</td>
                      <td className="u-p12-16">4–10 months</td>
                      <td className="u-p12-16">A1 to B1</td>
                    </tr>
                    <tr className="u-tbody-row">
                      <td className="u-p12-16-h">🇸🇦 Arabic / 🇮🇱 Hebrew</td>
                      <td className="u-p12-16">3–8 months</td>
                      <td className="u-p12-16">Beginner–Intermediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="u-mt20 highlight-bar">
                <i className="fas fa-info-circle"></i>
                <div>
                  <strong className="u-mb4">New Batches Starting Soon</strong>
                  <span className="u-txt-sm-555e">
                    Contact us to find out the next start date for your preferred language.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Why Learn a Language</div>
            <h2 className="section-title">
              Language Skills Open <span>Every Door</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-grid-3-mt40 sp-grid-3">
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-blue">
                <i className="fas fa-passport"></i>
              </div>
              <h4 className="u-h4-primary9">Stronger Visa Applications</h4>
              <p className="u-txt-sm-555b">
                Language proficiency (JLPT, TOPIK, IELTS) is a mandatory requirement for student
                visas in Japan, Korea, UK, and Australia.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-gold">
                <i className="fas fa-medal"></i>
              </div>
              <h4 className="u-h4-primary9">Scholarship Eligibility</h4>
              <p className="u-txt-sm-555b">
                MEXT (Japan) and KGSP (Korea) scholarships require language test scores. Our
                coaching has produced dozens of scholarship winners.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-blue">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="u-h4-primary9">Better Life Abroad</h4>
              <p className="u-txt-sm-555b">
                Students who speak the local language settle faster, make friends easier, and
                perform better academically in their destination country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Start Learning a Language Today"
        text="Morning and evening batches available — visit us at Sukedhara Chowk, Kathmandu."
        actions={[
          { href: '/contact', icon: 'fas fa-calendar-check', label: 'Enrol Now', variant: 'white' },
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
