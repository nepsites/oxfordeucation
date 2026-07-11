'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '../_lib/supabase/client';

function NavLink({ href, active, children }) {
  return (
    <a href={href} className={`nav-link${active ? ' active' : ''}`}>
      {children}
    </a>
  );
}

export default function Header() {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const portalRef = useRef(null);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href === '/blog') return pathname === '/blog' || pathname.startsWith('/blog-');
    return pathname === href;
  };

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (portalRef.current && !portalRef.current.contains(e.target)) {
        setPortalOpen(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPortalOpen(false);
  }, [pathname]);

  const firstName = (user?.user_metadata?.full_name || user?.email || '').split(' ')[0];

  async function handleLogout(e) {
    e.preventDefault();
    const supabase = createClient();
    await supabase.auth.signOut();
    setPortalOpen(false);
    setMobileOpen(false);
    router.push('/');
    router.refresh();
  }

  return (
    <header id="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="logo">
            <div className="logo-icon">
              <Image
                src="/images/logo.png"
                alt="Oxford International Education Centre Logo"
                width={52}
                height={52}
              />
            </div>
            <div className="logo-text">
              <div className="name">
                Oxford <span>International</span>
              </div>
              <div className="tagline">Education Centre &amp; Consultancy</div>
            </div>
          </a>

          <nav>
            <NavLink href="/" active={isActive('/')}>
              Home
            </NavLink>

            <div className="nav-item">
              <NavLink href="/about" active={isActive('/about')}>
                About Us <i className="fas fa-chevron-down nav-caret"></i>
              </NavLink>
              <div className="nav-dropdown">
                <a href="/about" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <strong>About Oxford</strong>
                    <span>Our story &amp; milestones since 2015</span>
                  </div>
                </a>
                <a href="/about#mission" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div>
                    <strong>Vision &amp; Mission</strong>
                    <span>Our values, goals &amp; objectives</span>
                  </div>
                </a>
                <div className="nav-dd-divider"></div>
                <a href="/team" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <strong>Our Team</strong>
                    <span>Expert counsellors &amp; trainers</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="nav-item">
              <NavLink href="/services" active={isActive('/services')}>
                Our Services <i className="fas fa-chevron-down nav-caret"></i>
              </NavLink>
              <div className="nav-dropdown nav-mega">
                <div className="nav-mega-grid">
                  <div>
                    <div className="nav-mega-col-title">
                      <i className="fas fa-globe"></i>Study Abroad
                    </div>
                    <a href="/country-australia" className="nav-dd-item">
                      <div className="nav-dd-icon">🇦🇺</div>
                      <div>
                        <strong>Australia</strong>
                        <span>Universities &amp; scholarships</span>
                      </div>
                    </a>
                    <a href="/country-uk" className="nav-dd-item">
                      <div className="nav-dd-icon">🇬🇧</div>
                      <div>
                        <strong>United Kingdom</strong>
                        <span>World-class education</span>
                      </div>
                    </a>
                    <a href="/country-japan" className="nav-dd-item">
                      <div className="nav-dd-icon">🇯🇵</div>
                      <div>
                        <strong>Japan</strong>
                        <span>MEXT &amp; Monbukagakusho</span>
                      </div>
                    </a>
                    <a href="/country-usa" className="nav-dd-item">
                      <div className="nav-dd-icon">🇺🇸</div>
                      <div>
                        <strong>USA / Canada</strong>
                        <span>Ivy League &amp; beyond</span>
                      </div>
                    </a>
                  </div>
                  <div>
                    <div className="nav-mega-col-title">
                      <i className="fas fa-chalkboard-teacher"></i>Courses &amp; Training
                    </div>
                    <a href="/service-language" className="nav-dd-item">
                      <div className="nav-dd-icon">
                        <i className="u-fs14 fas fa-language"></i>
                      </div>
                      <div>
                        <strong>Language Courses</strong>
                        <span>English, Japanese, Korean…</span>
                      </div>
                    </a>
                    <a href="/service-test-prep" className="nav-dd-item">
                      <div className="nav-dd-icon">
                        <i className="u-fs14 fas fa-pen-nib"></i>
                      </div>
                      <div>
                        <strong>IELTS / TOEFL Prep</strong>
                        <span>Proven Score Improvement</span>
                      </div>
                    </a>
                    <a href="/service-computer" className="nav-dd-item">
                      <div className="nav-dd-icon">
                        <i className="u-fs14 fas fa-laptop"></i>
                      </div>
                      <div>
                        <strong>Computer Courses</strong>
                        <span>Basic to advanced IT</span>
                      </div>
                    </a>
                    <a href="/service-tuition" className="nav-dd-item">
                      <div className="nav-dd-icon">
                        <i className="u-fs14 fas fa-book"></i>
                      </div>
                      <div>
                        <strong>Tuition Classes</strong>
                        <span>SLC, +2, BBA &amp; MBA</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="nav-mega-footer">
                  <span className="u-txt-xs-muted3">
                    🎓 Free initial counselling for all abroad services
                  </span>
                  <a href="/services">
                    All Services <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <NavLink href="/team" active={isActive('/team')}>
              Our Team
            </NavLink>

            <div className="nav-item">
              <NavLink href="/students" active={isActive('/students')}>
                Students <i className="fas fa-chevron-down nav-caret"></i>
              </NavLink>
              <div className="nav-dropdown">
                <a href="/students" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div>
                    <strong>Success Stories</strong>
                    <span>Student journeys, outcomes, and testimonials</span>
                  </div>
                </a>
                <a href="/gallery" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  <div>
                    <strong>Photo Gallery</strong>
                    <span>Events, orientations &amp; farewells</span>
                  </div>
                </a>
                <div className="nav-dd-divider"></div>
                <a href="/students#resources" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-download"></i>
                  </div>
                  <div>
                    <strong>Resources &amp; Downloads</strong>
                    <span>Checklists, guides &amp; forms</span>
                  </div>
                </a>
              </div>
            </div>

            <NavLink href="/gallery" active={isActive('/gallery')}>
              Gallery
            </NavLink>

            <div className="nav-item">
              <NavLink href="/blog" active={isActive('/blog')}>
                Blog <i className="fas fa-chevron-down nav-caret"></i>
              </NavLink>
              <div className="nav-dropdown">
                <a href="/blog" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <div>
                    <strong>All Articles</strong>
                    <span>Latest news &amp; tips</span>
                  </div>
                </a>
                <a href="/blog-australia-visa" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-passport"></i>
                  </div>
                  <div>
                    <strong>Visa Guides</strong>
                    <span>Australia, UK, Japan &amp; more</span>
                  </div>
                </a>
                <a href="/blog-japan-scholarship" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div>
                    <strong>Scholarship Tips</strong>
                    <span>Funding &amp; opportunities</span>
                  </div>
                </a>
                <div className="nav-dd-divider"></div>
                <a href="/blog-ielts-tips" className="nav-dd-item">
                  <div className="nav-dd-icon">
                    <i className="fas fa-pen-alt"></i>
                  </div>
                  <div>
                    <strong>IELTS Tips</strong>
                    <span>Score 7+ strategies</span>
                  </div>
                </a>
              </div>
            </div>

            <NavLink href="/contact" active={isActive('/contact')}>
              Contact Us
            </NavLink>
          </nav>

          <div className="header-cta">
            <div
              className={`u-portal-btn-wrap portal-menu${portalOpen ? ' open' : ''}`}
              ref={portalRef}
            >
              <button
                type="button"
                className="u-portal-btn portal-menu-btn"
                onClick={() => setPortalOpen((v) => !v)}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f0f2ff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#fff';
                }}
              >
                <i className="fas fa-user-circle"></i>{' '}
                {user ? `Welcome, ${firstName}` : 'Student Portal'}{' '}
                <i className="u-txt-sm-10 fas fa-chevron-down"></i>
              </button>
              <div
                className="u-portal-dd portal-dropdown"
                style={{ display: portalOpen ? 'block' : 'none' }}
              >
                {user ? (
                  <>
                    <a
                      href="/student-portal"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '13px 18px',
                        color: '#1a1a3a',
                        fontSize: 13.5,
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderBottom: '1px solid #f0f2f8',
                        transition: '.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#f5f7ff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <i className="u-icon-p16 fas fa-th-large"></i> My Portal
                    </a>
                    <a
                      href="#"
                      onClick={handleLogout}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '13px 18px',
                        color: '#c0392b',
                        fontSize: 13.5,
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: '.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#fdecea';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <i className="u-icon-g16 fas fa-sign-out-alt"></i> Logout
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="/student-login"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '13px 18px',
                        color: '#1a1a3a',
                        fontSize: 13.5,
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderBottom: '1px solid #f0f2f8',
                        transition: '.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#f5f7ff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <i className="u-icon-p16 fas fa-sign-in-alt"></i> Student Login
                    </a>
                    <a
                      href="/student-login#register"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '13px 18px',
                        color: '#1a1a3a',
                        fontSize: 13.5,
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: '.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#f5f7ff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <i className="u-icon-g16 fas fa-user-plus"></i> Register
                    </a>
                  </>
                )}
              </div>
            </div>
            <button
              type="button"
              className="hamburger"
              id="hamburger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} id="mobileNav">
        <div className="container">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Our Services</a>
          <a href="/team">Our Team</a>
          <a href="/students">Students</a>
          <a href="/gallery">Gallery</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
          <div className="u-dd-sep">
            {user ? (
              <>
                <a className="u-flex-link" href="/student-portal">
                  <i className="fas fa-th-large"></i> Welcome, {firstName}
                </a>
                <a className="u-flex-link-gold" href="#" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a>
              </>
            ) : (
              <>
                <a className="u-flex-link" href="/student-login">
                  <i className="fas fa-sign-in-alt"></i> Student Login
                </a>
                <a className="u-flex-link-gold" href="/student-login#register">
                  <i className="fas fa-user-plus"></i> Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
