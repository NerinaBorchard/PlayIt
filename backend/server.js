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
        username: user.profile.username,
        name: user.profile.name,
        email: user.email,
        playlists: user.playlists,
        songs: user.songs,
      }
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });

    req.user = user; // Attach the user to the request object
    next(); // Move to the next middleware/route
  });
};


// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    email,
    password: hashedPassword,
    profile: {
      username: email.split('@')[0],
      name: '',
    },
    playlists: [],
    songs: []
  });

  await newUser.save();
  res.status(201).json({ message: "User created successfully" });
});

// Fetch songs route
app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find(); // Fetch all songs
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

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
  
  

// Fetch users route
app.get('/api/users', async (req, res) => {
  try {
    const users = await UserModel.find(); // Fetch all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
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

