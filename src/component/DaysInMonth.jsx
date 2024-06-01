
import React from "react";
import { FaCheck } from "react-icons/fa";


const DaysInMonth = ({ month }) => {
  const getDaysInMonth = (month) => {
    const year = new Date().getFullYear();
    return new Date(year, month, 0).getDate();
  };

  const monthIndex = new Date(`${month} 1, ${new Date().getFullYear()}`).getMonth() + 1;
  const daysInMonth = getDaysInMonth(monthIndex);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1).slice(1, 8);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="days-container">
      {daysArray.map((day) => {
        const date = new Date(new Date().getFullYear(), monthIndex - 1, day);
        const weekday = weekdays[date.getDay()];
        const isThursday = weekday === "Thu";
        const isThirdOrFourthDay = day === 3 || day === 4;
        const isFifthDay = day === 5;

        return (
          <div key={day} className="day-item">
            <div className={`day-circle ${isThirdOrFourthDay ? "purple-background" : ""} ${isFifthDay ? "orange-background" : ""}`}>
              {isThirdOrFourthDay ? <FaCheck /> : day}
            </div>
            <div className={`weekday ${isThursday ? "orange-text" : "black-text"}`}>
              {weekday}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DaysInMonth;



