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
    href: 'https://www.tum.de/en/',
    abbr: 'TUM',
    logo: '/images/universities/tum-de.png',
    name: 'Technical University of Munich',
    rank: "QS-ranked globally · World's Best Engineering",
  },
  {
    href: 'https://www.lmu.de/en/',
    abbr: 'LMU',
    logo: '/images/universities/lmu-de.png',
    name: 'LMU Munich',
    rank: 'QS-ranked globally · Top Research University',
  },
  {
    href: 'https://www.uni-heidelberg.de/en',
    abbr: 'HDB',
    logo: '/images/universities/uni-heidelberg-de.png',
    name: 'Heidelberg University',
    rank: 'QS-ranked globally · Oldest German University',
  },
  {
    href: 'https://www.rwth-aachen.de/',
    abbr: 'RWTH',
    logo: '/images/universities/rwth-aachen-de.png',
    name: 'RWTH Aachen University',
    rank: 'QS-ranked · #1 for Engineering',
  },
  {
    href: 'https://www.hu-berlin.de/en',
    abbr: 'HU',
    logo: '/images/universities/hu-berlin-de.png',
    name: 'Humboldt University Berlin',
    rank: 'QS-ranked · Humanities & Sciences',
  },
  {
    href: 'https://www.fu-berlin.de/en/',
    abbr: 'FUB',
    logo: '/images/universities/fu-berlin-de.png',
    name: 'Free University Berlin',
    rank: 'QS-ranked · International Research',
  },
  {
    href: 'https://www.kit.edu/english/',
    abbr: 'KIT',
    logo: '/images/universities/kit-edu.png',
    name: 'Karlsruhe Institute of Technology',
    rank: 'QS-ranked · Technology Leader',
  },
  {
    href: 'https://www.uni-mannheim.de/en/',
    abbr: 'MANN',
    logo: '/images/universities/uni-mannheim-de.png',
    name: 'University of Mannheim',
    rank: 'Best for Business in Germany',
  },
  {
    href: 'https://www.uni-goettingen.de/en/1.html',
    abbr: 'GOET',
    logo: '/images/universities/uni-goettingen-de.png',
    name: 'University of Göttingen',
    rank: 'QS-ranked · Nobel Prize Legacy',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-euro-sign',
    iconVariant: 'blue',
    title: 'FREE Tuition at Public Universities',
    text: "German public universities charge NO tuition fees for international students — only a small semester fee of €150–350. This makes Germany the world's most cost-effective premium education destination.",
  },
  {
    icon: 'fas fa-cogs',
    iconVariant: 'gold',
    title: 'Engineering & Technology Excellence',
    text: 'Germany is the engineering capital of the world — home to Mercedes-Benz, BMW, Siemens, BASF, and SAP. TU Munich, RWTH Aachen, and KIT are among the best engineering schools globally.',
  },
  {
    icon: 'fas fa-award',
    iconVariant: 'blue',
    title: 'DAAD Scholarships',
    text: 'The German Academic Exchange Service (DAAD) offers hundreds of fully funded scholarships to Nepali students for Masters, PhD, and research programs every year.',
  },
  {
    icon: 'fas fa-briefcase',
    iconVariant: 'gold',
    title: 'Work During & After Studies',
    text: 'International students can work up to 140 full days or 280 half days per year. After graduation, you can stay for 18 months to look for a job — and Germany has one of the lowest unemployment rates in the world.',
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

      <div className="cp-hero" style={{ '--c1': '#1a1a1a', '--c2': '#333333' }}>
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
            <span className="u-txt-white">Study in Germany</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in Germany</h1>
              <p className="cp-subtitle">
                Study at one of the world's best engineering and research universities — for FREE.
                Germany's public universities charge no tuition fees for international students.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>National Visa D
                </span>
                <span className="cp-pill">
                  <i className="fas fa-graduation-cap"></i>Free Public Tuition
                </span>
                <span className="cp-pill">
                  <i className="fas fa-award"></i>DAAD Scholarship
                </span>
                <span className="cp-pill">
                  <i className="fas fa-cog"></i>Engineering Hub
                </span>
              </div>
            </div>
            <div className="cp-flag">🇩🇪</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">€0–300</div>
              <div className="lbl">Annual Tuition (Semester Fee)</div>
            </div>
            <div className="cp-stat">
              <div className="num">€800–1,200/mo</div>
              <div className="lbl">Monthly Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">4–12 Weeks</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">QS-ranked</div>
              <div className="lbl">TU Munich</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why Germany?</div>
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
                <li>Admission letter (Zulassungsbescheid) from a German university</li>
                <li>Academic transcripts (SLC, +2, Bachelor's) with certified translations</li>
                <li>German B2/C1 certificate (TestDaF/DSH) OR IELTS 6.5+ (English programs)</li>
                <li>Motivation letter / Statement of Purpose</li>
                <li>Blocked account proof (€11,904 in Sperrkonto)</li>
                <li>Health insurance for Germany</li>
                <li>Biometric photos (specific German visa format)</li>
                <li>Completed National Visa D application form</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our Germany specialist will review your
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
              Leading Universities in <span>Germany</span>
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
                    <div className="tl-label">Check language requirements</div>
                    <div className="tl-text">
                      Most German public university programs are in German (B2 or C1 level
                      required). However, hundreds of English-taught Master's programs are available
                      — especially in STEM. Oxford International provides German language coaching.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Get your qualifications assessed</div>
                    <div className="tl-text">
                      Your SLC, +2, and bachelor's results must be assessed for German equivalence
                      through anabin database or uni-assist. Oxford International assists with this.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply via uni-assist or directly</div>
                    <div className="tl-text">
                      Many German universities use uni-assist for international applications. Apply
                      with your academic documents, language certificate, CV, and motivation letter.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive admission letter</div>
                    <div className="tl-text">
                      Once admitted, you receive an official Zulassungsbescheid (admission notice).
                      Enrol and pay the semester fee to get your Immatrikulationsbescheinigung
                      (enrollment confirmation).
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for National Visa D</div>
                    <div className="tl-text">
                      Visit the German Embassy in Kathmandu with your admission letter, financial
                      proof (€11,904 blocked account), health insurance, and biometrics.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Open blocked account & depart</div>
                    <div className="tl-text">
                      You need a blocked account (Sperrkonto) with €11,904 for the visa. Deutsche
                      Bank, Fintiba, or Expatrio provide this service. Oxford International guides
                      you through the process.
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
                    <i className="u-mr8 fas fa-award"></i>DAAD Scholarship
                  </div>
                  <div className="sc-detail">
                    Germany's most prestigious scholarship — DAAD offers fully funded Masters and
                    PhD scholarships for Nepali students. Covers tuition, monthly stipend
                    €861–1,200, and health insurance. Apply at daad.de.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Deutschlandstipendium
                  </div>
                  <div className="sc-detail">
                    €300/month scholarships funded jointly by German companies and the government —
                    applied through your university after admission.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Erasmus+ Programme
                  </div>
                  <div className="sc-detail">
                    EU-funded programme offering scholarships and exchanges. Available for students
                    enrolled in universities with Erasmus partnerships.
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
              Common Questions about <span>Studying in Germany</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'Do I really pay zero tuition in Germany?',
                  a: 'Yes — public universities in Germany charge NO tuition fees for international students (with a few exceptions in Baden-Württemberg). You only pay a semester fee of €150–350, which often includes a public transport pass.',
                },
                {
                  q: 'What German level do I need?',
                  a: 'For German-taught programs, you typically need B2 or C1 level (DSH or TestDaF certificate). For English-taught programs, IELTS 6.5 or TOEFL 88+ is usually sufficient. Oxford International offers German language courses from A1 to B2.',
                },
                {
                  q: 'What is the blocked account (Sperrkonto)?',
                  a: 'Germany requires you to show proof of funds via a blocked bank account containing €11,904. You can access €992/month after arrival. Services like Fintiba and Expatrio help set this up — Oxford International guides you through it.',
                },
                {
                  q: 'Can I work while studying in Germany?',
                  a: 'Yes — students can work up to 140 full days or 280 half days per year, or follow the permitted weekly-hours model during the lecture period. Always confirm the wording on your residence permit.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in Germany?"
        text="Talk to our Germany specialists — free counselling, zero fees."
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
