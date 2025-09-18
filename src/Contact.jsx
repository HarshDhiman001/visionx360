import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="vx-contact">
      <div className="vx-container">
        <div className="vx-contact-grid">
          {/* Left Side - Text + Image Background */}
          <div className="vx-contact-info">
            <h4 className="vx-contact-sub">Get In Touch</h4>
            <h2 className="vx-contact-title">We are always ready to help you</h2>
            <p className="vx-contact-text">
              Whether you have a question, a suggestion, or just want to say
              hello, this is the place to do it. Please fill out the form below
              with your details and message, and we'll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="vx-contact-form">
            <h3>Get In Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* Locations */}
        <div className="vx-contact-locations">
          <div className="vx-location">
            <h4>VisionX HQ</h4>
            <p><FaMapMarkerAlt /> 125 Sunset Blvd, Los Angeles, CA</p>
            <p><FaPhoneAlt /> (213) 555-0181</p>
            <p><FaClock /> Mon - Fri 08:00 - 18:00</p>
          </div>
          <div className="vx-location">
            <h4>VisionX East</h4>
            <p><FaMapMarkerAlt /> 802 Riverfront Drive, Riverside, CA</p>
            <p><FaPhoneAlt /> (951) 555-0264</p>
            <p><FaClock /> Mon - Fri 08:00 - 18:00</p>
          </div>
          <div className="vx-location">
            <h4>VisionX North</h4>
            <p><FaMapMarkerAlt /> 3300 Silverstone Ave, San Jose, CA</p>
            <p><FaPhoneAlt /> (408) 555-0390</p>
            <p><FaClock /> Mon - Fri 08:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
