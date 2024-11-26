import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressPage = () => {
  const [progress, setProgress] = useState(50); // Example progress value

  return (
    <div>
      <h1>Progress Tracker</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgressPage;
