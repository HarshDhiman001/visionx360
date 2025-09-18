import React, { useEffect, useRef, useState } from "react";

const PLACEHOLDER =
  "https://i.pinimg.com/1200x/49/22/3c/49223c4160a61dadc6556851bcc39c32.jpg";

const INITIAL = [
  {
    id: 1,
    name: "Kathrine Katija",
    role: "Marketing Manager, ABC Ad Services",
    quote:
      "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI. Trust her work — the words she delivered completely transformed our brand presence.",
    img: PLACEHOLDER,
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Turner",
    role: "Head of Growth, NorthStar",
    quote:
      "Working together accelerated our roadmap and improved onboarding metrics drastically. The copy + UX changes led to better activation and retention.",
    img: PLACEHOLDER,
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia Ramirez",
    role: "Product Lead, BrightApps",
    quote:
      "We finally have a messaging strategy that communicates what we do clearly and converts. Highly professional, data-driven and thoughtful.",
    img: PLACEHOLDER,
    rating: 5,
  },
  {
    id: 4,
    name: "Aaron Lee",
    role: "Founder, Creek & Co",
    quote:
      "The collaboration produced measurable results — creative storytelling that actually improves our sales funnel and brand recall.",
    img: PLACEHOLDER,
    rating: 5,
  },
];

export default function Testimonials() {
  // thumbs array rotates; activeIndex always points to center position
  const [thumbs, setThumbs] = useState(INITIAL);
  const centerIndex = Math.floor(thumbs.length / 2);
  const [activeIndex, setActiveIndex] = useState(centerIndex);
  const intervalRef = useRef(null);
  const hoverRef = useRef(false);

  // rotate array by moving first element to end -> creates bottom->top slide illusion
  function rotateOnce(next = true) {
    setThumbs((prev) => {
      if (next) {
        const [first, ...rest] = prev;
        return [...rest, first];
      } else {
        const last = prev[prev.length - 1];
        return [last, ...prev.slice(0, prev.length - 1)];
      }
    });
  }

  // auto-rotate every n ms
  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        rotateOnce(true);
        // ensure active remains centered by resetting activeIndex to center
        setActiveIndex(centerIndex);
      }
    }, 3000);
  }
  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // When user clicks a thumbnail make it active and pause auto rotate briefly
  function selectAt(i) {
    // i is index in current thumbs array
    setActiveIndex(i);
    // If clicked not center, rotate array until clicked item becomes center
    const offset = i - centerIndex;
    if (offset > 0) {
      // clicked below center -> rotate offset times forward
      for (let k = 0; k < offset; k++) rotateOnce(true);
    } else if (offset < 0) {
      for (let k = 0; k < Math.abs(offset); k++) rotateOnce(false);
    }
    // set active to center after rotations
    setActiveIndex(centerIndex);
    // briefly pause auto rotation
    hoverRef.current = true;
    stopAuto();
    setTimeout(() => {
      hoverRef.current = false;
      startAuto();
    }, 2000);
  }

  // compute transform Y for each thumb so they look stacked vertically and animate
  // we set translateY based on (index - centerIndex) * spacing; spacing larger to emphasize slide
  const spacing = 62;

  // active testimonial content is always the center item
  const active = thumbs[centerIndex];

  return (
    <section
      className="vx-testimonial-hero"
      aria-label="Testimonials"
      onMouseEnter={() => {
        hoverRef.current = true;
        stopAuto();
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        startAuto();
      }}
    >
      <div className="vx-container vx-testimonial-wrap">
        <div className="vx-testimonial-inner">
          {/* Thumbnails column */}
          <div className="vx-thumb-column" role="tablist" aria-orientation="vertical">
            <div className="vx-thumb-stack" aria-hidden>
              {thumbs.map((t, i) => {
                const offset = i - centerIndex;
                const translateY = offset * spacing;
                const scale = i === centerIndex ? 1.12 : i === centerIndex - 1 || i === centerIndex + 1 ? 0.92 : 0.82;
                const zIndex = 50 - Math.abs(offset); // center on top
                const opacity = i === centerIndex ? 1 : 0.95 - Math.min(0.3, Math.abs(offset) * 0.08);

                return (
                  <button
                    key={t.id}
                    className={`vx-thumb-item ${i === activeIndex ? "active" : ""}`}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      transition: "transform 320ms cubic-bezier(.2,.9,.2,1), opacity 420ms",
                    }}
                    onClick={() => selectAt(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectAt(i);
                      }
                    }}
                    aria-selected={i === activeIndex}
                    tabIndex={0}
                    title={`${t.name} — ${t.role}`}
                  >
                    <img src={t.img} alt={t.name} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main testimonial panel */}
          <div
            id={`testimonial-panel`}
            className="vx-testimonial-panel"
            role="article"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote className="vx-testimonial-quote">“{active.quote}”</blockquote>

            <div className="vx-testimonial-meta">
              <div>
                <strong className="vx-testimonial-name">{active.name}</strong>
                <div className="vx-testimonial-role">{active.role}</div>
              </div>

              <div className="vx-testimonial-rating" aria-hidden>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA below */}
        <div className="vx-testimonial-cta">
          <p className="vx-small-text">See how impactful content makes a difference?</p>
          <button
            className="vx-schedule-btn"
            onClick={() => {
              window.alert("Schedule a call — replace with your link.");
            }}
          >
            SCHEDULE A CALL
          </button>
        </div>
      </div>

      <button
        className="vx-scroll-top"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </section>
  );
}
