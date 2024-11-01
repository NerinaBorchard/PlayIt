require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Import bcrypt
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Initialize express
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// MongoDB connection string
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB via Mongoose'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define Mongoose schemas and models

// Song Schema
const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  link: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  image: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Song = mongoose.model('Song', songSchema);

// Playlist Schema
const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  hashtags: [{ type: String }],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  }],
  dateCreated: { type: Date, default: Date.now },
});

const PlaylistModel = mongoose.model('Playlist', playlistSchema);

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    username: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
  },
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

const UserModel = mongoose.model('User', userSchema);

// API Routes

const JWT_SECRET = process.env.JWT_SECRET;

// API Routes

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: "Login successful",
      token, // Send the token to the client
      user: {
        id: user._id,
        username: user.profile.username,
        name: user.profile.name,
        email: user.email,
        playlists: user.playlists,
        songs: user.songs,
        picture: user.profile.picture // Correct path to include picture in response
      }
    });
    
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});


// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;
//   const existingUser = await UserModel.findOne({ email });

//   if (existingUser) {
//     return res.status(409).json({ message: "User already exists" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new UserModel({
//     email,
//     password: hashedPassword,
//     profile: {
//       username: email.split('@')[0],
//       name: email.split('@')[0],
//     },
//     playlists: [],
//     songs: []
//   });

//   await newUser.save();
//   res.status(201).json({ message: "User created successfully" });
// });



// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Array of profile picture file paths
  const profilePictures = [
    'assets/images/user.png',
    'assets/images/user1.png',
    'assets/images/user2.png'
  ];

  // Select a random profile picture
  const randomProfilePicture = profilePictures[Math.floor(Math.random() * profilePictures.length)];

  const newUser = new UserModel({
    email,
    password: hashedPassword,
    profile: {
      username: email.split('@')[0],
      name: email.split('@')[0],
      picture: randomProfilePicture  // Set the random profile picture path
    },
    playlists: [],
    songs: []
  });

  await newUser.save();
  res.status(201).json({ message: "User created successfully" });
});




// Fetch all songs route (no authentication)
app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find(); // Fetch all songs
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

// Add new song route
app.post('/api/songs', async (req, res) => {
  const { title, artist, songLink, coverUrl, creator } = req.body;

  try {
    const newSong = new Song({
      title,
      artist,
      link: songLink,
      image: coverUrl,
      creator, // Assuming you pass the creator's ID from the frontend
    });

    const savedSong = await newSong.save(); // Save the new song to the database
    res.status(201).json(savedSong); // Return the saved song details
  } catch (err) {
    console.error('Error adding song:', err);
    res.status(500).json({ message: 'Failed to add new song.' });
  }
});

app.post('/api/songs', async (req, res) => {
  const { title, artist, songLink, coverUrl, creator } = req.body;

  try {
    // Create and save the new song
    const newSong = new Song({
      title,
      artist,
      link: songLink,
      image: coverUrl,
      creator,
    });

    const savedSong = await newSong.save(); // Save the song to the database

    // Find the user by the creator's ID and update their songs list
    await UserModel.findByIdAndUpdate(
      creator,
      { $push: { songs: savedSong._id } }, // Add the song ID to the user's songs array
      { new: true } // Return the updated document
    );

    res.status(201).json(savedSong); // Return the saved song details
  } catch (err) {
    console.error('Error adding song:', err);
    res.status(500).json({ message: 'Failed to add new song.' });
  }
});


// Delete a song by ID
app.delete('/api/songs/:id', async (req, res) => {
  const songId = req.params.id;

  try {
    // Find the song by ID and remove it
    await Song.findByIdAndDelete(songId);
    
    const deletedSong = await Song.findByIdAndDelete(songId);

    if (!deletedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }

    // Optionally, you can also update the user's song list if needed.
    // const userId = deletedSong.creator;
    // await User.findByIdAndUpdate(userId, { $pull: { songs: songId } });

    res.status(200).json({ message: 'Song deleted successfully' });
  } catch (error) {
    console.error('Error deleting song:', error);
    res.status(500).json({ message: 'Failed to delete song' });
  }
});


// Backend route (e.g., Node.js/Express)
app.get('/api/playlists/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await PlaylistModel.findById(id);
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
});




// // Update user's song list API route
// app.put('/api/users/:userId/songs', async (req, res) => {
//   const { userId } = req.params;
//   const { songId } = req.body; // Get the song ID from the request body

//   try {
//     // Find the user by ID and update their song list
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $push: { songs: songId } }, // Push the new song ID into the user's songs array
//       { new: true } // Return the updated user document
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json(updatedUser); // Return the updated user details
//   } catch (err) {
//     console.error('Error updating user song list:', err);
//     res.status(500).json({ message: 'Failed to update user\'s song list' });
//   }
// });




// Fetch all playlists route (no authentication)
app.get('/api/playlists', async (req, res) => {
  try {
    let playlists = await PlaylistModel.find()
      .populate('creator', 'profile.username') // Populate the 'creator' field with the user's 'username'
      .populate('songs'); // Optionally populate songs as well

    // Modify playlists to replace the creator field with just the username
    playlists = playlists.map(playlist => ({
      ...playlist._doc, // Get the original playlist document
      creator: playlist.creator.profile.username // Replace creator with the username
    }));

    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
});


// Fetch all playlists route (no authentication)
app.get('/api/play', async (req, res) => {
    try {
      const playlists = await PlaylistModel.find(); // Fetch all songs
      res.json(playlists);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch songs' });
    }
});


app.post('/api/playlists', async (req, res) => {
  const { name, genre, description, hashtags, coverImage, creator } = req.body;

  try {
      // Create and save the new playlist
      const newPlaylist = new PlaylistModel({
          name,
          genre,
          description,
          hashtags,
          coverImage,
          creator,
      });

      const savedPlaylist = await newPlaylist.save(); // Save the playlist to the database

      res.status(201).json(savedPlaylist); // Return the saved playlist details
  } catch (err) {
      console.error('Error adding playlist:', err);
      res.status(500).json({ message: 'Failed to add new playlist.' });
  }
});

// Update playlist route
app.put('/api/playlists/:playlistId', async (req, res) => {
  const { playlistId } = req.params;
  const { name, genre, description, coverImage } = req.body;

  try {
    // Find the playlist and update its details
    const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(
      playlistId,
      { name, genre, description, coverImage },
      { new: true } // Return the updated document
    );

    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    res.json({
      message: 'Playlist updated successfully',
      playlist: updatedPlaylist,
    });
  } catch (error) {
    console.error('Error updating playlist:', error);
    res.status(500).json({ message: 'Failed to update playlist' });
  }
});




// Fetch all users route (no authentication)
app.get('/api/users', async (req, res) => {
  try {
    const users = await UserModel.find(); // Fetch all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Fetch user profile by ID route
app.get('/api/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId; // Get userId from request parameters
    const user = await UserModel.findById(userId).populate('playlists').populate('songs'); // Fetch user by ID

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle case when user is not found
    }

    // Send back the user details (excluding password for security)
    res.json({
      id: user._id,
      username: user.profile.username,
      name: user.profile.name,
      email: user.email,
      playlists: user.playlists,
      songs: user.songs,
      picture: user.profile.picture
    });
    
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user profile' }); // Handle server errors
  }
});


// Update user profile route
app.put('/api/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const { username, name, email, picture } = req.body;

  try {
    // Find the user and update their profile
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { 
        profile: { 
          username, 
          name, 
          picture 
        } 
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'User profile updated successfully',
      user: {
        id: updatedUser._id,
        username: updatedUser.profile.username,
        name: updatedUser.profile.name,
        email: updatedUser.email,
        picture: updatedUser.profile.picture,
      },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Failed to update user profile' });
  }
});

// Delete user profile
app.delete('/api/user/:id', async (req, res) => {
  const userId = req.params.id;
  
  try {
    // Remove the user from the database
    await UserModel.findByIdAndDelete(userId);
    
    // Optionally, you could also delete related data like songs and playlists here
    await Song.deleteMany({ creator: userId });
    await PlaylistModel.deleteMany({ creator: userId });

    res.status(200).json({ message: "User profile deleted successfully." });
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ message: "Failed to delete user profile." });
  }
});


// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


