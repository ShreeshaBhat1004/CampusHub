const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user (/users POST)
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Additional routes for:
// - GET /users/:id  - Get a single user by ID
// - PUT /users/:id  - Update a user
// ...

module.exports = router;
