import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "10px" }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#76c7c0",
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

