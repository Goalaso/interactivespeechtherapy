import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressPage = () => {
  //eventually, this will be dynamic based on user data
  const [progress, setProgress] = useState(50);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Progress Tracker</h1>
      
      {/* Include the Progress Bar */}
      <div className="progress-section">
        <ProgressBar progress={progress} />
      </div>
      
      {/* Add additional sections as needed */}
      <div className="features-section">
        <h2>Track Your Progress</h2>
        <p>Keep track of your progress and stay motivated.</p>
      </div>
    </div>
  );
};

export default ProgressPage;
