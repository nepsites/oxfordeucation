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
    href: 'https://www.u-tokyo.ac.jp/en/',
    abbr: 'UTok',
    logo: '/images/universities/u-tokyo-ac-jp.png',
    name: 'University of Tokyo',
    rank: "QS-ranked globally · Japan's Most Prestigious",
  },
  {
    href: 'https://www.kyoto-u.ac.jp/en',
    abbr: 'KU',
    logo: '/images/universities/kyoto-u-ac-jp.png',
    name: 'Kyoto University',
    rank: 'QS-ranked globally · Research Excellence',
  },
  {
    href: 'https://www.osaka-u.ac.jp/en',
    abbr: 'OSK',
    logo: '/images/universities/osaka-u-ac-jp.png',
    name: 'Osaka University',
    rank: 'QS-ranked globally · Science & Engineering',
  },
  {
    href: 'https://www.science.tokyo/en/',
    abbr: 'TTech',
    logo: '/images/universities/titech-ac-jp.png',
    name: 'Tokyo Tech (Science Tokyo)',
    rank: 'QS-ranked globally · STEM Leader',
  },
  {
    href: 'https://www.tohoku.ac.jp/en/',
    abbr: 'TOHO',
    logo: '/images/universities/tohoku-ac-jp.png',
    name: 'Tohoku University',
    rank: 'QS-ranked globally · Top Research',
  },
  {
    href: 'https://en.nagoya-u.ac.jp/',
    abbr: 'NAG',
    logo: '/images/universities/en-nagoya-u-ac-jp.png',
    name: 'Nagoya University',
    rank: 'QS-ranked · Toyota City',
  },
  {
    href: 'https://www.kobe-u.ac.jp/en/',
    abbr: 'KOBE',
    logo: '/images/universities/kobe-u-ac-jp.png',
    name: 'Kobe University',
    rank: 'QS-ranked · International Port City',
  },
  {
    href: 'https://www.hit-u.ac.jp/eng/',
    abbr: 'HITS',
    logo: '/images/universities/hit-u-ac-jp.png',
    name: 'Hitotsubashi University',
    rank: 'Top for Business & Economics',
  },
  {
    href: 'https://en.ritsumei.ac.jp/',
    abbr: 'RITA',
    logo: '/images/universities/en-ritsumei-ac-jp.png',
    name: 'Ritsumeikan University',
    rank: 'Top Private · MEXT Eligible',
  },
];

