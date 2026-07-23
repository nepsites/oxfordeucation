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
    href: 'https://en.snu.ac.kr/',
    abbr: 'SNU',
    logo: '/images/universities/en-snu-ac-kr.png',
    name: 'Seoul National University',
    rank: "QS-ranked globally · Korea's Flagship",
  },
  {
    href: 'https://www.kaist.ac.kr/en/',
    abbr: 'KAIST',
    logo: '/images/universities/kaist-ac-kr.png',
    name: 'KAIST',
    rank: "QS-ranked globally · Asia's MIT",
  },
  {
    href: 'https://www.yonsei.ac.kr/en_sc/',
    abbr: 'YON',
    logo: '/images/universities/yonsei-ac-kr.png',
    name: 'Yonsei University',
    rank: 'QS-ranked globally · SKY Group',
  },
  {
    href: 'https://www.korea.edu/mbshome/mbs/en/',
    abbr: 'KOR',
    logo: '/images/universities/korea-edu.png',
    name: 'Korea University',
    rank: 'QS-ranked globally · SKY Group',
  },
  {
    href: 'https://www.postech.ac.kr/eng/',
    abbr: 'POST',
    logo: '/images/universities/postech-ac-kr.png',
    name: 'POSTECH',
    rank: 'QS-ranked globally · STEM Research',
  },
  {
    href: 'https://www.skku.edu/eng/',
    abbr: 'SUNG',
    logo: '/images/universities/skku-edu.png',
    name: 'Sungkyunkwan University',
    rank: 'QS-ranked · Samsung-affiliated',
  },
  {
    href: 'https://www.hanyang.ac.kr/web/eng',
    abbr: 'HAN',
    logo: '/images/universities/hanyang-ac-kr.png',
    name: 'Hanyang University',
    rank: 'QS-ranked · Engineering',
  },
  {
    href: 'https://www.ewha.ac.kr/ewhaen/',
    abbr: 'EWHA',
    logo: '/images/universities/ewha-ac-kr.png',
    name: 'Ewha Womans University',
    rank: "Top Ranked Women's University",
  },
  {
    href: 'https://www.sogang.ac.kr/en/',
    abbr: 'SOGANG',
    logo: '/images/universities/sogang-ac-kr.png',
    name: 'Sogang University',
    rank: 'QS-ranked · Best for Korean Language',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-award',
    iconVariant: 'blue',
    title: 'KGSP — Korean Government Scholarship',
    text: 'The Korean Government Scholarship Program (KGSP) fully funds international students: full tuition, monthly allowance ₩900,000, one-year Korean language training, round-trip airfare, and health insurance.',
  },
  {
    icon: 'fas fa-mobile-alt',
    iconVariant: 'gold',
    title: 'Technology & Innovation',
    text: "South Korea is Asia's technology hub — home to Samsung, LG, Hyundai, SK Hynix, and POSCO. KAIST and POSTECH are among the world's top STEM universities, rivaling MIT and Caltech.",
  },
  {
    icon: 'fas fa-won-sign',
    iconVariant: 'blue',
    title: 'Affordable Cost of Living',
    text: 'Compared to the UK, USA, or Australia, South Korea offers significantly lower living costs — ₩600,000–900,000/month (approx. NPR 55,000–80,000) covers rent, food, and transportation.',
  },
  {
    icon: 'fas fa-globe',
    iconVariant: 'gold',
    title: 'K-Culture & Vibrant Campus Life',
    text: 'Korean Wave (Hallyu) — K-pop, K-drama, Korean cuisine — makes life in Korea exciting and culturally rich. Korean universities have excellent campus facilities, dorms, and international student support.',
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

      <div className="cp-hero" style={{ '--c1': '#003478', '--c2': '#c60c30' }}>
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
            <span className="u-txt-white">Study in South Korea</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in South Korea</h1>
              <p className="cp-subtitle">
                Asia's technology and K-culture powerhouse — home to Samsung, Hyundai, and LG — with
                generous KGSP government scholarships fully covering tuition and living costs.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>D-2 Student Visa
                </span>
                <span className="cp-pill">
                  <i className="fas fa-award"></i>KGSP Full Scholarship
                </span>
                <span className="cp-pill">
                  <i className="fas fa-mobile-alt"></i>Tech & K-Culture
                </span>
                <span className="cp-pill">
                  <i className="fas fa-won-sign"></i>Affordable Costs
                </span>
              </div>
            </div>
            <div className="cp-flag">🇰🇷</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">₩5M–14M</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">₩600K–900K/mo</div>
              <div className="lbl">Monthly Living</div>
            </div>
            <div className="cp-stat">
              <div className="num">1–3 Months</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">QS-ranked</div>
              <div className="lbl">Seoul Nat'l Univ.</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why South Korea?</div>
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
                <li>Academic transcripts (SLC, +2, Bachelor's) with certified translations</li>
                <li>
                  KGSP application form (for scholarship applicants) OR university application
                </li>
                <li>
                  TOPIK certificate (Korean proficiency) for Korean-medium programs OR IELTS 6.0+
                  for English programs
                </li>
                <li>Study plan / Statement of Purpose</li>
                <li>2 reference letters from teachers or professors</li>
                <li>Medical certificate (tuberculosis test required)</li>
                <li>Passport photos (Korean Embassy specifications)</li>
                <li>Proof of funds if not applying for KGSP</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our South Korea specialist will review your
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
              Leading Universities in <span>South Korea</span>
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
                    <div className="tl-label">Prepare Korean language (optional)</div>
                    <div className="tl-text">
                      KGSP scholarship includes one year of Korean language training before your
                      degree starts. For direct admission, TOPIK 3+ is required for Korean-medium
                      programs. English-medium programs are available.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for KGSP or university admission</div>
                    <div className="tl-text">
                      KGSP applications open in September–October each year through the Korean
                      Embassy in Kathmandu. For direct university admission, apply between November
                      and February for September intake.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive admission / KGSP award letter</div>
                    <div className="tl-text">
                      KGSP results are announced around April. University direct admission letters
                      typically arrive within 4–6 weeks of application.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for D-2 Student Visa</div>
                    <div className="tl-text">
                      Visit the Korean Embassy in Kathmandu with your admission letter, KGSP award
                      (if applicable), financial proof, and health certificate. Processing takes 3–5
                      business days.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Arrive & register at ARC office</div>
                    <div className="tl-text">
                      Within 90 days of arrival, register for your Alien Registration Card (ARC) at
                      the local immigration office. This is required for banking, SIM cards, and
                      part-time work.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Begin Korean language training (KGSP)</div>
                    <div className="tl-text">
                      KGSP scholars attend a Korean language institute for one year before their
                      degree program. This is fully paid and prepares you for university life in
                      Korea.
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
                    <i className="u-mr8 fas fa-award"></i>KGSP — Korean Government Scholarship
                  </div>
                  <div className="sc-detail">
                    Fully funded: tuition, monthly stipend ₩900,000, Korean language training,
                    round-trip airfare, and health insurance. Apply via the Korean Embassy in
                    Kathmandu (September–October each year). Oxford International assists with KGSP
                    applications.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>Global Korea Scholarship (GKS-U)
                  </div>
                  <div className="sc-detail">
                    An alternative track of KGSP — applied through individual universities. Less
                    competitive than the Embassy track. Check your target university's GKS-U quota
                    and deadlines.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>University Merit Scholarships
                  </div>
                  <div className="sc-detail">
                    Most Korean universities offer 30%–100% tuition scholarships for international
                    students with strong academics. Yonsei, Korea University, and Sungkyunkwan are
                    particularly generous.
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
              Common Questions about <span>Studying in South Korea</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'Do I need to know Korean to study in Korea?',
                  a: "Not necessarily. Many universities offer English-medium programs, especially in STEM and business. However, for KGSP, you'll complete one year of Korean language training first. Knowing Korean opens more opportunities and makes daily life easier. Oxford International offers Korean language courses (TOPIK preparation).",
                },
                {
                  q: 'What is the KGSP and when can I apply?',
                  a: 'KGSP (Korean Government Scholarship Program) is a fully funded scholarship for international students. Applications open in September–October through the Korean Embassy in Kathmandu. Requirements include strong academics, motivation, and a study plan. Oxford International guides the full application process.',
                },
                {
                  q: 'What is the SKY group in Korea?',
                  a: "SKY refers to Seoul National University (S), Yonsei University (Y), and Korea University (K) — Korea's most prestigious universities, equivalent to Oxbridge in the UK or the Ivy League in the USA. Graduates from SKY universities are highly sought after by top Korean and global companies.",
                },
                {
                  q: 'Can I work while studying in Korea?',
                  a: 'Yes — D-2 visa holders can work up to 20 hours/week during term time (with a work permit from the immigration office). During vacation periods, full-time work is allowed. Minimum wage is ₩9,860/hour (2024), which helps offset living costs.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in South Korea?"
        text="Talk to our South Korea specialists — free counselling, zero fees."
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
