import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState(window.location.hash.slice(1));

  useEffect(() => {
    // Handle hash changes from clicking links
    const handleHashChange = () => {
      setActiveSection(window.location.hash.slice(1));
    };

    // Handle scroll detection
    const options = {
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px'
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          history.replaceState(null, '', `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a className={activeSection === 'about' ? 'about-active' : ''} href="#about">About</a></li>
          <li><a className={activeSection === 'case-studies' ? 'case-studies-active' : ''} href="#case-studies">Case Studies</a></li>
          <li><a className={activeSection === 'services' ? 'services-active' : ''} href="#services">Services</a></li>
          <li><a className={activeSection === 'contact' ? 'contact-active' : ''} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
