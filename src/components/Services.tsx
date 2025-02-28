import { useEffect } from "react";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { title: "Web & Digital Strategy", description: "From idea to execution, I help structure and launch digital platforms." },
  { title: "Podcast Production", description: "Recording, editing, and refining your podcast into a polished final product." },
  { title: "Creative Consulting", description: "Helping you develop and refine creative ideas, branding, and storytelling." }
];

export default function Services() {

  useEffect(() => {
    const handleScroll = () => {
      const headerElements = document.querySelectorAll(".service-list h3");
      const triggerPoint = window.innerHeight * 0.6;

      headerElements.forEach((strong) => {
        const rect = strong.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          strong.style.color = "#C44536"; // Change to red
        } else {
          strong.style.color = "white"; // Reset
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
        <h3>Execution Strategy & Roadmaps</h3>
          <p>A deep-dive strategy session and custom execution roadmap tailored to your project. Whether you have a half-formed idea or a fully scoped plan that’s missing structure, I help you clarify what needs to happen, when, and how.</p>
          <h4>What You Get:</h4>
          <ul>
            <li>A structured roadmap breaking down execution steps, priorities, and dependencies.</li>
            <li>A clear action plan designed to prevent bottlenecks and wasted effort.</li>
            <li>An outside expert perspective to ensure nothing critical is overlooked.</li>
          </ul>
          <p>Best for: Creators, founders, and teams launching a new product, platform, or media project who need a structured plan before execution.</p>
        
        <h3>Hands-On Execution Oversight</h3>
          <p>A strategy isn’t enough—execution is where projects succeed or fail. I step in as a hands-on execution partner to ensure projects move forward efficiently, on time, and with a clear structure.</p>
          <h4>What You Get:</h4>
          <ul>
              <li>Regular check-ins and guidance to keep execution on track.</li>
              <li>Project oversight & problem-solving to prevent delays and inefficiencies.</li>
              <li>Collaboration with teams & contractors to ensure alignment and progress.</li>  
          </ul>
          <p> Best for: Teams who have a plan in place but need dedicated oversight to ensure things actually get done without getting lost in day-to-day operations.</p>
          
        <h3>Fractional Execution Leadership</h3>
            <p>For projects that need long-term execution guidance, I act as a Fractional Execution Lead—helping founders, agencies, and creatives run large-scale initiatives without hiring a full-time operations lead.</p>
            <h4>What You Get:</h4>
            <ul>
              <li>Ongoing strategic oversight to ensure projects evolve without losing momentum.</li>
              <li>A flexible, high-level execution partner who keeps teams and stakeholders aligned.</li>
              <li>A structured system for scaling projects while avoiding inefficiencies and roadblocks.</li>
          </ul>
          <p>Best for: Founders, agencies, and creative teams managing long-term projects who need senior-level execution expertise without the cost of a full-time hire..</p>
      </div>
    </section>
  );
}
