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
            <span>Privacy Policy</span>
          </div>
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <p>
            Your privacy matters to us. This policy explains how Oxford International collects,
            uses, and protects your personal information.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <meta name="author" content="Oxford International Education Centre and Consultancy" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Privacy Policy | Oxford International Education Centre Nepal"
          />
          <meta
            property="og:description"
            content="Privacy Policy of Oxford International Education Centre and Consultancy Nepal. Learn how we collect, use, and protect your personal information."
          />
          <meta property="og:url" content="https://oxfordeducation.com.np/privacy-policy.html" />
          <meta property="og:site_name" content="Oxford International Education Centre Nepal" />
          <meta property="og:image" content="https://oxfordeducation.com.np/assets/logo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Oxford International Education Centre and Consultancy Nepal"
          />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Privacy Policy | Oxford International Education Centre Nepal"
          />
          <meta
            name="twitter:description"
            content="Privacy Policy of Oxford International Education Centre and Consultancy Nepal. Learn how we collect, use, and protect your personal information."
          />
          <meta name="twitter:image" content="https://oxfordeducation.com.np/assets/logo.png" />
          <meta name="twitter:site" content="@OxfordIntlNepal" />
          <meta name="theme-color" content="#293294" />
          <div className="legal-wrap">
            {/*  TOC  */}
            <aside className="legal-toc">
              <h4>
                <i className="u-gold-mr6 fas fa-list"></i>Contents
              </h4>
              <a href="#intro">1. Introduction</a>
              <a href="#collect">2. Information We Collect</a>
              <a href="#use">3. How We Use Your Data</a>
              <a href="#share">4. Sharing of Information</a>
              <a href="#cookies">5. Cookies & Tracking</a>
              <a href="#security">6. Data Security</a>
              <a href="#rights">7. Your Rights</a>
              <a href="#retention">8. Data Retention</a>
              <a href="#children">9. Children's Privacy</a>
              <a href="#third">10. Third-Party Links</a>
              <a href="#changes">11. Policy Changes</a>
              <a href="#contact-pp">12. Contact Us</a>
              <div className="u-border-top-18">
                <div className="legal-badge">
                  <i className="u-gold fas fa-calendar-alt"></i>Effective: June 27, 2026
                </div>
              </div>
            </aside>
            {/*  Body  */}
            <div className="legal-body">
              <div className="legal-badge">
                <i className="u-gold fas fa-shield-alt"></i>Last Updated: June 27, 2026
              </div>
              <h2 id="intro">
                <span className="sec-num">1</span> Introduction
              </h2>
              <p>
                Welcome to <strong>Oxford International Education Centre and Consultancy</strong>{' '}
                ("Oxford International", "we", "us", or "our"), located at Sukedhara Chowk,
                Kathmandu, Nepal (Regd. No. 136103/71/072).
              </p>
              <p>
                We are committed to protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website{' '}
                <strong>https://oxfordeducation.com.np</strong>, contact us, or use any of our
                services.
              </p>
              <div className="legal-note">
                By using our website or services, you agree to the collection and use of information
                in accordance with this policy.
              </div>
              <h2 id="collect">
                <span className="sec-num">2</span> Information We Collect
              </h2>
              <p>We collect the following types of personal information:</p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, phone number, WhatsApp number, and
                  email address provided through our enquiry or counselling booking forms.
                </li>
                <li>
                  <strong>Academic Information:</strong> Educational background, grades, study
                  destination preference, and service interest — voluntarily submitted by you.
                </li>
                <li>
                  <strong>Communication Records:</strong> Records of phone calls, emails, WhatsApp
                  messages, or in-person visits you initiate with us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Automatically collected data including your IP
                  address, browser type, pages visited, time spent, and referring URL via standard
                  web server logs.
                </li>
                <li>
                  <strong>Cookie Data:</strong> Small files stored on your device to remember your
                  preferences and improve your browsing experience (see Section 5).
                </li>
              </ul>
              <div className="legal-note warn">
                We do <strong>not</strong> collect sensitive personal data such as passport numbers,
                financial account details, or government ID numbers through our website forms.
              </div>
              <h2 id="use">
                <span className="sec-num">3</span> How We Use Your Data
              </h2>
              <p>We use the personal information we collect for the following purposes:</p>
              <ul>
                <li>
                  To provide and improve our education consultancy, language, computer, and test
                  preparation services
                </li>
                <li>
                  To respond to your enquiries, counselling booking requests, and follow-up
                  communications
                </li>
                <li>
                  To send you relevant updates about visa news, scholarship opportunities, and
                  upcoming programmes (only if you opt in)
                </li>
                <li>
                  To understand how visitors use our website and improve its content and
                  functionality
                </li>
                <li>To comply with applicable laws and regulations in Nepal</li>
                <li>To protect against fraud, unauthorised access, and other illegal activities</li>
              </ul>
              <p>
                We will <strong>never</strong> sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
              <h2 id="share">
                <span className="sec-num">4</span> Sharing of Information
              </h2>
              <p>
                We do not share your personal information with third parties except in the following
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Universities & Institutions:</strong> With your explicit consent, we share
                  your academic profile with universities or colleges abroad as part of your
                  application process.
                </li>
                <li>
                  <strong>Embassy / Visa Authorities:</strong> Documents and information required
                  for visa applications, submitted on your behalf with your knowledge and consent.
                </li>
                <li>
                  <strong>Service Providers:</strong> Trusted third-party tools that help operate
                  our website (e.g. web hosting, analytics) under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When required by law, court order, or
                  governmental authority in Nepal.
                </li>
              </ul>
              <h2 id="cookies">
                <span className="sec-num">5</span> Cookies & Tracking
              </h2>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are small text
                files stored on your device. We use:
              </p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function (e.g.
                  navigation, form submission).
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand visitor behaviour to
                  improve our site (e.g. Google Analytics).
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and choices between
                  visits.
                </li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings. Disabling cookies
                may affect some website functionality.
              </p>
              <h2 id="security">
                <span className="sec-num">6</span> Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational security measures to protect
                your personal data against unauthorised access, alteration, disclosure, or
                destruction. These measures include:
              </p>
              <ul>
                <li>HTTPS/SSL encryption for all data transmitted through our website</li>
                <li>Access controls limiting who within our organisation can view personal data</li>
                <li>Regular security reviews of our systems</li>
                <li>Secure storage of physical records at our Sukedhara Chowk office</li>
              </ul>
              <div className="legal-note">
                While we take reasonable precautions, no method of transmission over the internet or
                electronic storage is 100% secure. We cannot guarantee absolute security.
              </div>
              <h2 id="rights">
                <span className="sec-num">7</span> Your Rights
              </h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data, subject to
                  legal obligations.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Withdraw consent for marketing
                  communications at any time.
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your personal data for certain
                  purposes.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <strong>info@oxfordeducation.com.np</strong> or visit our office at Sukedhara Chowk,
                Kathmandu.
              </p>
              <h2 id="retention">
                <span className="sec-num">8</span> Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the
                purposes described in this policy:
              </p>
              <ul>
                <li>Enquiry and contact form data: Up to 2 years from last contact</li>
                <li>
                  Student counselling and application records: Up to 5 years (for reference and
                  support)
                </li>
                <li>
                  Website analytics data: Up to 26 months (standard Google Analytics retention)
                </li>
              </ul>
              <p>After the retention period, data is securely deleted or anonymised.</p>
              <h2 id="children">
                <span className="sec-num">9</span> Children's Privacy
              </h2>
              <p>
                Our services are intended for individuals aged 16 and above. We do not knowingly
                collect personal data from children under 16 without parental or guardian consent.
                If you believe we have inadvertently collected data from a minor, please contact us
                immediately so we can delete it.
              </p>
              <h2 id="third">
                <span className="sec-num">10</span> Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites including Facebook, YouTube,
                and university websites. We are not responsible for the privacy practices of these
                sites and encourage you to read their respective privacy policies before providing
                any personal information.
              </p>
              <h2 id="changes">
                <span className="sec-num">11</span> Policy Changes
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or applicable laws. We will post the updated version on this page with a
                revised "Last Updated" date. Continued use of our services after changes constitutes
                acceptance of the revised policy.
              </p>
              <h2 id="contact-pp">
                <span className="sec-num">12</span> Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy,
                please contact us:
              </p>
              <div
                style={{
                  background: '#f5f7ff',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1.5px solid #e0e4f0',
                  marginTop: '10px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
                className="contact-info-grid"
              >
                <div className="u-flex-start12">
                  <i className="u-icon-p18-mt3 fas fa-building"></i>
                  <div>
                    <strong className="u-txt-p-block">Oxford International</strong>
                    <span className="u-txt-sm-body5">Education Centre & Consultancy</span>
                  </div>
                </div>
                <div className="u-flex-start12">
                  <i className="u-icon-p18-mt3 fas fa-map-marker-alt"></i>
                  <span className="u-txt-sm-body5">Sukedhara Chowk, Kathmandu, Nepal</span>
                </div>
                <div className="u-flex-c12">
                  <i className="u-icon-p18-sh fas fa-envelope"></i>
                  <a className="u-txt-p-w7" href="mailto:info@oxfordeducation.com.np">
                    info@oxfordeducation.com.np
                  </a>
                </div>
                <div className="u-flex-c12">
                  <i className="u-icon-p18-sh fas fa-phone"></i>
                  <a className="u-txt-p-w7" href="tel:+977-9851158991">
                    +977-9851158991
                  </a>
                </div>
              </div>
              <div className="u-mt24">
                <a href="/contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>Send Us a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Questions About Your Data?"
        text="We're transparent and happy to help. Reach out anytime."
        actions={[
          { href: '/contact', icon: 'fas fa-envelope', label: 'Contact Us', variant: 'white' },
          {
            href: '/terms',
            icon: 'fas fa-file-alt',
            label: 'Terms & Conditions',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
