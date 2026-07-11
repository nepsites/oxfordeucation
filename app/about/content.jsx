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
            <span>About Us</span>
          </div>
          <h1>
            About <span>Oxford International</span>
          </h1>
          <p>
            Learn about our journey, vision, and mission to provide world-class education services
            from the heart of Kathmandu, Nepal.
          </p>
        </div>
      </div>

      <section className="u-bg-white section-pad">
        <div className="container">
          <div className="u-grid-2-60 about-grid">
            <div>
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">
                Oxford International <span>Education Centre</span>
              </h2>
              <div className="divider"></div>
              <p className="u-body-16">
                Oxford International Education Center and Consultancy is an Academic Institute and
                Consultancy of Nepal. It was legally registered and established on{' '}
                <strong className="u-primary">16th June 2015</strong> in the Office of the Company
                Registrar and on <strong className="u-primary">22 August 2015</strong> in the
                Ministry of Education of Nepal.
              </p>
              <p className="u-body-16">
                We are located at the prime location of Kathmandu Metropolitan City, exactly
                situated at <strong className="u-primary">Sukedhara Chowk, Kathmandu</strong>. Our
                office is easily accessible by both public and private vehicles as it lies on the
                Ring Road of Kathmandu.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#666688',
                  lineHeight: '1.8',
                  marginBottom: '28px',
                }}
              >
                Our institute provides language classes, computer courses, tuition, personality
                development, test preparation, and abroad consultancy — all under one roof.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="u-info-box3">
                  <i className="u-gold-28-mb8 fas fa-certificate"></i>
                  <h4 className="u-h4-primary3">Regd. No. 136103/71/072</h4>
                  <p className="u-txt-xs-muted">Company Registrar, Nepal</p>
                </div>
                <div className="u-info-box3">
                  <i className="u-gold-28-mb8 fas fa-university"></i>
                  <h4 className="u-h4-primary3">MoE Recognized</h4>
                  <p className="u-txt-xs-muted">Ministry of Education, Nepal</p>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  background: 'linear-gradient(135deg,#293294,#1e2570)',
                  borderRadius: '20px',
                  padding: '36px',
                  color: '#fff',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '900',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <i className="u-gold fas fa-chart-bar"></i>Our Track Record
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div className="u-glass-card">
                    <div className="u-gold-h1">5000+</div>
                    <div className="u-txt-sm-muted4">Students Guided Abroad</div>
                  </div>
                  <div className="u-glass-card">
                    <div className="u-gold-h1">High</div>
                    <div className="u-txt-sm-muted4">Visa Success Rate</div>
                  </div>
                  <div className="u-glass-card">
                    <div className="u-gold-h1">10+</div>
                    <div className="u-txt-sm-muted4">Years Experience</div>
                  </div>
                  <div className="u-glass-card">
                    <div className="u-gold-h1">25+</div>
                    <div className="u-txt-sm-muted4">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  VISION MISSION OBJECTIVE  */}

      <section id="mission" className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Foundation</div>
            <h2 className="section-title">
              Vision, Mission & <span>Objectives</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '24px',
              marginTop: '46px',
            }}
          >
            <div
              className="u-card-c32"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-7px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(41,50,148,.15)';
                e.currentTarget.style.borderColor = '#293294';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '#e0e4f0';
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  background: '#f5f7ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '30px',
                  color: '#293294',
                  border: '2px solid #e0e4f0',
                }}
              >
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="u-h3-primary-mb14">Our Vision</h3>
              <p style={{ fontSize: '15px', color: '#666688', lineHeight: '1.75' }}>
                To be one of the best academic institutes for languages, computer, and preparation
                classes along with abroad study consultancy in Nepal — setting the highest standards
                of educational excellence.
              </p>
            </div>
            <div
              style={{
                background: '#293294',
                borderRadius: '16px',
                padding: '32px',
                border: '1.5px solid #293294',
                transition: 'all .35s',
                textAlign: 'center',
                transform: 'translateY(-10px)',
                boxShadow: '0 16px 40px rgba(41,50,148,.25)',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  background: 'rgba(235,176,17,.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '30px',
                  color: '#EBB011',
                  border: '2px solid rgba(235,176,17,.3)',
                }}
              >
                <i className="fas fa-bullseye"></i>
              </div>
              <h3
                style={{ fontSize: '20px', fontWeight: '900', color: '#fff', marginBottom: '14px' }}
              >
                Our Mission
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.78)', lineHeight: '1.75' }}>
                To provide quality language classes (English, Chinese, Japanese, Korean, Hebrew,
                French, German, Arabic), professional computer courses, and honest abroad study
                consultancy — empowering students to communicate, grow, and succeed globally.
              </p>
            </div>
            <div
              className="u-card-c32"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-7px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(41,50,148,.15)';
                e.currentTarget.style.borderColor = '#293294';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '#e0e4f0';
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  background: '#f5f7ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '30px',
                  color: '#293294',
                  border: '2px solid #e0e4f0',
                }}
              >
                <i className="fas fa-crosshairs"></i>
              </div>
              <h3 className="u-h3-primary-mb14">Our Objectives</h3>
              <ul
                style={{
                  fontSize: '15px',
                  color: '#666688',
                  lineHeight: '1.8',
                  textAlign: 'left',
                  listStyle: 'none',
                }}
              >
                <li className="u-flex-8-mb8">
                  <i className="u-gold-mt4-sh fas fa-check"></i>Provide quality language classes in
                  all major world languages
                </li>
                <li className="u-flex-8-mb8">
                  <i className="u-gold-mt4-sh fas fa-check"></i>Deliver professional, job-oriented
                  computer training
                </li>
                <li className="u-flex-8">
                  <i className="u-gold-mt4-sh fas fa-check"></i>Provide preparation for IELTS,
                  TOEFL, SAT, JLPT and tuition classes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*  SUCCESS HISTORY  */}

      <section className="u-bg-white section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title">
              Success <span>History</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From humble beginnings in 2015 to Nepal's most trusted education consultancy — a
              decade of transforming student futures at Sukedhara, Kathmandu.
            </p>
          </div>
          {/*  Timeline  */}
          <div className="journey-timeline">
            {/*  2015: Establishment  */}
            <div className="jt-item jt-left">
              <div className="jt-content">
                <div className="jt-icon">
                  <i className="fas fa-flag"></i>
                </div>
                <div className="jt-year">2015</div>
                <h3>Establishment at Sukedhara</h3>
                <p>
                  Oxford International Education Centre & Consultancy was founded at Sukedhara
                  Chowk, Kathmandu — with a mission to make quality global education accessible to
                  every Nepali student. Registered under Regd. No. 136103/71/072.
                </p>
              </div>
              <div className="jt-dot">
                <div className="jt-dot-inner"></div>
              </div>
              <div className="jt-empty"></div>
            </div>
            {/*  2017: Instructors  */}
            <div className="jt-item jt-right">
              <div className="jt-empty"></div>
              <div className="jt-dot">
                <div className="jt-dot-inner"></div>
              </div>
              <div className="jt-content">
                <div className="jt-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div className="jt-year">2017</div>
                <h3>Producing Qualified Instructors</h3>
                <p>
                  We became proud to have produced many qualified instructors who now teach across
                  Nepal and abroad — a testament to our world-class training methodology and
                  commitment to academic excellence.
                </p>
              </div>
            </div>
            {/*  2019: International  */}
            <div className="jt-item jt-left">
              <div className="jt-content">
                <div className="jt-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="jt-year">2019</div>
                <h3>International Seminars</h3>
                <p>
                  Our students began conducting and participating in international seminars across
                  Asia, Europe, and Australia — showcasing the knowledge, confidence, and skills
                  developed at Oxford International.
                </p>
              </div>
              <div className="jt-dot">
                <div className="jt-dot-inner"></div>
              </div>
              <div className="jt-empty"></div>
            </div>
            {/*  2022: Rapid Growth  */}
            <div className="jt-item jt-right">
              <div className="jt-empty"></div>
              <div className="jt-dot">
                <div className="jt-dot-inner"></div>
              </div>
              <div className="jt-content">
                <div className="jt-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="jt-year">2022</div>
                <h3>Rapid Growth</h3>
                <p>
                  We expanded to become the most popular and recognised institute in the Sukedhara
                  area, crossing 2,000 successful student placements and launching new language and
                  computer course streams.
                </p>
              </div>
            </div>
            {/*  2026: Standard  */}
            <div className="jt-item jt-left">
              <div className="jt-content">
                <div className="jt-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="jt-year">2026</div>
                <h3>Setting the Standard</h3>
                <p>
                  With 5000+ students sent abroad to study in 25+ countries and a strong visa
                  success track record, Oxford International remains committed to providing honest,
                  high-quality education counselling to every student we serve.
                </p>
              </div>
              <div className="jt-dot">
                <div className="jt-dot-star">
                  <i className="fas fa-star" style={{ fontSize: '11px' }}></i>
                </div>
              </div>
              <div className="jt-empty"></div>
            </div>
          </div>
          {/*  Achievement stats band  */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '0',
              marginTop: '60px',
              background: 'linear-gradient(135deg,#1e2570 0%,#293294 60%,#3b47b8 100%)',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <div className="u-stat-box">
              <div className="u-gold-h1b">
                5000<span className="u-fs22">+</span>
              </div>
              <div className="u-txt-sm-muted5">Students Guided Abroad</div>
            </div>
            <div className="u-stat-box">
              <div className="u-gold-h1b">
                98<span className="u-fs22">%</span>
              </div>
              <div className="u-txt-sm-muted5">Visa Success Rate</div>
            </div>
            <div className="u-stat-box">
              <div className="u-gold-h1b">
                25<span className="u-fs22">+</span>
              </div>
              <div className="u-txt-sm-muted5">Countries Reached</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div className="u-gold-h1b">
                10<span className="u-fs22">+</span>
              </div>
              <div className="u-txt-sm-muted5">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Join the Oxford Family?"
        text="Visit us at Sukedhara Chowk or call for a free consultation."
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
