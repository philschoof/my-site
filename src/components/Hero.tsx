import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const strongElements = document.querySelectorAll(".hero strong");
      const triggerPoint = window.innerHeight * 0.2;

      strongElements.forEach((strong) => {
        const rect = strong.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          strong.style.color = "#C44536"; // Change to red
        } else {
          strong.style.color = "333333"; // Reset
        }
        });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);
  return (
    <section id="landing" className="hero">
      <h1>I help people take <strong>ideas</strong> from concept to execution—<strong>built</strong>, <strong>launched</strong>, and <strong>done right</strong>.</h1>
      <p>
        I work with <strong>founders, creatives, and businesses</strong> who don’t just need advice—they need someone to bridge the gap between <strong>vision</strong> and <strong>execution</strong>.
      </p>
      <a href="#contact" className="cta-button">Let’s Talk</a>
    </section>
  );
}
