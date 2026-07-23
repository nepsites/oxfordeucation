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
    href: 'https://www.utoronto.ca',
    abbr: 'UofT',
    logo: '/images/universities/utoronto-ca.png',
    name: 'University of Toronto',
    rank: "QS-ranked globally · Canada's #1 University",
  },
  {
    href: 'https://www.ubc.ca',
    abbr: 'UBC',
    logo: '/images/universities/ubc-ca.png',
    name: 'University of British Columbia',
    rank: 'QS-ranked globally · Vancouver · Research',
  },
  {
    href: 'https://www.mcgill.ca',
    abbr: 'McGIL',
    logo: '/images/universities/mcgill-ca.png',
    name: 'McGill University',
    rank: 'QS-ranked globally · Montreal · Bilingual',
  },
  {
    href: 'https://www.mcmaster.ca',
    abbr: 'McMAS',
    logo: '/images/universities/mcmaster-ca.png',
    name: 'McMaster University',
    rank: 'QS-ranked · Medical Research',
  },
  {
    href: 'https://www.uvic.ca',
    abbr: 'UVIC',
    logo: '/images/universities/uvic-ca.png',
    name: 'University of Victoria',
    rank: "QS-ranked · BC's Capital",
  },
  {
    href: 'https://www.ucalgary.ca',
    abbr: 'CALG',
    logo: '/images/universities/ucalgary-ca.png',
    name: 'University of Calgary',
    rank: 'QS-ranked · Energy Sector Hub',
  },
  {
    href: 'https://uwaterloo.ca',
    abbr: 'UWAT',
    logo: '/images/universities/uwaterloo-ca.png',
    name: 'University of Waterloo',
    rank: 'QS-ranked · Best for CS & Engineering',
  },
  {
    href: 'https://www.sfu.ca',
    abbr: 'SIMO',
    logo: '/images/universities/sfu-ca.png',
    name: 'Simon Fraser University',
    rank: 'QS-ranked · Vancouver Area',
  },
  {
    href: 'https://www.dal.ca',
    abbr: 'DALE',
    logo: '/images/universities/dal-ca.png',
    name: 'Dalhousie University',
    rank: 'QS-ranked · Maritime Excellence',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-briefcase',
    iconVariant: 'blue',
    title: 'Post-Graduation Work Permit',
    text: 'After completing a 2+ year program in Canada, you qualify for a PGWP of up to 3 years — allowing open work authorization anywhere in Canada.',
  },
  {
    icon: 'fas fa-users',
    iconVariant: 'gold',
    title: 'Multicultural & Welcoming',
    text: "Canada is one of the world's most diverse countries. Nepali communities exist in Toronto, Vancouver, Calgary, and Ottawa — making the transition comfortable.",
  },
  {
    icon: 'fas fa-university',
    iconVariant: 'blue',
    title: 'Top-Ranked Universities',
    text: 'University of Toronto, UBC, and McGill are QS-ranked universities with strong global reputations. Canadian degrees are highly respected globally.',
  },
  {
    icon: 'fas fa-leaf',
    iconVariant: 'gold',
    title: 'Quality of Life',
    text: 'Canada consistently ranks in the top 5 for quality of life — clean air, free healthcare under provincial plans (in most provinces), low crime, and stunning nature.',
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
            <span className="u-txt-white">Study in Canada</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in Canada</h1>
              <p className="cp-subtitle">
                World-class education, multicultural society, and a Post-Graduation Work Permit
                (PGWP) for up to 3 years — Canada is a top choice for Nepali students.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>Study Permit
                </span>
                <span className="cp-pill">
                  <i className="fas fa-briefcase"></i>PGWP Up to 3 Yrs
                </span>
                <span className="cp-pill">
                  <i className="fas fa-snowflake"></i>Multicultural
                </span>
                <span className="cp-pill">
                  <i className="fas fa-dollar-sign"></i>Affordable vs USA
                </span>
              </div>
            </div>
            <div className="cp-flag">🇨🇦</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">CAD 25K–55K</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">CAD 12K–18K</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">2–12 Weeks</div>
              <div className="lbl">Permit Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">QS-ranked</div>
              <div className="lbl">Univ. of Toronto</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why Canada?</div>
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
                <li>Letter of acceptance from a DLI (Designated Learning Institution)</li>
                <li>Academic transcripts with translations (SLC, +2, Bachelor's)</li>
                <li>IELTS 6.5+ (most universities)</li>
                <li>Statement of Purpose</li>
                <li>
                  Proof of funds (tuition + CAD 22,895/year living for one applicant, excluding
                  travel)
                </li>
                <li>Biometrics receipt (VFS Global, Kathmandu)</li>
                <li>Medical exam (if requested by IRCC)</li>
                <li>Bank statements (6+ months)</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our Canada specialist will review your
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
              Leading Universities in <span>Canada</span>
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
                    <div className="tl-label">Get admission</div>
                    <div className="tl-text">
                      Apply to a Designated Learning Institution (DLI). Oxford International helps
                      with applications, SOP, and reference letters.
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
                    <div className="tl-label">Apply for Study Permit online</div>
                    <div className="tl-text">
                      Apply online through IRCC (Immigration, Refugees, and Citizenship Canada).
                      Submit biometrics at VFS Global, Kathmandu.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Provide biometrics</div>
                    <div className="tl-text">
                      All Nepali nationals must provide biometrics (fingerprints + photo) — done at
                      VFS Global Kathmandu for a fee of CAD 85.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive permit & prepare to travel</div>
                    <div className="tl-text">
                      Processing takes 2–12 weeks. Once approved, you get a Port of Entry Letter.
                      The actual Study Permit is stamped on arrival in Canada.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Arrive & obtain SIN</div>
                    <div className="tl-text">
                      On arrival, present your documents at the airport. Get your Social Insurance
                      Number (SIN) to work legally in Canada.
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
                    <i className="u-mr8 fas fa-award"></i>Vanier Canada Graduate Scholarships
                  </div>
                  <div className="sc-detail">
                    CAD 50,000/year for 3 years for doctoral students — extremely prestigious. For
                    PhD applicants with outstanding academic achievement and leadership.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Ontario Graduate Scholarship
                  </div>
                  <div className="sc-detail">
                    CAD 10,000–15,000/year for Master's and PhD students studying in Ontario.
                    University-administered — apply through your university.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University International Scholarships
                  </div>
                  <div className="sc-detail">
                    Most Canadian universities offer entrance scholarships of CAD 2,000–25,000 for
                    high-achieving international students. Oxford International identifies
                    scholarship-friendly institutions.
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
              Common Questions about <span>Studying in Canada</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'What IELTS score is needed for Canada?',
                  a: 'Most Canadian universities require IELTS 6.5 overall with no band below 6.0 for undergraduate. Postgraduate programs typically require IELTS 7.0. Some programs at colleges accept IELTS 6.0.',
                },
                {
                  q: 'What is the PGWP and how long does it last?',
                  a: 'The Post-Graduation Work Permit allows you to work anywhere in Canada after graduating. Duration is equal to the length of your study program — up to a maximum of 3 years for programs of 2+ years.',
                },
                {
                  q: 'Can I bring my family to Canada?',
                  a: 'Yes. Spouses of study permit holders studying in a university or college may be eligible for an open work permit, and dependent children can attend Canadian schools.',
                },
                {
                  q: 'Is Quebec (French Canada) different?',
                  a: 'Yes — Quebec has its own immigration rules. Programs in Quebec often require French language proficiency. However, McGill University in Montreal is English-medium and highly reputed.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in Canada?"
        text="Talk to our Canada specialists — free counselling, zero fees."
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
