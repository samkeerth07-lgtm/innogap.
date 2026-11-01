import React, { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';

const appUrl = import.meta.env.VITE_APP_URL || (import.meta.env.DEV ? 'http://localhost:5173' : window.location.origin);

const sampleDatabase = [
  {
    results: [
      { tag: 'GitHub Repo', verdict: 'danger', label: 'Highly similar', title: 'FloraBot-AutoWater', desc: 'Open-source IoT system with automated moisture sensors and pump activation.' },
      { tag: 'Patent Index', verdict: 'success', label: 'New-looking', title: 'US Patent 9,841,201 • Drone Delivery', desc: 'Airborne fluid delivery mechanism for industrial agricultural fields.' },
    ],
    insight: 'Hardware sensor nodes are widely documented, but micro-droning for indoor plant targeting remains largely unpatented.',
  },
  {
    results: [
      { tag: 'GitHub Repo', verdict: 'danger', label: 'Highly similar', title: 'DevAI-Linter-Pro', desc: 'LLM-powered pull request auditor evaluating security and code style.' },
      { tag: 'Research Paper', verdict: 'warning', label: 'Partially existing', title: 'IEEE 2024 • Automated Static Analysis', desc: 'Neural network classification of vulnerability patterns in C++ codebase.' },
    ],
    insight: 'High density of open-source tools exists in this space. Differentiation requires specialized compliance domain knowledge.',
  },
];

const initialResults = [
  { tag: 'GitHub Repo', verdict: 'danger', label: 'Highly similar', title: 'OceanClean-Drone-V2', desc: 'Autonomous watercraft using solar arrays and fine mesh filtration for surface plastics.' },
  { tag: 'Patent Index', verdict: 'warning', label: 'Partially existing', title: 'US Patent 10,942,102 • Surface Debris Collector', desc: 'Floating skimmer utilizing solar panels for continuous harbor cleaning.' },
];

function App() {
  const [idea, setIdea] = useState('Solar powered oceanic micro-plastic cleaner');
  const [isScanning, setIsScanning] = useState(false);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [results, setResults] = useState(initialResults);
  const [insight, setInsight] = useState('Surface collection is heavily patented, but micro-particle sorting mechanisms at deep levels show substantial novelty opportunity.');
  const scanTimeout = useRef();
  const workspaceSectionRef = useRef(null);
  const previewImgRef = useRef(null);
  const headingRevealRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('heroCanvas');
    const context = canvas?.getContext('2d');
    let animationFrame;

    if (canvas && context) {
      const particles = Array.from({ length: 35 }, () => ({
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      }));

      const resizeHandler = () => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        particles.forEach((particle) => {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        });
      };

      const animateParticles = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(228, 255, 26, 0.3)';
          context.fill();

          for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
            const other = particles[nextIndex];
            const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
            if (distance < 110) {
              context.beginPath();
              context.moveTo(particle.x, particle.y);
              context.lineTo(other.x, other.y);
              context.strokeStyle = `rgba(228, 255, 26, ${0.08 * (1 - distance / 110)})`;
              context.lineWidth = 0.8;
              context.stroke();
            }
          }
        });
        animationFrame = window.requestAnimationFrame(animateParticles);
      };

      resizeHandler();
      window.addEventListener('resize', resizeHandler);
      animateParticles();
      return () => {
        window.removeEventListener('resize', resizeHandler);
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
      };
    }
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(scanTimeout.current), []);

  // Scroll-triggered rise for workspace mockup (IntersectionObserver — reliable cross-browser)
  useEffect(() => {
    const preview = previewImgRef.current;
    const heading = headingRevealRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('risen');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (heading) observer.observe(heading);
    if (preview) observer.observe(preview);

    return () => observer.disconnect();
  }, []);

  const handleScan = (event) => {
    event.preventDefault();
    if (!idea.trim()) {
      setHasError(true);
      setMessage('Add a short description of your idea to start a scan.');
      return;
    }

    setHasError(false);
    setIsScanning(true);
    setMessage('Searching indexed repositories, research papers, and patents...');
    scanTimeout.current = window.setTimeout(() => {
      const sample = sampleDatabase[Math.floor(Math.random() * sampleDatabase.length)];
      setResults(sample.results);
      setInsight(sample.insight);
      setIsScanning(false);
      setMessage(`Scan complete. ${sample.results.length} potential overlaps identified.`);
    }, 1100);
  };

  const clearValidation = () => {
    if (hasError) setHasError(false);
    if (message) setMessage('');
  };

  return (
    <div className="page">
      {/* Floating Modern Header */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <span className="logo-text">InnoGap<span className="dot-accent">.</span></span>
            <span className="badge-mono">BETA 1.0</span>
          </div>

          <div className="links">
            <a href="#workspace">Workspace</a>
            <a href="#how-it-works">Process</a>
            <a href="#evidence">Evidence</a>
            <a href="#scanner">Demo</a>
          </div>

          <div className="nav-actions">
            <a href={appUrl} className="btn-lime">
              Start Analysis &rarr;
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <canvas id="heroCanvas" aria-hidden="true" />
        <div className="hero-container">
          

          <h1 className="hero-heading">
            Before you build.<br />
            Know what <span className="highlight-lime">exists.</span>
          </h1>

          <p className="hero-sub">
            InnoGap scans millions of open-source projects, academic publications, and patent filings
            before you commit code. Go beyond surface similarity &mdash; discover the real competitive whitespace.
          </p>

          <div className="hero-ctas">
            <a href={appUrl} className="btn-lime-lg">
              Start New Analysis &rarr;
            </a>
            <a href="#workspace" className="btn-subtle">
              Explore Workspace &darr;
            </a>
          </div>

          {/* Quick Index Metrics Strip */}
          <div className="metric-strip">
            <div className="strip-item">
              <span className="strip-num">45M+</span>
              <span className="strip-label">Repositories Indexed</span>
            </div>
            <div className="strip-divider" />
            <div className="strip-item">
              <span className="strip-num">120M+</span>
              <span className="strip-label">Research Papers</span>
            </div>
            <div className="strip-divider" />
            <div className="strip-item">
              <span className="strip-num">Global</span>
              <span className="strip-label">Patent Databases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Showcase: InnoGap Workspace */}
      <section id="workspace" className="workspace-showcase">

        {/* Heading — fades + rises on scroll-into-view */}
        <div className="section-header workspace-heading-driven" ref={headingRevealRef}>
          <div className="kicker-mono">01 / UNIFIED WORKSPACE</div>
          <h2 className="heading-xl">
            Ideas into insight.<br />
            <span className="highlight-lime">Explore the workspace.</span>
          </h2>
          <p className="desc-muted">
            The actual InnoGap dashboard &mdash; built for rapid discovery, continuous tracking, and deep gap synthesis.
          </p>
        </div>

        {/* Dashboard mockup — rises on scroll-into-view, always visible */}
        <div className="workspace-preview-img-wrap" ref={previewImgRef}>
          <div className="bento-frame workspace-preview-frame-glow">
            <img
              src="/dashboard-preview.png"
              alt="InnoGap dashboard preview"
              className="workspace-preview-img"
            />
          </div>
        </div>

      </section>

      {/* Bento Grid: Process Architecture */}
      <section id="how-it-works" className="section">
        <div className="section-header reveal">
          <div className="kicker-mono">02 / THE ARCHITECTURE</div>
          <h2 className="heading-xl">From concept to clear differentiation.</h2>
          <p className="desc-muted">
            A structured 4-step pipeline designed to separate surface overlaps from genuine market white space.
          </p>
        </div>

        <div className="bento-grid reveal">
          <div className="bento-box bento-step">
            <div className="bento-step-num">01</div>
            <h3>Describe</h3>
            <p>Share your problem statement, target audience, and proposed technical architecture.</p>
            <div className="bento-tag">Natural Language Input</div>
          </div>

          <div className="bento-box bento-step">
            <div className="bento-step-num">02</div>
            <h3>Discover</h3>
            <p>InnoGap executes semantic and dense vector searches across repositories, papers, and patents.</p>
            <div className="bento-tag">Deep Multi-Index Search</div>
          </div>

          <div className="bento-box bento-step">
            <div className="bento-step-num">03</div>
            <h3>Compare</h3>
            <p>Cross-reference your methodology against existing codebase implementations and claims.</p>
            <div className="bento-tag">Overlap Matrix</div>
          </div>

          <div className="bento-box bento-step">
            <div className="bento-step-num">04</div>
            <h3>Identify Gap</h3>
            <p>Pinpoint unaddressed niches, patent white spaces, and distinct novelty factors.</p>
            <div className="bento-tag highlight">True Market Gap</div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Evidence & Verification */}
      <section id="evidence" className="section">
        <div className="section-header reveal">
          <div className="kicker-mono">03 / EVIDENCE MATRIX</div>
          <h2 className="heading-xl">
            Not just similarity scores.<br />
            <span className="highlight-lime">Verifiable evidence.</span>
          </h2>
          <p className="desc-muted">
            Inspect the underlying sources directly. Ground your product decisions on peer-reviewed research and live code.
          </p>
        </div>

        <div className="bento-grid-3 reveal">
          <div className="bento-box">
            <div className="bento-icon-sq">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3>Direct Source Indicators</h3>
            <p>Inspect exact GitHub commits, DOI paper links, and USPTO/WIPO patent IDs &mdash; with zero hallucination.</p>
          </div>

          <div className="bento-box">
            <div className="bento-icon-sq">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>Standardized Risk Ratings</h3>
            <p>Clear, categorized overlap indicators: <span className="badge-inline existing">Existing</span>, <span className="badge-inline partial">Partially Existing</span>, or <span className="badge-inline danger">Highly Similar</span>.</p>
          </div>

          <div className="bento-box">
            <div className="bento-icon-sq">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h3>Deep Gap Synthesis</h3>
            <p>Actionable narrative summaries explaining what existing solutions solved, and where your distinct edge begins.</p>
          </div>
        </div>
      </section>

      {/* Interactive Scanner */}
      <section id="scanner" className="section">
        <div className="section-header reveal">
          <div className="kicker-mono">04 / INTERACTIVE SANDBOX</div>
          <h2 className="heading-xl">Test an idea against the index.</h2>
          <p className="desc-muted">
            Try a quick scan to explore indexed research papers, open-source repositories, and patent filings.
          </p>
        </div>

        <div className="scanner-card reveal">
          <div className="scanner-top-strip">
            <span className="scanner-status-text">
              <span className="live-dot" /> LIVE RESEARCH INDEX
            </span>
            <span className="scanner-badge-coverage">45M+ REPOS &bull; 120M+ PAPERS &bull; PATENTS</span>
          </div>

          <form className="scanner-form" onSubmit={handleScan} noValidate>
            <div className="input-wrapper">
              <span className="input-search-icon" aria-hidden="true">&#128269;</span>
              <input
                id="userIdeaInput"
                className="text-input"
                type="text"
                placeholder="Describe a product, problem, or technical approach..."
                value={idea}
                maxLength={180}
                aria-describedby="scannerMessage"
                aria-invalid={hasError}
                onChange={(event) => { setIdea(event.target.value); clearValidation(); }}
              />
              <button className="btn-lime" type="submit" disabled={isScanning}>
                <span>{isScanning ? 'Scanning...' : 'Run Analysis'}</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </form>

          <p className={`scan-msg${hasError ? ' error' : ''}`} id="scannerMessage" role="status">
            {message}
          </p>

          <div className="results-deck">
            <div className="results-deck-header">
              <h4>Matched Overlaps &amp; Prior Art</h4>
              <span className="deck-count">{String(results.length).padStart(2, '0')} MATCHES</span>
            </div>

            <div className="results-list">
              {isScanning ? (
                <div className="scanning-loader">
                  <div className="spinner-dot" />
                  <span>Scanning index &amp; cross-referencing sources...</span>
                </div>
              ) : (
                results.map((result) => (
                  <div className="result-row" key={result.title}>
                    <div className="row-meta-top">
                      <span className="tag-source">{result.tag}</span>
                      <span className={`badge-verdict-clean ${result.verdict}`}>{result.label}</span>
                    </div>
                    <h5>{result.title}</h5>
                    <p>{result.desc}</p>
                  </div>
                ))
              )}
            </div>

            <div className="insight-callout">
              <div className="callout-label">
                <span className="bulb-mini">&#9889;</span>
                <span>SYNTHESIS INSIGHT</span>
              </div>
              <p>{insight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box reveal">
          <div className="kicker-mono">GET STARTED TODAY</div>
          <h2 className="cta-title">
            Have an idea?<br />
            Find out what already exists.
          </h2>
          <p className="cta-sub">
            Save weeks of redundant engineering. Validate your technical whitespace in minutes.
          </p>
          <a href={appUrl} className="btn-lime-lg">
            Start Free Analysis &rarr;
          </a>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand-side">
            <span className="footer-logo">InnoGap<span className="dot-accent">.</span></span>
            <p>Smarter research. Clearer competitive whitespace.</p>
          </div>
          <div className="footer-copy-side">
            <span>&copy; 2026 InnoGap. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
