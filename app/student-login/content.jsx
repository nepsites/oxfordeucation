'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../_components/Header';
import { signInAction, signUpAction } from '../_lib/actions/auth';

export default function PageContent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('login');
  const [loginMethod, setLoginMethod] = useState('email');
  const [maintOpen, setMaintOpen] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [registerBusy, setRegisterBusy] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const switchTab = (tab) => setActiveTab(tab);
  const showMaint = () => setMaintOpen(true);
  const closeMaint = () => setMaintOpen(false);
  const switchLoginMethod = (method) => setLoginMethod(method);

  async function handleLogin(e) {
    e.preventDefault();
    if (loginMethod === 'phone') {
      // Mobile-number login needs an SMS provider we haven't set up yet.
      showMaint();
      return;
    }
    setLoginError('');
    setLoginBusy(true);
    const formData = new FormData(e.currentTarget);
    const result = await signInAction({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    setLoginBusy(false);
    if (result.error) {
      setLoginError(result.error);
      return;
    }
    router.push('/student-portal');
    router.refresh();
  }

  async function handleRegister(e) {
    e.preventDefault();
    setRegisterError('');
    setRegisterBusy(true);
    const formData = new FormData(e.currentTarget);
    const result = await signUpAction({
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
    });
    setRegisterBusy(false);
    if (result.error) {
      setRegisterError(result.error);
      return;
    }
    setRegisterSuccess(true);
  }

  useEffect(() => {
    function checkHash() {
      setActiveTab(window.location.hash === '#register' ? 'register' : 'login');
    }
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') closeMaint();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <Header />

      {/*  ANN BAR  */}

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

      {/*  TOP BAR  */}

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

      {/*  HEADER / NAV  */}

      {/*  MAINTENANCE MODAL  */}

      <div
        className={`maint-overlay${maintOpen ? ' show' : ''}`}
        id="maintOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMaint();
        }}
      >
        <div className="maint-modal">
          <div className="maint-icon">🔧</div>
          <h3>Coming Soon</h3>
          <p>
            Google sign-in and mobile number login are still being set up. Please use email &amp;
            password for now.
            <br />
            <br />
            Need help? Contact our office for assistance with your application.
          </p>
          <button className="maint-close" onClick={closeMaint}>
            <i className="fas fa-check"></i> Got it, Thanks!
          </button>
        </div>
      </div>

      {/*  HERO STRIP  */}

      <div className="login-hero">
        <div className="container">
          <div className="login-hero-inner">
            <div className="login-hero-title">
              <h1>
                Student <span>Portal</span>
              </h1>
              <p>
                Manage your study abroad journey — applications, documents & counsellor chats, all
                in one place.
              </p>
            </div>
            <div className="login-hero-breadcrumb">
              <a href="/">
                <i className="fas fa-home"></i>
              </a>
              <i className="fas fa-chevron-right"></i>
              <span>Student Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/*  MAIN SECTION  */}

      <section className="login-section" id="register">
        <div className="container">
          <div className="login-grid">
            {/*  LEFT: Features  */}
            <div className="login-features-panel">
              <h2>
                Your Study Abroad Journey,
                <br />
                <span>All in One Place</span>
              </h2>
              <p>
                Login to your personal student portal and track every step — from counselling
                session to visa approval — right from your phone or laptop.
              </p>
              <div className="feature-cards">
                <div className="fc">
                  <div className="fc-icon" style={{ background: '#eef0ff' }}>
                    <i className="fas fa-tasks" style={{ color: '#293294', fontSize: '20px' }}></i>
                  </div>
                  <div className="fc-body">
                    <strong>Live Application Tracker</strong>
                    <span>
                      Real-time status: Applied → Review → Offer → Visa → Enrolled. Never wonder
                      "what's happening?" again.
                    </span>
                  </div>
                </div>
                <div className="fc">
                  <div className="fc-icon" style={{ background: '#fff8e6' }}>
                    <i
                      className="fas fa-comments"
                      style={{ color: '#EBB011', fontSize: '20px' }}
                    ></i>
                  </div>
                  <div className="fc-body">
                    <strong>Chat with Your Counsellor</strong>
                    <span>
                      Direct messaging with your assigned counsellor — ask questions, share files,
                      get instant answers.
                    </span>
                  </div>
                </div>
                <div className="fc">
                  <div className="fc-icon" style={{ background: '#e8f8f3' }}>
                    <i
                      className="fas fa-folder-open"
                      style={{ color: '#1abc9c', fontSize: '20px' }}
                    ></i>
                  </div>
                  <div className="fc-body">
                    <strong>Secure Document Vault</strong>
                    <span>
                      Upload passport, transcripts, SOP and more. Your counsellor reviews and
                      provides feedback instantly.
                    </span>
                  </div>
                </div>
                <div className="fc">
                  <div className="fc-icon" style={{ background: '#f5f0ff' }}>
                    <i className="fas fa-bell" style={{ color: '#9b59b6', fontSize: '20px' }}></i>
                  </div>
                  <div className="fc-body">
                    <strong>Instant Notifications</strong>
                    <span>
                      Email & SMS alerts for every update — offer letters, visa approvals, document
                      requests.
                    </span>
                  </div>
                </div>
              </div>
              {/*  Stats  */}
              <div className="login-stats">
                <div className="ls-card">
                  <strong>5,000+</strong>
                  <span>Students Helped</span>
                </div>
                <div className="ls-card">
                  <strong>High</strong>
                  <span>Visa Success</span>
                </div>
                <div className="ls-card">
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="ls-card">
                  <strong>Free</strong>
                  <span>Counselling</span>
                </div>
              </div>
            </div>
            {/*  RIGHT: Login Card  */}
            <div className="login-card-wrap">
              <div className="login-card">
                <div className="lc-badge">
                  <i className="fas fa-user-circle"></i> Oxford Student Portal
                </div>
                {/*  Tabs  */}
                <div className="lc-tabs">
                  <button
                    className={`lc-tab${activeTab === 'login' ? ' active' : ''}`}
                    id="tabLogin"
                    onClick={() => switchTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`lc-tab${activeTab === 'register' ? ' active' : ''}`}
                    id="tabRegister"
                    onClick={() => switchTab('register')}
                  >
                    Register
                  </button>
                </div>
                {/*  ── LOGIN FORM ──  */}
                <div
                  className="login-form-panel"
                  id="loginPanel"
                  style={{ display: activeTab === 'login' ? 'block' : 'none' }}
                >
                  <h2>Welcome Back 👋</h2>
                  <p className="lc-sub">
                    Login to access your application status, messages, and documents.
                  </p>
                  <a
                    href="#"
                    className="btn-google"
                    onClick={(e) => {
                      e.preventDefault();
                      showMaint();
                    }}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                    Continue with Google
                  </a>
                  <div className="divider-or">OR</div>
                  {loginError && (
                    <div className="u-txt-sm-555c" style={{ color: '#c0392b', marginBottom: 12 }}>
                      <i className="fas fa-circle-exclamation"></i> {loginError}
                    </div>
                  )}
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      {/*  Toggle: Email / Mobile  */}
                      <div className="login-method-toggle">
                        <button
                          type="button"
                          className={`lmt-btn${loginMethod === 'email' ? ' active' : ''}`}
                          id="lmtEmail"
                          onClick={() => switchLoginMethod('email')}
                        >
                          <i className="fas fa-envelope"></i> Email
                        </button>
                        <button
                          type="button"
                          className={`lmt-btn${loginMethod === 'phone' ? ' active' : ''}`}
                          id="lmtPhone"
                          onClick={() => switchLoginMethod('phone')}
                        >
                          <i className="fas fa-mobile-alt"></i> Mobile No
                        </button>
                      </div>
                      {/*  Email input  */}
                      <div
                        id="loginFieldEmail"
                        style={{ display: loginMethod === 'email' ? 'block' : 'none' }}
                      >
                        <label>Email Address</label>
                        <input
                          type="email"
                          id="loginEmail"
                          name="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      {/*  Phone input  */}
                      <div
                        id="loginFieldPhone"
                        style={{ display: loginMethod === 'phone' ? 'block' : 'none' }}
                      >
                        <label>Mobile Number</label>
                        <div className="phone-input-wrap">
                          <span className="phone-prefix">+977</span>
                          <input
                            type="tel"
                            id="loginPhone"
                            name="phone"
                            placeholder="98XXXXXXXX"
                            maxLength="10"
                            inputMode="numeric"
                          />
                        </div>
                        <div className="phone-hint" id="loginPhoneHint">
                          Mobile login is coming soon — use email for now.
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="form-row">
                      <label>
                        <input type="checkbox" style={{ accentColor: '#293294' }} /> Remember me
                      </label>
                      <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn-login" disabled={loginBusy}>
                      <i className="fas fa-sign-in-alt"></i>{' '}
                      {loginBusy ? 'Logging in…' : 'Login to Portal'}
                    </button>
                  </form>
                  <p className="signup-prompt">
                    New student?{' '}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        switchTab('register');
                      }}
                    >
                      Register here
                    </a>{' '}
                    or <a href="/contact">book free counselling</a>.
                  </p>
                </div>
                {/*  ── REGISTER FORM ──  */}
                <div
                  className="register-form-panel"
                  id="registerPanel"
                  style={{ display: activeTab === 'register' ? 'block' : 'none' }}
                >
                  <h2>Create Account ✨</h2>
                  <p className="lc-sub">
                    Register to start tracking your study abroad application with Oxford
                    International.
                  </p>
                  <a
                    href="#"
                    className="btn-google"
                    onClick={(e) => {
                      e.preventDefault();
                      showMaint();
                    }}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                    Sign up with Google
                  </a>
                  <div className="divider-or">OR</div>
                  {registerSuccess ? (
                    <div className="u-txt-sm-555c" style={{ textAlign: 'center', padding: '12px 0' }}>
                      <i className="fas fa-envelope-circle-check" style={{ color: '#2e7d32' }}></i>{' '}
                      Almost there! We&apos;ve sent a confirmation link to your email — click it to
                      activate your account, then log in.
                    </div>
                  ) : (
                    <>
                      {registerError && (
                        <div
                          className="u-txt-sm-555c"
                          style={{ color: '#c0392b', marginBottom: 12 }}
                        >
                          <i className="fas fa-circle-exclamation"></i> {registerError}
                        </div>
                      )}
                      <form onSubmit={handleRegister}>
                        <div className="form-group">
                          <label>Full Name</label>
                          <input type="text" name="fullName" placeholder="Your full name" required />
                        </div>
                        <div className="form-group">
                          <label>Email Address</label>
                          <input type="email" name="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                          <label>
                            Phone Number{' '}
                            <span style={{ fontSize: '11px', color: '#aaa', fontWeight: '400' }}>
                              (Nepal mobile)
                            </span>
                          </label>
                          <div className="phone-input-wrap">
                            <span className="phone-prefix">+977</span>
                            <input
                              type="tel"
                              id="regPhone"
                              name="phone"
                              placeholder="98XXXXXXXX"
                              maxLength="10"
                              inputMode="numeric"
                              autoComplete="tel"
                            />
                          </div>
                          <div className="phone-hint" id="phoneHint"></div>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            minLength="6"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn-login"
                          style={{ marginTop: '4px' }}
                          disabled={registerBusy}
                        >
                          <i className="fas fa-user-plus"></i>{' '}
                          {registerBusy ? 'Creating account…' : 'Create Account'}
                        </button>
                      </form>
                      <p className="signup-prompt">
                        Already registered?{' '}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            switchTab('login');
                          }}
                        >
                          Login here
                        </a>
                        .
                      </p>
                    </>
                  )}
                </div>
                {/*  Security  */}
                <div className="security-badges">
                  <div className="sec-badge">
                    <i className="fas fa-lock"></i> Secure Login
                  </div>
                  <div className="sec-badge">
                    <i className="fas fa-shield-alt"></i> Data Protected
                  </div>
                  <div className="sec-badge">
                    <i className="fas fa-user-shield"></i> Private
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  TRUST STRIP  */}

      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-item">
              <i className="fas fa-university"></i> Partnered with 200+ Universities
            </div>
            <div className="trust-item">
              <i className="u-gold fas fa-star"></i> 4.9 ★ Rated Consultancy
            </div>
            <div className="trust-item">
              <i className="fas fa-user-graduate"></i> 5000+ Students Guided Abroad
            </div>
            <div className="trust-item">
              <i className="fas fa-certificate"></i> Registered & Certified Since 2015
            </div>
            <div className="trust-item">
              <i className="fas fa-headset"></i> Free Counselling Available
            </div>
          </div>
        </div>
      </div>

      {/*  FOOTER (minimal)  */}

      <footer
        style={{
          background: '#1a1f5e',
          color: 'rgba(255,255,255,.6)',
          textAlign: 'center',
          padding: '20px',
          fontSize: '13px',
        }}
      >
        © 2026 Oxford International Education Centre &amp; Consultancy. All rights reserved.
        &nbsp;|&nbsp;
        <a href="/" style={{ color: '#EBB011', textDecoration: 'none' }}>
          Back to Website
        </a>
      </footer>
    </>
  );
}
