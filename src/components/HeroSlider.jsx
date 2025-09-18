import React, { useEffect, useRef, useState } from "react";
import "./HeroSlider.css";

/**
 * Simple hero slider with:
 * - fullscreen slide background
 * - left-side big heading + CTA
 * - right-side card carousel (horizontal)
 * - autoplay + pause-on-hover
 * - keyboard left/right navigation
 *
 * No external libs required.
 */

const SLIDES = [
  {
    id: "indonesia",
    titlePrefix: "Discover",
    title: "INDONESIA",
    subtitle:
      "Indonesia, a Southeast Asian nation made up of thousands of volcanic islands, is home to hundreds of ethnic groups.",
    cta: "Explore",
    bg:
      "https://ann.axiomthemes.com/wp-content/uploads/2023/02/bg_4.jpg",
    cards: [
      { id: 1, title: "Mount Bromo", place: "East Java", image: "/img1.png" },
      { id: 2, title: "Ejen Crater", place: "East Java", image: "/img2.png" },
      { id: 3, title: "Jomblang Cave", place: "East Java", image: "/img3.png" },
    ],
  },
  {
    id: "azores",
    titlePrefix: "Discover",
    title: "AZORES",
    subtitle: "An island archipelago in the mid-Atlantic. Perfect for nature lovers.",
    cta: "Explore",
    bg:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1950&q=80",
    cards: [
      { id: 1, title: "Whale Bay", place: "Azores", image: "/img4.png" },
      { id: 2, title: "Lagoa das Sete Cidades", place: "Azores", image: "/img1.png" },
      { id: 3, title: "Furnas", place: "Azores", image: "/img2.png" },
    ],
  },
  // add more slides as needed
];

export default function HeroSlider({ autoplay = true, autoplayInterval = 2000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);
  const cardsRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    if (paused) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, autoplayInterval);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, autoplayInterval, paused]);

  // keyboard
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  function next() {
    setIndex((i) => (i + 1) % SLIDES.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }

  // when slide changes, reset card scroll
  useEffect(() => {
    if (!cardsRef.current) return;
    cardsRef.current.scrollTo({ left: 0, behavior: "smooth" });
  }, [index]);

  return (
    <section
      className="vx-hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* slides (background + overlay) */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`vx-slide ${i === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${s.bg})`,
          }}
          aria-hidden={i !== index}
        >
          <div className="vx-slide-overlay" />
          <div className="vx-slide-inner container">
            {/* left hero content */}
            <div className="vx-hero-left">
              <div className="vx-hero-prefix">{s.titlePrefix}</div>
              <h1 className="vx-hero-title">{s.title}</h1>
              <p className="vx-hero-sub">{s.subtitle}</p>
              <button className="vx-hero-cta">{s.cta} →</button>
            </div>

            {/* right cards */}
            <div className="vx-hero-right">
              <div className="cards-wrapper" ref={cardsRef}>
                {s.cards.map((c) => (
                  <article key={c.id} className="hero-card glass-3d">
                    <div
                      className="hero-card-image"
                      style={{
                        backgroundImage: `url(${c.image})`,
                      }}
                      role="img"
                      aria-label={c.title}
                    />
                    <div className="hero-card-body">
                      <div className="hero-card-place">{c.place}</div>
                      <div className="hero-card-title">{c.title}</div>
                      <div className="hero-card-stars">★★★★★</div>
                    </div>
                  </article>
                ))}
              </div>

              {/* small pagination/controls under cards */}
              <div className="cards-controls">
                <button onClick={() => cardsRef.current && (cardsRef.current.scrollBy({ left: -280, behavior: "smooth" }))} aria-label="Scroll left" className="control-btn">◀</button>
                <div className="dots">
                  {/* show simple dots for cards */}
                  {s.cards.map((_, idx) => (
                    <span
                      key={idx}
                      className={`dot`}
                      onClick={() => {
                        const el = cardsRef.current;
                        if (!el) return;
                        const w = el.querySelector(".hero-card")?.clientWidth || 260;
                        el.scrollTo({ left: idx * (w + 16), behavior: "smooth" });
                      }}
                    />
                  ))}
                </div>
                <button onClick={() => cardsRef.current && (cardsRef.current.scrollBy({ left: 280, behavior: "smooth" }))} aria-label="Scroll right" className="control-btn">▶</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* big nav / dots */}
      <div className="vx-nav sliderNav">
        <button className="vx-prev" onClick={prev} aria-label="Previous slide">‹</button>
        <div className="vx-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`vx-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="vx-next" onClick={next} aria-label="Next slide">›</button>
      </div>
    </section>
  );
}
