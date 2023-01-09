import React from "react";
import Typed from "react-typed";

// SVG
import man from "images/dev.svg";

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import "./home.css";
import Button from "components/Button/Button";
import { CONTACTS } from "data";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2>Hi Devs!</h2>
        <h1>I’m Kazuhide.</h1>
        <p>
          <span
            style={{ fontSize: "1.5rem", fontWeight: "600", marginLeft: "2%" }}
          >
            <Typed
              strings={["Front End Developer", "Full Stack Developer"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </span>
        </p>
        <p style={{ fontSize: "18px" }}>{CONTACTS.aboutMe}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <a
            href={CONTACTS.resumePdf}
            target="_blank"
            download="resume"
            rel="noopener noreferrer"
          >
            <Button
              text="Download CV"
              type="submit"
              style={{ minWidth: "120px", padding: "0.9rem 1rem" }}
            />
          </a>
          <Link
            // className="home-btn"
            to="portfolio"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            offset={-100}
            duration={500}
          >
            <Button
              text="See my work"
              type="submit"
              style={{ minWidth: "120px", padding: "0.9rem 1rem" }}
            />
          </Link>
          <Link
            to="contact"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            offset={-100}
            duration={500}
          >
            <Button
              text="Contact"
              type="submit"
              style={{ minWidth: "120px", padding: "0.9rem 1rem" }}
            />
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
