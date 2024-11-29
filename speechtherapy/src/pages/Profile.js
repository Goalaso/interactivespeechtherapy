import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("I love improving my speech and helping others!");
  const [goals, setGoals] = useState("Complete all articulation exercises this month.");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Profile Page</h1>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
        <label>
          <strong>Bio:</strong>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
        <label>
          <strong>Goals:</strong>
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;
