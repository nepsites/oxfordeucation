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

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">›</span>
            <a href="/blog">Blog</a>
            <span className="sep">›</span>
            <span>MEXT Scholarship 2026</span>
          </div>
          <h1>
            MEXT Scholarship 2026: <span>Complete Guide</span> for Nepali Students
          </h1>
          <p>
            Everything you need to know about Japan's prestigious government scholarship program.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="blog-layout">
            <article className="blog-main">
              <div className="u-card-pad2">
                <div className="u-flex-row-meta">
                  <div className="u-flex-c8">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg,#880e4f,#ad1457)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: '700',
                      }}
                    >
                      SG
                    </div>
                    <div>
                      <div className="u-h4-primary3">Sita Gurung</div>
                      <div className="u-txt-xs-muted">Japan Specialist, Oxford International</div>
                    </div>
                  </div>
                  <span className="u-txt-sm-muted">
                    <i className="fas fa-calendar"></i> December 10, 2025
                  </span>
                  <span
                    style={{
                      background: '#fce4ec',
                      color: '#ad1457',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '4px 12px',
                      borderRadius: '20px',
                    }}
                  >
                    Japan
                  </span>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#880e4f,#ad1457)',
                    borderRadius: '14px',
                    padding: '36px',
                    textAlign: 'center',
                    marginBottom: '34px',
                  }}
                >
                  <div className="u-fs56-mb12">🇯🇵</div>
                  <h2 className="u-txt-white-h1">MEXT Scholarship 2026</h2>
                  <p className="u-txt-w75-mb20">
                    Ministry of Education Culture Sports Science and Technology Japan
                  </p>
                  <div className="u-flex-c-wrap28">
                    <div>
                      <div className="u-gold-h3">143000+ Yen/mo</div>
                      <div className="u-txt-xs-muted2">Monthly Stipend</div>
                    </div>
                    <div>
                      <div className="u-gold-h3">100%</div>
                      <div className="u-txt-xs-muted2">Tuition Covered</div>
                    </div>
                    <div>
                      <div className="u-gold-h3">Round-Trip</div>
                      <div className="u-txt-xs-muted2">Air Ticket</div>
                    </div>
                  </div>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-star"></i> What is the MEXT Scholarship?
                </h2>
                <p className="u-body-15-mb16">
                  The MEXT Monbukagakusho Scholarship is Japan's most prestigious government
                  scholarship, fully funded by the Japanese government. It covers full tuition fees,
                  monthly living stipend of 143,000-145,000 Yen, return airfare, and research
                  expenses.
                </p>
                <p className="u-txt-sm-body6">
                  Every year, Nepal receives a limited number of MEXT slots. Competition is intense,
                  but Nepali students with strong academic backgrounds and research proposals have
                  an excellent chance.
                </p>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-list-ul"></i> MEXT Scholarship Categories
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '28px',
                  }}
                >
                  <div className="u-info-box5">
                    <div className="u-fs36-mb10">🎓</div>
                    <h4 className="u-h4-primary6">Research Students</h4>
                    <p className="u-body-1a">
                      For those pursuing a Master's or Doctoral degree. Most popular category for
                      Nepali students.
                    </p>
                  </div>
                  <div className="u-info-box5">
                    <div className="u-fs36-mb10">🏫</div>
                    <h4 className="u-h4-primary6">Undergraduate Students</h4>
                    <p className="u-body-1a">
                      For high school graduates wishing to pursue a Bachelor's degree at a Japanese
                      national university.
                    </p>
                  </div>
                  <div className="u-info-box5">
                    <div className="u-fs36-mb10">🏆</div>
                    <h4 className="u-h4-primary6">Teacher Training</h4>
                    <p className="u-body-1a">
                      For school teachers who want to study advanced teaching methods in Japan for
                      1-1.5 years.
                    </p>
                  </div>
                  <div className="u-info-box5">
                    <div className="u-fs36-mb10">🎗</div>
                    <h4 className="u-h4-primary6">College of Technology</h4>
                    <p className="u-body-1a">
                      For technical education at Japanese National Colleges of Technology Kosen.
                    </p>
                  </div>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-clipboard-check"></i> Eligibility Requirements
                </h2>
                <div className="u-info-box11">
                  <ul
                    style={{
                      listStyle: 'none',
                      fontSize: '14px',
                      color: '#444',
                      lineHeight: '2.4',
                    }}
                  >
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Nationality:</strong> Nepali citizen and permanent resident of Nepal
                      </span>
                    </li>
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Age:</strong> Under 35 years for Research Students, under 25 for
                        Undergraduate
                      </span>
                    </li>
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Academic:</strong> Minimum GPA 2.3 out of 3.0 or equivalent 60% or
                        above
                      </span>
                    </li>
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Health:</strong> Physically and mentally fit to pursue graduate
                        studies in Japan
                      </span>
                    </li>
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Language:</strong> Must be willing to learn Japanese language during
                        study
                      </span>
                    </li>
                    <li className="u-flex-10">
                      <i className="u-gold-shrink4 fas fa-check-circle"></i>
                      <span>
                        <strong>Previous:</strong> Must not have previously received a MEXT
                        scholarship
                      </span>
                    </li>
                  </ul>
                </div>
                <h2 className="u-phead">
                  <i className="u-gold fas fa-calendar-alt"></i> Application Timeline 2026
                </h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-num primary">Feb-Mar</div>
                    <div>
                      <h4>Announcement</h4>
                      <p>
                        Japanese Embassy in Kathmandu announces the MEXT scholarship. Follow Oxford
                        International blog for updates.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">Apr-May</div>
                    <div>
                      <h4>Document Submission</h4>
                      <p>
                        Submit application form, academic transcripts, research proposal, and
                        documents to the Japanese Embassy.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num primary">Jun</div>
                    <div>
                      <h4>Primary Screening</h4>
                      <p>
                        Embassy shortlists candidates based on documents and calls them for written
                        tests.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">Jul</div>
                    <div>
                      <h4>Written Tests and Interview</h4>
                      <p>
                        Tests on Japanese optional, Math, Science, or related field. Interview
                        conducted by Embassy officials.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num primary">Aug-Sep</div>
                    <div>
                      <h4>Embassy Recommendation</h4>
                      <p>
                        Embassy nominates successful candidates and forwards applications to
                        Japanese Ministry of Education.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num secondary">Dec-Jan</div>
                    <div>
                      <h4>Final Selection and Placement</h4>
                      <p>
                        MEXT informs students of final acceptance and university placement. Students
                        arrive in Japan the following April.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#EBB011,#c99200)',
                    borderRadius: '14px',
                    padding: '26px',
                    marginTop: '32px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <i className="u-icon-28-p fas fa-lightbulb"></i>
                  <div>
                    <h4 className="u-h2-primary2">Pro Tip from Our Japan Specialist</h4>
                    <p className="u-body-primary">
                      The Research Proposal is the most critical document in your MEXT application.
                      It must be specific, original, and aligned with a professor's research at a
                      Japanese university. Sita Gurung at Oxford International has helped 40+
                      students win MEXT scholarships through personalized coaching.
                    </p>
                    <a href="/contact" className="u-mt14 btn btn-primary">
                      <i className="fas fa-calendar-check"></i> Book MEXT Counselling
                    </a>
                  </div>
                </div>
                <div className="u-flex-row-sb">
                  <div className="u-flex-wrap8">
                    <span className="u-txt-sm-w7c">Tags:</span>
                    <span className="u-tag-primary">Japan</span>
                    <span className="u-tag-primary">MEXT Scholarship</span>
                  </div>
                  <a href="/blog" className="btn btn-dark btn-sm">
                    <i className="fas fa-arrow-left"></i> Back to Blog
                  </a>
                </div>
              </div>
            </article>
            <div className="blog-sidebar">
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Quick Apply</h4>
                <div className="u-dark-card3">
                  <p className="u-txt-w80-mb16">Talk to our counsellors FREE!</p>
                  <a href="/contact" className="u-flex-center btn btn-white btn-sm">
                    Book Free Session
                  </a>
                </div>
              </div>
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Recent Posts</h4>
                <ul className="u-list-none">
                  <li className="u-pb-border">
                    <a className="u-txt-sm-link" href="/blog-australia-visa">
                      Australia Student Visa 2026 Requirements
                    </a>
                    <span className="u-txt-xs-muted">Jan 15, 2026</span>
                  </li>
                  <li className="u-pb-border">
                    <a className="u-txt-sm-link" href="/blog-ielts-tips">
                      10 Proven Tips to Score 7+ Band in IELTS
                    </a>
                    <span className="u-txt-xs-muted">Dec 28, 2025</span>
                  </li>
                  <li className="u-p12-0">
                    <a className="u-txt-sm-link" href="/blog-japan-scholarship">
                      MEXT Scholarship 2026 Complete Guide
                    </a>
                    <span className="u-txt-xs-muted">Dec 10, 2025</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Contact Us</h4>
                <ul className="u-list-sm">
                  <li>
                    <i className="u-icon-p18 fas fa-phone"></i> +977-9851158991
                  </li>
                  <li>
                    <i className="u-icon-p18 fas fa-envelope"></i> info@oxfordeducation.com.np
                  </li>
                  <li>
                    <i className="u-icon-p18 fas fa-map-marker-alt"></i> Sukedhara Chowk, Kathmandu
                  </li>
                </ul>
                <a className="u-flex-wa" href="https://wa.me/9779851158991" target="_blank">
                  <i className="fab fa-whatsapp"></i> WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Study Abroad?"
        text="Book your free counselling session with Oxford International experts."
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
            label: 'Call Now',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
