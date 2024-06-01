import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const skillsData = [
  {
    id: 2,
    topic: "Reading",
    percent: 100,
    imageKey: "read",
    image: "read.png",
  },
  {
    id: 1,
    topic: "Writing",
    percent: 85,
    imageKey: "writing",
    image:"writing.png",
  },
  {
    id: 3,
    topic: "Speaking",
    percent: 100,
    imageKey: "speak",
    image: "speaking.png",
  },
  {
    id: 4,
    topic: "Listening",
    percent: 75,
    image: "listening.png",
    imageKey: "listening",
    
  },
];

const getLabel = (percent) => {
  return percent >= 100 ? 'Completed' : 'Good Work!';
};

const SkillsList = ({ topic, percent, imageKey }) => {
  const images = useContext(ImageContext);

  return (
    <div className="skill-container">
      <div className="skill-card">
        <img src={images[imageKey]} alt={topic} loading="lazy" />
      </div>
      <div>
        <h3>{topic}</h3>
        <p className="skills-percent">{percent}%</p>
      </div>
      <p className={`skill-button ${percent >= 100 ? 'completed' : 'good-work'}`}>{getLabel(percent)}</p>
    </div>
  );
};

const SkillsCard = () => {
  return (
    <div className="skills-list">
      {skillsData.map((skillData) => (
        <SkillsList
          key={skillData.id}
          topic={skillData.topic}
          percent={skillData.percent}
          imageKey={skillData.imageKey}
        />
      ))}
    </div>
  );
};

export default SkillsCard;
