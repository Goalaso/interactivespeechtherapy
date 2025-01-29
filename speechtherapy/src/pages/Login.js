import React, { useState } from 'react';

function Login({onRegister, onLoginSuccess}) {
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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div style={{marginTop: '10px' }}>
                <p>Dont have an account?</p>
                <button onClick={onRegister}>Register</button>
            </div>
        </div>
    );
}

export default Login;