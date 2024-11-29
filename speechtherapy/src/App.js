import React, { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard component
import Progress from "./pages/Progress"; // Adjust the path if necessary
import BrowseExercises from "./pages/BrowseExercises";
import ExerciseFeedback from "./pages/ExerciseFeedback";
import ProgressPage from "./pages/ProgressPage";
import MessagingSLP from "./pages/MessagingSLP";
import Profile from "./pages/Profile";

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Function to change the page
  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "progress":
        return <Progress />;
      case "browseExercises":
        return <BrowseExercises />;
      case "exerciseFeedback":
        return <ExerciseFeedback />;
      case "messagingSLP":
        return <MessagingSLP />;
      case "profile":
        return <Profile />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          background: "#ddd",
        }}
      >
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("progress")}>Progress</button>
        <button onClick={() => setCurrentPage("browseExercises")}>
          Browse Exercises
        </button>
        <button onClick={() => setCurrentPage("exerciseFeedback")}>
          Exercise Feedback
        </button>
        <button onClick={() => setCurrentPage("messagingSLP")}>Messages</button>
        <button onClick={() => setCurrentPage("profile")}>Profile</button>
      </nav>

      {/* Render the selected page */}
      <div style={{ padding: "20px" }}>{renderPage()}</div>
    </div>
  );
}

export default App;
