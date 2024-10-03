const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    hashtags: [{
        type: String,
        required: false,
    }],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song', // Reference to the Song model
    }],
    comments: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model for the commenter
        },
        text: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

// Create a Playlist model
const PlaylistModel = mongoose.model('Playlist', playlistSchema);

module.exports = PlaylistModel;
