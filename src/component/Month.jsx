
import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import DaysInMonth from "./DaysInMonth";

const Month = ({ month }) => {
  return (
    <div>
    <div className="progress-page-header">
      <div className="button">
        <GrPrevious />
      </div>
      <h3>{month}</h3>
      <div className="button">
        <GrNext />
      </div>
      
    </div><DaysInMonth month={month} /></div>
  );
};

export default Month;

