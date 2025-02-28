import { useState } from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2>What are you working on?</h2>
      <p>
        <a href="mailto:your@email.com">Email</a>
        <span className="separator">&nbsp;|&nbsp;</span>
        <a href="https://calendly.com/phil-schoof/60min?month=2025-02">Calendly</a>
      </p>
    </section>
  );
}
