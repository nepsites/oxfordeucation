'use client';

import Faq from '../_components/Faq';
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
            <span>Test Preparation</span>
          </div>
          <h1>
            Test <span>Preparation</span>
          </h1>
          <p>
            Score higher in IELTS, TOEFL, GRE, GMAT, SAT and JLPT with expert coaching, small batch
            sizes, and weekly mock tests.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">6 Major Tests</div>
            <h2 className="section-title">
              Test Preparation <span>Courses</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              Expert coaching for every major English proficiency and academic admission test — from
              IELTS to JLPT — with proven results.
            </p>
          </div>
          {/*  IELTS — featured  */}
          <div
            style={{
              background: '#fff',
              border: '2px solid #293294',
              borderRadius: '20px',
              padding: '36px',
              marginTop: '44px',
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}
            >
              <div className="icon-box icon-blue">
                <i className="fas fa-pen-alt"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#293294' }}>
                  IELTS Preparation{' '}
                  <span
                    style={{
                      background: '#EBB011',
                      color: '#1a1a3a',
                      fontSize: '12px',
                      padding: '2px 10px',
                      borderRadius: '20px',
                      fontWeight: '900',
                      marginLeft: '8px',
                      verticalAlign: 'middle',
                    }}
                  >
                    MOST POPULAR
                  </span>
                </h3>
                <p className="u-txt-sm-body5">
                  International English Language Testing System — Academic & General
                </p>
              </div>
            </div>
            <div
              className="sp-grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
            >
              <div>
                <h4 className="u-fw9-dark-mb14">What Our Coaching Covers:</h4>
                <ul className="check-list">
                  <li>Listening — 4 sections, 40 questions, tactics & practice</li>
                  <li>Reading — skimming, scanning, True/False/NG strategies</li>
                  <li>Writing Task 1 — graphs, charts, process diagrams</li>
                  <li>Writing Task 2 — essay types, argument structures</li>
                  <li>Speaking — fluency, vocabulary, Part 1/2/3 techniques</li>
                  <li>Full mock tests under exam conditions every week</li>
                </ul>
              </div>
              <div>
                <h4 className="u-fw9-dark-mb14">Our Student Score Distribution:</h4>
                <div className="score-bar">
                  <span className="label">Band 7.5+</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '35%' }}></div>
                  </div>
                  <span className="u-txt-sm-w7">35%</span>
                </div>
                <div className="score-bar">
                  <span className="label">Band 7.0</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '40%' }}></div>
                  </div>
                  <span className="u-txt-sm-w7">40%</span>
                </div>
                <div className="score-bar">
                  <span className="label">Band 6.5</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '18%' }}></div>
                  </div>
                  <span className="u-txt-sm-w7">18%</span>
                </div>
                <div className="score-bar">
                  <span className="label">Band 6.0</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '7%' }}></div>
                  </div>
                  <span className="u-txt-sm-w7">7%</span>
                </div>
                <div
                  style={{
                    background: '#f0f4ff',
                    borderRadius: '10px',
                    padding: '14px',
                    marginTop: '16px',
                    fontSize: '13.5px',
                    color: '#293294',
                    fontWeight: '700',
                  }}
                >
                  <i className="u-gold-mr8 fas fa-trophy"></i>Students typically see significant
                  band score improvement after completing our programme
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', marginTop: '24px', flexWrap: 'wrap' }}>
              <div className="u-info-box9">
                <i className="u-primary-mr6 fas fa-clock"></i>
                <strong>Duration:</strong> 2–3 months
              </div>
              <div className="u-info-box9">
                <i className="u-primary-mr6 fas fa-users"></i>
                <strong>Batch Size:</strong> Max 15 students
              </div>
              <div className="u-info-box9">
                <i className="u-primary-mr6 fas fa-file-alt"></i>
                <strong>Materials:</strong> Books + practice sets included
              </div>
              <div className="u-info-box9">
                <i className="u-primary-mr6 fas fa-sync"></i>
                <strong>Re-sit:</strong> Free repeat classes if needed
              </div>
            </div>
          </div>
          {/*  Other tests grid  */}
          <div
            className="sp-grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '20px',
              marginTop: '24px',
            }}
          >
            <div className="info-card">
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3 className="u-h3-primary">TOEFL iBT</h3>
              </div>
              <ul className="check-list">
                <li>Reading & Listening strategies</li>
                <li>Speaking — integrated & independent tasks</li>
                <li>Writing — integrated & independent essays</li>
                <li>Computer-based practice tests</li>
              </ul>
              <div className="u-footer-meta2">
                <i className="u-gold-mr4 fas fa-clock"></i>2 months  ·  Required for USA, Canada
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="u-h3-primary">GRE</h3>
              </div>
              <ul className="check-list">
                <li>Verbal Reasoning — vocabulary & reading</li>
                <li>Quantitative Reasoning — maths refresher</li>
                <li>Analytical Writing — issue & argument essays</li>
                <li>Full-length adaptive practice tests</li>
              </ul>
              <div className="u-footer-meta2">
                <i className="u-gold-mr4 fas fa-clock"></i>3 months  ·  Required for USA Masters
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="u-h3-primary">GMAT</h3>
              </div>
              <ul className="check-list">
                <li>Quantitative — problem solving & data sufficiency</li>
                <li>Verbal — critical reasoning & sentence correction</li>
                <li>Integrated Reasoning section</li>
                <li>Analytical Writing Assessment</li>
              </ul>
              <div className="u-footer-meta2">
                <i className="u-gold-mr4 fas fa-clock"></i>3 months  ·  Required for MBA programmes
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="u-h3-primary">SAT</h3>
              </div>
              <ul className="check-list">
                <li>Math — algebra, advanced maths, problem solving</li>
                <li>Reading — evidence-based analysis</li>
                <li>Writing and Language section</li>
                <li>Digital SAT format practice</li>
              </ul>
              <div className="u-footer-meta2">
                <i className="u-gold-mr4 fas fa-clock"></i>3 months  ·  Required for US
                undergraduate
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-language"></i>
                </div>
                <h3 className="u-h3-primary">JLPT (Japanese)</h3>
              </div>
              <ul className="check-list">
                <li>N5 → N1 level coaching available</li>
                <li>Kanji, Vocabulary & Grammar</li>
                <li>Reading comprehension practice</li>
                <li>Listening exercises with audio</li>
              </ul>
              <div className="u-footer-meta2">
                <i className="u-gold-mr4 fas fa-clock"></i>4–18 months  ·  Required for Japan
                study/scholarship
              </div>
            </div>
            <div
              className="info-card"
              style={{ background: 'linear-gradient(135deg,#f0f4ff,#f8f9ff)' }}
            >
              <div className="u-flex-c8-mb14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-question"></i>
                </div>
                <h3 className="u-h3-primary">Not Sure Which Test?</h3>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#555577',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                }}
              >
                Different universities and countries require different tests. Book a free
                counselling session and we'll tell you exactly which test you need.
              </p>
              <a className="u-fs13 btn btn-primary" href="/contact">
                <i className="fas fa-calendar"></i> Free Advice
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">
              Test Prep <span>Questions</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'How many mock tests are included?',
                  a: 'IELTS students get at least 8 full mock tests throughout the course — one every week or two. Additional mock tests can be arranged on request.',
                },
                {
                  q: 'Can I join if my English level is low?',
                  a: 'Yes. We first assess your current level and may recommend foundation English classes before IELTS coaching if needed. Many of our best scorers started from basic English.',
                },
                {
                  q: 'Do you guarantee a specific score?',
                  a: 'We cannot guarantee a specific exam score, as the exam itself is conducted by a third party. However, our goal is to ensure you are thoroughly prepared — and our students typically see significant improvement in their IELTS scores after completing our coaching programme.',
                },
                {
                  q: 'Are study materials included in the fee?',
                  a: 'Yes — all study materials, practice booklets, and Cambridge IELTS books are provided as part of the course fee. No extra cost for materials.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Start Your Test Prep Today"
        text="Join a batch this week — new IELTS, TOEFL, and JLPT batches starting soon."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Join a Batch',
            variant: 'white',
          },
          {
            href: 'tel:+9779851158991',
            icon: 'fas fa-phone',
            label: 'Call Us',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
