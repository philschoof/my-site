import { useState, useEffect } from 'react';

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const newSection = section.id;
          setActiveSection(newSection);
          
          // Update URL without scrolling
          if (newSection !== activeSection) {
            history.replaceState(null, '', `#${newSection}`);
          }
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Add activeSection as dependency

  return activeSection;
}; 