import React from "react";

const IMG =
  "https://i.pinimg.com/1200x/49/22/3c/49223c4160a61dadc6556851bcc39c32.jpg";

const thumbs = new Array(14).fill(IMG).map((img, i) => ({ id: i + 1, img }));

export default function Trusted() {
  return (
    <section className="vx-trusted-wrap">
      <div className="vx-trusted-card">
        {/* floating thumbnails area */}
        <div className="vx-thumbs">
          {thumbs.map((t, i) => (
            <div key={t.id} className={`vx-thumb vx-thumb-${(i % 7) + 1}`}>
              <img src={t.img} alt={`leader ${t.id}`} />
            </div>
          ))}

          {/* faint vertical guide lines (decorative) */}
          <div className="vx-lines">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* text area */}
        <div className="vx-trusted-body">
          <span className="vx-trusted-badge">Testimonials</span>
          <h2 className="vx-trusted-title">
            Trusted by leaders <br /> from various industries
          </h2>
          <p className="vx-trusted-desc">
            Learn why professionals trust our solutions to complete their customer journeys.
          </p>
          <div className="vx-trusted-cta">
            <button className="vx-btn-primary">Read Success Stories →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
