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
    href: 'https://www.unimelb.edu.au',
    abbr: 'UoM',
    logo: '/images/universities/unimelb-edu-au.png',
    name: 'University of Melbourne',
    rank: 'QS-ranked globally · Group of 8',
  },
  {
    href: 'https://www.unsw.edu.au',
    abbr: 'UNSW',
    logo: '/images/universities/unsw-edu-au.png',
    name: 'UNSW Sydney',
    rank: 'QS-ranked globally · Best for Employability',
  },
  {
    href: 'https://www.anu.edu.au',
    abbr: 'ANU',
    logo: '/images/universities/anu-edu-au.png',
    name: 'Australian National University',
    rank: 'QS-ranked globally · Group of 8',
  },
  {
    href: 'https://www.monash.edu',
    abbr: 'MON',
    logo: '/images/universities/monash-edu.png',
    name: 'Monash University',
    rank: 'QS-ranked globally · 4 AU Campuses',
  },
  {
    href: 'https://www.uq.edu.au',
    abbr: 'UQ',
    logo: '/images/universities/uq-edu-au.png',
    name: 'University of Queensland',
    rank: 'QS-ranked · Best Teaching Awards',
  },
  {
    href: 'https://www.sydney.edu.au',
    abbr: 'USyd',
    logo: '/images/universities/sydney-edu-au.png',
    name: 'University of Sydney',
    rank: 'QS-ranked · Oldest AU University',
  },
  {
    href: 'https://www.uwa.edu.au',
    abbr: 'UWA',
    logo: '/images/universities/uwa-edu-au.png',
    name: 'University of Western Australia',
    rank: 'QS-ranked · Perth Campus',
  },
  {
    href: 'https://www.adelaide.edu.au',
    abbr: 'ADL',
    logo: '/images/universities/adelaide-edu-au.png',
    name: 'University of Adelaide',
    rank: 'QS-ranked · Group of 8',
  },
  {
    href: 'https://www.rmit.edu.au',
    abbr: 'RMIT',
    logo: '/images/universities/rmit-edu-au.png',
    name: 'RMIT University',
    rank: 'Top for Design & Technology',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-globe',
    iconVariant: 'blue',
    title: 'Global Reputation',
    text: '8 of Australia\'s elite "Group of Eight" universities rank in the top 100 globally — a degree from ANU, Melbourne, or UNSW is recognised by employers worldwide.',
  },
  {
    icon: 'fas fa-clock',
    iconVariant: 'gold',
    title: 'Post-Study Work Rights',
    text: 'Post-study work options may be available through the Temporary Graduate visa, depending on qualification, eligibility and current rules.',
  },
  {
    icon: 'fas fa-sun',
    iconVariant: 'blue',
    title: 'Quality of Life',
    text: "Australia consistently ranks among the world's most liveable countries. Cities like Melbourne, Sydney, and Brisbane offer safety, diversity, and excellent student life.",
  },
  {
    icon: 'fas fa-heart',
    iconVariant: 'gold',
    title: 'Healthcare & Safety',
    text: 'International students on a Student Visa must hold OSHC for the full stay. It helps cover doctor visits, hospital treatment, ambulance and limited medicines.',
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

      <div className="cp-hero" style={{ '--c1': '#1a3c6e', '--c2': '#0d6efd' }}>
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
            <span className="u-txt-white">Study in Australia</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in Australia</h1>
              <p className="cp-subtitle">
                World-class universities, vibrant cities, and one of the most student-friendly visa
                systems in the world.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>Student Visa 500
                </span>
                <span className="cp-pill">
                  <i className="fas fa-graduation-cap"></i>Group of 8 Uni
                </span>
                <span className="cp-pill">
                  <i className="fas fa-clock"></i>2–4 Year Courses
                </span>
                <span className="cp-pill">
                  <i className="fas fa-dollar-sign"></i>Post-Study Work
                </span>
              </div>
            </div>
            <div className="cp-flag">🇦🇺</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">AUD 20K–45K</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">AUD 18K–25K</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">~4 Weeks</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">#1 City</div>
              <div className="lbl">Melbourne - Most Liveable</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why Australia?</div>
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
                <li>Valid passport (minimum 6 months validity)</li>
                <li>High school or bachelor's transcripts and marksheets</li>
                <li>IELTS 6.0–6.5 (or equivalent)</li>
                <li>Statement of Purpose (SOP)</li>
                <li>Genuine Student (GS) responses/evidence</li>
                <li>
                  Bank statements showing the current Home Affairs financial capacity amount, plus
                  tuition and travel
                </li>
                <li>OSHC (health insurance) receipt</li>
                <li>University offer letter / CoE</li>
                <li>Character certificate & police clearance</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — we'll review your profile and tell you exactly
                    what to prepare.
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
              Leading Universities in <span>Australia</span>
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
                    <div className="tl-label">Get an offer letter</div>
                    <div className="tl-text">
                      Apply to a CRICOS-registered institution. Oxford International helps with
                      university shortlisting and application documents.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Enrol & pay tuition</div>
                    <div className="tl-text">
                      Confirm your place by paying the Confirmation of Enrolment (CoE) fee. Your
                      university issues a CoE certificate.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Get health cover (OSHC)</div>
                    <div className="tl-text">
                      Purchase Overseas Student Health Cover — mandatory for Student Visa 500
                      applicants.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for Visa 500</div>
                    <div className="tl-text">
                      Submit your application on ImmiAccount with your CoE, OSHC, passport,
                      financials, and Genuine Student (GS) requirement.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Biometrics & health check</div>
                    <div className="tl-text">
                      Complete a health examination at a panel physician and provide biometrics if
                      required.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive visa & depart</div>
                    <div className="tl-text">
                      Visa is typically granted within 2–6 weeks. Oxford International provides
                      pre-departure briefing.
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
                    <i className="u-mr8 fas fa-award"></i>Australia Awards Scholarship
                  </div>
                  <div className="sc-detail">
                    Fully funded — covers tuition, living allowance, travel, and health insurance.
                    Competitive — applied through AusAid. Open to Nepali citizens.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Destination Australia Scholarship
                  </div>
                  <div className="sc-detail">
                    Up to AUD 15,000/year for students choosing to study in regional Australia. Less
                    competitive than Australia Awards.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University Merit Scholarships
                  </div>
                  <div className="sc-detail">
                    Most Group of 8 universities offer merit scholarships of AUD 5,000–30,000 to
                    high-achieving international students. Ask us for details.
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
              Common Questions about <span>Studying in Australia</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'What IELTS score do I need for Australia?',
                  a: "Most Australian universities require IELTS 6.0–6.5 overall, with no band below 5.5 or 6.0. Some postgraduate programs require 6.5–7.0. Oxford International's IELTS coaching has helped hundreds of students achieve their target score.",
                },
                {
                  q: 'How much money do I need in my bank account?',
                  a: 'Australian immigration requires proof of funds — the current Home Affairs financial capacity amount for living costs, plus tuition and travel. Our visa team helps you prepare the financial documents correctly.',
                },
                {
                  q: 'Can I work while studying in Australia?',
                  a: 'Yes. Student Visa 500 allows work up to 48 hours per fortnight while your course is in session, and unlimited hours during scheduled course breaks.',
                },
                {
                  q: 'What is the Genuine Student (GS) requirement?',
                  a: 'The Genuine Student (GS) requirement asks you to show that you are a genuine student, explain your study choice, and provide supporting evidence about your circumstances. Our team helps prepare clear GS responses and supporting documents.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in Australia?"
        text="Talk to our Australia specialists — free counselling, zero fees."
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
