import React from "react";

const ExerciseFeedback = () => {
  // Example feedback data (this could come from props, state, or an API in a real app)
  const feedbackMessages = [
    "Great job on completing today's articulation exercise!",
    "Your volume improved by 10% compared to yesterday!",
    "Keep up the good work! You're on track to meet your goals.",
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Exercise Feedback</h1>
      <div style={{ marginTop: "20px" }}>
        {feedbackMessages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f0f8ff",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #dce7f2",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ margin: 0 }}>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseFeedback;