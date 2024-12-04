import React, { useState } from "react";
import Exercise from "./Exercise";

const ExercisePreview = ({ exercise, onBack }) => {
  const [onExercise, setExercise] = useState(null); // store which exercise was selected TODO: actually change the exercise page to the real exercise (fake one for now)
  // If start exercise was clicked, move to the exercise page
  if (onExercise) {
    return (
      <Exercise
        onExercise={onExercise}
        
      />
    );
  }
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Exercise Preview</h1>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>{exercise.name}</h2>
        <p>{exercise.description}</p>
        <p><strong>Duration:</strong> ~10 minutes</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={onBack}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ddd",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Back
        </button>
        
        <button
          onClick={() => setExercise("test")} // Replace with exercise initiation logic
          style={{
            padding: "10px 20px",
            backgroundColor: "#76c7c0",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Start Exercise
        </button>
      </div>
    </div>
  );
};

export default ExercisePreview;
