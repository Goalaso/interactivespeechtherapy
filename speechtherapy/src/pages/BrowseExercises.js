import React, { useState } from "react";
import ExercisePreview from "./ExercisePreview";

const exercisesData = [
  {
    id: 1,
    name: "Breathing Exercise",
    description: "Improve breathing capacity",
  },
  {
    id: 2,
    name: "Articulation Exercise",
    description: "Enhance clarity in speech",
  },
  {
    id: 3,
    name: "Volume Control Exercise",
    description: "Regulate speech volume",
  },
  {
    id: 4,
    name: "Pace Training",
    description: "Learn to control speaking pace",
  },
  {
    id: 5,
    name: "Facial Movement Exercise",
    description: "Enhance facial muscle movement",
  },
];

const BrowseExercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(null); // Stores the selected exercise
  const [searchTerm, setSearchTerm] = useState(""); // Manages the search term input

  // Filter exercises based on the search term
  const filteredExercises = exercisesData.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If an exercise is selected, render the ExercisePreview component
  if (selectedExercise) {
    return (
      <ExercisePreview
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)} // Reset selection on back
      />
    );
  }

  return (
    <div className="browse-exercises-container">
      <h1 className="page-title">Browse Exercises</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Grid of Exercises */}
      <div className="exercises-grid">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            className="exercise-card"
            onClick={() => setSelectedExercise(exercise)} // Set the selected exercise
          >
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseExercises;
