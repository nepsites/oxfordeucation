'use client';

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

      {/*  HERO  */}

      <div className="resource-hero">
        <div className="container">
          <div className="u-txt-white70 breadcrumb">
            <a className="u-txt-white70" href="/">
              Home
            </a>
            <span className="sep">›</span>
            <a className="u-txt-white70" href="/students">
              Students
            </a>
            <span className="sep">›</span>
            <span className="u-gold">SOP Writing Guide</span>
          </div>
          <div className="u-mt20 resource-badge">
            <i className="fas fa-file-alt"></i> Free Resource — No Sign-up Required
          </div>
          <h1>
            SOP Writing Guide
            <br />
            for Nepali Students
          </h1>
          <p>
            A complete, step-by-step guide to writing a Statement of Purpose that gets you accepted
            into top universities in Australia, UK, USA, Japan, and Canada.
          </p>
          <div className="u-flex-wrap14">
            <a href="#guide" className="u-btn-primary-sm btn btn-primary">
              <i className="fas fa-book-open"></i>Read Guide
            </a>
            <a href="/contact" className="u-btn-outline-w btn btn-ol-primary">
              <i className="fas fa-comments"></i>Get SOP Reviewed Free
            </a>
          </div>
        </div>
      </div>

      <section className="section-pad" id="guide">
        <div className="container">
          <div className="resource-body">
            {/*  Main Content  */}
            <div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">?</div>What Is an SOP?
                </h2>
                <p>
                  A <strong>Statement of Purpose (SOP)</strong> — also called a personal statement
                  or letter of intent — is a 500–1000 word essay that you submit with your
                  university application. It tells the admissions committee:
                </p>
                <ul>
                  <li>Who you are and what your background is</li>
                  <li>Why you want to study that specific program</li>
                  <li>Why you have chosen that specific university</li>
                  <li>What you plan to do with the degree after graduation</li>
                  <li>What unique qualities you bring to their campus</li>
                </ul>
                <div className="tip-box">
                  <strong>💡 Oxford International Tip</strong>
                  Your SOP is often the single most important document in your application —
                  especially if your grades are average. A powerful, well-written SOP has helped
                  many of our students strengthen their university applications.
                </div>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">1</div>Before You Start: Research First
                </h2>
                <p>Never write a generic SOP. Before writing a single word, spend time on:</p>
                <ol>
                  <li>
                    <strong>University research</strong> — visit the program page, read about
                    faculty, research groups, unique facilities, and career outcomes.
                  </li>
                  <li>
                    <strong>Program requirements</strong> — note whether they require 500 words or
                    1000 words, any specific prompts, and formatting requirements.
                  </li>
                  <li>
                    <strong>Self-reflection</strong> — think deeply about why you want this specific
                    field, your pivotal experiences, and your genuine career goals.
                  </li>
                </ol>
                <div className="checklist-grid">
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>Know the program's unique features
                  </div>
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>Know 2–3 specific professors you admire
                  </div>
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>Know your word/page limit
                  </div>
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>Have your academic transcripts ready
                  </div>
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>List your key achievements & projects
                  </div>
                  <div className="check-item">
                    <i className="fas fa-check-circle"></i>Note your career goal clearly
                  </div>
                </div>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">2</div>The Perfect SOP Structure
                </h2>
                <p>
                  A winning SOP for international universities follows this 5-paragraph structure:
                </p>
                <table className="word-count-table">
                  <thead>
                    <tr>
                      <th>Paragraph</th>
                      <th>Content</th>
                      <th>Words</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Para 1 — Hook</strong>
                      </td>
                      <td>
                        An engaging opening story, quote, or moment that sparked your interest
                      </td>
                      <td>80–120</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Para 2 — Academic</strong>
                      </td>
                      <td>Your academic background, relevant coursework, projects, and grades</td>
                      <td>150–200</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Para 3 — Professional</strong>
                      </td>
                      <td>Internships, work experience, research, or extracurriculars</td>
                      <td>150–200</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Para 4 — Why This Program</strong>
                      </td>
                      <td>
                        Specific reasons for this university and program (name professors, labs,
                        etc.)
                      </td>
                      <td>150–200</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Para 5 — Future Goals</strong>
                      </td>
                      <td>Your 5–10 year career plan and how this degree enables it</td>
                      <td>100–150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">3</div>Writing Paragraph by Paragraph
                </h2>
                <p>
                  <strong>Opening Hook (Para 1)</strong>
                </p>
                <p>
                  Avoid clichés like "Since childhood I have been passionate about…" Instead, open
                  with a specific story, a challenge you faced, a question that drove you, or a
                  moment of realisation. This is your first impression — make it memorable.
                </p>
                <div className="warning-box">
                  <strong>❌ Avoid These Clichéd Openers:</strong>"From a young age I have always
                  been interested in…" / "I am writing to apply for…" / "It is my dream to study…"
                </div>
                <div className="tip-box">
                  <strong>✅ Strong Opener Examples:</strong>Start with a problem you solved, a
                  patient story (for medical fields), a technical failure that taught you, or a
                  specific data point from your country that drove you to study this field.
                </div>
                <p className="u-mt20">
                  <strong>Academic Background (Para 2)</strong>
                </p>
                <p>
                  Don't just list your degree. Highlight 2–3 specific courses or projects most
                  relevant to the program you're applying for. If your GPA is low, acknowledge it
                  briefly and pivot to your strengths (research experience, strong final year,
                  etc.).
                </p>
                <p className="u-mt20">
                  <strong>Professional Experience (Para 3)</strong>
                </p>
                <p>
                  For each experience, state what you did → what you learned → how it's relevant to
                  this master's program. Quality over quantity — two well-explained experiences are
                  better than a list of six.
                </p>
                <p className="u-mt20">
                  <strong>Why This University (Para 4)</strong>
                </p>
                <p>
                  This is where most SOPs fail — they write the same paragraph for every university.
                  Customise this for every application. Mention specific professors whose research
                  aligns with yours, specific labs or facilities, a course not offered elsewhere, or
                  alumni in your target career.
                </p>
                <div className="tip-box">
                  <strong>💡 Tip:</strong>Name at least one specific professor and briefly explain
                  how your interests align with their work. This shows you've done real research and
                  dramatically increases your chances.
                </div>
                <p className="u-mt20">
                  <strong>Future Goals (Para 5)</strong>
                </p>
                <p>
                  Be specific and realistic. "I want to contribute to society" is weak. "I plan to
                  return to Nepal and work with the Ministry of Education on digital curriculum
                  development" is strong. Universities want to fund students with clear, actionable
                  plans.
                </p>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">4</div>Sample SOP — Excerpt (IT Program, Australia)
                </h2>
                <div className="sample-sop">
                  <p>
                    During my final year at Tribhuvan University, I was tasked with building a
                    facial recognition attendance system for our department. Despite weeks of
                    effort, our model achieved only 62% accuracy on low-resolution images — a
                    frustrating result that sent me deep into computer vision research papers at 2
                    AM. That late-night rabbit hole through ResNet architectures and transfer
                    learning changed the direction of my career. I realised that the gap between
                    machine learning theory and real-world deployment was not just an academic
                    problem — in Nepal, where government services are rapidly digitalising, it had
                    direct human consequences.
                  </p>
                  <p>
                    My Bachelor of Science in Computer Engineering from Tribhuvan University gave me
                    a rigorous foundation in algorithms, data structures, and machine learning. My
                    thesis, "Optimising CNN Models for Low-Bandwidth Environments," achieved a 78%
                    reduction in inference time while maintaining accuracy within 3% of the baseline
                    — a result presented at the Nepal Engineering College symposium in 2024. I
                    graduated in the top 12% of my cohort.
                  </p>
                  <p>
                    During my internship at Leapfrog Technology, Kathmandu, I worked on a real-time
                    recommendation engine for an e-commerce client, processing 200,000 daily user
                    events. I owned the data pipeline from collection to model deployment, gaining
                    hands-on experience with Apache Kafka and Google Cloud AI Platform. This work
                    was later cited in the client's 40% uplift in click-through rate. It was here I
                    recognised the need for deeper expertise in distributed ML systems — expertise I
                    now seek at the University of Melbourne.
                  </p>
                  <p>
                    The Master of Information Technology (Artificial Intelligence) at the University
                    of Melbourne stands out for Professor Sarah Chen's research group on edge AI
                    deployment, which directly extends the work I began in my thesis. The
                    university's partnership with Data61 and access to the NVIDIA DGX cluster offer
                    resources unavailable in Nepal. I am particularly drawn to the capstone industry
                    project structure, which will allow me to build deployable systems rather than
                    purely academic exercises.
                  </p>
                  <p>
                    Upon graduation, I plan to return to Nepal to join the Digital Nepal Framework
                    initiative, helping government agencies deploy AI solutions in healthcare and
                    education. Within ten years, I aim to found a ML solutions company focused on
                    South Asian market challenges. The University of Melbourne's alumni network
                    across APAC and the strong career development programmes are essential steps on
                    this path.
                  </p>
                </div>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">5</div>Common Mistakes to Avoid
                </h2>
                <ul>
                  <li>
                    <strong>Plagiarism</strong> — universities use AI detection tools. Never copy
                    from the internet or use ChatGPT output as-is.
                  </li>
                  <li>
                    <strong>Generic content</strong> — if you can swap your SOP into any application
                    without changing a word, rewrite it.
                  </li>
                  <li>
                    <strong>Spelling/grammar errors</strong> — proof-read three times, then ask
                    someone else to read it.
                  </li>
                  <li>
                    <strong>Explaining GPA gaps without addressing them</strong> — acknowledge,
                    explain briefly, and pivot to strengths.
                  </li>
                  <li>
                    <strong>Too modest or too arrogant</strong> — be confident but evidence-based.
                    Don't say "I am the best student" — let your achievements speak.
                  </li>
                  <li>
                    <strong>Exceeding the word limit</strong> — admissions officers read hundreds of
                    SOPs. Respect the limit.
                  </li>
                  <li>
                    <strong>Copying formatting from the internet</strong> — make it your own. Voice
                    matters.
                  </li>
                </ul>
              </div>
              <div className="sop-section">
                <h2>
                  <div className="step-badge">6</div>Country-Specific Requirements
                </h2>
                <table className="word-count-table">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Common Name</th>
                      <th>Typical Length</th>
                      <th>Key Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>🇦🇺 Australia</td>
                      <td>Personal Statement</td>
                      <td>500–1000 words</td>
                      <td>Career goals, financial capacity, genuine temporary entrant</td>
                    </tr>
                    <tr>
                      <td>🇬🇧 UK</td>
                      <td>Personal Statement</td>
                      <td>4000 characters (~600 words)</td>
                      <td>Academic passion, why now, why UK</td>
                    </tr>
                    <tr>
                      <td>🇺🇸 USA</td>
                      <td>Statement of Purpose</td>
                      <td>1–2 pages (500–1000 words)</td>
                      <td>Research fit, professor match, specific goals</td>
                    </tr>
                    <tr>
                      <td>🇯🇵 Japan</td>
                      <td>Research Plan / SOP</td>
                      <td>2–4 pages</td>
                      <td>Detailed research proposal, Japanese social contribution</td>
                    </tr>
                    <tr>
                      <td>🇨🇦 Canada</td>
                      <td>Letter of Intent</td>
                      <td>500–1000 words</td>
                      <td>Career plan, Canadian experience ambition, community</td>
                    </tr>
                    <tr>
                      <td>🇩🇪 Germany</td>
                      <td>Motivationsschreiben</td>
                      <td>1–2 pages</td>
                      <td>Academic motivation, German research contribution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  CTA  */}
              <div
                style={{
                  background: 'linear-gradient(135deg,#1e2570,#293294)',
                  borderRadius: '18px',
                  padding: '36px',
                  textAlign: 'center',
                  color: '#fff',
                  marginTop: '40px',
                }}
              >
                <i className="u-gold-36-mb14 fas fa-comments"></i>
                <h3 className="u-fs22-fw8-mb10">Get Your SOP Reviewed — Free!</h3>
                <p className="u-opacity85">
                  Our expert counsellors have reviewed thousands of SOPs. Send yours and get
                  personalised feedback at no cost for registered students, subject to counsellor
                  availability.
                </p>
                <a href="/contact" className="u-btn-primary-sm btn btn-primary">
                  <i className="fas fa-paper-plane"></i>Submit My SOP for Review
                </a>
              </div>
            </div>
            {/*  Sidebar  */}
            <aside>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-list-ul"></i>Quick Navigation
                </h3>
                <div className="sidebar-toc">
                  <a href="#guide">What Is an SOP?</a>
                  <a href="#guide">Step 1: Research First</a>
                  <a href="#guide">Step 2: Structure</a>
                  <a href="#guide">Step 3: Writing Guide</a>
                  <a href="#guide">Step 4: Sample SOP</a>
                  <a href="#guide">Step 5: Common Mistakes</a>
                  <a href="#guide">Step 6: By Country</a>
                </div>
              </div>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-link"></i>More Resources
                </h3>
                <div className="sidebar-toc">
                  <a href="/resource-visa-checklist">
                    <i className="u-icon-p18 fas fa-passport"></i> Visa Checklist
                  </a>
                  <a href="/resource-scholarships">
                    <i className="u-icon-p18 fas fa-award"></i> Scholarship Database
                  </a>
                  <a href="/blog-australia-visa">
                    <i className="u-icon-p18 fas fa-globe"></i> Australia Visa Guide
                  </a>
                  <a href="/blog-japan-scholarship">
                    <i className="u-icon-p18 fas fa-graduation-cap"></i> Japan Scholarship Guide
                  </a>
                  <a href="/blog-ielts-tips">
                    <i className="u-icon-p18 fas fa-pen"></i> IELTS Tips
                  </a>
                </div>
              </div>
              <div className="u-btn-dark-sm sidebar-card">
                <h3 className="u-gold">Need Help?</h3>
                <p className="u-opacity85b">
                  Our counsellors are available 6 days a week for SOP reviews, visa questions, and
                  university selection.
                </p>
                <a href="tel:+9779851158991" className="u-btn-primary-full btn btn-primary">
                  <i className="fas fa-phone"></i>Call Now
                </a>
                <a
                  href="/contact"
                  className="btn btn-ol-primary"
                  style={{
                    borderColor: 'rgba(255,255,255,.4)',
                    color: '#fff',
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '10px',
                  }}
                >
                  <i className="fas fa-comments"></i>Free Counselling
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
