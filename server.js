const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Basic route (Example)
app.get('/', (req, res) => {
    res.send('Hello, CampusHub Backend!');
});

app.listen(port, () => {
    console.log(`CampusHub server listening on port ${port}`);
});

// ... imports
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
// ... 
