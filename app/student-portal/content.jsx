'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signOutAction } from '../_lib/actions/auth';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: 'fas fa-th-large', href: '#' },
  { label: 'My Applications', icon: 'fas fa-tasks', href: '#', badge: 2 },
  { label: 'Messages', icon: 'fas fa-comments', href: '#', badge: 3 },
  { label: 'Documents', icon: 'fas fa-folder-open', href: '#' },
];

const APPLICATIONS = [
  {
    flag: 'AU',
    university: 'Monash University',
    country: 'Australia',
    status: { label: 'Offer Received', variant: 'green' },
    steps: [
      { label: 'Counselling', state: 'done' },
      { label: 'Documents', state: 'done' },
      { label: 'Applied', state: 'done' },
      { label: 'Under Review', state: 'done' },
      { label: 'Offer Letter', state: 'active', icon: 'fa-envelope-open' },
      { label: 'Fee Payment', state: 'pending', icon: 'fa-file-invoice-dollar' },
      { label: 'Visa', state: 'pending', icon: 'fa-passport' },
      { label: 'Enrolled', state: 'pending', icon: 'fa-graduation-cap' },
    ],
  },
  {
    flag: 'CA',
    university: 'University of Toronto',
    country: 'Canada',
    status: { label: 'Under Review', variant: 'blue' },
    steps: [
      { label: 'Counselling', state: 'done' },
      { label: 'Documents', state: 'done' },
      { label: 'Applied', state: 'done' },
      { label: 'Under Review', state: 'active', icon: 'fa-hourglass-half' },
      { label: 'Offer Letter', state: 'pending', icon: 'fa-envelope-open' },
      { label: 'Fee Payment', state: 'pending', icon: 'fa-file-invoice-dollar' },
      { label: 'Visa', state: 'pending', icon: 'fa-passport' },
      { label: 'Enrolled', state: 'pending', icon: 'fa-graduation-cap' },
    ],
  },
];

const TASKS = [
  { title: 'Confirm Monash offer acceptance', due: 'Due Friday, June 30', state: 'overdue' },
  { title: 'Submit bank statement (last 6 months)', due: 'Due in 3 days', state: 'pending' },
  { title: 'Book IELTS retake for Toronto application', due: 'Due in 1 week', state: 'pending' },
  { title: 'Upload passport copy', due: 'Completed', state: 'done' },
];

const NOTIFICATIONS = [
  {
    icon: 'fa-envelope-open',
    color: '#e6a100',
    bg: '#fff3cd',
    title: 'Offer Letter Received',
    text: 'Monash University sent your offer',
    time: '2 hours ago',
  },
  {
    icon: 'fa-comments',
    color: '#3498db',
    bg: '#cce5ff',
    title: 'New Message from Sarita',
    text: 'Document checklist uploaded',
    time: '45 min ago',
  },
  {
    icon: 'fa-check-circle',
    color: '#27ae60',
    bg: '#d4edda',
    title: 'Passport Approved',
    text: 'Your passport copy was verified',
    time: 'Yesterday',
  },
  {
    icon: 'fa-university',
    color: '#8e44ad',
    bg: '#f4ecf7',
    title: 'Application Submitted',
    text: 'Toronto application sent successfully',
    time: '3 days ago',
  },
];

function initialsOf(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');
}

