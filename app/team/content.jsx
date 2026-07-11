'use client';

import Image from 'next/image';
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
            <span>Our Team</span>
          </div>
          <h1>
            Meet Our <span>Expert Team</span>
          </h1>
          <p>
            Our dedicated team of experienced counsellors, instructors, and support staff are
            committed to guiding every student towards their goals.
          </p>
        </div>
      </div>

      <section className="u-bg-white section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Leadership</div>
            <h2 className="section-title">
              Our <span>Leadership</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          {/*  Chairman  */}
          <div
            style={{
              maxWidth: '700px',
              margin: '46px auto 0',
              background: 'linear-gradient(135deg,#293294,#1e2570)',
              borderRadius: '20px',
              padding: '40px',
              color: '#fff',
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
            }}
            className="chairman-card"
          >
            <div
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                flexShrink: '0',
                border: '4px solid #EBB011',
                overflow: 'hidden',
                background: '#1e2570',
              }}
            >
              <Image
                src="/images/lakpa.jpg"
                alt="Mr. Lakpa Sherpa — Chairman, Oxford International Education Centre Nepal"
                width={160}
                height={160}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  background: 'rgba(235,176,17,.2)',
                  color: '#EBB011',
                  fontSize: '12px',
                  fontWeight: '700',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '14px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                Chairman
              </div>
              <h2
                style={{ fontSize: '28px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}
              >
                Mr. Lakpa Sherpa
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,.75)',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                }}
              >
                Founder and Chairman of Oxford International Education Centre and Consultancy. Mr.
                Lakpa Sherpa established Oxford International in 2015 with a vision to provide
                world-class education services to Nepali students and has led the organization to
                become one of Nepal's most trusted education consultancies.
              </p>
              <div className="u-flex-10">
                <a
                  href="https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/"
                  target="_blank"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '15px',
                    transition: 'all .3s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#EBB011';
                    e.currentTarget.style.color = '#293294';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,.8)';
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LZaV-QDBQwQ"
                  target="_blank"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '15px',
                    transition: 'all .3s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#EBB011';
                    e.currentTarget.style.color = '#293294';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,.8)';
                  }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Experts</div>
            <h2 className="section-title">
              Meet the <span>Team</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              Our team of qualified instructors and counsellors bring firsthand experience and
              academic expertise to guide every student.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '22px',
              marginTop: '46px',
            }}
            className="team-grid"
          >
            <div
              className="u-card-pad"
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
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg,#293294,#3b47b8)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '34px',
                }}
              >
                👩‍🏫
              </div>
              <h4 className="u-h2-primary3">Ms. Anjali Shrestha</h4>
              <p className="u-gold-sm">Senior Education Counsellor</p>
              <p className="u-body-1c">
                8+ years helping students secure admissions to top universities in Australia and UK.
              </p>
            </div>
            <div
              className="u-card-pad"
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
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg,#EBB011,#c99200)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '34px',
                }}
              >
                👨‍💻
              </div>
              <h4 className="u-h2-primary3">Mr. Ramesh Tamang</h4>
              <p className="u-gold-sm">IELTS Head Instructor</p>
              <p className="u-body-1c">
                IELTS certified trainer with a 90% 7+ band achievement rate among students.
              </p>
            </div>
            <div
              className="u-card-pad"
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
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg,#880e4f,#ad1457)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '34px',
                }}
              >
                👩‍🎓
              </div>
              <h4 className="u-h2-primary3">Ms. Sita Gurung</h4>
              <p className="u-gold-sm">Japan Specialist</p>
              <p className="u-body-1c">
                Japanese language (JLPT N2) and Japan visa specialist with 6+ years experience.
              </p>
            </div>
            <div
              className="u-card-pad"
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
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '34px',
                }}
              >
                👨‍💼
              </div>
              <h4 className="u-h2-primary3">Mr. Bikash Karki</h4>
              <p className="u-gold-sm">Computer Instructor</p>
              <p className="u-body-1c">
                Expert in computer hardware, networking, Tally, and professional graphics design
                courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Want to Talk to Our Experts?"
        text="Book a free session with our counsellors today."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Book Session',
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
