const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = {};

// Register endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    if (users[email]) {
        return res.status(400).json({ success: false, message: "User already exists." });
    }

    users[email] = password;  
    res.json({ success: true, message: "User registered successfully." });
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (users[email] && users[email] === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});