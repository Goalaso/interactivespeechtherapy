import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard component
import Progress from "./pages/Progress"; // Adjust the path if necessary
import BrowseExercises from "./pages/BrowseExercises";
import ExerciseFeedback from "./pages/ExerciseFeedback";
import ProgressPage from "./pages/ProgressPage";
import MessagingSLP from "./pages/MessagingSLP.js";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot.js";
import Exercise from "./pages/Exercise.js"

function App() {
  /*
  * Logic to handle user state
  */
  const [currentPage, setCurrentPage] = useState("login");

  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  /* 
  * Handling audio uploading
  */
 const handleAudioUpload = async (audioBlob) => {
    const userId = currentUser.id;
    const formData = new FormData();
    formData.append('file', audioBlob, 'myRecording.wav');
    formData.append('user_id', userId);

    const response = await fetch('http://localhost:5000/upload-audio', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (data.success){
      alert(`Audio uploaded. ID: ${data.recordingId}`);
    } else {
      alert('Error uploading audio');
    }
 };
 
  // Function to change the page
  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onRegister={() => setCurrentPage("register")} onLoginSuccess={() => setCurrentPage("dashboard")}/>
      case "register":
        return <Register onLogin={() => setCurrentPage("login")} onRegisterSuccess={() => setCurrentPage("login")}/>
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
      case "chatbot":
        return <Chatbot />;
      case "exercise":
        return <Exercise />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  if (currentPage == 'login' || currentPage == 'register') { // Don't render navbar if login/register page
    return (
      <div className="App">
        {/* Render the selected page */}
        <div style={{ padding: "20px" }}>{renderPage()}</div>
      </div>
    );
  }

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
        <button onClick={() => setCurrentPage("browseExercises")}>Browse Exercises</button>
        <button onClick={() => setCurrentPage("messagingSLP")}>Messages</button>
        <button onClick={() => setCurrentPage("profile")}>Profile</button>
        <button onClick={() => setCurrentPage("chatbot")}>AI Chatbot</button>
        <button onClick={() => setCurrentPage("login")}>Logout</button>
      </nav>

      {/* Render the selected page */}
      <div style={{ padding: "20px" }}>{renderPage()}</div>

      {/* User State */}
      <div>
        {currentUser ? (
          <Dashboard currentUser={currentUser} onLogout={handleLogout} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default App;
