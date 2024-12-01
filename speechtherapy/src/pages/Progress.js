import React, { useState } from "react";

const Progress = ({ showHeader = true }) => {
  const [progress, setProgress] = useState(50); // Example progress value

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      {showHeader && <h1>Progress Tracker</h1>}
      <div style={{ marginTop: showHeader ? "20px" : "0" }}>
        <h2>Your Progress</h2>
        <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "25px", overflow: "hidden" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "20px",
              backgroundColor: "#76c7c0",
            }}
          ></div>
        </div>
        <p>{progress}% completed</p>
      </div>
    </div>
  );
};

export default Progress;
