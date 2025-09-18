import React from "react";
import ceo from "./assets/ceo.jpeg";

/*
  Usage:
  - Place team images in public/images/ (e.g. public/images/team1.jpg, team2.jpg ...)
  - Or change image paths below to import from src/assets if you prefer bundling.
*/

const members = [
  { name: "Harsh D.", role: "Founder - CEO", img: ceo },
  { name: "Preeti D.", role: "Co-Founder - COO", img: ceo },
  { name: "Guy Hawkins", role: "Executive Admin", img: "https://i.pinimg.com/1200x/49/22/3c/49223c4160a61dadc6556851bcc39c32.jpg" },
  { name: "Cody Fisher", role: "Office Manager", img: "https://i.pinimg.com/1200x/49/22/3c/49223c4160a61dadc6556851bcc39c32.jpg" },
];

export default function Team() {
  return (
    <section className="vx-team">
      <div className="vx-container vx-team-wrap">
        <div className="vx-team-header">
          <div className="vx-pill small">• Our expert crew</div>

          <h2 className="vx-team-title">
            Meet the <br />
            leadership team
          </h2>

          <p className="vx-team-desc">
            We are all passionate and committed to deliver high quality services to our
            clients.
          </p>
        </div>

        <div className="vx-team-grid">
          {members.map((m, idx) => (
            <article className="vx-member-card" key={m.name}>
              <div className="vx-member-media" style={{ backgroundImage: `url(${m.img})` }} />
              <div className="vx-member-footer">
                <div className="vx-member-name">{m.name}</div>
                <div className="vx-member-role">{m.role}</div>
              </div>

              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
