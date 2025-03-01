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
      const aboutListItems = document.querySelectorAll(".about-list-item ");
      const strongInternalElements = document.querySelectorAll(".about-list-content strong");
      const aboutListHeader = document.querySelectorAll(".about-list-header strong");
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
          border.style.borderLeft = "5px solid #1A2A2A"; // Change to blue
        } else {
          border.style.borderLeft = "5px solid #fff"; // Reset
        }
      })

      strongInternalElements.forEach((strong) => {
        const rect = strong.getBoundingClientRect();
        
        if (rect.top < triggerPoint) {
          strong.style.color = "#1A2A2A"; // Change to blue
        } else {
          strong.style.color = "white"; // Reset
        }     
      })      

      aboutListHeader.forEach((header) => {
        const rect = header.getBoundingClientRect();
  
        if (rect.top < triggerPoint) {
          header.style.color = "#1A2A2A"; // Change to blue
        }
      })


    };



    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);


  const handleClick = (name) => {
    setOpenSections((prevState) => ({ ...prevState, [name]: !prevState[name]}))
  }
    return (
      <section id="about" className="about">
        {/* <h2>Who I Am</h2> */}
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

        <h2 className="who-i-work-with">Who I Work With:</h2>

        <ul className="about-list">
          
          <li onClick={() => handleClick('createAgencies')} className={`about-list-item ${openSections.mediaBrands ? ' open' : ''}`}>
            <h3 className="about-list-header"><strong>Creative Agencies & Production Teams</strong></h3>
            <div className={`about-list-content ${openSections.createAgencies ? 'open' : ''}`}>
              <p>Creative teams are great at generating ideas, but execution can get messy—projects stall, workflows break down, and client expectations shift.</p>
              <p>I help agencies <strong>streamline execution</strong> so their ideas don’t just stay ideas.</p>
              <p>Whether it’s optimizing internal processes, structuring client deliverables, or scaling content production, I make sure projects <strong>run smoothly from concept to completion.</strong></p>
              <p><strong>How I Help:</strong></p>
              <ul>
                <li>Refining creative workflows to eliminate bottlenecks.</li>
                <li>Structuring execution plans to keep projects on track.</li>
                <li>Bridging the gap between vision and production so teams can focus on <strong>delivering great work.</strong></li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('techFounders')} className={`about-list-item ${openSections.techFounders ? ' open' : ''}`}>
            <h3 className="about-list-header"><strong>Tech Founders & Digital Product Creators</strong></h3>
            <div className={`about-list-content ${openSections.techFounders ? 'open' : ''}`}>
              <p>Turning a product vision into reality requires more than just a great idea—it takes <strong>clear execution, structured decision-making, and technical alignment.</strong></p>
              <p>Founders often get stuck between what they want to build and how to actually make it happen. I help break down complex product challenges into <strong>actionable steps</strong> so ideas can move forward confidently.</p>
              <p><strong>How I Help:</strong></p>
              <ul>
                <li>Translating big ideas into structured execution roadmaps.</li>
                <li>Ensuring technical and creative teams stay aligned.</li>
                <li>Acting as a <strong>trusted execution partner</strong> to help founders move from concept to launch.</li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('mediaBrands')} className={`about-list-item ${openSections.mediaBrands ? ' open' : ''}`}>  
            <h3 className="about-list-header"><strong>Media Brands & High-Level Creators</strong></h3>
            <div className={`about-list-content ${openSections.mediaBrands ? 'open' : ''}`}>
              <p>Scaling content production is challenging—whether it’s launching a podcast, building a media platform, or structuring a sustainable workflow.</p>
              <p>Without the right execution plan, creative projects can become overwhelming, inconsistent, or stalled entirely.</p>
              <p>I help media brands <strong>develop scalable systems</strong> so they can consistently create and distribute high-quality content without burning out.</p>
              <p><strong>How I Help:</strong></p>
              <ul>
                <li>Designing <strong>efficient workflows</strong> for podcasting, video, and media production.</li>
                <li>Structuring <strong>distribution and publishing strategies.</strong></li>
                <li>Ensuring content production is <strong>consistent, scalable, and aligned with audience goals.</strong></li>
              </ul>
            </div>
          </li>
          
          <li onClick={() => handleClick('businessConsultants')} className={`about-list-item ${openSections.businessConsultants ? ' open' : ''}`}>  
            <h3 className="about-list-header"><strong>Business Consultants & Strategy Firms</strong></h3>
            <div className={`about-list-content ${openSections.businessConsultants ? 'open' : ''}`}>
              <p>Many consultants and strategists provide <strong>big-picture recommendations</strong>—but execution is where things fall apart.</p>
              <p>Clients need more than a roadmap; they need a <strong>structured, actionable plan</strong> to bring ideas to life.</p>
              <p>I help turn high-level strategy into real-world implementation, ensuring that recommendations don’t just sit in a slide deck but actually get executed.</p>
              <p><strong>How I Help:</strong></p>
              <ul>
                <li>Developing execution frameworks to ensure <strong>strategy translates into action.</strong></li>
                <li>Helping clients implement new processes, platforms, or initiatives.</li>
                <li>Acting as a bridge between <strong>strategy and execution</strong> so teams don’t lose momentum.</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    );
  }