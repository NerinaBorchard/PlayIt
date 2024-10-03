// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     profile: {
//         username: { type: String, required: true },
//         name: { type: String, required: true },
//         picture: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
//     },
//     playlists: { type: Array, default: [] },
//     songs: { type: Array, default: [] },
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure emails are unique
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // Default profile picture
        },
    },
    playlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist', // Reference to the Playlist model
    }],
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song', // Reference to the Song model
    }],
});

// Create a User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
