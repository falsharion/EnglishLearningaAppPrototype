import React from "react";
import Month from "../component/Month";
import { MdMoreHoriz } from "react-icons/md";
import SkillsCard from "../component/SkillsCard";

function Progress() {
  
  return (
    <div> 
      <Month month={"September"} />
      <div className="skill-section-header">
        <h2>Skills</h2>
        <div className="option"><MdMoreHoriz /></div>
      </div>
      <SkillsCard />
      </div>
  );
}

export default Progress;
