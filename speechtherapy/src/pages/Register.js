import React, { useState } from "react";

function Register({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        alert("Account created successfully");
        onLogin();
      } else {
        alert("Account creation failed: " + data.message);
      }
    } catch (error) {
      console.error("Error occurred during registration: ", error);
      alert(
        "An error occurred while trying to create an account." + error.message
      );
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <div className="register-footer">
        <p>Already have an account?</p>
        <button onClick={onLogin} className="register-back-button">
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
