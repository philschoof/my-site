import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <div className="parallax" style={{ backgroundImage: `url('/images/photo1.jpg')` }}></div> */}
      <About />
      <CaseStudies />
      {/* <div className="parallax" style={{ backgroundImage: `url('/images/photo2.jpg')` }}></div> */}

      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}
