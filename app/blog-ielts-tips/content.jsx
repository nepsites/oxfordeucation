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
            <span>IELTS Tips</span>
          </div>
          <h1>
            10 Proven Tips to Score <span>7+ Band in IELTS</span>
          </h1>
          <p>
            Expert strategies from Oxford International's senior IELTS trainer for achieving 7+ band
            score.
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
                        background: 'linear-gradient(135deg,#1b5e20,#388e3c)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: '700',
                      }}
                    >
                      RT
                    </div>
                    <div>
                      <div className="u-h4-primary3">Ramesh Tamang</div>
                      <div className="u-txt-xs-muted">Senior IELTS Instructor</div>
                    </div>
                  </div>
                  <span className="u-txt-sm-muted">
                    <i className="fas fa-calendar"></i> December 28, 2025
                  </span>
                  <span
                    style={{
                      background: '#e8f5e9',
                      color: '#2e7d32',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '4px 12px',
                      borderRadius: '20px',
                    }}
                  >
                    IELTS
                  </span>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
                    borderRadius: '14px',
                    padding: '36px',
                    textAlign: 'center',
                    marginBottom: '34px',
                  }}
                >
                  <div className="u-fs56-mb12">📚</div>
                  <h2 className="u-txt-white-h1">IELTS Band 7+ Strategy Guide</h2>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '28px',
                      flexWrap: 'wrap',
                      marginTop: '18px',
                    }}
                  >
                    <div>
                      <div className="u-gold-h2">90%</div>
                      <div className="u-txt-xs-muted2">7+ Band Rate</div>
                    </div>
                    <div>
                      <div className="u-gold-h2">3 Months</div>
                      <div className="u-txt-xs-muted2">Avg. Prep Time</div>
                    </div>
                    <div>
                      <div className="u-gold-h2">1000+</div>
                      <div className="u-txt-xs-muted2">Students Trained</div>
                    </div>
                  </div>
                </div>
                <p className="u-txt-sm-body6">
                  IELTS is the gateway to studying in Australia, UK, Canada, New Zealand, and many
                  other countries. After training over 1000 students at Oxford International, our
                  senior IELTS instructor Ramesh Tamang shares the 10 most effective strategies to
                  achieve 7+ band.
                </p>
                <div className="u-info-row">
                  <div className="u-icon-box-p">1</div>
                  <div>
                    <h3 className="u-h2-primary">Understand the Test Format Inside Out</h3>
                    <p className="u-txt-sm-body">
                      Before you start practicing, spend one full day understanding the exact format
                      of each section: Listening 4 sections 40 questions, Reading 3 passages 40
                      questions, Writing Task 1 and Task 2, and Speaking 3 parts. Knowing what to
                      expect removes exam anxiety.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-g">2</div>
                  <div>
                    <h3 className="u-h2-primary">
                      Practice With Official Cambridge IELTS Materials
                    </h3>
                    <p className="u-txt-sm-body">
                      Use Cambridge IELTS books 1 through 18 as your primary practice source. These
                      are the closest to the actual test. At Oxford International, we use Cambridge
                      materials exclusively in class for maximum accuracy.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-p">3</div>
                  <div>
                    <h3 className="u-h2-primary">Time Management Is Your Secret Weapon</h3>
                    <p className="u-txt-sm-body">
                      In the Reading section, you only have 60 minutes for 40 questions. Allocate 20
                      minutes per passage. In Writing, spend 20 minutes on Task 1 and 40 minutes on
                      Task 2 as it carries double marks.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-g">4</div>
                  <div>
                    <h3 className="u-h2-primary">Build a Daily Vocabulary Habit</h3>
                    <p className="u-txt-sm-body">
                      Learn at least 15 new words each day and use them in sentences. Focus on
                      academic vocabulary using the Academic Word List AWL. IELTS Reading and
                      Writing demand rich vocabulary for high band scores.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-p">5</div>
                  <div>
                    <h3 className="u-h2-primary">Develop Listening Skills for Diverse Accents</h3>
                    <p className="u-txt-sm-body">
                      IELTS Listening features British, Australian, American, and other English
                      accents. Listen to BBC News, TED Talks, and Australian podcasts regularly to
                      train your ear for different pronunciations.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-g">6</div>
                  <div>
                    <h3 className="u-h2-primary">
                      Master Writing Task 2 — It is Worth 66% of Writing Score
                    </h3>
                    <p className="u-txt-sm-body">
                      Task 2 carries more marks than Task 1. Structure every essay with
                      Introduction, Body Paragraph 1, Body Paragraph 2, and Conclusion. Use linking
                      words like Furthermore, However, Consequently, and In contrast.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-p">7</div>
                  <div>
                    <h3 className="u-h2-primary">
                      Practice Speaking Daily Not Just Before the Test
                    </h3>
                    <p className="u-txt-sm-body">
                      The speaking test evaluates Fluency, Vocabulary, Grammar, and Pronunciation
                      equally. Practice speaking English for 15 minutes every day. Use Oxford
                      International speaking circles to practice with peers.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-g">8</div>
                  <div>
                    <h3 className="u-h2-primary">Focus on Coherence and Cohesion in Writing</h3>
                    <p className="u-txt-sm-body">
                      The examiner checks if your ideas flow logically. Use paragraph structure with
                      PEEL: Point, Evidence, Explanation, Link and cohesive devices like This
                      suggests that and Building on this point.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-p">9</div>
                  <div>
                    <h3 className="u-h2-primary">In Reading Skim First Do Not Read Everything</h3>
                    <p className="u-txt-sm-body">
                      Skimming the passage in 2-3 minutes before reading questions helps you
                      understand the gist. Then scan specifically for answers. Never read word for
                      word as it wastes time and causes confusion.
                    </p>
                  </div>
                </div>
                <div className="u-info-row">
                  <div className="u-icon-box-g">10</div>
                  <div>
                    <h3 className="u-h2-primary">
                      Take Full Mock Tests Under Real Exam Conditions
                    </h3>
                    <p className="u-txt-sm-body">
                      At least one month before your exam, take 2-3 full mock tests every week under
                      timed exam conditions. Review every incorrect answer carefully. Oxford
                      International offers weekly full mock tests with detailed feedback.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#EBB011,#c99200)',
                    borderRadius: '14px',
                    padding: '26px',
                    marginTop: '10px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <i className="u-icon-28-p fas fa-star"></i>
                  <div>
                    <h4 className="u-h2-primary2">Oxford International IELTS Coaching</h4>
                    <p className="u-body-primary">
                      Our 3-month IELTS programme covers all four skills with expert trainers,
                      Cambridge materials, weekly mock tests, and individual feedback. 90% of our
                      students achieve 7+ band. Join now!
                    </p>
                    <a href="/contact" className="u-mt14 btn btn-primary">
                      <i className="fas fa-calendar-check"></i> Enrol in IELTS Coaching
                    </a>
                  </div>
                </div>
                <div className="u-flex-row-sb">
                  <div className="u-flex-wrap8">
                    <span className="u-txt-sm-w7c">Tags:</span>
                    <span className="u-tag-primary">IELTS</span>
                    <span className="u-tag-primary">Test Prep</span>
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
