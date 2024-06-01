
import React, { useState } from 'react';

const skillsData = [
  
    {
        id:2,
         topic:"reading",
      percent: 100,
      image:"read.png"
    },
    { 
        id:1,
        topic: "writing",
      percent: 85,
      image:"writing.png"
    },
    { 
        id:3,
        topic:"speaking",
    percent: 100,
    image:"speak.png"
 },
    { 
        id:4,
        topic:"listening",
    percent: 75,
    image:"listening.png"
  }
  ];
  const getLabel = (percent) => {
    return percent >= 100 ? 'Completed':'Good Work!'  ;
  };

const SkillsList = ({ topic, percent, image}) => (
  <div className="skill-container">
    <div className='skill-card'>
        <img src={image} alt={topic} className="" />
    </div>
    <div>
        <h3>{topic}</h3>
        <p className='skills-percent'>{percent}%</p>
    </div>
    <p className={`skill-button ${percent >= 100 ? 'completed':'good-work'  }`}> {getLabel(percent)}</p>
  </div>
);

const  SkillsCard = () => {

  return (
      <div className="skills-list">
        {skillsData.map((skillData) => (
          <SkillsList
            key={skillData.id}
            topic={skillData.topic}
            percent={skillData.percent}
            image={skillData.image}
          />
        ))}
      </div>
  );
};

export default SkillsCard
