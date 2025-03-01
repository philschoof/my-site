import { useEffect } from "react";

export default function Services() {

  useEffect(() => {
    const handleScroll = () => {
      const headerElements = document.querySelectorAll(".service-list h3");
      const strongElements = document.querySelectorAll(".service-list strong");

      const triggerPoint = window.innerHeight * 0.6;

      [...headerElements, ...strongElements].forEach((strong) => {
        const rect = strong.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          (strong as HTMLElement).style.color = "#1A2A2A"; // Change to red
        } else {
          (strong as HTMLElement).style.color = "white"; // Reset
        }
        });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-list">
        <div className="service-list-item">
          <h3>Execution Strategy & Roadmaps</h3>
            <p>A <strong>deep-dive strategy session</strong> and custom execution roadmap tailored to your project. Whether you have a half-formed idea or a fully scoped plan that’s missing structure, I help you clarify <strong>what needs to happen, when, and how.</strong></p>
            <h4>What You Get:</h4>
            <ul>
              <li>A structured <strong>roadmap breaking down execution steps, priorities, and dependencies.</strong></li>
              <li>A <strong>clear action plan</strong> designed to prevent bottlenecks and wasted effort.</li>
              <li>An <strong>outside expert perspective</strong> to ensure nothing critical is overlooked.</li>
            </ul>
            <p>Best for: Creators, founders, and teams launching a new product, platform, or media project who need a <strong>structured plan before execution.</strong></p>
        </div>

        <div className="service-list-item aligned-right">
          <h3>Hands-On Execution Oversight</h3>
          <p><strong>A strategy isn’t enough—execution is where projects succeed or fail.</strong> I step in as a hands-on execution partner to ensure projects move forward <strong>efficiently, on time, and with a clear structure.</strong></p>
          <h4>What You Get:</h4>
          <ul>
              <li>Regular check-ins and guidance to keep execution on track.</li>
              <li>Project oversight & problem-solving to prevent delays and inefficiencies.</li>
              <li><strong>Collaboration with teams & contractors</strong> to ensure alignment and progress.</li>  
          </ul>
          <p> Best for: Teams who have a plan in place but <strong>need dedicated oversight</strong> to ensure things actually get done <strong>without getting lost in day-to-day operations.</strong> </p>
        </div>

        <div className="service-list-item">
          <h3>Fractional Execution Leadership</h3>
          <p>For projects that need <strong>long-term execution guidance</strong>, I act as a <strong>Fractional Execution Lead</strong>—helping founders, agencies, and creatives <strong>run large-scale initiatives without hiring a full-time operations lead.</strong></p>
          <h4>What You Get:</h4>
            <ul>
              <li><strong>Ongoing strategic oversight</strong> to ensure projects evolve without losing momentum.</li>
              <li><strong>A flexible, high-level execution partner</strong> who keeps teams and stakeholders aligned.</li>
              <li><strong>A structured system</strong> for scaling projects while avoiding inefficiencies and roadblocks.</li>
          </ul>
          <p>Best for: Founders, agencies, and creative teams managing <strong>long-term projects</strong> who need <strong>senior-level execution expertise without the cost of a full-time hire.</strong></p>
        </div>
      </div>
    </section>
  );
}
