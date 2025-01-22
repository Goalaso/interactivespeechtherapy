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
    <div className="exercise-preview-container">
      <h1>Exercise Preview</h1>
      <div className="exercise-preview-card">
        <h2>{exercise.name}</h2>
        <p>{exercise.description}</p>
        <p><strong>Duration:</strong> ~10 minutes</p>
      </div>
      <div className="exercise-preview-buttons">
        <button onClick={onBack} className="back-button">
          Back
        </button>
        <button onClick={() => setExercise("test")} className="start-button">
          Start Exercise
        </button>
      </div>
    </div>
  );
};

export default ExercisePreview;
