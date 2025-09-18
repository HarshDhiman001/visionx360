import React from "react";

export function Footer() {
  return (
    <footer className="vx-footer">
      <div className="vx-footer-hero">
        <div className="vx-container">

          {/* Big heading area like "CREATIVE DIGITAL PORTFOLIO" (optional) */}
          <div className="vx-footer-hero-text">
            <h2 className="vx-hero-title">Have a product idea? Let’s build it.</h2>
            <p className="vx-hero-sub">From software to launch marketing, Vixion360 does it all.</p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="vx-footer-bar">
        <div className="vx-container vx-footer-bar-row">
          <div className="vx-copy">© {new Date().getFullYear()} VisionX360. All rights reserved.</div>
          <div className="vx-footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
