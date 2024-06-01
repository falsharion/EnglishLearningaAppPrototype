import React from "react";
import { BsFire } from "react-icons/bs";
import CircularProgressBar from "./component/CircularProgressBar";
import Streaks from "./component/Streaks";
import SectionHeader from "./component/SectionHeader";
import LessonList from "./component/LessonList";
import LeaderBoardList from "./component/LeaderBoardList";
import DesktopWarning from "./component/DesktopWarning"; 

function App() {
  return (
    <div>
       <DesktopWarning />
       <div className="mobile-only">
      <div className="header">
        <div className="usergreetings">
          <h2>Hello Rachel,</h2>
          <p>
            Ready to <span>play English?</span>
          </p>
        </div>
        <div>
          <h3 className="streaks-button">
            <span>
              <BsFire />
            </span>
            65
          </h3>
        </div>
      </div>

      <div className="goal-tracker">
        <CircularProgressBar />
        <div className="goal-update">
          <h3>Excellent !</h3>
          <p>
            You're almost there. <span>Finish the goal to achieve</span>
          </p>
          <Streaks count={120} />
        </div>
      </div>
      <div>
        <SectionHeader header={"Your lesson"} />
        <LessonList />
      </div>
      <div>
        <SectionHeader header={"Leaderboard"} />
        <LeaderBoardList />
      </div>
      </div>
    </div>
  );
}

export default App;
