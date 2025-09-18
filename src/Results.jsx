import React from "react";
/*
  Usage:
  - Option A (recommended): Put images in public/images/ and use /images/your-image.jpg
  - Option B: import images from src/assets and replace the img paths below.

  Example images used in this component:
   - /images/result-left.jpg
   - /images/result-right.jpg
*/

export default function Results() {
  return (
    <section className="vx-results">
      <div className="vx-container vx-results-wrap">
        <div className="vx-results-header">
          <p className="vx-results-desc">
            We deliver measurable results — projects, savings, and satisfied customers.
          </p>

          <h2 className="vx-results-title">
            Results that we
            <br />
            successfully deliver
          </h2>
<div className="vx-pill small">• Why choose us</div>

        </div>

        <div className="vx-results-grid">
          <div className="vx-card-image">
            <img src="https://i.pinimg.com/1200x/fd/96/24/fd9624ae8ebf666a6661ff666fa06c45.jpg" alt="work" />
          </div>

          <div className="vx-card-stat large">
            <div className="vx-card-sub"><span className="dot" /> projects completed</div>
            <div className="vx-big">475+</div>
            <div className="vx-small-desc">Over 400 successful projects delivered to our clients worldwide.</div>
          </div>

          <div className="vx-card-image tall">
            <img src="https://i.pinimg.com/1200x/54/92/93/549293c9cb0b3bcd5874ad38d2a5fac2.jpg" alt="team celebrating" />
          </div>

          <div className="vx-card-stat small">
            <div className="vx-card-sub"><span className="dot" /> satisfied customers</div>
            <div className="vx-big">98%</div>
            <div className="vx-small-desc">A 98% satisfaction rate across all our consulting services.</div>
          </div>

          <div className="vx-card-stat small">
            <div className="vx-card-sub"><span className="dot" /> hours saved</div>
            <div className="vx-big">843K+</div>
            <div className="vx-small-desc">Our efficiency strategies have saved clients over 800,000 hours collectively.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
