'use client';

import { useState } from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

// Syncs the row's visual "checked" state to whatever the checkbox's actual
// state already is (used after the checkbox itself was toggled — by mouse,
// keyboard, or assistive tech — so we never re-flip it ourselves).
function syncChecklistItem(el) {
  const cb = el?.querySelector('input[type=checkbox]');
  if (!cb) return;
  el.classList.toggle('checked', cb.checked);
}

// Flips the checkbox (used when the row is clicked somewhere other than the
// checkbox itself) and syncs the visual state to match.
function toggleCheck(el) {
  const cb = el?.querySelector('input[type=checkbox]');
  if (!cb) return;
  cb.checked = !cb.checked;
  syncChecklistItem(el);
}

export default function PageContent() {
  const [activeCountry, setActiveCountry] = useState('au');

  const setCountry = (code) => {
    setActiveCountry(code);
    requestAnimationFrame(() => {
      document
        .getElementById(`country-${code}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

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
            <span className="u-gold">Visa Checklist</span>
          </div>
          <div className="u-mt20 resource-badge">
            <i className="fas fa-passport"></i> Interactive Checklist — Check Off As You Go
          </div>
          <h1>
            Student Visa Checklist
            <br />
            by Country
          </h1>
          <p>
            Country-specific document checklists for Nepali students. Click each item to check it
            off. Our strong visa success track record is built on never missing a document.
          </p>
          <div className="u-flex-wrap14">
            <a href="#checklist" className="u-btn-primary-sm btn btn-primary">
              <i className="fas fa-passport"></i>View Checklists
            </a>
            <a href="/contact" className="u-btn-outline-w btn btn-ol-primary">
              <i className="fas fa-comments"></i>Get Document Help
            </a>
          </div>
        </div>
      </div>

      <section className="section-pad" id="checklist">
        <div className="container">
          <div className="resource-body">
            {/*  Main Content  */}
            <div>
              <div
                style={{
                  marginBottom: '28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '14px',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: '22px',
                      fontWeight: '800',
                      color: '#1a1a3a',
                      marginBottom: '6px',
                    }}
                  >
                    Select Your Destination Country
                  </h2>
                  <p className="u-txt-sm-body5">
                    Checklists updated for 2026 intake. Requirements can change — always verify with
                    the official embassy.
                  </p>
                </div>
                <button
                  className="print-btn"
                  onClick={(e) => {
                    window.print();
                  }}
                >
                  <i className="fas fa-print"></i> Print Checklist
                </button>
              </div>
              {/*  Country Tabs  */}
              <div className="country-tabs">
                <a
                  className={`ctab${activeCountry === 'au' ? ' active' : ''}`}
                  onClick={() => setCountry('au')}
                  data-country="au"
                >
                  🇦🇺 Australia
                </a>
                <a
                  className={`ctab${activeCountry === 'uk' ? ' active' : ''}`}
                  onClick={() => setCountry('uk')}
                  data-country="uk"
                >
                  🇬🇧 UK
                </a>
                <a
                  className={`ctab${activeCountry === 'jp' ? ' active' : ''}`}
                  onClick={() => setCountry('jp')}
                  data-country="jp"
                >
                  🇯🇵 Japan
                </a>
                <a
                  className={`ctab${activeCountry === 'us' ? ' active' : ''}`}
                  onClick={() => setCountry('us')}
                  data-country="us"
                >
                  🇺🇸 USA
                </a>
                <a
                  className={`ctab${activeCountry === 'ca' ? ' active' : ''}`}
                  onClick={() => setCountry('ca')}
                  data-country="ca"
                >
                  🇨🇦 Canada
                </a>
                <a
                  className={`ctab${activeCountry === 'kr' ? ' active' : ''}`}
                  onClick={() => setCountry('kr')}
                  data-country="kr"
                >
                  🇰🇷 South Korea
                </a>
                <a
                  className={`ctab${activeCountry === 'de' ? ' active' : ''}`}
                  onClick={() => setCountry('de')}
                  data-country="de"
                >
                  🇩🇪 Germany
                </a>
              </div>
              {/*  AUSTRALIA  */}
              <div
                className={`country-section${activeCountry === 'au' ? ' active' : ''}`}
                id="country-au"
              >
                <div className="country-header">
                  <div className="country-flag">🇦🇺</div>
                  <div className="country-title">
                    <h2>Australia — Student Visa (Subclass 500)</h2>
                    <p>Applied online via ImmiAccount. Processing: 4–8 weeks typically</p>
                    <span className="visa-type-badge">Student Visa Subclass 500</span>
                  </div>
                </div>
                <div className="success-rate-bar">
                  <div className="rate-num" style={{ fontSize: '18px' }}>
                    High
                  </div>
                  <div>
                    <div className="rate-label" style={{ fontWeight: '700', color: '#293294' }}>
                      Oxford International Visa Success Rate
                    </div>
                    <div className="rate-label">for Australia — strong track record since 2015</div>
                  </div>
                </div>
                <div className="important-note">
                  <strong>⚠️ Genuine Student (GS) Requirement:</strong> Australia requires Student
                  Visa applicants to show they are genuine students through clear study plans,
                  personal circumstances, and supporting evidence.
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Application Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Completed Visa Application Form (online via ImmiAccount)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid Confirmation of Enrolment (CoE) from PRISMS</div>
                      <span className="item-note">
                        Issued by your Australian institution after paying tuition deposit
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Passport (valid for at least 6 months beyond intended stay)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Passport-size photographs (recent, white background)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>English proficiency proof (IELTS 6.0+ / TOEFL 60+ / PTE 50+)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-graduation-cap"></i>Academic Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Academic transcripts (all levels — SLC/SEE, +2, Bachelor)</div>
                      <span className="item-note">
                        Must be attested by Ministry of Education, Nepal
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Academic certificates</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Character / Conduct Certificate from last institution</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Statement of Purpose (SOP)</div>
                      <span className="item-note">
                        Explaining your study choice, academic plans, and career goals
                      </span>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Bank statement (last 6 months) — minimum NPR 60 lakhs recommended</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Bank balance certificate (original, on bank letterhead)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Parents' income proof (salary slips, tax returns, or business registration)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Property documents (land ownership, house deed) if available</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Sponsor letter (if someone other than parents is sponsoring)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-heartbeat"></i>Health & Other
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Overseas Student Health Cover (OSHC) — mandatory, covers full study duration
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Health examination (if required — often waived for short courses)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Police clearance certificate (if 16+ and studied/lived abroad 12+ months)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Genuine Student (GS) responses/evidence</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  UK  */}
              <div
                className={`country-section${activeCountry === 'uk' ? ' active' : ''}`}
                id="country-uk"
              >
                <div className="country-header">
                  <div className="country-flag">🇬🇧</div>
                  <div className="country-title">
                    <h2>United Kingdom — Student Visa</h2>
                    <p>Applied online at gov.uk/student-visa. Processing: 3–8 weeks</p>
                    <span className="visa-type-badge">Student Visa (formerly Tier 4)</span>
                  </div>
                </div>
                <div className="important-note">
                  <strong>⚠️ CAS Required:</strong> You must have a Confirmation of Acceptance for
                  Studies (CAS) number from your UK institution before applying. The CAS expires 6
                  months after issue.
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Confirmation of Acceptance for Studies (CAS) number</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport (must be valid for entire UK stay)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        English language certificate (IELTS Academic 5.5–7.0 depending on course)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Unconditional offer letter from UK institution</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial Evidence
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Bank statement showing required funds for at least 28 consecutive days
                      </div>
                      <span className="item-note">
                        Tuition fees for first year + £1,529/month (London) or £1,171/month (outside
                        London) for up to 9 months
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Official financial sponsorship letter (if sponsor is covering costs)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-graduation-cap"></i>Academic Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Previous academic transcripts and certificates</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Personal statement / SOP</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Two academic reference letters</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-heartbeat"></i>Health & Other
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>UK IHS surcharge payment receipt (NHS access fee — ~£776/year)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Tuberculosis (TB) test result from approved clinic in Nepal</div>
                      <span className="item-note">
                        Nepal is on the UK's TB testing country list
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Biometric appointment confirmation</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  JAPAN  */}
              <div
                className={`country-section${activeCountry === 'jp' ? ' active' : ''}`}
                id="country-jp"
              >
                <div className="country-header">
                  <div className="country-flag">🇯🇵</div>
                  <div className="country-title">
                    <h2>Japan — Student Visa (留学ビザ)</h2>
                    <p>Applied via Embassy of Japan in Kathmandu. Processing: 4–8 weeks</p>
                    <span className="visa-type-badge">Student Visa (Ryugaku Visa)</span>
                  </div>
                </div>
                <div className="important-note">
                  <strong>⚠️ COE Required First:</strong> Your Japanese institution must apply for a
                  Certificate of Eligibility (COE) on your behalf before you apply for the visa at
                  the embassy in Kathmandu. The COE process takes 1–3 months.
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Certificate of Eligibility (COE) — original, issued by Japanese immigration
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Visa application form (available at Embassy of Japan, Kathmandu)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Passport-size photos (white background, 4.5cm × 4.5cm)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Acceptance letter from Japanese institution</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-graduation-cap"></i>Academic Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>All academic transcripts and certificates</div>
                      <span className="item-note">
                        Must be attested by Ministry of Education and Ministry of Foreign Affairs,
                        Nepal
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Japanese Language Proficiency Test (JLPT) certificate (if available)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Study plan / research plan (in Japanese or English)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Bank statement (last 6 months) — JPY 2,000,000+ equivalent recommended
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Scholarship award letter (if applicable — MEXT, JASSO, etc.)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Guarantor's income certificate (if parents/sponsor is guaranteeing)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  USA  */}
              <div
                className={`country-section${activeCountry === 'us' ? ' active' : ''}`}
                id="country-us"
              >
                <div className="country-header">
                  <div className="country-flag">🇺🇸</div>
                  <div className="country-title">
                    <h2>United States — F-1 Student Visa</h2>
                    <p>Interview required at US Embassy Kathmandu. Processing: 2–8 weeks</p>
                    <span className="visa-type-badge">F-1 Student Visa</span>
                  </div>
                </div>
                <div className="important-note">
                  <strong>⚠️ SEVIS Registration Required:</strong> Your US institution will issue a
                  Form I-20 after acceptance. You must pay the SEVIS fee (USD 350) and register
                  before your embassy interview.
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>DS-160 Non-Immigrant Visa Application (completed online)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Form I-20 (issued by your US university)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>SEVIS fee payment receipt (I-901 fee — USD 350)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Visa interview appointment confirmation</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport (must be valid 6 months beyond intended stay)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>MRV fee payment receipt (visa application fee)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-graduation-cap"></i>Academic Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Acceptance letter from US university</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Academic transcripts (all levels)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>GRE / GMAT / SAT score report (if applicable)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>English proficiency certificate (TOEFL 80+ / IELTS 6.5+)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial Evidence
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Bank statements (personal and/or parents) — must cover full tuition + living
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Affidavit of support (if parents/sponsor is paying)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Scholarship or financial aid letter (if applicable)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Evidence of ties to Nepal (property, business, family)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  CANADA  */}
              <div
                className={`country-section${activeCountry === 'ca' ? ' active' : ''}`}
                id="country-ca"
              >
                <div className="country-header">
                  <div className="country-flag">🇨🇦</div>
                  <div className="country-title">
                    <h2>Canada — Student Visa (Study Permit)</h2>
                    <p>Applied online via IRCC. Processing: 8–12 weeks. Biometrics required.</p>
                    <span className="visa-type-badge">Study Permit</span>
                  </div>
                </div>
                <div className="important-note">
                  <strong>⚠️ Letter of Acceptance Required:</strong> You need a Letter of Acceptance
                  from a Designated Learning Institution (DLI) in Canada before applying. Ensure
                  your institution is a DLI.
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Letter of Acceptance from a Designated Learning Institution (DLI)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Completed online study permit application (via IRCC)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Biometric enrolment (at VFS centre in Kathmandu)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Statement of Purpose / Letter of Intent</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Proof of funds: CAD 22,895/year living amount for one applicant + tuition
                        fees
                      </div>
                      <span className="item-note">
                        Bank statements, GIC, or combination. GIC (Guaranteed Investment
                        Certificate) is strongly recommended.
                      </span>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>GIC certificate (if using — current IRCC-required amount)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Tuition fee payment receipt (first semester/year)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Sponsor's financial documents (if applicable)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-graduation-cap"></i>Academic Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Academic transcripts and certificates</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>English proficiency certificate (IELTS 6.0+ / TOEFL 80+)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  SOUTH KOREA  */}
              <div
                className={`country-section${activeCountry === 'kr' ? ' active' : ''}`}
                id="country-kr"
              >
                <div className="country-header">
                  <div className="country-flag">🇰🇷</div>
                  <div className="country-title">
                    <h2>South Korea — D-2 Student Visa</h2>
                    <p>Applied at Korean Embassy in Kathmandu. Processing: 2–4 weeks</p>
                    <span className="visa-type-badge">D-2 Student Visa</span>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Visa application form (Standard application form)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Admission letter from Korean university</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport (+ copy of data page)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Passport-size photos</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        TOPIK certificate (if Korean proficiency required) or English proficiency
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial & Academic
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Bank statement — KRW 20,000,000 equivalent minimum</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>KGSP scholarship letter (if KGSP applicant)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Academic transcripts and certificates (attested)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Study plan (in Korean or English)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  GERMANY  */}
              <div
                className={`country-section${activeCountry === 'de' ? ' active' : ''}`}
                id="country-de"
              >
                <div className="country-header">
                  <div className="country-flag">🇩🇪</div>
                  <div className="country-title">
                    <h2>Germany — Student Visa (Studentenvisum)</h2>
                    <p>
                      Applied at German Embassy, New Delhi (or via VFS Kathmandu). Processing: 4–12
                      weeks
                    </p>
                    <span className="visa-type-badge">National Visa D (Student)</span>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-file-alt"></i>Core Documents
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Visa application form (completed and signed)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Admission letter / enrollment confirmation from German university</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Valid passport</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        German language proficiency (B2+ for German-taught; TestDaF 4/DSH-2)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>English language proof (for English-taught programs)</div>
                    </div>
                  </div>
                </div>
                <div className="checklist-category">
                  <h3>
                    <i className="fas fa-money-bill-wave"></i>Financial & Academic
                  </h3>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Blocked account (Sperrkonto) with €11,904 for one year — from approved
                        providers (Deutsche Bank, Fintiba, Expatrio, etc.)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>
                        Academic transcripts (must be APS certified if Indian education system
                        background)
                      </div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Motivation letter (Motivationsschreiben)</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>CV / Resume</div>
                    </div>
                  </div>
                  <div
                    className="checklist-item"
                    onClick={(e) => {
                      if (e.target.tagName !== 'INPUT') toggleCheck(e.currentTarget);
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        syncChecklistItem(e.currentTarget.closest('.checklist-item'))
                      }
                    />
                    <div>
                      <div>Health insurance confirmation (German public or private)</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  General warning  */}
              <div
                style={{
                  background: '#f5f7ff',
                  borderRadius: '14px',
                  padding: '24px',
                  marginTop: '8px',
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <i
                  className="fas fa-info-circle"
                  style={{ fontSize: '24px', color: '#293294', flexShrink: '0', marginTop: '2px' }}
                ></i>
                <div>
                  <strong className="u-txt-p-15">Important Disclaimer</strong>
                  <p style={{ fontSize: '14px', color: '#666688', marginTop: '6px' }}>
                    Visa requirements change frequently. This checklist is a general guide based on
                    requirements for 2026 intakes. Always verify current requirements on the
                    official embassy or immigration website. Oxford International counsellors can
                    provide personalised, up-to-date guidance for your specific case.
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: 'linear-gradient(135deg,#1e2570,#293294)',
                  borderRadius: '18px',
                  padding: '32px',
                  textAlign: 'center',
                  color: '#fff',
                  marginTop: '32px',
                }}
              >
                <i
                  className="fas fa-user-check"
                  style={{
                    fontSize: '34px',
                    color: '#EBB011',
                    marginBottom: '14px',
                    display: 'block',
                  }}
                ></i>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>
                  Let Us Handle Your Visa Documents
                </h3>
                <p className="u-opacity85">
                  With a strong visa success track record, our team knows exactly what embassies
                  want to see. We review every document, help you prepare strong visa statements,
                  and prepare you for your visa interview.
                </p>
                <a href="/contact" className="u-btn-primary-sm btn btn-primary">
                  <i className="fas fa-comments"></i>Get Free Visa Consultation
                </a>
              </div>
            </div>
            {/*  Sidebar  */}
            <aside>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-globe"></i>Countries
                </h3>
                <div className="sidebar-toc">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('au');
                    }}
                  >
                    🇦🇺 Australia (Subclass 500)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('uk');
                    }}
                  >
                    🇬🇧 United Kingdom (Student Visa)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('jp');
                    }}
                  >
                    🇯🇵 Japan (Ryugaku Visa)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('us');
                    }}
                  >
                    🇺🇸 USA (F-1 Visa)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('ca');
                    }}
                  >
                    🇨🇦 Canada (Study Permit)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('kr');
                    }}
                  >
                    🇰🇷 South Korea (D-2 Visa)
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCountry('de');
                    }}
                  >
                    🇩🇪 Germany (National Visa D)
                  </a>
                </div>
              </div>
              <div className="sidebar-card">
                <h3>
                  <i className="u-gold-mr8 fas fa-link"></i>More Resources
                </h3>
                <div className="sidebar-toc">
                  <a href="/resource-sop">
                    <i className="u-icon-p18 fas fa-file-alt"></i> SOP Writing Guide
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
                </div>
              </div>
              <div className="u-btn-dark-sm sidebar-card">
                <h3 className="u-gold">High Visa Success Rate†</h3>
                <p className="u-opacity85b">
                  Our experienced counsellors have helped thousands of students with their visa
                  applications. Book a free session today.
                </p>
                <a href="/contact" className="u-btn-primary-full btn btn-primary">
                  <i className="fas fa-calendar-check"></i>Book Free Session
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