export default function PageContent({ user }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [signingOut, setSigningOut] = useState(false);

  const fullName = user?.user_metadata?.full_name || user?.email || 'Student';
  const email = user?.email || '';
  const initials = initialsOf(fullName);
  const firstName = fullName.split(' ')[0];

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const selectNav = (label) => {
    setActiveNav(label);
    if (typeof window !== 'undefined' && window.innerWidth <= 900) setSidebarOpen(false);
  };

  async function handleSignOut(e) {
    e.preventDefault();
    setSigningOut(true);
    await signOutAction();
    router.push('/student-login');
    router.refresh();
  }

  return (
    <>
      {/*  ── SIDEBAR ──  */}

      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        id="sidebarOverlay"
        onClick={toggleSidebar}
      ></div>

      <div className={`sidebar${sidebarOpen ? ' open' : ''}`} id="portalSidebar">
        <div className="sidebar-logo">
          <a href="/" className="sidebar-brand">
            <div className="logo-icon">
              <Image src="/images/logo.png" alt="Oxford International" width={52} height={52} />
            </div>
            <div className="logo-text">
              <div className="name">
                Oxford <span>International</span>
              </div>
              <div className="tagline">Student Portal</div>
            </div>
          </a>
        </div>
        <nav className="sidebar-nav">
          <div className="portal-nav-section">
            <div className="portal-nav-section-label">Main</div>
            {NAV_ITEMS.map((item) => (
              <a
                href={item.href}
                key={item.label}
                className={`portal-nav-item${activeNav === item.label ? ' active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  selectNav(item.label);
                }}
              >
                <span className="icon">
                  <i className={item.icon}></i>
                </span>{' '}
                {item.label}{' '}
                {item.badge ? <span className="portal-nav-badge">{item.badge}</span> : null}
              </a>
            ))}
          </div>
          <div className="portal-nav-section">
            <div className="portal-nav-section-label">Resources</div>
            <a href="/services" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-globe"></i>
              </span>{' '}
              Destinations
            </a>
            <a href="/service-test-prep" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-book-open"></i>
              </span>{' '}
              Test Prep
            </a>
            <a href="/blog" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-newspaper"></i>
              </span>{' '}
              Guides & Blog
            </a>
          </div>
          <div className="portal-nav-section">
            <div className="portal-nav-section-label">Account</div>
            <a href="#" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-user-circle"></i>
              </span>{' '}
              My Profile
            </a>
            <a href="#" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-bell"></i>
              </span>{' '}
              Notifications <span className="portal-nav-badge">5</span>
            </a>
            <a href="#" className="portal-nav-item">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>{' '}
              Settings
            </a>
          </div>
        </nav>
        <div className="sidebar-user">
          <div className="sidebar-user-inner">
            <div className="user-avatar">{initials}</div>
            <div className="user-info">
              <strong>{fullName}</strong>
              <span>{email}</span>
            </div>
          </div>
          <a href="/student-login" className="sidebar-logout" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i> {signingOut ? 'Signing out…' : 'Sign out'}
          </a>
        </div>
      </div>

      {/*  ── MAIN ──  */}

      <div className="main">
        <div className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" id="sidebarToggle" onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </button>
            <div>
              <div className="topbar-title">Student Dashboard</div>
              <div className="topbar-subtitle">Track applications, tasks, and documents</div>
            </div>
          </div>
          <div className="topbar-right">
            <div
              className="notif-btn"
              onClick={(e) => {
                alert('You have 5 new notifications');
              }}
            >
              <i className="fas fa-bell"></i>
              <div className="notif-dot"></div>
            </div>
            <div className="topbar-user">
              <div className="topbar-avatar">{initials}</div>
              <span>{firstName}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="content">
          {/*  Hero  */}
          <div className="portal-hero">
            <div className="hero-left">
              <div className="hero-kicker">
                <i className="fas fa-compass"></i>
                Admissions workspace
              </div>
              <h3>Welcome back, {firstName}</h3>
              <p>
                Your Monash University application has a new update — offer letter received! You
                have 2 active applications and 1 task overdue.
              </p>
            </div>
            <div className="hero-progress">
              <div className="hero-ring" style={{ '--pct': '62%' }}>
                <span>62%</span>
              </div>
              <div className="hero-progress-label">
                <strong>Monash Application</strong>
                <span>5 of 8 steps complete</span>
              </div>
              <a href="#" className="hero-cta" onClick={(e) => e.preventDefault()}>
                <i className="fas fa-arrow-right"></i> Continue
              </a>
            </div>
          </div>

          {/*  Applications  */}
          <div className="section-label">My Applications</div>
          <div className="app-list">
            {APPLICATIONS.map((app) => (
              <div className="app-card" key={app.university}>
                <div className="app-card-top">
                  <div className="app-card-uni">
                    <div className="app-flag">{app.flag}</div>
                    <div>
                      <strong>{app.university}</strong>
                      <span>{app.country}</span>
                    </div>
                  </div>
                  <span className={`app-status-pill ${app.status.variant}`}>
                    <i className="fas fa-circle" style={{ fontSize: '6px' }}></i> {app.status.label}
                  </span>
                </div>
                <div className="pipeline-steps">
                  {app.steps.map((step) => (
                    <div className={`pstep ${step.state}`} key={step.label}>
                      <div className="pstep-dot">
                        <i
                          className={`fas ${step.state === 'done' ? 'fa-check' : step.icon || 'fa-circle'}`}
                        ></i>
                      </div>
                      <div className="pstep-label">{step.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/*  Stats  */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="icon" style={{ background: '#eaf7ef' }}>
                <i className="fas fa-file-alt" style={{ color: '#27ae60' }}></i>
              </div>
              <div className="num">2</div>
              <div className="lbl">Active Applications</div>
            </div>
            <div className="stat-card">
              <div className="icon" style={{ background: '#f4f5f6' }}>
                <i className="fas fa-comments" style={{ color: '#888' }}></i>
              </div>
              <div className="num">3</div>
              <div className="lbl">Unread Messages</div>
            </div>
            <div className="stat-card">
              <div className="icon" style={{ background: '#eafaf1' }}>
                <i className="fas fa-folder-open" style={{ color: '#27ae60' }}></i>
              </div>
              <div className="num">7</div>
              <div className="lbl">Documents Uploaded</div>
            </div>
            <div className="stat-card">
              <div className="icon" style={{ background: '#fdedec' }}>
                <i className="fas fa-bell" style={{ color: '#e74c3c' }}></i>
              </div>
              <div className="num" style={{ color: '#e74c3c' }}>
                5
              </div>
              <div className="lbl">New Notifications</div>
            </div>
          </div>
          {/*  Main grid  */}
          <div className="grid-2">
            {/*  Main column: Tasks  */}
            <div className="main-col">
              <div className="card">
                <div className="card-header">
                  <h4>
                    <i
                      className="fas fa-list-check"
                      style={{ color: '#27ae60', marginRight: '7px' }}
                    ></i>
                    Upcoming Tasks
                  </h4>
                  <a href="#">View all</a>
                </div>
                <div className="task-list">
                  {TASKS.map((task) => (
                    <div className={`task-item ${task.state}`} key={task.title}>
                      <div className="task-check">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="task-body">
                        <div className="task-title">{task.title}</div>
                        <div className="task-due">{task.due}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>
                    <i className="fas fa-bell" style={{ color: '#27ae60', marginRight: '7px' }}></i>
                    Recent Alerts
                  </h4>
                  <a href="#">Mark all read</a>
                </div>
                <div className="notif-list">
                  {NOTIFICATIONS.map((n) => (
                    <div className="notif-item" key={n.title}>
                      <div className="notif-icon" style={{ background: n.bg }}>
                        <i className={`fas ${n.icon}`} style={{ color: n.color }}></i>
                      </div>
                      <div className="notif-text">
                        <strong>{n.title}</strong>
                        <span>{n.text}</span>
                        <span className="notif-time">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*  Side column: Counsellor, Messages, Documents  */}
            <div className="side-col">
              <div className="card">
                <div className="card-header">
                  <h4>
                    <i
                      className="fas fa-user-tie"
                      style={{ color: '#27ae60', marginRight: '7px' }}
                    ></i>
                    Your Counsellor
                  </h4>
                </div>
                <div className="counsellor-card">
                  <div className="counsellor-avatar">SK</div>
                  <div>
                    <div className="c-name">Sarita KC</div>
                    <div className="c-role">
                      <span className="online-dot"></span>Online now
                    </div>
                  </div>
                </div>
                <div className="counsellor-actions">
                  <a href="#" className="primary" onClick={(e) => e.preventDefault()}>
                    <i className="fas fa-comment"></i> Message
                  </a>
                  <a href="/contact" className="outline">
                    <i className="fas fa-calendar"></i> Book Session
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>
                    <i
                      className="fas fa-comments"
                      style={{ color: '#27ae60', marginRight: '7px' }}
                    ></i>
                    Messages
                  </h4>
                  <a href="#">View all</a>
                </div>
                <div className="msg-preview-list">
                  <div className="msg-preview-item">
                    <div className="msg-avatar" style={{ background: '#d0d4f0', color: '#555' }}>
                      SK
                    </div>
                    <div className="msg-preview-body">
                      <div className="msg-preview-meta">Sarita KC · 2 hours ago</div>
                      <div className="msg-preview-text">
                        Your offer letter from Monash University has arrived! 🎉 Please review and
                        confirm acceptance by Friday, June 30.
                      </div>
                    </div>
                  </div>
                  <div className="msg-preview-item">
                    <div className="msg-avatar" style={{ background: '#d0d4f0', color: '#555' }}>
                      SK
                    </div>
                    <div className="msg-preview-body">
                      <div className="msg-preview-meta">Sarita KC · 45 min ago</div>
                      <div className="msg-preview-text">
                        You&apos;ll need: 1) Genuine Student responses, 2) Tuition fee confirmation,
                        3) Bank statement (last 6 months).
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>
                    <i
                      className="fas fa-folder-open"
                      style={{ color: '#27ae60', marginRight: '7px' }}
                    ></i>
                    Documents
                  </h4>
                  <a href="#">Manage</a>
                </div>
                <div className="doc-summary">
                  <span>Review progress</span>
                  <strong>3 of 4 approved</strong>
                </div>
                <div className="doc-progress-track">
                  <div className="doc-progress-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="doc-list">
                  <div className="doc-item">
                    <div className="doc-left">
                      <i className="u-red-18 fas fa-file-pdf"></i>
                      <div>
                        <div className="doc-name">Offer Letter - Monash.pdf</div>
                        <div className="doc-size">245 KB</div>
                      </div>
                    </div>
                    <span className="doc-status ds-new">New</span>
                  </div>
                  <div className="doc-item">
                    <div className="doc-left">
                      <i className="u-red-18 fas fa-file-pdf"></i>
                      <div>
                        <div className="doc-name">GS Checklist.pdf</div>
                        <div className="doc-size">89 KB</div>
                      </div>
                    </div>
                    <span className="doc-status ds-pending">Pending</span>
                  </div>
                  <div className="doc-item">
                    <div className="doc-left">
                      <i
                        className="fas fa-file-image"
                        style={{ color: '#3498db', fontSize: '18px' }}
                      ></i>
                      <div>
                        <div className="doc-name">Passport Copy.jpg</div>
                        <div className="doc-size">1.2 MB</div>
                      </div>
                    </div>
                    <span className="doc-status ds-approved">Approved</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="upload-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Upload feature coming soon!');
                  }}
                >
                  <i className="fas fa-cloud-upload-alt"></i> Upload Document
                </a>
              </div>
            </div>
          </div>
          {/*  Footer  */}
          <div className="portal-footer">
            Oxford International Education Centre & Consultancy · Sukedhara Chowk, Kathmandu ·
            <a href="tel:+9779851158991">+977 9851158991</a> ·<a href="/">Back to Website</a>
          </div>
        </div>
      </div>
    </>
  );
}
