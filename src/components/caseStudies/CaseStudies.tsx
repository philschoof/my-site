import { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [ openSections, setOpenSections ] = useState({
    digitalPlatform: false,
    podcast: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const caseStudyBorders = document.querySelectorAll(".case-study");
      const triggerPoint = window.innerHeight * 0.6;  

      caseStudyBorders.forEach((border) => {
        const rect = border.getBoundingClientRect();
        
        if (rect.top < triggerPoint) {
          border.style.borderLeft = "5px solid #C44536"; // Change to red
        } else {
          border.style.borderLeft = "5px solid #fff"; // Reset
        }          
      })    
    } 

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

    return (
        <section id="case-studies" className="case-studies">
          <h2>Case Studies</h2>
          <div className="case-study" onClick={() => setOpenSections({ ...openSections, digitalPlatform: !openSections.digitalPlatform })}>
            <h3>Fixing a Stalled Digital Platform {openSections.digitalPlatform ? '-' : '+'}</h3>
            <div className={`case-study-content ${openSections.digitalPlatform ? 'open' : ''}`}>
              <h4> A small business owner with a high-traffic WordPress site struggling with limitations.</h4>
                <p>
                  The client had a growing business and a lot of ideas for new features, but their WordPress setup wasn’t built to support them. The site was slow, key features were unreliable, and every developer they spoke with told them that their ideas weren’t possible.
                </p>
              <h4>Solution</h4>
                <p>Instead of forcing a full rebuild or patching together short-term fixes, I worked with them to create a step-by-step execution plan that worked with their existing platform while making room for future growth.</p>
                <ul>
                  <li>Conducted a technical audit to break down what was working, what wasn’t, and what was holding them back.</li>
                  <li>Outlined a phased strategy to fix immediate issues while rolling out new capabilities over time.</li>
                  <li>Created a developer-ready roadmap that translates their ideas into clear technical requirements.</li>
                </ul>
              <h4>Results</h4>
                <ul>
                  <li>The client now has a structured execution plan that lets them move forward without guesswork.</li>
                  <li>Key platform issues are being fixed without disrupting users or revenue.</li>
                  <li>The business can now scale without running into the same technical limitations again.</li>
                </ul>
            </div>
          </div>
          <div className="case-study" onClick={() => setOpenSections({ ...openSections, podcast: !openSections.podcast })}>
            <h3>Launching a Podcast from Scratch {openSections.podcast ? '-' : '+'}</h3>
            <div className={`case-study-content ${openSections.podcast ? 'open' : ''}`}>
              <h4>A coach and business owner launching their first podcast.</h4>
                <p>
                  The client wanted to start a podcast to connect with their audience and grow their business. They had the vision, but no process for recording, editing, or publishing. They didn’t know what tools to use, how to structure the content, or how to keep up with production long-term.              
                </p>
              <h4>Solution</h4>
                <p>I built a complete podcast production workflow that allowed them to focus on recording while I handled everything else.</p>
                <ul>
                  <li>Identified the best tools for their needs and budget.</li>
                  <li>Created a content structure that would keep them engaged and produce a steady stream of episodes.</li>
                  <li>Developed a workflow for recording, editing, and publishing that would be sustainable over time.</li>
                </ul>
              <h4>Results</h4>
                <ul>
                  <li>The client now has a podcast that is producing consistent content.</li>
                  <li>They have a process for recording, editing, and publishing that is sustainable over time.</li>
                  <li>The podcast is helping them connect with their audience and grow their business.</li>
                </ul>
          </div>
          </div>
        </section>
      );
  }
  