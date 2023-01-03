import React, { useEffect, useState } from "react";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Menu from "components/Menu/Menu";
import Experiences from "components/Experiences";
import Portfolio from "components/Portfolio";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";
// Sanity
import sanityClient from "client";
// Data
import { SERVICES, EXPERIENCES, TESTIMONIALS, CONTACTS } from "./data";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in ["testimonial", "portfolio","service"]]{
          _type == "testimonial" => {
            id,
            name,
            text,
            country,
            url
          },
          _type == "portfolio" => {
            id,
            title,
            tagline,
            category,
            liveUrl,
            repositoryUrl,
            img{
              asset->{url}
            },
          },
          _type == "service" => {
            title,
            tags,
            icon{
              asset->{url}
            },
          },
        }
        `
      )
      .then((data) => {
        let tempProjects = [];

        data.map((doc) => {
          if (doc.liveUrl) {
            // It is a project
            tempProjects.push(doc);
          }

          return null;
        });
        setProjects(tempProjects);
      })
      .catch(console.error);
  }, []);

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
      <Portfolio projects={projects} />
      <Testimonials testimonials={TESTIMONIALS} />
      <Contact />
      <Footer contacts={CONTACTS} />
    </div>
  );
}

export default App;
