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
    href: 'https://web.mit.edu',
    abbr: 'MIT',
    logo: '/images/universities/web-mit-edu.png',
    name: 'Massachusetts Institute of Technology',
    rank: 'QS-ranked globally · STEM Leader',
  },
  {
    href: 'https://www.harvard.edu',
    abbr: 'HARV',
    logo: '/images/universities/harvard-edu.png',
    name: 'Harvard University',
    rank: 'QS-ranked globally · Oldest US University',
  },
  {
    href: 'https://www.stanford.edu',
    abbr: 'STAN',
    logo: '/images/universities/stanford-edu.png',
    name: 'Stanford University',
    rank: 'QS-ranked globally · Silicon Valley',
  },
  {
    href: 'https://www.columbia.edu',
    abbr: 'CLMB',
    logo: '/images/universities/columbia-edu.png',
    name: 'Columbia University',
    rank: 'QS-ranked globally · New York City',
  },
  {
    href: 'https://www.ucla.edu',
    abbr: 'UCLA',
    logo: '/images/universities/ucla-edu.png',
    name: 'UCLA',
    rank: 'QS-ranked globally · Best on West Coast',
  },
  {
    href: 'https://www.nyu.edu',
    abbr: 'NYU',
    logo: '/images/universities/nyu-edu.png',
    name: 'New York University',
    rank: 'QS-ranked globally · Global Network',
  },
  {
    href: 'https://www.cornell.edu',
    abbr: 'CORN',
    logo: '/images/universities/cornell-edu.png',
    name: 'Cornell University',
    rank: 'QS-ranked globally · Ivy League',
  },
  {
    href: 'https://www.yale.edu',
    abbr: 'YALE',
    logo: '/images/universities/yale-edu.png',
    name: 'Yale University',
    rank: 'QS-ranked globally · Ivy League',
  },
  {
    href: 'https://www.duke.edu',
    abbr: 'DUKE',
    logo: '/images/universities/duke-edu.png',
    name: 'Duke University',
    rank: 'QS-ranked · Research Triangle',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-trophy',
    iconVariant: 'blue',
    title: 'World #1 Universities',
    text: 'The USA holds 4 of the top 10 spots in QS World Rankings 2026 — MIT (#1), Harvard (#4), Stanford (#3), and Caltech (#10). A US degree is the gold standard globally.',
  },
  {
    icon: 'fas fa-flask',
    iconVariant: 'gold',
    title: 'Research & Innovation',
    text: 'American universities spend more on research than any other country. Students gain access to cutting-edge labs, faculty who are industry leaders, and Silicon Valley networks.',
  },
  {
    icon: 'fas fa-money-bill-wave',
    iconVariant: 'blue',
    title: 'Financial Aid Available',
    text: 'Many US universities offer significant merit and need-based aid to international students. Some — like Harvard and MIT — meet 100% of demonstrated financial need.',
  },
  {
    icon: 'fas fa-briefcase',
    iconVariant: 'gold',
    title: 'OPT & CPT Work Rights',
    text: 'F-1 visa holders can work on-campus during studies. After graduation, Optional Practical Training (OPT) allows 1–3 years of paid work in your field.',
  },
];

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

      <div className="cp-hero" style={{ '--c1': '#b71c1c', '--c2': '#8B0000' }}>
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
            <span className="u-txt-white">Study in USA</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in USA</h1>
              <p className="cp-subtitle">
                Home to the world's #1 ranked universities — MIT, Harvard, Stanford — with unmatched
                research, innovation and career opportunities.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>F-1 Student Visa
                </span>
                <span className="cp-pill">
                  <i className="fas fa-university"></i>Ivy League & More
                </span>
                <span className="cp-pill">
                  <i className="fas fa-flask"></i>Research Excellence
                </span>
                <span className="cp-pill">
                  <i className="fas fa-briefcase"></i>OPT/CPT Work
                </span>
              </div>
            </div>
            <div className="cp-flag">🇺🇸</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">USD 30K–60K</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">USD 15K–25K</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">3 Months</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">192</div>
              <div className="lbl">QS-Ranked US Unis</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why USA?</div>
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
                <li>High school or bachelor's transcripts with official translations</li>
                <li>IELTS 6.5+ or TOEFL 80+ score</li>
                <li>GRE/GMAT score (for postgraduate)</li>
                <li>Statement of Purpose (SOP)</li>
                <li>2–3 letters of recommendation</li>
                <li>Proof of funds (1 year tuition + living costs)</li>
                <li>Completed DS-160 form</li>
                <li>Paid SEVIS fee (USD 350)</li>
                <li>Form I-20 from university</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our USA specialist will review your profile
                    and tell you exactly what to prepare.
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
              Leading Universities in <span>USA</span>
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
                    <div className="tl-label">Get accepted</div>
                    <div className="tl-text">
                      Apply to SEVP-approved institutions. Oxford International helps with SOP,
                      application essays, and document preparation.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive I-20 form</div>
                    <div className="tl-text">
                      Once accepted, your university issues Form I-20 — the core visa document
                      issued by the Designated School Official (DSO).
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Pay SEVIS fee</div>
                    <div className="tl-text">
                      Pay the SEVIS I-901 fee (currently USD 350) at fmjfee.com before scheduling
                      your visa interview.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Complete DS-160 form</div>
                    <div className="tl-text">
                      Complete the online nonimmigrant visa application DS-160 form at
                      ceac.state.gov.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Book visa interview</div>
                    <div className="tl-text">
                      Schedule an interview at the US Embassy, Kathmandu. Prepare for questions
                      about course, finances, and ties to Nepal.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Attend interview & depart</div>
                    <div className="tl-text">
                      Present I-20, DS-160 confirmation, financial proof, and acceptance letter.
                      Visa typically stamped within 1 week if approved.
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
                    <i className="u-mr8 fas fa-award"></i>Fulbright Foreign Student Program
                  </div>
                  <div className="sc-detail">
                    Fully funded scholarship covering tuition, living allowance, health insurance
                    and airfare. Highly competitive — for outstanding Nepali graduates. Applied
                    through USEF Nepal.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University Merit Scholarships
                  </div>
                  <div className="sc-detail">
                    Many US universities offer merit scholarships of USD 5,000–50,000 per year to
                    international students. We help identify and apply to scholarship-friendly
                    institutions.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Graduate Assistantships
                  </div>
                  <div className="sc-detail">
                    Masters and PhD students can receive teaching or research assistantships worth
                    USD 15,000–35,000/year, covering tuition and providing a stipend.
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
              Common Questions about <span>Studying in USA</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'What IELTS/TOEFL score do I need for US universities?',
                  a: 'Most US universities require IELTS 6.5–7.0 or TOEFL 80–100 for undergraduate, and IELTS 7.0+ or TOEFL 100+ for postgraduate programs. Some top schools require TOEFL 110+.',
                },
                {
                  q: 'What is the GRE and do I need it?',
                  a: "GRE (Graduate Record Examination) is required for most US Master's programs. GMAT is required for MBA programs. Oxford International offers GRE/GMAT coaching — score high and strengthen your application.",
                },
                {
                  q: 'How early should I apply?',
                  a: 'US university applications typically open in August and deadlines fall between November and March for the following September intake. Start 12–18 months in advance for the best options.',
                },
                {
                  q: 'Can I bring my family to the USA?',
                  a: 'F-1 visa holders can bring dependents on F-2 visas, but F-2 holders cannot work in the USA. Budget accordingly.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in USA?"
        text="Talk to our USA specialists — free counselling, zero fees."
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
