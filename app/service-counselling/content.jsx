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
            <a href="/services">Our Services</a>
            <span className="sep">›</span>
            <span>Free Career Counselling</span>
          </div>
          <h1>
            Free Career <span>Counselling</span>
          </h1>
          <p>
            Personalised one-on-one guidance to help you choose the right country, course, and
            university for your future — at zero cost.
          </p>
        </div>
      </div>

      <section className="sp-section">
        <div className="container">
          <div
            className="sp-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            <div>
              <div className="section-tag">Free Initial Session · No Obligation</div>
              <h2 className="section-title">
                What is Free Career <span>Counselling?</span>
              </h2>
              <div className="divider"></div>
              <p
                style={{
                  fontSize: '15px',
                  color: '#555577',
                  lineHeight: '1.85',
                  marginBottom: '18px',
                }}
              >
                Our certified education counsellors sit with you one-on-one to understand your
                academic background, career aspirations, and personal goals — then craft a
                personalised study-abroad roadmap that is right for <em>you</em>.
              </p>
              <p className="u-body-15-mb24">
                This is not a sales pitch. It is a genuine advisory session with no pressure and no
                cost. We have helped <strong>5,000+ students</strong> since 2015, and every journey
                started with this conversation.
              </p>
              <div className="highlight-bar">
                <i className="fas fa-award"></i>
                <div>
                  <strong style={{ fontSize: '17px', display: 'block', marginBottom: '4px' }}>
                    Free for All Students
                  </strong>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.8)' }}>
                    Walk in any day at Sukedhara Chowk, Kathmandu — or book a slot by phone or
                    WhatsApp.
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                background: '#f5f7ff',
                borderRadius: '20px',
                padding: '28px',
                border: '1.5px solid #e0e4f0',
              }}
            >
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: '900',
                  color: '#293294',
                  marginBottom: '18px',
                }}
              >
                <i className="u-gold-mr8 fas fa-calendar-check"></i>Book Your Free Session
              </h3>
              <p style={{ fontSize: '13.5px', color: '#555577', marginBottom: '18px' }}>
                Choose how you'd like to connect with us:
              </p>
              <a
                className="btn btn-primary"
                href="/contact"
                style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}
              >
                <i className="fas fa-calendar"></i> Fill Contact Form
              </a>
              <a
                className="btn"
                href="https://wa.me/9779851158991"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#25d366',
                  color: '#fff',
                  borderColor: '#25d366',
                  marginBottom: '10px',
                }}
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </a>
              <a
                className="btn btn-ol-primary"
                href="tel:+9779851158991"
                style={{ display: 'block', textAlign: 'center' }}
              >
                <i className="fas fa-phone"></i> +977-9851158991
              </a>
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid #e0e4f0',
                  fontSize: '13px',
                  color: '#888aaa',
                  textAlign: 'center',
                }}
              >
                <i className="u-gold fas fa-clock"></i> Sun–Fri 9 AM – 5 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Process</div>
            <h2 className="section-title">
              What Happens in Your <span>Counselling Session?</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div
            className="sp-grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-blue">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="u-gold-label2">STEP 01</div>
              <h3 className="u-h3-primary2">Profile Assessment</h3>
              <p className="u-txt-sm-555c">
                We review your academic qualifications, grades, English proficiency, and budget to
                understand your starting point.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-gold">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="u-gold-label2">STEP 02</div>
              <h3 className="u-h3-primary2">Goal Setting</h3>
              <p className="u-txt-sm-555c">
                We discuss your career goals, preferred destination, lifestyle preferences, and
                timeline to build a clear picture.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-blue">
                <i className="fas fa-university"></i>
              </div>
              <div className="u-gold-label2">STEP 03</div>
              <h3 className="u-h3-primary2">University Shortlisting</h3>
              <p className="u-txt-sm-555c">
                We recommend 3–5 universities or institutions that best match your profile, budget,
                and course preferences.
              </p>
            </div>
            <div className="u-txt-center info-card">
              <div className="u-mx-auto16 icon-box icon-gold">
                <i className="fas fa-route"></i>
              </div>
              <div className="u-gold-label2">STEP 04</div>
              <h3 className="u-h3-primary2">Your Roadmap</h3>
              <p className="u-txt-sm-555c">
                You leave with a clear action plan — what tests to take, documents to prepare, and
                timelines to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Who Should Come</div>
            <h2 className="section-title">
              Counselling is Right for <span>Everyone</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-grid-3-mt40 sp-grid-3">
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">SLC / SEE Graduates</h4>
                  <p className="u-txt-sm-555c">
                    Not sure what to study after SEE? We help you explore +2 options, bridge
                    courses, and early study-abroad pathways in Japan and Korea.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-book-open"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">+2 / Bachelors Students</h4>
                  <p className="u-txt-sm-555c">
                    Planning to study in Australia, UK, USA, Canada or Europe after your degree? We
                    map out scholarships, courses, and admission requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">Working Professionals</h4>
                  <p className="u-txt-sm-555c">
                    Looking for a Masters or MBA abroad to accelerate your career? We specialise in
                    profile-building and university selection for experienced candidates.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-redo"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">Visa Refusal Cases</h4>
                  <p className="u-txt-sm-555c">
                    Had your visa refused before? Our experts analyse rejection letters and rebuild
                    your application to maximise success chances.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-blue">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">Parents & Guardians</h4>
                  <p className="u-txt-sm-555c">
                    Want to understand the real costs, safety, and process before your child goes
                    abroad? We welcome parent consultations — clarity is important.
                  </p>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="u-flex-start14">
                <div className="icon-box icon-gold">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <div>
                  <h4 className="u-h4-primary9">Transfer Students</h4>
                  <p className="u-txt-sm-555c">
                    Already studying abroad but want to transfer to a better institution? We advise
                    on credit transfer, new applications, and visa implications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">
              Common <span>Questions</span>
            </h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="u-max760">
            <Faq
              items={[
                {
                  q: 'Is the counselling really free?',
                  a: 'Yes, 100% free, no conditions attached. Our initial career counselling session costs you nothing. We only charge service fees if and when you decide to proceed with an application — and even then, fees are clearly disclosed upfront.',
                },
                {
                  q: 'How long does a counselling session take?',
                  a: 'A typical first session is 30–60 minutes. Complex cases (multiple country options, visa refusals, career changes) may take longer. We never rush you.',
                },
                {
                  q: 'Do I need to bring any documents?',
                  a: 'Not required for the first meeting. However, bringing your transcripts, IELTS/TOEFL scores (if available), passport, and a list of your questions will help us give you more specific advice.',
                },
                {
                  q: 'Can I consult online or over the phone?',
                  a: 'Yes! We offer phone and WhatsApp consultations. However, for detailed document review and application assistance, we recommend visiting our office at Sukedhara Chowk, Kathmandu.',
                },
                {
                  q: 'What countries can you advise on?',
                  a: 'We have specialists for Australia, UK, USA, Canada, Japan, South Korea, Germany, New Zealand, France, Denmark, and many more. We do not recommend countries we cannot support well.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready for Your Free Session?"
        text="Walk in or book ahead — no obligation, no fee, just honest advice."
        actions={[
          { href: '/contact', icon: 'fas fa-calendar-check', label: 'Book Now', variant: 'white' },
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
