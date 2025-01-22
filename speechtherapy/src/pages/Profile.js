import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState(
    "I love improving my speech and helping others!"
  );
  const [goals, setGoals] = useState(
    "Complete all articulation exercises this month."
  );

  return (
    <div className="profile-container">
      <h1 className="page-title">Profile Page</h1>
      <div className="profile-card">
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          <strong>Bio:</strong>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="profile-textarea"
          />
        </label>
        <label>
          <strong>Goals:</strong>
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="profile-textarea"
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;
