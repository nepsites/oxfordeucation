'use client';

import { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function PageContent() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.querySelectorAll('.scholarship-card').forEach((card) => {
      const tags = card.dataset.tags || '';
      card.style.display = filter === 'all' || tags.includes(filter) ? 'block' : 'none';
    });
  }, [filter]);

  const filterBtnClass = (key) => `filter-btn${filter === key ? ' active' : ''}`;

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

      {/*  HERO  */}

      <div className="resource-hero">
        <div className="container">
          <div className="u-txt-white70 breadcrumb">
            <a className="u-txt-white70" href="/">
              Home
            </a>
            <span className="sep">›</span>
            <a className="u-txt-white70" href="/students">
              Students
            </a>
            <span className="sep">›</span>
            <span className="u-gold">Scholarship Database</span>
          </div>
          <div className="u-mt20 resource-badge">
            <i className="fas fa-award"></i> Updated 2026 — Verified Opportunities for Nepali
            Students
          </div>
          <h1>
            Scholarship Database
            <br />
            for Nepali Students
          </h1>
          <p>
            Fully funded and partial scholarships specifically available to Nepali students. From
            MEXT in Japan to Chevening in the UK — find your path to a free education abroad.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">20+</div>
              <div className="lbl">Scholarships Listed</div>
            </div>
            <div className="hero-stat">
              <div className="num">12</div>
              <div className="lbl">Countries</div>
            </div>
            <div className="hero-stat">
              <div className="num">100+</div>
              <div className="lbl">Oxford Students Awarded</div>
            </div>
          </div>
          <div className="u-flex-wrap14">
            <a href="#db" className="u-btn-primary-sm btn btn-primary">
              <i className="fas fa-search"></i>Browse Scholarships
            </a>
            <a href="/contact" className="u-btn-outline-w btn btn-ol-primary">
              <i className="fas fa-comments"></i>Get Scholarship Guidance
            </a>
          </div>
        </div>
      </div>

      <section className="section-pad" id="db">
        <div className="container">
          <div className="resource-body">
            {/*  Main Content  */}
            <div>
              {/*  Tips  */}
              <div className="u-mb32 tips-grid">
                <div className="tip-card">
                  <h4>
                    <i className="u-gold fas fa-star"></i> Apply Early
                  </h4>
                  <p>
                    Most scholarship deadlines are 6–12 months before the intake. Start your
                    preparation now.
                  </p>
                </div>
                <div className="tip-card">
                  <h4>
                    <i className="u-gold fas fa-file-alt"></i> SOP is Key
                  </h4>
                  <p>
                    A strong Statement of Purpose is the #1 factor in scholarship selection.{' '}
                    <a href="/resource-sop">Read our SOP guide.</a>
                  </p>
                </div>
                <div className="tip-card">
                  <h4>
                    <i className="u-gold fas fa-language"></i> Learn the Language
                  </h4>
                  <p>
                    MEXT, KGSP, and DAAD give preference to students with Japanese, Korean, or
                    German language skills.
                  </p>
                </div>
                <div className="tip-card">
                  <h4>
                    <i className="u-gold fas fa-trophy"></i> Grades Matter
                  </h4>
                  <p>
                    Most fully-funded scholarships require a minimum GPA of 3.0/4.0 or equivalent.
                    Academic excellence is rewarded.
                  </p>
                </div>
              </div>
              {/*  Filter  */}
              <div className="u-mb16">
                <strong style={{ color: '#1a1a3a', fontSize: '15px' }}>Filter by:</strong>
              </div>
              <div className="filter-bar">
                <button className={filterBtnClass('all')} onClick={() => setFilter('all')}>
                  All Scholarships
                </button>
                <button
                  className={filterBtnClass('fully-funded')}
                  onClick={() => setFilter('fully-funded')}
                >
                  Fully Funded
                </button>
                <button className={filterBtnClass('partial')} onClick={() => setFilter('partial')}>
                  Partial
                </button>
                <button className={filterBtnClass('jp')} onClick={() => setFilter('jp')}>
                  🇯🇵 Japan
                </button>
                <button className={filterBtnClass('uk')} onClick={() => setFilter('uk')}>
                  🇬🇧 UK
                </button>
                <button className={filterBtnClass('kr')} onClick={() => setFilter('kr')}>
                  🇰🇷 Korea
                </button>
                <button className={filterBtnClass('de')} onClick={() => setFilter('de')}>
                  🇩🇪 Germany
                </button>
                <button className={filterBtnClass('au')} onClick={() => setFilter('au')}>
                  🇦🇺 Australia
                </button>
              </div>
              {/*  ====== SCHOLARSHIP CARDS ======  */}
              <div className="section-divider">
                <span>🇯🇵 Japan</span>
              </div>
              {/*  MEXT  */}
              <div className="scholarship-card fully-funded" data-tags="jp fully-funded">
                <span className="sc-flag">🇯🇵</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">MEXT Scholarship (Monbukagakusho)</div>
                    <div className="sc-org">
                      Ministry of Education, Culture, Sports, Science and Technology — Japan
                    </div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Undergraduate / Graduate / Research</span>
                  <span className="sc-badge badge-field">All Fields</span>
                  <span className="sc-badge badge-open">Applications Open</span>
                </div>
                <p className="sc-detail">
                  The MEXT scholarship is Japan's most prestigious fully-funded scholarship for
                  international students. It covers tuition, accommodation, monthly stipend (JPY
                  117,000–145,000), airfare, and health insurance. Available for undergraduate (5–7
                  years), master's (2 years), doctoral (3 years), and research students. Nepal has
                  an excellent acceptance rate under the Embassy recommendation track.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Period</div>
                      <strong>January – June (Embassy track)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-yen-sign"></i>
                    <div>
                      <div className="rate-label">Monthly Stipend</div>
                      <strong>JPY 117,000 – 145,000</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>2–7 years (varies by level)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-star"></i>
                    <div>
                      <div className="rate-label">Language Required</div>
                      <strong>Japanese (JLPT N4+) or English</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Get MEXT Guidance
                  </a>
                  <a href="/blog-japan-scholarship" className="btn btn-dark btn-sm">
                    <i className="fas fa-book-open"></i>Read MEXT Guide
                  </a>
                </div>
              </div>
              {/*  JASSO  */}
              <div className="scholarship-card partial" data-tags="jp partial">
                <span className="sc-flag">🇯🇵</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">JASSO Short-Term Scholarship</div>
                    <div className="sc-org">Japan Student Services Organisation (JASSO)</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-partial">
                    <i className="fas fa-minus-circle"></i> Partial Funding
                  </span>
                  <span className="sc-badge badge-level">Exchange / Short-term</span>
                  <span className="sc-badge badge-open">Applications Open</span>
                </div>
                <p className="sc-detail">
                  JASSO provides scholarships for international students on short-term exchange
                  programs at Japanese universities. The stipend is JPY 80,000/month and is awarded
                  through your institution's partnership with a Japanese university. Ideal for
                  students already enrolled at a Nepali university who wish to experience Japan for
                  1–12 months.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-yen-sign"></i>
                    <div>
                      <div className="rate-label">Monthly Stipend</div>
                      <strong>JPY 80,000</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>1–12 months</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Enquire Now
                  </a>
                </div>
              </div>
              <div className="section-divider">
                <span>🇰🇷 South Korea</span>
              </div>
              {/*  KGSP  */}
              <div className="scholarship-card fully-funded" data-tags="kr fully-funded">
                <span className="sc-flag">🇰🇷</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">KGSP — Korean Government Scholarship Program</div>
                    <div className="sc-org">
                      National Institute for International Education (NIIED), South Korea
                    </div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Undergraduate / Graduate</span>
                  <span className="sc-badge badge-field">All Fields</span>
                  <span className="sc-badge badge-open">Applications Open</span>
                </div>
                <p className="sc-detail">
                  KGSP is one of the most popular fully-funded scholarships for Nepali students. It
                  covers full tuition, monthly stipend (KRW 900,000–1,000,000 for postgraduate),
                  return airfare, settlement allowance, Korean language training (1 year), and
                  health insurance. Nepal receives a dedicated KGSP quota and competition is fierce
                  but manageable with proper preparation.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Period</div>
                      <strong>February – April (Embassy track)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-won-sign"></i>
                    <div>
                      <div className="rate-label">Monthly Stipend</div>
                      <strong>KRW 900,000 – 1,000,000</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>4 years (UG) / 2–3 years (PG)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-language"></i>
                    <div>
                      <div className="rate-label">Language</div>
                      <strong>Korean included (1-year training)</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Get KGSP Guidance
                  </a>
                </div>
              </div>
              <div className="section-divider">
                <span>🇬🇧 United Kingdom</span>
              </div>
              {/*  Chevening  */}
              <div className="scholarship-card fully-funded" data-tags="uk fully-funded">
                <span className="sc-flag">🇬🇧</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">Chevening Scholarship</div>
                    <div className="sc-org">
                      UK Foreign, Commonwealth & Development Office (FCDO)
                    </div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Master's Only (1 year)</span>
                  <span className="sc-badge badge-field">All Fields</span>
                  <span className="sc-badge badge-deadline">Deadline: November</span>
                </div>
                <p className="sc-detail">
                  Chevening is the UK government's flagship scholarship — awarded to future leaders.
                  Covers full tuition, living allowance (£1,100+/month), UK visa fee, travel, and
                  thesis allowance. Requires 2+ years of work experience. Nepal is an eligible
                  country with 15–20 scholarships awarded annually. This is highly competitive —
                  leadership and community impact are key selection criteria.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Open</div>
                      <strong>August – November each year</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-pound-sign"></i>
                    <div>
                      <div className="rate-label">Stipend</div>
                      <strong>£1,100+ per month (varies)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-briefcase"></i>
                    <div>
                      <div className="rate-label">Experience Required</div>
                      <strong>2+ years post-graduate work</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-university"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>1 year master's</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Get Chevening Help
                  </a>
                </div>
              </div>
              {/*  Commonwealth  */}
              <div className="scholarship-card fully-funded" data-tags="uk fully-funded">
                <span className="sc-flag">🇬🇧</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">Commonwealth Scholarship</div>
                    <div className="sc-org">Commonwealth Scholarship Commission (CSC), UK</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Master's / PhD</span>
                  <span className="sc-badge badge-field">Development-focused Fields</span>
                </div>
                <p className="sc-detail">
                  Commonwealth Scholarships are awarded to students from Commonwealth countries
                  (Nepal included) to study at UK universities. The award covers tuition, airfare,
                  living allowance, thesis grant, and warm clothing allowance. Focus areas include
                  STEM, agriculture, health, education, and governance. Applications are made
                  through Nepal's Ministry of Education and Human Resources Development.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Period</div>
                      <strong>Apply via MOEHRD Nepal</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>1 year (MSc) / 3 years (PhD)</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Enquire Now
                  </a>
                </div>
              </div>
              <div className="section-divider">
                <span>🇩🇪 Germany</span>
              </div>
              {/*  DAAD  */}
              <div className="scholarship-card fully-funded" data-tags="de fully-funded">
                <span className="sc-flag">🇩🇪</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">
                      DAAD Scholarship (Development-Related Postgraduate Courses)
                    </div>
                    <div className="sc-org">German Academic Exchange Service (DAAD)</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Master's / PhD</span>
                  <span className="sc-badge badge-field">
                    STEM, Agriculture, Health, Governance
                  </span>
                  <span className="sc-badge badge-open">Applications Open</span>
                </div>
                <p className="sc-detail">
                  DAAD scholarships for developing countries (Nepal included) support master's and
                  doctoral studies in Germany. The In-Country/In-Region program targets students who
                  want to work in Nepal's development sector after graduation. Covers full tuition,
                  monthly stipend (€934 for master's / €1,200 for PhD), travel, health insurance,
                  and monthly rent supplement. Most programs are English-taught.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Period</div>
                      <strong>October – December (most programs)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-euro-sign"></i>
                    <div>
                      <div className="rate-label">Monthly Stipend</div>
                      <strong>€934 (Master's) / €1,200 (PhD)</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>1–3 years</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-language"></i>
                    <div>
                      <div className="rate-label">Language</div>
                      <strong>English or German (program-specific)</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Get DAAD Help
                  </a>
                </div>
              </div>
              <div className="section-divider">
                <span>🇦🇺 Australia</span>
              </div>
              {/*  Australia Awards  */}
              <div className="scholarship-card fully-funded" data-tags="au fully-funded">
                <span className="sc-flag">🇦🇺</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">Australia Awards Scholarship</div>
                    <div className="sc-org">
                      Australian Department of Foreign Affairs and Trade (DFAT)
                    </div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Bachelor's / Master's / PhD</span>
                  <span className="sc-badge badge-field">Development & Priority Fields</span>
                  <span className="sc-badge badge-deadline">Deadline: April 30</span>
                </div>
                <p className="sc-detail">
                  Australia Awards are fully-funded scholarships for students from Indo-Pacific
                  countries, including Nepal. Covers full tuition, airfare (return), contribution to
                  living expenses (CLE), Overseas Student Health Cover (OSHC), pre-course English
                  training, and establishment allowance. Nepal has a strong quota allocation.
                  Priority fields include agriculture, governance, health, and infrastructure.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <div className="rate-label">Application Period</div>
                      <strong>February – April 30 each year</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-dollar-sign"></i>
                    <div>
                      <div className="rate-label">Living Allowance</div>
                      <strong>AUD ~$28,000/year</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>Up to 4 years</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-language"></i>
                    <div>
                      <div className="rate-label">English Required</div>
                      <strong>IELTS 6.5+ (pre-course available)</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Get Australia Awards Help
                  </a>
                </div>
              </div>
              {/*  Destination Australia  */}
              <div className="scholarship-card partial" data-tags="au partial">
                <span className="sc-flag">🇦🇺</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">Destination Australia Scholarship</div>
                    <div className="sc-org">Australian Government & Regional Universities</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-partial">Partial Funding</span>
                  <span className="sc-badge badge-level">All Levels</span>
                  <span className="sc-badge badge-open">Rolling Applications</span>
                </div>
                <p className="sc-detail">
                  Destination Australia encourages international students to study at regional
                  universities across Australia. Individual awards of AUD $15,000/year are provided
                  by participating universities and the Australian government. Students must study
                  at an approved regional campus. Many universities offer additional institutional
                  scholarships on top.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-dollar-sign"></i>
                    <div>
                      <div className="rate-label">Award Value</div>
                      <strong>AUD $15,000/year</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <div className="rate-label">Duration</div>
                      <strong>Duration of course</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Enquire Now
                  </a>
                </div>
              </div>
              <div className="section-divider">
                <span>🌐 Other Countries</span>
              </div>
              {/*  Erasmus Mundus  */}
              <div className="scholarship-card fully-funded" data-tags="eu fully-funded">
                <span className="sc-flag">🇪🇺</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">Erasmus Mundus Joint Masters</div>
                    <div className="sc-org">European Commission</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Master's Only</span>
                  <span className="sc-badge badge-field">Multiple Fields</span>
                </div>
                <p className="sc-detail">
                  Erasmus Mundus Joint Masters are prestigious EU-funded scholarships for study
                  across multiple European countries. Covers full tuition, travel, insurance, and
                  monthly stipend (€1,000/month). Programs span 2 years across 2–3 EU countries.
                  Nepali students are eligible for the partner country track with higher scholarship
                  amounts than EU citizens.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-euro-sign"></i>
                    <div>
                      <div className="rate-label">Monthly Stipend</div>
                      <strong>€1,000/month + travel lump sum</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                      <div className="rate-label">Countries</div>
                      <strong>2–3 EU countries per program</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Enquire Now
                  </a>
                </div>
              </div>
              {/*  ADB  */}
              <div className="scholarship-card fully-funded" data-tags="fully-funded">
                <span className="sc-flag">🌏</span>
                <div className="sc-header">
                  <div className="sc-title-block">
                    <div className="sc-name">ADB–JSP Scholarship (Asian Development Bank)</div>
                    <div className="sc-org">Asian Development Bank — Japan Scholarship Program</div>
                  </div>
                </div>
                <div className="sc-badges">
                  <span className="sc-badge badge-full">
                    <i className="fas fa-check-circle"></i> Fully Funded
                  </span>
                  <span className="sc-badge badge-level">Master's / PhD</span>
                  <span className="sc-badge badge-field">
                    Economics, Business, Science, Technology, Policy
                  </span>
                </div>
                <p className="sc-detail">
                  The ADB–JSP scholarship (funded by Japan) supports postgraduate study at
                  designated universities across Asia and the Pacific, including Australia, Japan,
                  India, Singapore, Thailand, and the Philippines. Covers full tuition, living
                  allowance, health insurance, and housing. Intended for students who will return to
                  serve in developing member countries (Nepal is eligible). Requires 2 years of
                  professional experience.
                </p>
                <div className="sc-meta-grid">
                  <div className="sc-meta-item">
                    <i className="fas fa-briefcase"></i>
                    <div>
                      <div className="rate-label">Experience Required</div>
                      <strong>2+ years professional</strong>
                    </div>
                  </div>
                  <div className="sc-meta-item">
                    <i className="fas fa-university"></i>
                    <div>
                      <div className="rate-label">Linked Universities</div>
                      <strong>30+ across Asia-Pacific</strong>
                    </div>
                  </div>
                </div>
                <div className="sc-actions">
                  <a href="/contact" className="btn btn-primary btn-sm">
                    <i className="fas fa-comments"></i>Enquire Now
                  </a>
                </div>
              </div>
              {/*  CTA Box  */}
              <div
                style={{
                  background: 'linear-gradient(135deg,#1e2570,#293294)',
                  borderRadius: '18px',
                  padding: '36px',
                  textAlign: 'center',
                  color: '#fff',
                  marginTop: '36px',
                }}
              >
                <i className="u-gold-36-mb14 fas fa-graduation-cap"></i>
                <h3 className="u-fs22-fw8-mb10">100+ of Our Students Won Scholarships</h3>
                <p className="u-opacity85">
                  Our counsellors have helped students win MEXT, KGSP, DAAD, Chevening, and
                  Australia Awards. Let us guide you through your scholarship application — free of
                  charge for registered students.
                </p>
                <a href="/contact" className="u-btn-primary-sm btn btn-primary">
                  <i className="fas fa-comments"></i>Get Free Scholarship Guidance
                </a>
              </div>
            </div>
            {/*  Sidebar  */}
            <aside>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-filter"></i>Quick Filter
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a
                    href="#db"
                    className="filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('all');
                    }}
                    style={{
                      fontSize: '13px',
                      color: '#293294',
                      textDecoration: 'none',
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: '#f0f4ff',
                      fontWeight: '700',
                    }}
                  >
                    All Scholarships
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('fully-funded');
                    }}
                  >
                    🏆 Fully Funded Only
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('jp');
                    }}
                  >
                    🇯🇵 Japan
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('uk');
                    }}
                  >
                    🇬🇧 UK
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('kr');
                    }}
                  >
                    🇰🇷 South Korea
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('de');
                    }}
                  >
                    🇩🇪 Germany
                  </a>
                  <a
                    href="#db"
                    className="u-txt-sm-primary filter-sidebar-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter('au');
                    }}
                  >
                    🇦🇺 Australia
                  </a>
                </div>
              </div>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-link"></i>More Resources
                </h3>
                <div className="sidebar-toc">
                  <a href="/resource-sop">
                    <i className="u-icon-p18 fas fa-file-alt"></i> SOP Writing Guide
                  </a>
                  <a href="/resource-visa-checklist">
                    <i className="u-icon-p18 fas fa-passport"></i> Visa Checklist
                  </a>
                  <a href="/blog-japan-scholarship">
                    <i className="u-icon-p18 fas fa-graduation-cap"></i> Japan Scholarship Guide
                  </a>
                  <a href="/blog-australia-visa">
                    <i className="u-icon-p18 fas fa-globe"></i> Australia Visa Guide
                  </a>
                  <a href="/blog-ielts-tips">
                    <i className="u-icon-p18 fas fa-pen"></i> IELTS Tips
                  </a>
                </div>
              </div>
              <div className="u-btn-dark-sm sidebar-card">
                <h3 className="u-gold">Scholarship Ready?</h3>
                <p className="u-opacity85b">
                  Our team can help you identify the right scholarship, prepare your documents, and
                  review your SOP — all free for students who register with us.
                </p>
                <a href="/contact" className="u-btn-primary-full btn btn-primary">
                  <i className="fas fa-calendar-check"></i>Book Free Session
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
