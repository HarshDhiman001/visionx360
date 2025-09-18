import React from "react";

export default function Services() {
  const services = [
    {
      icon: "✒️", // Replace with SVG or <img> if needed
      title: "Web Design Agency",
      desc: "As a leading web design and digital agency, our specialists ensure your website works like no other.",
    },
    {
      icon: "💻",
      title: "Mobile App Development",
      desc: "We guide you through the whole process of delivering first-class apps from start to finish.",
    },
    {
      icon: "📢",
      title: "Digital Marketing",
      desc: "Your digital presence is vital. Wherever your customers can find you, we make sure you make an impact.",
    },
  ];

  return (
    <section className="vx-services-modern">
      <div className="vx-container">
        <div className="vx-services-header">
          <div className="vx-pill">• Our Services</div>
          <h2 className="vx-services-title">What we provide</h2>
        </div>

        <div className="vx-services-grid">
          {services.map((s, i) => (
            <div className="vx-service-card" key={i}>
              <div className="vx-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="vx-service-cta">
            <div className="vx-cta-content">
              <div className="vx-pill small">• Need help</div>
              <h3>
                Free advice.
                <br /> Book a callback
              </h3>
              <button className="vx-btn vx-btn-primary">Let’s Talk →</button>
            </div>
            <div className="vx-cta-image">
              <img src="https://demo2.wpopal.com/diteck/wp-content/uploads/2024/11/h1_img-1.png" alt="Customer support" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
