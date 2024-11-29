import React, { useState } from "react";
import ExercisePreview from "./ExercisePreview";

const exercisesData = [
  { id: 1, name: "Breathing Exercise", description: "Improve breathing capacity" },
  { id: 2, name: "Articulation Exercise", description: "Enhance clarity in speech" },
  { id: 3, name: "Volume Control Exercise", description: "Regulate speech volume" },
  { id: 4, name: "Pace Training", description: "Learn to control speaking pace" },
  { id: 5, name: "Facial Movement Exercise", description: "Enhance facial muscle movement" },
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
    <div>
      <h1>Browse Exercises</h1>
      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Grid of Exercises */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
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
