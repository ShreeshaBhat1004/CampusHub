const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hash this later for security
    major: { type: String },
    skills: [String],
    interestedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }] 
    // ... other fields as needed
});

const User = mongoose.model('User', userSchema);
module.exports = User;