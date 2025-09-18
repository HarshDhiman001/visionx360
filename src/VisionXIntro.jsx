import React from "react";
// Put the mascot or hero image in public/images/visionx-mascot.png (or adjust path)

export default function VisionXIntro() {
  const tags = ["Creative", "Futurism", "Steampunk", "Gothic", "Space"];

  return (
    <>
    <section className="vx-visionx-hero">
      <div className="vx-container vx-visionx-inner">
        <div className="vx-visionx-left">
          <div className="vx-eyebrow">🤖 Introducing VisionX (Our AI Product)</div>

          <h1 className="vx-visionx-title">
            Create beautiful art with
            <br />
            <span className="vx-visionx-accent">Artificial Intelligence</span>
          </h1>

          <div className="vx-prompt-row">
            <input
              className="vx-prompt-input"
              placeholder="Describe what you want or hit a tag below"
              aria-label="Prompt"
            />
            <button className="vx-prompt-btn">Generate</button>
            <button className="vx-prompt-settings" title="Settings">⚙️</button>
          </div>

          <div className="vx-tags">
            {tags.map((t) => (
              <button className="vx-tag" key={t} type="button">{t}</button>
            ))}
          </div>

          <div className="vx-visionx-features">
            <p className="vx-feat-lead">
              <strong>Meet VisionX — our upcoming AI-powered study companion for NEET & JEE aspirants.</strong>
            </p>

            <ul className="vx-feat-list">
              <li>❓ Instant Doubt Solver (20 free/day, unlimited Pro)</li>
              <li>📝 Daily Assignments & Notes</li>
              <li>🧪 Mock Test Generator (Pro)</li>
              <li>🎮 Gamified with Rewards & Streaks</li>
              <li>🧘 Motivation & Stress-Relief Tools</li>
            </ul>

            <p className="vx-visionx-note">
              Launching soon — VisionX is our step into AI-driven education. <strong>👉 Stay tuned.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="img-sectionUni">
<img src="src/assets/img1.png" alt="" />
</div>
    </>
  );
}
