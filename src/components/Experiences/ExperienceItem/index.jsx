import React from "react";
import "./style.css";

const ExperienceCard = ({
  image,
  tags,
  title,
  employment,
  heading,
  achievements,
}) => {
  return (
    <div className="experience-card">
      {employment.url ? (
        <a href={employment.url} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      ) : (
        <>{image}</>
      )}
      <div className="experience-card-content">
        <h2 className="experience-title">{title}</h2>
        <h6 className="experience-company">{employment.company}</h6>
        <h6 className="experience-period">{employment.period}</h6>
        {!!heading && <p className="experience-heading">{heading}</p>}
        <ul className="experience-achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="tags">
          {tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
