'use client';

import { flashSubmit } from '../_lib/form-utils';
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
            <span>Contact Us</span>
          </div>
          <h1>
            Contact <span>Oxford International</span>
          </h1>
          <p>
            Visit us at Sukedhara Chowk, Kathmandu or reach us by phone, WhatsApp, or email. Free
            counselling sessions available — no appointment needed.
          </p>
        </div>
      </div>

      <section className="u-bg-white section-pad" id="contact-form">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: '50px',
              alignItems: 'start',
            }}
            className="contact-layout"
          >
            {/*  Info  */}
            <div>
              <div className="section-tag">Get In Touch</div>
              <h2 className="section-title">
                Visit Us <span>Today</span>
              </h2>
              <div className="divider"></div>
              <p className="u-txt-sm-body6">
                We offer free counselling sessions. Come in person or reach out via phone, WhatsApp,
                or email. Our expert team is ready to guide you to your dream study destination.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  marginBottom: '32px',
                }}
              >
                <div className="u-flex-start16">
                  <div className="u-icon-box-sm">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="u-h4-primary11">Our Office</h4>
                    <p style={{ fontSize: '14px', color: '#666688', lineHeight: '1.6' }}>
                      Sukedhara Chowk, Kathmandu, Nepal
                      <br />
                      Near Ring Road — accessible by all vehicles
                    </p>
                  </div>
                </div>
                <div className="u-flex-start16">
                  <div className="u-icon-box-sm">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="u-h4-primary11">Phone Numbers</h4>
                    <a
                      href="tel:+977-9851158991"
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#666688',
                        textDecoration: 'none',
                        marginBottom: '4px',
                      }}
                    >
                      +977-9851158991
                    </a>
                    <a
                      href="tel:+977-1-4377050"
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#666688',
                        textDecoration: 'none',
                      }}
                    >
                      +977-1-4377050
                    </a>
                  </div>
                </div>
                <div className="u-flex-start16">
                  <div className="u-icon-box-sm">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="u-h4-primary11">Email Address</h4>
                    <a
                      href="mailto:info@oxfordeducation.com.np"
                      style={{ fontSize: '14px', color: '#666688', textDecoration: 'none' }}
                    >
                      info@oxfordeducation.com.np
                    </a>
                  </div>
                </div>
                <div className="u-flex-start16">
                  <div className="u-icon-box-sm">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="u-h4-primary11">Office Hours</h4>
                    <p className="u-txt-sm-body4">
                      Sunday to Friday: <strong className="u-primary">9:00 AM to 5:00 PM</strong>
                      <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/9779851158991"
                target="_blank"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#25d366',
                  color: '#fff',
                  padding: '16px 22px',
                  borderRadius: '14px',
                  fontSize: '16px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  marginBottom: '20px',
                  boxShadow: '0 4px 16px rgba(37,211,102,.3)',
                }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
                <div>
                  <div>WhatsApp Us Now</div>
                  <div style={{ fontSize: '12px', opacity: '.85' }}>
                    Instant reply during office hours
                  </div>
                </div>
                <i className="fas fa-arrow-right" style={{ marginLeft: 'auto' }}></i>
              </a>
              <div className="u-flex-12">
                <a
                  href="https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/"
                  target="_blank"
                  style={{
                    width: '44px',
                    height: '44px',
                    background: '#1877f2',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LZaV-QDBQwQ"
                  target="_blank"
                  style={{
                    width: '44px',
                    height: '44px',
                    background: '#ff0000',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  title="Twitter (Coming Soon)"
                  style={{
                    width: '44px',
                    height: '44px',
                    background: '#1da1f2',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  title="Instagram (Coming Soon)"
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg,#e1306c,#833ab4)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    textDecoration: 'none',
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            {/*  Form  */}
            <div>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1.5px solid #e0e4f0',
                  boxShadow: '0 8px 40px rgba(41,50,148,.08)',
                }}
              >
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '900',
                    color: '#293294',
                    marginBottom: '6px',
                  }}
                >
                  Book a Free Counselling Session
                </h3>
                <p style={{ fontSize: '14px', color: '#666688', marginBottom: '28px' }}>
                  Fill in the form and we will contact you within 24 hours.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    flashSubmit(e.currentTarget.querySelector('.submit-btn'));
                  }}
                >
                  <div className="u-grid-2-16-mb16 form-row-2">
                    <div>
                      <label className="u-label-block2" htmlFor="contact-name">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        className="u-input"
                        type="text"
                        required
                        placeholder="Your full name"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#293294';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e0e4f0';
                        }}
                      />
                    </div>
                    <div>
                      <label className="u-label-block2" htmlFor="contact-phone">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        className="u-input"
                        type="tel"
                        required
                        placeholder="+977 98XXXXXXXX"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#293294';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e0e4f0';
                        }}
                      />
                    </div>
                  </div>
                  <div className="u-mb16">
                    <label className="u-label-block2" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      className="u-input"
                      type="email"
                      placeholder="your@email.com"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#293294';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e0e4f0';
                      }}
                    />
                  </div>
                  <div className="u-grid-2-16-mb16 form-row-2">
                    <div>
                      <label className="u-label-block2" htmlFor="contact-destination">
                        Study Destination
                      </label>
                      <select
                        id="contact-destination"
                        className="u-input"
                        style={{ background: '#fff' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#293294';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e0e4f0';
                        }}
                      >
                        <option value="">Select destination</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>Japan</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>New Zealand</option>
                        <option>South Korea</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="u-label-block2" htmlFor="contact-service">
                        Service Interested In
                      </label>
                      <select
                        id="contact-service"
                        className="u-input"
                        style={{ background: '#fff' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#293294';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e0e4f0';
                        }}
                      >
                        <option value="">Select service</option>
                        <option>Free Abroad Consultancy</option>
                        <option>IELTS Preparation</option>
                        <option>Language Course</option>
                        <option>Computer Course</option>
                        <option>Tuition Classes</option>
                        <option>Visa Assistance</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '22px' }}>
                    <label className="u-label-block2" htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="u-input"
                      rows="4"
                      placeholder="Tell us about your educational background and goals..."
                      style={{ resize: 'vertical' }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#293294';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e0e4f0';
                      }}
                    ></textarea>
                  </div>
                  <button type="submit" className="u-flex-center btn btn-primary btn-lg submit-btn">
                    <i className="fas fa-paper-plane"></i>Send Message — We Reply Within 24 Hours
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Map Section  */}

      <section style={{ padding: '0' }}>
        <div
          style={{
            position: 'relative',
            minHeight: '430px',
            overflow: 'hidden',
          }}
        >
          <iframe
            title="Oxford International location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=85.3407804%2C27.7223215%2C85.3507804%2C27.7323215&layer=mapnik&marker=27.7273215%2C85.3457804"
            style={{
              display: 'block',
              width: '100%',
              height: '430px',
              border: '0',
            }}
            loading="lazy"
          ></iframe>
          <div
            style={{
              position: 'absolute',
              left: 'clamp(16px, 5vw, 80px)',
              bottom: '36px',
              maxWidth: '420px',
              background: 'rgba(30,37,112,.94)',
              color: '#fff',
              borderRadius: '16px',
              padding: '20px 22px',
              boxShadow: '0 14px 40px rgba(0,0,0,.25)',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '8px' }}>
              Sukedhara Chowk, Kathmandu, Nepal
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,.78)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              Near Ring Road, easily accessible by public and private vehicles.
            </p>
            <a
              href="https://maps.app.goo.gl/68eCY3YufvCWmGkaA"
              target="_blank"
              className="btn btn-white"
            >
              <i className="fas fa-map-marker-alt"></i> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/*  FAQ Section  */}

      <section className="u-bg-light section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            style={{
              maxWidth: '800px',
              margin: '40px auto 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <details className="u-card-ov">
              <summary className="u-acc-head">
                Is the counselling session really free? <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="u-acc-body">
                Yes, absolutely free. Oxford International offers free initial counselling sessions
                for all students interested in studying abroad or enrolling in our language,
                computer, or test prep courses. No hidden charges.
              </div>
            </details>
            <details className="u-card-ov">
              <summary className="u-acc-head">
                What is your visa success rate? <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="u-acc-body">
                We maintain a strong visa success track record across all destinations including
                Australia, UK, Japan, USA, Canada, and Germany. Our experienced counsellors guide
                you through every step of the application process.
              </div>
            </details>
            <details className="u-card-ov">
              <summary className="u-acc-head">
                How long does the IELTS coaching programme last?{' '}
                <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="u-acc-body">
                Our standard IELTS preparation programme is 3 months long. We also offer accelerated
                1-month and 2-month programmes depending on your timeline and current English level.
              </div>
            </details>
            <details className="u-card-ov">
              <summary className="u-acc-head">
                Where is Oxford International located? <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="u-acc-body">
                We are located at Sukedhara Chowk, Kathmandu, Nepal — right on the Ring Road. Our
                office is easily accessible by bus, micro-bus, or private vehicle from all parts of
                Kathmandu.
              </div>
            </details>
            <details className="u-card-ov">
              <summary className="u-acc-head">
                Do you assist with scholarship applications? <i className="fas fa-chevron-down"></i>
              </summary>
              <div className="u-acc-body">
                Yes! We assist with scholarship applications including MEXT (Japan), KGSP (South
                Korea), Chevening (UK), DAAD (Germany), and others. Our specialists have helped 40+
                students win competitive government scholarships.
              </div>
            </details>
          </div>
        </div>
      </section>

      <CtaSection
        title="Walk In Anytime for Free Guidance!"
        text="Sunday to Friday, 9AM to 5PM. No appointment needed for initial enquiry."
        actions={[
          {
            href: 'https://wa.me/9779851158991',
            icon: 'fab fa-whatsapp',
            label: 'WhatsApp Now',
            variant: 'white',
            external: true,
          },
          {
            href: 'tel:+977-9851158991',
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
