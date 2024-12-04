import React, { useState } from "react";
import ExerciseFeedback from "./ExerciseFeedback";

const Exercise = ({ onExercise }) => {
    const [onFeedback, setFeedback] = useState(null); // store what the feedback was  TODO: actually change the exercise page to the real exercise (fake one for now)
  // If view feedback was clicked, move to the feedback page
  if (onFeedback) {
    return (
      <ExerciseFeedback
      />
    );
  }
    return (
        <div>
          <h1>Please say this sentence: </h1>
          {/*exercise
          TODO: actual exercises*/}
          <p>
            How much wood would a woodchuck chuck if a woodchuck could chuck wood?
          </p>
          <button onClick={() => setFeedback("test")}>View Feedback</button>
        </div>
    );
}

export default Exercise;