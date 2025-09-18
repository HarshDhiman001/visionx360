import React, { useState, useRef, useEffect } from "react";
import "./index.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="vx-header">
      <div className="vx-container">
        <div className="vx-row">
          <a href="/" className="vx-brand">
            <img src="src/assets/logo.png" alt="" />
          </a>

          <nav className="vx-nav" aria-label="Main navigation">
            <ul className="vx-menu vx-desktop">
              <li><a href="/">Home</a></li>

              <li className="vx-dropdown" ref={servicesRef}>
                <button
                  className="vx-dropbtn"
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}>
                  Services <span className={`vx-caret ${servicesOpen ? "open" : ""}`}></span>
                </button>

                <ul className={`vx-submenu ${servicesOpen ? "visible" : ""}`}>
                  <li><a href="/services/branding">Branding & Strategy</a></li>
                  <li><a href="/services/digital">Digital Marketing</a></li>
                  <li><a href="/services/web">Web & Creative</a></li>
                  <li><a href="/services/analytics">Analytics & Growth</a></li>
                </ul>
              </li>

              <li><a href="/visionx">VisionX</a></li>
              <li><a href="/visionx-auri">VisionX Auri</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>

            <a href="/get-started" className="vx-cta">Get Started</a>

            <button className="vx-burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              <span className={`vx-burger-line ${open ? "open" : ""}`}></span>
              <span className={`vx-burger-line ${open ? "open" : ""}`}></span>
              <span className={`vx-burger-line ${open ? "open" : ""}`}></span>
            </button>
          </nav>
        </div>
      </div>

      {open && (
        <div className="vx-mobile-panel">
          <a href="/" className="vx-mobile-item">Home</a>

          <details className="vx-mobile-details">
            <summary>Services</summary>
            <div className="vx-mobile-sub">
              <a href="/services/branding">Branding & Strategy</a>
              <a href="/services/digital">Digital Marketing</a>
              <a href="/services/web">Web & Creative</a>
              <a href="/services/analytics">Analytics & Growth</a>
            </div>
          </details>

          <a href="/visionx" className="vx-mobile-item">VisionX</a>
          <a href="/visionx-auri" className="vx-mobile-item">VisionX Auri</a>
          <a href="/projects" className="vx-mobile-item">Projects</a>
          <a href="/blog" className="vx-mobile-item">Blog</a>
          <a href="/contact" className="vx-mobile-item">Contact</a>

          <div className="vx-mobile-cta">
            <a href="/get-started" className="vx-cta-block">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
