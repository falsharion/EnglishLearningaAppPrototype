import React from "react";
import { BsFire } from "react-icons/bs";

function Streaks({ count }) {
  return (
    <div className="streaks-component">
      <h3>
        <span>
          <BsFire />
        </span>
      {count}
      </h3>
    </div>
  );
}

export default Streaks;
