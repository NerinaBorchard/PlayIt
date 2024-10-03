const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now, // Automatically sets to the current date
    },
    image: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model
    },
});

// Create a Song model
const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;
