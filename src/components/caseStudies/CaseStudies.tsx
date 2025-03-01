import { useState, useEffect } from 'react';

export default function CaseStudies() {
  const [ openSections, setOpenSections ] = useState({
    digitalPlatform: false,
    podcast: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const caseStudyBorders = document.querySelectorAll(".case-study strong");
      const triggerPoint = window.innerHeight * 0.6;  

      caseStudyBorders.forEach((border) => {
        const rect = border.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          (border as HTMLElement).style.color = "#D4E0DC"; // Change to red
        } else {
          (border as HTMLElement).style.color = "#1A2A2A"; // Reset
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
          <div className="case-study">
            <h3 onClick={() => setOpenSections({ ...openSections, digitalPlatform: !openSections.digitalPlatform })}>Fixing a Stalled Digital Platform</h3>
            <div className={`case-study-content ${openSections.digitalPlatform ? 'open' : ''}`}>
              <h4><strong>A small business owner with a high-traffic WordPress site struggling with limitations.</strong></h4>
                <p>
                  The client had a growing business and a lot of ideas for new features, but their WordPress setup wasn’t built to support them. The site was slow, key features were unreliable, and every developer they spoke with told them that their ideas weren’t possible.
                </p>
              <h4><strong>Solution</strong></h4>
                <p>Instead of forcing a full rebuild or patching together short-term fixes, I worked with them to create a <strong>step-by-step execution plan that worked with their existing platform while making room for future growth.</strong></p>
                <ul>
                  <li>Conducted a <strong>technical audit</strong> to break down what was working, what wasn’t, and what was holding them back.</li>
                  <li>Outlined a <strong>phased strategy</strong> to fix immediate issues while rolling out new capabilities over time.</li>
                  <li>Created a <strong>developer-ready roadmap</strong> that translates their ideas into clear technical requirements.</li>
                </ul>
              <h4><strong>Results</strong></h4>
                <ul>
                  <li>The client now has a <strong>structured execution plan</strong> that lets them move forward without guesswork.</li>
                  <li>Key platform issues are being fixed <strong>without disrupting users or revenue.</strong></li>
                  <li>The business can now <strong>scale without running into the same technical limitations again.</strong></li>
                </ul>
            </div>
          </div>

          <div className="case-study">
            <h3 onClick={() => setOpenSections({ ...openSections, podcast: !openSections.podcast })}>Launching a Podcast from Scratch</h3>
            <div className={`case-study-content ${openSections.podcast ? 'open' : ''}`}>
              <h4><strong>A coach and business owner launching their first podcast.</strong></h4>
                <p>
                  The client wanted to start a podcast to connect with their audience and grow their business. They had the vision, but no process for recording, editing, or publishing. They didn’t know what tools to use, how to structure the content, or how to keep up with production long-term.              
                </p>
              <h4><strong>Solution</strong></h4>
                <p>I built a <strong>complete podcast production workflow</strong> that allowed them to focus on recording while I handled everything else.</p>
                <ul>
                  <li><strong>Defined the podcast format</strong> so it fit their goals and audience.</li>
                  <li>Created a <strong>scalable production and publishing process</strong> to keep the show consistent.</li>
                  <li>Took over <strong>editing, post-production, and SEO optimization</strong> to ensure professional quality.</li>
                  <li>Set up a <strong>seamless workflow</strong> where they record, send me the files, and get a finished episode published without extra effort.</li>
                </ul>
              <h4><strong>Results</strong></h4>
                <ul>
                  <li>The client now has a podcast that is <strong>producing consistent content</strong>.</li>
                  <li>They have a process for recording, editing, and publishing that is <strong>sustainable over time</strong>.</li>
                  <li>The podcast is helping them <strong>connect with their audience and grow their business</strong>.</li>
                </ul>
          </div>
          </div>
        </section>
      );
  }
  