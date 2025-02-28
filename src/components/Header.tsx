import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Header() {
  const activeSection = useScrollSpy();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'about-active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#case-studies" 
              className={activeSection === 'case-studies' ? 'case-studies-active' : ''}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'services-active' : ''}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'contact-active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
