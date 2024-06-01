import React from "react";
import Month from "../component/Month";
import { MdMoreHoriz } from "react-icons/md";
import SkillsCard from "../component/SkillsCard";
import { ImageProvider } from '../context/ImageContext';

function Progress() {
  
  return (
    <ImageProvider>
    <div> 
      <Month month={"September"} />
      <div className="skill-section-header">
        <h2>Skills</h2>
        <div className="option"><MdMoreHoriz /></div>
      </div>
      <SkillsCard />
      </div>
      </ImageProvider>
  );
}

export default Progress;
