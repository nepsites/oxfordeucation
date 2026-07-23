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
            <span>Terms & Conditions</span>
          </div>
          <h1>
            Terms & <span>Conditions</span>
          </h1>
          <p>
            Please read these terms carefully before using our website or enrolling in any of our
            services.
          </p>
        </div>
      </div>

      <section className="u-bg-light section-pad">
        <div className="container">
          <meta name="author" content="Oxford International Education Centre and Consultancy" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Terms & Conditions | Oxford International Education Centre Nepal"
          />
          <meta
            property="og:description"
            content="Terms and Conditions for using Oxford International Education Centre and Consultancy services. Please read before enrolling or using our website."
          />
          <meta property="og:url" content="https://oxfordeducation.com.np/terms.html" />
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
            content="Terms & Conditions | Oxford International Education Centre Nepal"
          />
          <meta
            name="twitter:description"
            content="Terms and Conditions for using Oxford International Education Centre and Consultancy services. Please read before enrolling or using our website."
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
              <a href="#acceptance">1. Acceptance of Terms</a>
              <a href="#services-tc">2. Services Provided</a>
              <a href="#eligibility">3. Eligibility</a>
              <a href="#enrolment">4. Enrolment & Fees</a>
              <a href="#refund">5. Refund Policy</a>
              <a href="#conduct">6. Student Conduct</a>
              <a href="#consultancy">7. Consultancy Disclaimer</a>
              <a href="#ip">8. Intellectual Property</a>
              <a href="#website">9. Website Use</a>
              <a href="#liability">10. Limitation of Liability</a>
              <a href="#governing">11. Governing Law</a>
              <a href="#contact-tc">12. Contact Us</a>
              <div className="u-border-top-18">
                <div className="legal-badge">
                  <i className="u-gold fas fa-calendar-alt"></i>Effective: June 27, 2026
                </div>
              </div>
            </aside>
            {/*  Body  */}
            <div className="legal-body">
              <div className="legal-badge">
                <i className="u-gold fas fa-file-contract"></i>Last Updated: June 27, 2026
              </div>
              <h2 id="acceptance">
                <span className="sec-num">1</span> Acceptance of Terms
              </h2>
              <p>
                By accessing our website at <strong>https://oxfordeducation.com.np</strong> or by
                enrolling in any course, programme, or consultancy service offered by{' '}
                <strong>Oxford International Education Centre and Consultancy</strong> ("Oxford
                International", "we", "us", or "our"), you agree to be bound by these Terms and
                Conditions.
              </p>
              <p>
                If you do not agree to any part of these terms, please discontinue use of our
                website and do not enrol in our services.
              </p>
              <div className="legal-note">
                These Terms and Conditions are governed by the laws of <strong>Nepal</strong> and
                comply with applicable regulations including those of the Office of the Company
                Registrar and the Ministry of Education, Nepal.
              </div>
              <h2 id="services-tc">
                <span className="sec-num">2</span> Services Provided
              </h2>
              <p>Oxford International provides the following services:</p>
              <ul>
                <li>
                  <strong>Abroad Study Consultancy:</strong> Free guidance for studying in
                  Australia, UK, Japan, USA, Canada, Germany, South Korea, New Zealand, and other
                  countries.
                </li>
                <li>
                  <strong>Language Courses:</strong> English, Japanese, Korean, German, French,
                  Arabic, Hebrew, and other world languages.
                </li>
                <li>
                  <strong>Test Preparation:</strong> IELTS, TOEFL, GRE, GMAT, SAT, JLPT, and TOPIK
                  coaching.
                </li>
                <li>
                  <strong>Computer Courses:</strong> Basic to advanced computing, accounting
                  software, graphics design, and hardware/networking.
                </li>
                <li>
                  <strong>Tuition Classes:</strong> Academic support for SLC/SEE, +2, BBA/BBS,
                  MBA/MBS levels.
                </li>
                <li>
                  <strong>Personality Development:</strong> RJ/VJ training, MC training, and
                  professional writing skills.
                </li>
              </ul>
              <p>
                Services, course schedules, fees, and availability are subject to change without
                prior notice. We recommend confirming current details before enrolment.
              </p>
              <h2 id="eligibility">
                <span className="sec-num">3</span> Eligibility
              </h2>
              <ul>
                <li>
                  Our services are open to any individual seeking educational guidance, language
                  training, or computer skills.
                </li>
                <li>
                  Abroad study consultancy services are primarily aimed at Nepali students and
                  residents of Nepal.
                </li>
                <li>
                  Students under 18 years of age must have parental or guardian consent to enrol in
                  any paid course or consultancy service.
                </li>
                <li>We reserve the right to refuse service to anyone at our discretion.</li>
              </ul>
              <h2 id="enrolment">
                <span className="sec-num">4</span> Enrolment & Fees
              </h2>
              <ul>
                <li>
                  <strong>Initial Counselling:</strong> The initial abroad study counselling session
                  is completely <strong>free of charge</strong>.
                </li>
                <li>
                  <strong>Course Fees:</strong> Language, computer, and test preparation courses
                  carry fees which will be communicated clearly at the time of enrolment.
                </li>
                <li>
                  <strong>Consultancy Fees:</strong> Processing and documentation fees for abroad
                  applications vary by destination and service package. These will be disclosed
                  transparently before any commitment.
                </li>
                <li>
                  <strong>Payment:</strong> Fees are payable in Nepali Rupees (NPR) by cash or bank
                  transfer at our Sukedhara Chowk office.
                </li>
                <li>
                  <strong>Receipt:</strong> An official receipt will be issued for all payments made
                  to Oxford International.
                </li>
              </ul>
              <div className="legal-note warn">
                Oxford International does <strong>not</strong> charge any hidden fees. Any fee
                charged by us will be clearly communicated in advance and documented in writing.
              </div>
              <h2 id="refund">
                <span className="sec-num">5</span> Refund Policy
              </h2>
              <p>
                We want every student to be satisfied with our services. Our refund policy is as
                follows:
              </p>
              <ul>
                <li>
                  <strong>Course Fees:</strong> Refundable within 7 days of enrolment if no classes
                  have been attended, subject to a 10% administrative charge.
                </li>
                <li>
                  <strong>Partial Completion:</strong> No refund is available for courses partially
                  completed (more than 2 classes attended).
                </li>
                <li>
                  <strong>Consultancy Fees:</strong> Document processing fees are non-refundable
                  once the application has been submitted to the institution or embassy.
                </li>
                <li>
                  <strong>Visa Refusal:</strong> In the unfortunate event of a visa refusal,
                  consultancy service fees (excluding government/embassy charges) may be partially
                  refunded at our discretion, based on the reason for refusal. Government-paid fees
                  (embassy visa fees, etc.) are non-refundable.
                </li>
                <li>
                  <strong>Force Majeure:</strong> No refund liability in case of service
                  interruption due to natural disasters, government directives, pandemics, or other
                  circumstances beyond our control.
                </li>
              </ul>
              <p>
                All refund requests must be submitted in writing to{' '}
                <a
                  href="mailto:info@oxfordeducation.com.np"
                  style={{ color: '#293294', fontWeight: '700' }}
                >
                  info@oxfordeducation.com.np
                </a>{' '}
                or in person at our office.
              </p>
              <h2 id="conduct">
                <span className="sec-num">6</span> Student Conduct
              </h2>
              <p>Students enrolled in our courses and programmes are expected to:</p>
              <ul>
                <li>Attend classes regularly and punctually</li>
                <li>Treat instructors, counsellors, and fellow students with respect</li>
                <li>
                  Submit honest and accurate information in all application forms and documents
                </li>
                <li>
                  Not engage in academic dishonesty, plagiarism, or submission of fraudulent
                  documents
                </li>
                <li>Not disrupt classes or the learning environment of others</li>
                <li>Maintain confidentiality of proprietary course materials</li>
              </ul>
              <p>
                Oxford International reserves the right to <strong>terminate enrolment</strong>{' '}
                without refund for serious misconduct, provision of false information, or failure to
                adhere to these conduct standards.
              </p>
              <h2 id="consultancy">
                <span className="sec-num">7</span> Consultancy Disclaimer
              </h2>
              <p>
                Our abroad study counselling services are provided in good faith based on our
                experience and knowledge of international education systems. However:
              </p>
              <ul>
                <li>
                  Oxford International <strong>does not guarantee</strong> admission to any specific
                  university or institution.
                </li>
                <li>
                  Oxford International <strong>does not guarantee</strong> visa approval. Visa
                  decisions are made solely by the respective embassy or immigration authority of
                  the destination country.
                </li>
                <li>
                  We provide guidance based on current regulations which are subject to change by
                  foreign governments without notice. We are not liable for changes in immigration
                  rules or university policies after advice is given.
                </li>
                <li>
                  Students are ultimately responsible for the accuracy of documents they submit as
                  part of their application.
                </li>
              </ul>
              <div className="legal-note warn">
                <i
                  className="fas fa-exclamation-triangle"
                  style={{ color: '#e65100', marginRight: '6px' }}
                ></i>
                Submission of <strong>false, forged, or misleading documents</strong> to embassies
                or universities is illegal and Oxford International will not assist in such
                activities. We cooperate fully with authorities in cases of suspected fraud.
              </div>
              <h2 id="ip">
                <span className="sec-num">8</span> Intellectual Property
              </h2>
              <ul>
                <li>
                  All content on our website — including text, logos, graphics, images, course
                  materials, and design — is the property of Oxford International Education Centre
                  and Consultancy and is protected under applicable copyright laws.
                </li>
                <li>
                  Course materials, handouts, mock tests, and study resources provided to enrolled
                  students are for <strong>personal use only</strong> and may not be reproduced,
                  distributed, or sold without prior written permission.
                </li>
                <li>You may not use our name, logo, or brand without explicit written consent.</li>
              </ul>
              <h2 id="website">
                <span className="sec-num">9</span> Website Use
              </h2>
              <p>When using our website, you agree to:</p>
              <ul>
                <li>
                  Use the website only for lawful purposes and in a manner that does not infringe
                  upon the rights of others
                </li>
                <li>
                  Not attempt to gain unauthorised access to any part of our website or systems
                </li>
                <li>Not transmit viruses, malware, or any harmful code</li>
                <li>
                  Not use automated scripts, bots, or crawlers to scrape our website for commercial
                  purposes without permission
                </li>
                <li>
                  Not post or submit false, misleading, or defamatory content through our contact
                  forms
                </li>
              </ul>
              <p>We reserve the right to terminate access for users who violate these terms.</p>
              <h2 id="liability">
                <span className="sec-num">10</span> Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by Nepali law, Oxford International shall not be
                liable for:
              </p>
              <ul>
                <li>Visa refusals or immigration decisions made by foreign governments</li>
                <li>University admission decisions</li>
                <li>
                  Losses arising from reliance on information provided during counselling sessions
                </li>
                <li>
                  Indirect, incidental, or consequential damages arising from use of our website or
                  services
                </li>
                <li>Technical errors, downtime, or data loss related to our website</li>
                <li>
                  Actions or omissions of third-party institutions, airlines, accommodation
                  providers, or other parties
                </li>
              </ul>
              <p>
                Our total liability in any case shall not exceed the fees actually paid by you to
                Oxford International for the specific service in question.
              </p>
              <h2 id="governing">
                <span className="sec-num">11</span> Governing Law & Disputes
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the
                laws of <strong>Nepal</strong>. Any disputes arising from these terms or our
                services shall be:
              </p>
              <ol>
                <li>First resolved through direct negotiation and good-faith discussion</li>
                <li>If unresolved, referred to mediation under applicable Nepali mediation laws</li>
                <li>
                  If still unresolved, subject to the exclusive jurisdiction of the courts of{' '}
                  <strong>Kathmandu, Nepal</strong>
                </li>
              </ol>
              <h2 id="contact-tc">
                <span className="sec-num">12</span> Contact Us
              </h2>
              <p>If you have questions about these Terms and Conditions, please reach out:</p>
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
                className="contact-info-grid2"
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
              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>Contact Us
                </a>
                <a href="/privacy-policy" className="btn btn-dark">
                  <i className="fas fa-shield-alt"></i>Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Questions About Our Services?"
        text="Talk to us directly — we believe in complete transparency."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Book Free Session',
            variant: 'white',
          },
          {
            href: '/privacy-policy',
            icon: 'fas fa-shield-alt',
            label: 'Privacy Policy',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}
