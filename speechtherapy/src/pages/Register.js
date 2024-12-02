import React, { useState } from 'react';

function Register({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
        
                },
                body: JSON.stringify({email, password}),
            });

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if(data.success){
                alert('Account created successfully');
                onLogin();
            } else{
                alert('Account creation failed: ' + data.message);
            }
        } catch (error){
            console.error('Error occurred during registration: ', error);
            alert('An error occurred while trying to create an account.' + error.message);
        }
        
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
            </form>
            <div style={{ marginTop: '10px' }}>
                <p>Already have an account?</p>
                <button onClick={onLogin}>Back to Login</button>
            </div>
        </div>
    );
}

export default Register;
