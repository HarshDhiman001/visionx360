import React from "react";

export default function About() {
  return (
    <section className="vx-about">
      <div className="vx-container">
        <div className="vx-about-row">
          {/* Left column: heading + text */}
          <div className="vx-about-left">
            <div className="aboutInfo">
            <div className="leftAbout">
            <h2 className="vx-about-title">Why Vixion360?</h2>
            
                 <p className="vx-about-text">
              We’re not just another agency—we’re your brand growth partner.</p> 
              <p className="vx-about-text">From research to strategy, design to marketing, we cover every angle so your business wins online and offline.
            </p>
            </div>
<div className="rightAbout">
{/*
            <ul className="vx-about-list">
              <li>We design & develop software and apps for businesses</li>
              <li>We research features, build wireframes, and test user flows</li>
              <li>We create branding, websites, and content around your product</li>
              <li>We launch & promote with ads, videos, and social media campaigns</li>
            </ul> */}
</div>
</div>
          </div>

          {/* Right column: grid of cards */}
          {/* <div className="vx-about-right">
            <div className="vx-grid">
              <div className="vx-card big stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">PROJECTS DELIVERED</div>
              </div>

              <div className="vx-card small img">
                <img src="https://i.pinimg.com/736x/78/7f/35/787f3571ea47f6d02386594b19ca635e.jpg" alt="decor" />
              </div>

              <div className="vx-card wide img">
                <img src="https://i.pinimg.com/736x/2a/93/2b/2a932b9be0ee5c03b09568467f9fbc27.jpg" alt="decor" />
              </div>

              <div className="vx-card small stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">HAPPY CLIENTS</div>
              </div>

              <div className="vx-card mid img">
                <img src="https://i.pinimg.com/736x/2a/93/2b/2a932b9be0ee5c03b09568467f9fbc27.jpg" alt="decor" />
              </div>

              <div className="vx-card tall stat right">
                <div className="stat-number">15</div>
                <div className="stat-label">YEARS OF EXPERIENCE</div>
              </div>

              <div className="vx-card mid stat bottom-right">
                <div className="stat-number">95%</div>
                <div className="stat-label">CLIENT SATISFACTION</div>
              </div>
            </div>
          </div> */}
          <div className="imgSection">
          <img src="https://emall-be87.kxcdn.com/emall/wp-content/uploads/2024/12/intro-slide.png" alt="" />
          </div>
          <div className="aboutAnother">
          <p className="vx-about-highlight">
            With Vixion360, you don’t just get a service. </p>
            <p className="vx-about-highlight">
            You get a partner who takes your idea from concept to market success.
            </p>

            <div className="vx-about-cta-row">
              <button className="vx-know-more">Know More About us</button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
