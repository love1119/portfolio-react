import React from "react";

// Styles
import "./experiences.css";

// Card
import ExperienceCard from "components/Experiences/ExperienceItem";
import { Heading } from "components/Heading/Heading";

const Experiences = ({ experiences }) => {
  return (
    <section
      data-aos="fade-right"
      className="experiences-container"
      name="experiences"
      id="experiences"
    >
      <Heading text="Experiences" />
      <div className="experiences-cards">
        {experiences &&
          experiences?.map(({ icon, ...rest }, index) => (
            <ExperienceCard key={index} image={icon.asset.url} {...rest} />
          ))}
      </div>
    </section>
  );
};

export default Experiences;
