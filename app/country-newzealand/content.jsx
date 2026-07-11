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
    href: 'https://www.auckland.ac.nz',
    abbr: 'UoA',
    logo: '/images/universities/default-education.svg',
    name: 'University of Auckland',
    rank: 'QS-ranked globally · Research-led University',
  },
  {
    href: 'https://www.otago.ac.nz',
    abbr: 'Otago',
    logo: '/images/universities/default-education.svg',
    name: 'University of Otago',
    rank: 'QS-ranked · Dunedin Campus',
  },
  {
    href: 'https://www.wgtn.ac.nz',
    abbr: 'VUW',
    logo: '/images/universities/default-education.svg',
    name: 'Victoria University of Wellington',
    rank: 'QS-ranked · Capital City',
  },
  {
    href: 'https://www.canterbury.ac.nz',
    abbr: 'UC',
    logo: '/images/universities/default-education.svg',
    name: 'University of Canterbury',
    rank: 'QS-ranked · Engineering & Science',
  },
  {
    href: 'https://www.massey.ac.nz',
    abbr: 'Massey',
    logo: '/images/universities/default-education.svg',
    name: 'Massey University',
    rank: 'QS-ranked · Multi-campus',
  },
  {
    href: 'https://www.waikato.ac.nz',
    abbr: 'Waikato',
    logo: '/images/universities/default-education.svg',
    name: 'University of Waikato',
    rank: 'QS-ranked · Hamilton Campus',
  },
  {
    href: 'https://www.aut.ac.nz',
    abbr: 'AUT',
    logo: '/images/universities/default-education.svg',
    name: 'Auckland University of Technology',
    rank: 'QS-ranked · Career-focused',
  },
  {
    href: 'https://www.lincoln.ac.nz',
    abbr: 'Lincoln',
    logo: '/images/universities/default-education.svg',
    name: 'Lincoln University',
    rank: 'Specialist Land-based University',
  },
  {
    href: 'https://www.eit.ac.nz',
    abbr: 'EIT',
    logo: '/images/universities/default-education.svg',
    name: 'Eastern Institute of Technology',
    rank: 'Applied & vocational pathways',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-briefcase',
    iconVariant: 'blue',
    title: 'Post-Study Work Options',
    text: 'Eligible graduates may qualify for post-study work options depending on qualification, level of study, location, and current immigration rules.',
  },
  {
    icon: 'fas fa-users',
    iconVariant: 'gold',
    title: 'Multicultural & Welcoming',
    text: 'New Zealand is known for safe cities, friendly communities, and a supportive learning environment for international students.',
  },
  {
    icon: 'fas fa-university',
    iconVariant: 'blue',
    title: 'Top-Ranked Universities',
    text: 'The University of Auckland, University of Otago, Victoria University of Wellington, and other institutions are known internationally for research and teaching quality.',
  },
  {
    icon: 'fas fa-leaf',
    iconVariant: 'gold',
    title: 'Quality of Life',
    text: 'New Zealand offers clean cities, outdoor lifestyle, strong student support, and globally respected qualifications.',
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

      <div className="cp-hero" style={{ '--c1': '#8B0000', '--c2': '#cc0000' }}>
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
            <span className="u-txt-white">Study in New Zealand</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in New Zealand</h1>
              <p className="cp-subtitle">
                Quality education, welcoming communities, beautiful campuses, and practical study
                pathways make New Zealand a strong choice for Nepali students.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>Student Visa
                </span>
                <span className="cp-pill">
                  <i className="fas fa-briefcase"></i>Post-Study Options
                </span>
                <span className="cp-pill">
                  <i className="fas fa-mountain"></i>Safe Lifestyle
                </span>
                <span className="cp-pill">
                  <i className="fas fa-graduation-cap"></i>Quality Study
                </span>
              </div>
            </div>
            <div className="cp-flag">🇳🇿</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">NZD 22K–40K</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">NZD 18K–25K</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">4–10 Weeks</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">QS-ranked</div>
              <div className="lbl">Top Universities</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why New Zealand?</div>
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
                <li>Offer of place from an approved New Zealand education provider</li>
                <li>Academic transcripts with translations (SLC, +2, Bachelor's)</li>
                <li>IELTS 6.0–6.5 or equivalent, depending on course level</li>
                <li>Statement of Purpose</li>
                <li>
                  Proof of funds for tuition, living costs, and return travel under current
                  Immigration New Zealand requirements
                </li>
                <li>Valid passport and visa application documents</li>
                <li>Medical and police certificates if required</li>
                <li>Bank statements (6+ months)</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our New Zealand specialist will review your
                    profile.
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
              Leading Universities in <span>New Zealand</span>
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
                    <div className="tl-label">Get an offer of place</div>
                    <div className="tl-text">
                      Apply to an approved New Zealand education provider. Oxford International
                      helps with applications, SOP, and reference letters.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive letter of acceptance</div>
                    <div className="tl-text">
                      Your university issues a Letter of Acceptance. Keep both the acceptance letter
                      and student ID ready for the permit application.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for Student Visa online</div>
                    <div className="tl-text">
                      Apply online through Immigration New Zealand with your offer, financial
                      documents, health insurance details, and identity documents.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Prepare supporting documents</div>
                    <div className="tl-text">
                      Prepare financial evidence, health and character documents, and any additional
                      documents requested by Immigration New Zealand.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive visa & prepare to travel</div>
                    <div className="tl-text">
                      Processing times vary by application. Once approved, prepare accommodation,
                      travel, insurance, and pre-departure documents.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Arrive & begin orientation</div>
                    <div className="tl-text">
                      On arrival, attend orientation, confirm enrolment, and follow your student
                      visa conditions.
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
                    <i className="u-mr8 fas fa-award"></i>New Zealand Excellence Awards
                  </div>
                  <div className="sc-detail">
                    Scholarships may be available for strong international students depending on
                    provider, course level, and intake.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University Merit Scholarships
                  </div>
                  <div className="sc-detail">
                    Many New Zealand providers offer merit scholarships for high-achieving
                    international applicants.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Provider and Faculty Scholarships
                  </div>
                  <div className="sc-detail">
                    Scholarship availability changes by institution and intake. Oxford International
                    helps identify suitable options.
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
              Common Questions about <span>Studying in New Zealand</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'What IELTS score is needed for New Zealand?',
                  a: 'Many New Zealand programs require IELTS 6.0–6.5 overall or equivalent, depending on course level and provider.',
                },
                {
                  q: 'Can I work after studying in New Zealand?',
                  a: 'Post-study work options may be available depending on your qualification, study level, location, and current Immigration New Zealand rules.',
                },
                {
                  q: 'Can I bring my family to New Zealand?',
                  a: 'Some student visa holders may be able to include or support family visa applications depending on course level and current immigration rules.',
                },
                {
                  q: 'Is New Zealand expensive to live in?',
                  a: 'Living costs vary by city and lifestyle. Auckland is usually more expensive than smaller cities, so budgeting early is important.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in New Zealand?"
        text="Talk to our New Zealand specialists — free counselling, zero fees."
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
