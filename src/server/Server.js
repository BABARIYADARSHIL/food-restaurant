const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'your_secret_key'; 

const Users = [
  { email: 'darshil@example.com', password: '112211' } // Mock data, replace with your actual user data
];

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const { email, password } = req.body;

    const user = Users.find(u => u.email === email && u.password === password);
    if (user) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
