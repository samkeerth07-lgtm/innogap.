import React from 'react';
import './WorkspaceDashboard.css';

const recentAnalysesData = [
  {
    id: 1,
    title: 'Detecting hallucinations in Retrieval-Augmented Generation ...',
    desc: 'Existing solutions include a financial QA system with hallucination detection, a production self-healing pipeline, an evidence-grounded r...',
    verdict: 'EXISTING',
    verdictType: 'existing',
    date: '21 Oct 2026',
    active: true,
  },
  {
    id: 2,
    title: 'Restaurants, college cafeterias, and hostels throw away lar...',
    desc: 'An existing solution, Waste2Meal, is a literature review proposing an integrated food redistribution platform that uses machine learning...',
    verdict: 'EXISTING',
    verdictType: 'existing',
    date: '21 Oct 2026',
  },
  {
    id: 3,
    title: 'Office workers and athletes chronically fail to maintain he...',
    desc: 'Existing solutions primarily consist of two categories: (1) a comprehensive intelligent thermos system integrating ultrasonic flu...',
    verdict: 'PARTIALLY EXISTING',
    verdictType: 'partial',
    date: '21 Oct 2026',
  },
  {
    id: 4,
    title: 'AI Robot that finds misplaced objects',
    desc: 'One existing solution was found: Concept-Based Anomaly Detection in Retail Stores for Automatic Correction Using Mobile R...',
    verdict: 'PARTIALLY EXISTING',
    verdictType: 'partial',
    date: '20 May 2025',
  },
  {
    id: 5,
    title: 'Smart Dustbin with Auto Waste Segregation',
    desc: 'The existing solutions use computer vision, sometimes combined with IoT, to recognize waste items, categorize them, and suppo...',
    verdict: 'HIGHLY SIMILAR',
    verdictType: 'similar',
    date: '19 May 2025',
  },
];

export default function WorkspaceDashboard() {
  return (
    <div className="inno-app-mockup" aria-hidden="true">
      {/* App Top Navigation Bar */}
      <header className="inno-app-nav">
        <div className="inno-app-logo">
          <svg className="inno-bulb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
          </svg>
          <span className="inno-brand-name">InnoGap</span>
        </div>

        <nav className="inno-app-menu">
          <div className="inno-menu-btn active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            Dashboard
          </div>
          <div className="inno-menu-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            New Analysis
          </div>
          <div className="inno-menu-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            My Analyses
          </div>
          <div className="inno-menu-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            Saved Ideas
          </div>
        </nav>

        <div className="inno-app-user">
          <div className="inno-user-avatar">U</div>
          <span className="inno-user-label">User</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </header>

      {/* Main Workspace Canvas */}
      <div className="inno-app-body">
        {/* Hero Card */}
        <div className="inno-welcome-card">
          <div className="inno-welcome-content">
            <h2 className="inno-welcome-title">Ideas into insight. Make room for what&apos;s next.</h2>
            <p className="inno-welcome-desc">
              InnoGap helps you discover existing solutions, research, projects and implementations
              before you build. Go beyond similarity — find the real gap.
            </p>
            <div className="inno-welcome-actions">
              <span className="inno-btn-primary">
                Start New Analysis &rarr;
              </span>
              <span className="inno-btn-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search ideas
              </span>
            </div>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="inno-metrics-row">
          <div className="inno-metric-card">
            <div className="inno-metric-top">
              <div className="inno-metric-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="inno-metric-arrow">↗</span>
            </div>
            <span className="inno-metric-label">Total Analyses</span>
            <div className="inno-metric-value">7</div>
            <span className="inno-metric-sub">7 analyses completed</span>
          </div>

          <div className="inno-metric-card">
            <div className="inno-metric-top">
              <div className="inno-metric-icon-box green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="inno-metric-arrow">↗</span>
            </div>
            <span className="inno-metric-label">Saved Ideas</span>
            <div className="inno-metric-value">2</div>
            <span className="inno-metric-sub">2 bookmarked ideas</span>
          </div>

          <div className="inno-metric-card">
            <div className="inno-metric-top">
              <div className="inno-metric-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span className="inno-metric-arrow">↗</span>
            </div>
            <span className="inno-metric-label">Potential Gaps</span>
            <div className="inno-metric-value">7</div>
            <span className="inno-metric-sub">7 gaps identified</span>
          </div>
        </div>

        {/* 2-Column Section: Workspace Feed & Process Timeline */}
        <div className="inno-workspace-grid">
          {/* Left Column: Recent Analyses */}
          <div className="inno-feed-card">
            <div className="inno-feed-header">
              <div>
                <span className="inno-kicker">&bull; WORKSPACE</span>
                <h3 className="inno-feed-title">Recent Analyses</h3>
                <p className="inno-feed-sub">7 analyses recorded in your workspace</p>
              </div>
              <span className="inno-link-viewall">
                View all (7) &rarr;
              </span>
            </div>

            <div className="inno-analyses-list">
              {recentAnalysesData.map((item) => (
                <div
                  key={item.id}
                  className={`inno-analysis-row ${item.active ? 'active' : ''}`}
                >
                  <div className="inno-row-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div className="inno-row-content">
                    <h4 className="inno-row-title">{item.title}</h4>
                    <p className="inno-row-desc">{item.desc}</p>
                  </div>
                  <div className="inno-row-meta">
                    <span className={`inno-verdict-badge ${item.verdictType}`}>
                      {item.verdict}
                    </span>
                    <span className="inno-row-date">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {item.date}
                    </span>
                    <span className="inno-row-arrow">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How InnoGap Works Process Card */}
          <div className="inno-process-card">
            <span className="inno-process-kicker">THE INNOGAP PROCESS</span>
            <h3 className="inno-process-title">How InnoGap Works</h3>
            <p className="inno-process-sub">From your idea to a clearer picture.</p>

            <div className="inno-process-timeline">
              <div className="inno-timeline-step">
                <div className="inno-step-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="inno-step-content">
                  <h5>01 Describe</h5>
                  <p>Tell InnoGap about your problem and proposed solution.</p>
                </div>
              </div>

              <div className="inno-timeline-step">
                <div className="inno-step-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <div className="inno-step-content">
                  <h5>02 Discover</h5>
                  <p>Search across research, open-source projects and existing solutions.</p>
                </div>
              </div>

              <div className="inno-timeline-step">
                <div className="inno-step-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="inno-step-content">
                  <h5>03 Compare</h5>
                  <p>Understand how existing solutions relate to your approach.</p>
                </div>
              </div>

              <div className="inno-timeline-step">
                <div className="inno-step-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="inno-step-content">
                  <h5>04 Identify the gap</h5>
                  <p>See what already exists and where meaningful differences remain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
