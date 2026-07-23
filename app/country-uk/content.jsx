'use client';

import Faq from '../_components/Faq';
import InfoCard from '../_components/InfoCard';
import UniCard from '../_components/UniCard';
import UniversityLogo from '../_components/UniversityLogo';
import CtaSection from '../_components/CtaSection';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

const UNIVERSITIES = [
  {
    href: 'https://www.ox.ac.uk',
    abbr: 'OXF',
    logo: '/images/universities/ox-ac-uk.png',
    name: 'University of Oxford',
    rank: 'QS-ranked globally · 900+ Years Old',
  },
  {
    href: 'https://www.cam.ac.uk',
    abbr: 'CAMB',
    logo: '/images/universities/cam-ac-uk.png',
    name: 'University of Cambridge',
    rank: 'QS-ranked globally · Elite Research',
  },
  {
    href: 'https://www.imperial.ac.uk',
    abbr: 'IMP',
    logo: '/images/universities/imperial-ac-uk.png',
    name: 'Imperial College London',
    rank: 'QS-ranked globally · STEM & Medicine',
  },
  {
    href: 'https://www.ucl.ac.uk',
    abbr: 'UCL',
    logo: '/images/universities/ucl-ac-uk.png',
    name: 'University College London',
    rank: 'QS-ranked globally · Central London',
  },
  {
    href: 'https://www.manchester.ac.uk',
    abbr: 'MAN',
    logo: '/images/universities/manchester-ac-uk.png',
    name: 'University of Manchester',
    rank: 'QS-ranked globally · Russell Group',
  },
  {
    href: 'https://www.kcl.ac.uk',
    abbr: 'KCL',
    logo: '/images/universities/kcl-ac-uk.png',
    name: "King's College London",
    rank: 'QS-ranked globally · Central London',
  },
  {
    href: 'https://www.ed.ac.uk',
    abbr: 'EDIN',
    logo: '/images/universities/ed-ac-uk.png',
    name: 'University of Edinburgh',
    rank: "QS-ranked globally · Scotland's Capital",
  },
  {
    href: 'https://www.lse.ac.uk',
    abbr: 'LSE',
    logo: '/images/universities/lse-ac-uk.png',
    name: 'London School of Economics',
    rank: 'QS-ranked · Best for Social Sciences',
  },
  {
    href: 'https://www.bristol.ac.uk',
    abbr: 'BRIS',
    logo: '/images/universities/bristol-ac-uk.png',
    name: 'University of Bristol',
    rank: 'QS-ranked globally · Russell Group',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-crown',
    iconVariant: 'blue',
    title: 'Prestige & History',
    text: 'Oxford and Cambridge are among the oldest and most prestigious universities in the world, and both are QS-ranked globally. A UK degree is recognised and respected everywhere.',
  },
  {
    icon: 'fas fa-clock',
    iconVariant: 'gold',
    title: 'Shorter Course Duration',
    text: "UK undergraduate degrees are 3 years (not 4), and most Master's degrees are just 12 months — saving significant tuition fees and living costs compared to USA or Australia.",
  },
  {
    icon: 'fas fa-briefcase',
    iconVariant: 'blue',
    title: 'Graduate Route Visa',
    text: 'After completing a UK degree, eligible graduates can stay under the Graduate visa: 2 years if applying on or before 31 Dec 2026, 18 months from 1 Jan 2027, or 3 years for PhD/doctoral graduates.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    iconVariant: 'gold',
    title: 'London & Beyond',
    text: 'Study in world cities like London, Edinburgh, Manchester, or Bristol — vibrant, multicultural, safe, and with outstanding career opportunities across all sectors.',
  },
];

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

      <div className="cp-hero" style={{ '--c1': '#1a1a6e', '--c2': '#003580' }}>
        <div className="container">
          <div className="u-mb24 breadcrumb">
            <a className="u-txt-white70" href="/">
              Home
            </a>
            <span className="u-txt-white40 sep">›</span>
            <a className="u-txt-white70" href="/services">
              Services
            </a>
            <span className="u-txt-white40 sep">›</span>
            <span className="u-txt-white">Study in UK</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in UK</h1>
              <p className="cp-subtitle">
                Home to Oxford, Cambridge, and Imperial — world-class education, rich academic
                tradition, and post-study work options through the Graduate visa.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>Student Visa
                </span>
                <span className="cp-pill">
                  <i className="fas fa-university"></i>Russell Group
                </span>
                <span className="cp-pill">
                  <i className="fas fa-clock"></i>Graduate Route Options
                </span>
                <span className="cp-pill">
                  <i className="fas fa-globe"></i>Multicultural Cities
                </span>
              </div>
            </div>
            <div className="cp-flag">🇬🇧</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">GBP 15K–38K</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">GBP 12K–20K</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">3 Weeks</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">24</div>
              <div className="lbl">Russell Group Unis</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why UK?</div>
              <h2 className="section-title">
                Top Reasons to <span>Study Here</span>
              </h2>
              <div className="divider"></div>
              <div className="u-flex-col">
                {WHY_REASONS.map((r) => (
                  <InfoCard key={r.title} {...r} />
                ))}
              </div>
            </div>
            <div>
              <div className="section-tag">Requirements at a Glance</div>
              <h2 className="section-title">
                What You <span>Need</span>
              </h2>
              <div className="divider"></div>
              <ul className="u-mt24 check-list">
                <li>Valid passport (6+ months)</li>
                <li>Academic transcripts (SLC, +2, Bachelor's) with translations</li>
                <li>IELTS 6.5+ (most universities)</li>
                <li>UCAS personal statement (undergraduate)</li>
                <li>Statement of Purpose (postgraduate)</li>
                <li>2–3 academic/professional references</li>
                <li>
                  Proof of funds (tuition + living costs: £1,529/month in London or £1,171/month
                  outside London, up to 9 months)
                </li>
                <li>CAS (Confirmation of Acceptance for Studies)</li>
                <li>IHS (Immigration Health Surcharge) payment</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our UK specialist will review your profile and
                    tell you exactly what to prepare.
                  </span>
                </div>
              </div>
              <a className="u-mt14-ib btn btn-primary" href="/contact">
                <i className="fas fa-calendar"></i> Free Counselling
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Top Universities</div>
            <h2 className="section-title">
              Leading Universities in <span>UK</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              QS-ranked universities that Oxford International students have successfully gained
              admission to.
            </p>
          </div>
          <div className="u-grid-3 uni-grid">
            {UNIVERSITIES.map((u) => (
              <UniCard key={u.name} {...u} />
            ))}
          </div>
        </div>
      </section>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Visa Process</div>
              <h2 className="section-title">
                How to Get Your <span>Student Visa</span>
              </h2>
              <div className="divider"></div>
              <div className="u-mt28">
                <div className="timeline">
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply via UCAS</div>
                    <div className="tl-text">
                      For undergraduate, apply through UCAS (up to 5 choices). For postgraduate,
                      apply directly to the university. Oxford International helps with personal
                      statements and references.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive Confirmation of Acceptance (CAS)</div>
                    <div className="tl-text">
                      Your university issues a Confirmation of Acceptance for Studies (CAS) number
                      once you have an unconditional offer and pay a deposit.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for Student Visa online</div>
                    <div className="tl-text">
                      Submit your Student Visa application online on the UK Visas and Immigration
                      (UKVI) portal using your CAS number.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Pay Immigration Health Surcharge</div>
                    <div className="tl-text">
                      Pay the IHS (£776/year) as part of your visa application — this gives you
                      access to the NHS during your studies.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Biometrics appointment</div>
                    <div className="tl-text">
                      Attend a biometrics appointment at VFS Global, Kathmandu. Bring all original
                      documents.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive visa & depart</div>
                    <div className="tl-text">
                      Visas are typically decided within 3 weeks. Oxford International provides a
                      full pre-departure briefing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-tag">Scholarships</div>
              <h2 className="section-title">
                Funding <span>Opportunities</span>
              </h2>
              <div className="divider"></div>
              <div className="u-flex-col">
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Chevening Scholarship
                  </div>
                  <div className="sc-detail">
                    Fully funded by the UK Government — covers tuition, living stipend, and flights.
                    For outstanding students with leadership potential. Applied through
                    Chevening.org.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Commonwealth Scholarships
                  </div>
                  <div className="sc-detail">
                    Fully funded for students from Commonwealth countries including Nepal — covers
                    all costs. Applied through the Commonwealth Scholarship Commission.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University Scholarships
                  </div>
                  <div className="sc-detail">
                    Russell Group universities offer merit scholarships of GBP 2,000–30,000.
                    Competitive — Oxford International helps identify best-fit universities for
                    scholarship eligibility.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">
              Common Questions about <span>Studying in UK</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'What IELTS score is needed for UK universities?',
                  a: 'Most UK universities require IELTS 6.5 overall with no band below 6.0 for undergraduate, and IELTS 6.5–7.0 for postgraduate. Prestigious universities like Oxford and Cambridge require 7.0–7.5.',
                },
                {
                  q: 'What is the UCAS points system?',
                  a: 'UCAS uses a Tariff Points system to evaluate your qualifications. A-levels, IB, and equivalent qualifications are converted to UCAS points. +2 or A-level results are accepted. Our counsellors help you understand your entry requirements.',
                },
                {
                  q: 'Is the Graduate Route visa available to Nepali students?',
                  a: 'Yes. Eligible Nepali graduates can apply for the UK Graduate visa. It allows 2 years if applying on or before 31 Dec 2026, 18 months from 1 Jan 2027, or 3 years for PhD/doctoral graduates — no job offer required.',
                },
                {
                  q: 'Is London expensive to live in?',
                  a: 'London is more expensive than other UK cities. Manchester, Edinburgh, Leeds, and Glasgow offer excellent universities at much lower cost of living — typically £800–1,200/month vs £1,500–2,500 in London.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in UK?"
        text="Talk to our UK specialists — free counselling, zero fees."
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
            label: 'Call Us Now',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
