import React, { useState } from "react";


const Progress = ({ showHeader = true }) => {
  //eventually, this will be dynamic based on user data
  const [progress, setProgress] = useState(50); // Example progress value

  return (
    <div className="progress-container">
      {showHeader && <h1>Progress Tracker</h1>}
      <div className={`progress-content ${showHeader ? "with-header" : ""}`}>
        <h2>Your Progress</h2>
        <div className="progress-bar-background">
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
        <p>{progress}% completed</p>
      </div>
    </div>
  );
};

export default Progress;
