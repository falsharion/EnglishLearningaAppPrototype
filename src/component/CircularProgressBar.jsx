import React, { useEffect, useState } from 'react';


const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // loading progress to 70%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 70) {
          clearInterval(interval);
          return 70;
        }
        return prev + 1;
      });
    }, 40); 
  }, []);

  return (
    <div className="progress-container">
      <p className="text">Today's goal</p>
      <div className="progress-circle-bar" style={{ background: `conic-gradient(#ff9768 ${progress * 3.6}deg, rgb(255 211 190) 0deg)` }}>
        <span className="progress-value">{progress}%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;