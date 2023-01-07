import React, { useEffect, useState } from "react";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Menu from "components/Menu/Menu";
import Experiences from "components/Experiences";
// import Portfolio from "components/Portfolio";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";
// Data
import {
  SERVICES,
  EXPERIENCES,
  TESTIMONIALS,
  CONTACTS,
  // PROJECTS,
} from "./data";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={SERVICES} />
      <Experiences experiences={EXPERIENCES} />
      {/* <Portfolio projects={PROJECTS} /> */}
      <Testimonials testimonials={TESTIMONIALS} />
      <Contact />
      <Footer contacts={CONTACTS} />
    </div>
  );
}

export default App;