const WHY_REASONS = [
  {
    icon: 'fas fa-award',
    iconVariant: 'blue',
    title: 'MEXT Fully Funded Scholarship',
    text: "The Japanese Government's MEXT scholarship covers full tuition, living allowance (¥117,000–145,000/month), and round-trip airfare — one of the world's most generous scholarships.",
  },
  {
    icon: 'fas fa-yen-sign',
    iconVariant: 'gold',
    title: 'Affordable Education',
    text: 'Public university tuition in Japan (¥535,800/year) is far lower than the UK, USA, or Australia. Private university costs are moderate at ¥600K–1.2M/year.',
  },
  {
    icon: 'fas fa-robot',
    iconVariant: 'blue',
    title: 'Technology & Innovation',
    text: 'Japan leads in robotics, engineering, automotive, electronics, and materials science. Companies like Toyota, Sony, Panasonic, and SoftBank recruit heavily from top universities.',
  },
  {
    icon: 'fas fa-shield-alt',
    iconVariant: 'gold',
    title: 'Safe & Orderly Society',
    text: 'Japan consistently ranks as one of the safest countries in the world. Excellent public transport, clean cities, and a respectful culture make student life comfortable.',
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

      <div className="cp-hero" style={{ '--c1': '#8B0000', '--c2': '#c0392b' }}>
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
            <span className="u-txt-white">Study in Japan</span>
          </div>
          <div className="cp-hero-inner">
            <div>
              <div className="u-txt-sm-w7a">Study Destination</div>
              <h1 className="cp-title">Study in Japan</h1>
              <p className="cp-subtitle">
                Unique blend of ancient culture and cutting-edge technology — with MEXT fully funded
                scholarships and the globally respected University of Tokyo.
              </p>
              <div className="cp-meta-pills">
                <span className="cp-pill">
                  <i className="fas fa-passport"></i>Ryugaku Student Visa
                </span>
                <span className="cp-pill">
                  <i className="fas fa-award"></i>MEXT Scholarship
                </span>
                <span className="cp-pill">
                  <i className="fas fa-language"></i>Japanese/English
                </span>
                <span className="cp-pill">
                  <i className="fas fa-yen-sign"></i>Affordable Tuition
                </span>
              </div>
            </div>
            <div className="cp-flag">🇯🇵</div>
          </div>
          <div className="cp-stat-bar">
            <div className="cp-stat">
              <div className="num">¥535K–1.2M</div>
              <div className="lbl">Annual Tuition</div>
            </div>
            <div className="cp-stat">
              <div className="num">¥120K–180K/mo</div>
              <div className="lbl">Living Costs</div>
            </div>
            <div className="cp-stat">
              <div className="num">1–3 Months</div>
              <div className="lbl">Visa Processing</div>
            </div>
            <div className="cp-stat">
              <div className="num">QS-ranked</div>
              <div className="lbl">University of Tokyo</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <div className="container">
          <div className="u-grid-2 cp-grid-3">
            <div>
              <div className="section-tag">Why Japan?</div>
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
                <li>JLPT score (N4 minimum, N2 preferred) OR English proficiency</li>
                <li>University acceptance letter / COE</li>
                <li>Research plan (for postgraduate applicants)</li>
                <li>Medical certificate</li>
                <li>Proof of funds or MEXT scholarship award letter</li>
                <li>Passport-size photos (specific Japan standards)</li>
              </ul>
              <div className="u-dark-card">
                <i className="u-gold-fs28-sh fas fa-comments"></i>
                <div>
                  <strong className="u-mb4">Not sure if you qualify?</strong>
                  <span className="u-txt-sm-555e">
                    Book a free counselling session — our Japan specialist will review your profile.
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
              Leading Universities in <span>Japan</span>
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
                    <div className="tl-label">Learn Japanese</div>
                    <div className="tl-text">
                      Start JLPT preparation at Oxford International. Most Japanese universities
                      require N2 level (some accept N4 with conditional admission). English-medium
                      programs available too.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply to university / Embassy</div>
                    <div className="tl-text">
                      Apply via Embassy Route (through Japanese Embassy, Kathmandu) or University
                      Route (directly to a university). Oxford International guides both paths.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Receive Certificate of Eligibility (COE)</div>
                    <div className="tl-text">
                      Once accepted, the university applies for your COE from Japanese immigration.
                      This takes 1–3 months.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Apply for student visa</div>
                    <div className="tl-text">
                      Take your COE to the Japanese Embassy in Kathmandu to apply for the Ryugaku
                      (student) visa. Takes about 5 working days.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Pre-departure preparation</div>
                    <div className="tl-text">
                      Oxford International provides Japan pre-departure briefing — customs,
                      etiquette, housing, transportation IC cards, and first-week survival guide.
                    </div>
                  </div>
                  <div className="tl-item">
                    <div className="tl-dot"></div>
                    <div className="tl-label">Arrive & register</div>
                    <div className="tl-text">
                      Register at your ward office (役所) within 14 days. Get your Residence Card
                      (在留カード) at the airport.
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
                    <i className="u-mr8 fas fa-award"></i>MEXT Scholarship (Embassy Route)
                  </div>
                  <div className="sc-detail">
                    Fully funded — covers tuition, living allowance ¥117,000–145,000/month, and
                    round-trip airfare. Apply through Japanese Embassy Kathmandu in April–June each
                    year.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>MEXT Scholarship (University Route)
                  </div>
                  <div className="sc-detail">
                    Selected universities recommend outstanding applicants directly to MEXT. Check
                    with your target university. Equally fully funded.
                  </div>
                </div>
                <div className="sc-card">
                  <div className="sc-name">
                    <i className="u-mr8 fas fa-award"></i>JASSO Scholarship
                  </div>
                  <div className="sc-detail">
                    Japan Student Services Organization offers ¥48,000/month scholarships to
                    enrolled international students. Less competitive, applied after arrival.
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
              Common Questions about <span>Studying in Japan</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'Do I need to know Japanese to study in Japan?',
                  a: 'Not necessarily. Many universities offer English-medium programs, especially at postgraduate level (University of Tokyo, Kyoto, Osaka). However, learning Japanese (at least N4–N3 via JLPT) significantly improves your daily life and employment prospects in Japan.',
                },
                {
                  q: 'What is JLPT and what level do I need?',
                  a: 'Japanese Language Proficiency Test has 5 levels: N5 (beginner) to N1 (native-like). Most undergraduate programs in Japanese require N2 or above. Oxford International offers JLPT coaching from N5 to N2.',
                },
                {
                  q: 'How competitive is the MEXT scholarship?',
                  a: 'Very competitive — only a handful of students from Nepal receive MEXT each year via the Embassy Route. However, the University Route is less competitive and more accessible. Strong academics, motivation, and a well-prepared research plan are key.',
                },
                {
                  q: 'Is part-time work allowed in Japan?',
                  a: 'Yes. Student visa holders can work up to 28 hours/week during term time (and full-time during holidays) with permission from the immigration bureau. This is easily obtained and covers most living expenses.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study in Japan?"
        text="Talk to our Japan specialists — free counselling, zero fees."
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
