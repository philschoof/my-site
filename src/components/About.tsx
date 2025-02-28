import { useState, useEffect } from "react";

  
export default function About() {
  const [ openSections, setOpenSections ] = useState({
    createAgencies: false,
    techFounders: false,
    mediaBrands: false,
    businessConsultants: false
  })

  useEffect(() => {
    const handleScroll = () => {
      const strongElements = document.querySelectorAll(".about strong");
      const aboutListItems = document.querySelectorAll(".about-list li ");
      const triggerPoint = window.innerHeight * 0.4;

      strongElements.forEach((strong) => {
        const rect = strong.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          strong.style.color = "#C44536"; // Change to red
        } else {
          strong.style.color = "white"; // Reset
        }
        });

      aboutListItems.forEach((border) => {    
        const rect = border.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          border.style.borderLeft = "5px solid #C44536"; // Change to red
        } else {
          border.style.borderLeft = "5px solid #fff"; // Reset
        }
      })
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);


  const handleClick = (name) => {
    console.log(name)
    setOpenSections((prevState) => ({ ...prevState, [name]: !prevState[name]}))
  }
    return (
      <section id="about" className="about">
        <h2>Who I Am</h2>
        <p><strong>A lot of people have great ideas. The hard part is making them real.</strong></p>
        <p className="aligned-left">
          I work with <strong>founders, creatives, and businesses </strong>who don’t just need advice—they need someone who can bridge the gap between <strong>vision and execution.</strong>
        </p>
        <p className="aligned-right italicized">
          With a background in <strong>both art and technology</strong>, I bring a unique mix of <strong>creative problem-solving and structured execution</strong> to every project. Whether it’s a <strong>media platform, a podcast, or a digital product</strong>, I help people take their ideas from <strong>concept to completion</strong>—designed, built, launched, and working <strong>the way they imagined.</strong>
        </p>
        <p className="aligned-left">  
          Some clients come to me with a <strong>fully formed idea</strong> that needs a plan. Others have a <strong>half-formed concept</strong> that needs shaping. Either way, I <strong>meet people where they are</strong> and help them figure out the next steps, structure the work, and move forward without getting stuck.
        </p>
        <p>
          You focus on being <strong>creative</strong>—I help everyone else catch up.
        </p>

        <h2>Who I Work With:</h2>
        <ul className="about-list">
          
          <li onClick={() => handleClick('createAgencies')} className={`about-list-item ${openSections.mediaBrands ? ' open' : ''}`}>
            <h3>Creative Agencies & Production Teams</h3>
            <div className={`about-list-content ${openSections.createAgencies ? 'open' : ''}`}>
              <p>Creative teams are great at generating ideas, but execution can get messy—projects stall, workflows break down, and client expectations shift. I help agencies streamline execution so their ideas don’t just stay ideas. Whether it’s optimizing internal processes, structuring client deliverables, or scaling content production, I make sure projects run smoothly from concept to completion.</p>
              <h4>How I Help:</h4>
              <ul>
                <li>Refining creative workflows to eliminate bottlenecks.</li>
                <li>Structuring execution plans to keep projects on track.</li>
                <li>Bridging the gap between vision and production so teams can focus on delivering great work.</li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('techFounders')} className={`about-list-item ${openSections.techFounders ? ' open' : ''}`}>
            <h3>Tech Founders & Digital Product Creators</h3>
            <div className={`about-list-content ${openSections.techFounders ? 'open' : ''}`}>
              <p>Turning a product vision into reality requires more than just a great idea—it takes clear execution, structured decision-making, and technical alignment. Founders often get stuck between what they want to build and how to actually make it happen. I help break down complex product challenges into actionable steps so ideas can move forward confidently.</p>
              <h4>How I Help:</h4>
              <ul>
                <li>Translating big ideas into structured execution roadmaps.</li>
                <li>Ensuring technical and creative teams stay aligned.</li>
                <li>Acting as a trusted execution partner to help founders move from concept to launch.</li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('mediaBrands')} className={`about-list-item ${openSections.mediaBrands ? ' open' : ''}`}>  
            <h3>Media Brands & High-Level Creators</h3>
            <div className={`about-list-content ${openSections.mediaBrands ? 'open' : ''}`}>
              <p>Scaling content production is challenging—whether it’s launching a podcast, building a media platform, or structuring a sustainable workflow. Without the right execution plan, creative projects can become overwhelming, inconsistent, or stalled entirely. I help media brands develop scalable systems so they can consistently create and distribute high-quality content without burning out.</p>
              <h4>How I Help:</h4>
              <ul>
                <li>Designing efficient workflows for podcasting, video, and media production.</li>
                <li>Structuring distribution and publishing strategies.</li>
                <li>Ensuring content production is consistent, scalable, and aligned with audience goals.</li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('businessConsultants')} className={`about-list-item ${openSections.businessConsultants ? ' open' : ''}`}>  
            <h3>Business Consultants & Strategy Firms</h3>
            <div className={`about-list-content ${openSections.businessConsultants ? 'open' : ''}`}>
              <p>Many consultants and strategists provide big-picture recommendations—but execution is where things fall apart. Clients need more than a roadmap; they need a structured, actionable plan to bring ideas to life. I help turn high-level strategy into real-world implementation, ensuring that recommendations don’t just sit in a slide deck but actually get executed.</p>
              <h4>How I Help:</h4>
              <ul>
                <li>Developing execution frameworks to ensure strategy translates into action.</li>
                <li>Helping clients implement new processes, platforms, or initiatives.</li>
                <li>Acting as a bridge between strategy and execution so teams don’t lose momentum.</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    );
  }