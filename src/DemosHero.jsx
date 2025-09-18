import React from "react";

const FILTERS = [
  "All Demos",
  "Clothing & Fashion",
  "Home and Decor",
  "Supermarket and Tech",
  "Health and Beauty",
  "Sports and Recreation",
  "Food and Drink",
  "Pet Supplies",
  "Accessories",
  "Coming Soon",
];

export default function DemosHero() {
  return (
    <section className="demos-hero">
      <div className="demos-hero-inner">
        {/* large faint number behind */}
        <div className="demos-hero-number" aria-hidden>
          20<span className="plus">+</span>
        </div>

        {/* content */}
        <div className="demos-hero-content">
          <h1 className="demos-title">Pre-Defined Homepage</h1>
          <p className="demos-sub">
            Prebuilt websites are designed to save you time. Import with a few clicks and customize it
            to suit your requirements.
          </p>

          {/* filter pills */}
          <div className="demos-filters" role="tablist" aria-label="Demo categories">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={`demos-pill ${i === 0 ? "active" : ""}`}
                aria-pressed={i === 0}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
