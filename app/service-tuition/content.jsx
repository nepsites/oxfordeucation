'use client';

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
            <span>Tuition Classes</span>
          </div>
          <h1>
            Tuition <span>Classes</span>
          </h1>
          <p>
            Expert coaching for SLC/SEE, +2 All Faculties, BBS/BBA, and MBS/MBA — small batches,
            experienced teachers, exam-focused methods.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">All Levels</div>
            <h2 className="section-title">
              Tuition Classes <span>We Offer</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              From SLC/SEE preparation to graduate-level MBA coaching — our expert tutors help
              students excel at every stage of their education.
            </p>
          </div>
          <div
            className="sp-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: '24px',
              marginTop: '44px',
            }}
          >
            <div className="info-card" style={{ borderTop: '3px solid #293294' }}>
              <div className="u-flex-c8-mb18">
                <div className="icon-box icon-blue">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div>
                  <h3 className="u-phead5">MBS / MBA & BBS / BBA</h3>
                  <p className="u-txt-sm-grey">Bachelors & Masters Level Commerce</p>
                </div>
              </div>
              <div className="u-grid-2-10-mb16">
                <div className="u-info-box8">
                  <h4 className="u-fw9-p-f13">BBS / BBA Subjects</h4>
                  <ul className="u-txt-sm-grey3 check-list">
                    <li>Business Mathematics & Statistics</li>
                    <li>Accountancy & Finance</li>
                    <li>Economics — Micro & Macro</li>
                    <li>Business Law & Ethics</li>
                    <li>Marketing Management</li>
                  </ul>
                </div>
                <div className="u-info-box8">
                  <h4 className="u-fw9-p-f13">MBS / MBA Subjects</h4>
                  <ul className="u-txt-sm-grey3 check-list">
                    <li>Advanced Financial Management</li>
                    <li>Research Methodology</li>
                    <li>Organisational Behaviour</li>
                    <li>Strategic Management</li>
                    <li>Thesis / Project Guidance</li>
                  </ul>
                </div>
              </div>
              <div className="u-txt-sm-grey">
                <i className="u-gold-mr5 fas fa-clock"></i>Morning, Day & Evening batches  ·  TU &
                PU syllabus covered
              </div>
            </div>
            <div className="info-card" style={{ borderTop: '3px solid #EBB011' }}>
              <div className="u-flex-c8-mb18">
                <div className="icon-box icon-gold">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h3 className="u-phead5">+2 All Faculties</h3>
                  <p className="u-txt-sm-grey">NEB Class 11 & 12</p>
                </div>
              </div>
              <div className="u-grid-2-10-mb16">
                <div className="u-info-box8">
                  <h4 className="u-fw9-p-f13">Science Faculty</h4>
                  <ul className="u-txt-sm-grey3 check-list">
                    <li>Physics — mechanics to optics</li>
                    <li>Chemistry — organic & inorganic</li>
                    <li>Mathematics — calculus & algebra</li>
                    <li>Biology — for medical aspirants</li>
                    <li>Computer Science</li>
                  </ul>
                </div>
                <div className="u-info-box8">
                  <h4 className="u-fw9-p-f13">Management & Humanities</h4>
                  <ul className="u-txt-sm-grey3 check-list">
                    <li>Accountancy & Business Studies</li>
                    <li>Economics</li>
                    <li>English — grammar & writing</li>
                    <li>Nepali Literature</li>
                    <li>Social Studies / Optional Maths</li>
                  </ul>
                </div>
              </div>
              <div className="u-txt-sm-grey">
                <i className="u-gold-mr5 fas fa-clock"></i>NEB pattern — past questions and board
                exam focus
              </div>
            </div>
            <div className="info-card" style={{ borderTop: '3px solid #293294' }}>
              <div className="u-flex-c8-mb18">
                <div className="icon-box icon-blue">
                  <i className="fas fa-school"></i>
                </div>
                <div>
                  <h3 className="u-phead5">SLC / SEE Preparation</h3>
                  <p className="u-txt-sm-grey">Grade 10 Board Exam Coaching</p>
                </div>
              </div>
              <ul className="u-mb16 check-list">
                <li>Mathematics — all chapters, model questions</li>
                <li>Science — Physics, Chemistry, Biology</li>
                <li>English — grammar, writing, reading comprehension</li>
                <li>Social Studies & Optional Maths</li>
                <li>Full model exams — SEE paper pattern</li>
                <li>Special revision batches before board exams</li>
              </ul>
              <div className="u-txt-sm-grey">
                <i className="u-gold-mr5 fas fa-clock"></i>Regular & intensive revision batches
                available
              </div>
            </div>
            <div className="info-card" style={{ borderTop: '3px solid #EBB011' }}>
              <div className="u-flex-c8-mb18">
                <div className="icon-box icon-gold">
                  <i className="fas fa-route"></i>
                </div>
                <div>
                  <h3 className="u-phead5">Bridge & Remedial Courses</h3>
                  <p className="u-txt-sm-grey">Academic Gap & Foundation Programs</p>
                </div>
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#555577',
                  lineHeight: '1.75',
                  marginBottom: '16px',
                }}
              >
                Appeared in SLC/+2 but didn't pass? Or have a gap year and need to rebuild your
                academic skills? Our bridge courses prepare you for re-examination or entry into
                +2/university programmes.
              </p>
              <ul className="check-list">
                <li>Private SLC (Padhne Umera) preparation</li>
                <li>Subject-specific remedial coaching</li>
                <li>Grade improvement coaching for repeat students</li>
              </ul>
              <div style={{ fontSize: '13px', color: '#888aaa', marginTop: '14px' }}>
                <i className="u-gold-mr5 fas fa-clock"></i>Flexible schedule — 1-on-1 and group
                options
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="u-grid-2s sp-grid-2">
            <div>
              <div className="section-tag">Why Choose Us</div>
              <h2 className="section-title">
                What Makes Our <span>Tuition Different?</span>
              </h2>
              <div className="divider"></div>
              <div className="u-flex-col">
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-user-tie"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Experienced Subject Teachers</h4>
                      <p className="u-txt-sm-555b">
                        All tutors are subject specialists — most with 5+ years of teaching
                        experience at recognized colleges and schools in Kathmandu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-gold">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Small Groups — Maximum Attention</h4>
                      <p className="u-txt-sm-555b">
                        Classes are kept to 10–20 students maximum so every student gets direct
                        attention, questions answered, and personal feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-blue">
                      <i className="fas fa-clipboard-list"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Exam-Focused Teaching</h4>
                      <p className="u-txt-sm-555b">
                        We follow NEB / TU / PU exam patterns closely — with past paper analysis,
                        model questions, and practice exams built into every course.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="u-flex-start14b">
                    <div className="icon-box icon-gold">
                      <i className="fas fa-comments"></i>
                    </div>
                    <div>
                      <h4 className="u-h4-primary8">Regular Parent Updates</h4>
                      <p className="u-txt-sm-555b">
                        Parents receive monthly progress reports and can speak with teachers
                        directly. We believe parents are partners in their child's success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-tag">Class Schedule</div>
              <h2 className="section-title">
                Batch <span>Timings</span>
              </h2>
              <div className="divider"></div>
              <div className="u-card-table">
                <table className="u-table">
                  <thead>
                    <tr className="u-thead">
                      <th className="u-p12-16-l">Batch</th>
                      <th className="u-p12-16-l">Time</th>
                      <th className="u-p12-16-l">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-bot">
                      <td className="u-p12-16-h">Morning</td>
                      <td className="u-p12-16">6:00 – 8:00 AM</td>
                      <td className="u-p12-16">School students</td>
                    </tr>
                    <tr className="u-border-bot-bg">
                      <td className="u-p12-16-h">Day</td>
                      <td className="u-p12-16">10:00 AM – 12:00 PM</td>
                      <td className="u-p12-16">College students</td>
                    </tr>
                    <tr className="u-border-bot">
                      <td className="u-p12-16-h">Afternoon</td>
                      <td className="u-p12-16">1:00 – 3:00 PM</td>
                      <td className="u-p12-16">+2 / BBS / BBA</td>
                    </tr>
                    <tr className="u-tbody-row">
                      <td className="u-p12-16-h">Evening</td>
                      <td className="u-p12-16">5:00 – 7:00 PM</td>
                      <td className="u-p12-16">Working students / MBS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="u-mt20 highlight-bar">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong className="u-mb4">All Classes at Sukedhara Chowk</strong>
                  <span className="u-txt-sm-555e">
                    Centrally located, easily accessible from Kathmandu, Baneshwor, Chabahil, and
                    Baluwatar.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Enrol in Tuition Classes Now"
        text="New batches starting soon — limited seats available. Visit us at Sukedhara Chowk."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Enrol Today',
            variant: 'white',
          },
          {
            href: 'tel:+9779851158991',
            icon: 'fas fa-phone',
            label: 'Call Now',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
