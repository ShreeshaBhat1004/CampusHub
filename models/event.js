// models/event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true 
    },
    description: { 
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    categories: {
        type: [String], // An array of category tags
        enum: ['Hackathon', 'Workshop', 'Meetup', 'Competition', 'Social', 'Other'] // Limit tags for consistency
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' // Could link to the User who organized the event
    },
    interestedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], 
    maxAttendees: {
        type: Number,
        min: 1 // Ensure events have at least one potential attendee
    } 
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event; 
