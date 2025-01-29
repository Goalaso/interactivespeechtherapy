import React, { useState } from "react";

function Login({onRegister, onGuestLogin, onLoginSuccess}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert(data.message || 'Login successful');
                // Pass the user data up to App
                onLoginSuccess({
                    userId: data.userId,
                    email: data.email,
                });
            } else {
                alert(data.message || 'Login failed: Incorrect email or password');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            alert('An error occurred while trying to log in.');
        }
    };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="register-container">
        <p>Don't have an account?</p>
        <button onClick={onRegister} className="register-button">
          Register
        </button>
        <button onClick={onGuestLogin}>Login as guest</button>
      </div>
    </div>
  );
}

export default Login;
