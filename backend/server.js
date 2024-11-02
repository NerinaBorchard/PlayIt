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
  dateCreated: { type: Date, default: Date.now },
  bookmarkedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // To store user IDs of bookmarks
});

const PlaylistModel = mongoose.model('Playlist', playlistSchema);


// // Comment Schema
// const CommentSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   playlistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Playlist', required: true },
// });

// const CommentModel = mongoose.model('Comment', CommentSchema);
// module.exports = CommentModel;

// // Comment Schema
// const commentSchema = new mongoose.Schema({
//   text: String,
//   user: String,
//   playlistId: String, // Ensure this is a String
// });
// const Comment = mongoose.model('Comment', commentSchema);

const commentSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  playlistId: String,
});

const Comment = mongoose.model('Comment', commentSchema);



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

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const GenreModel = mongoose.model('Genre', GenreSchema);

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


app.patch('/api/playlists/:id/songs', async (req, res) => {
  const { songIds } = req.body;
  console.log("Received song IDs:", songIds); // Debugging line

  try {
    const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { songs: { $each: songIds } } },
      { new: true }
    );
    res.json(updatedPlaylist);
  } catch (error) {
    console.error('Error updating playlist with eish songs:', error);
    res.status(500).json({ message: error.message });
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
      creator,
    });

    const savedSong = await newSong.save();
    await UserModel.findByIdAndUpdate(
      creator,
      { $push: { songs: savedSong._id } },
      { new: true }
    );

    res.status(201).json(savedSong);
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



// // Backend route (Node.js/Express)
// app.get('/api/playlists/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const playlist = await PlaylistModel.findById(id)
//       .populate('creator', 'profile.username'); // Adjust the path to match your user schema

//     if (!playlist) return res.status(404).json({ message: 'Playlist not found' });
    
//     res.json(playlist);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching playlist', error });
//   }
// });



// app.get('/api/comments/:playlistId', async (req, res) => {
//   const { playlistId } = req.params;
//   try {
//     const comments = await CommentModel.find({ playlistId: playlistId })
//       .populate('user', 'profile.username'); // Populate user to get username
//     res.json(comments); // Return only the comments
//   } catch (error) {
//     console.error('Error fetching comments:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Error fetching comments', error });
//   }
// });

// app.get('/api/comments/:playlistId', async (req, res) => {
//   const { playlistId } = req.params;
//   try {
//     const comments = await CommentModel.find({ playlistId: playlistId })
//       .populate('user', 'profile.username'); // Populate user to get username
//     res.json(comments);
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//     res.status(500).json({ message: 'Error fetching comments', error });
//   }
// });

// app.get('/api/comments', async (req, res) => {
//   const { playlistId } = req.query;
//   console.log('Received playlistId:', playlistId); // Debugging line
//   try {
//     const comments = await Comment.find({ playlistId });
//     console.log('Fetched comments:', comments); // Log fetched comments for verification
//     res.json(comments);
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//     res.status(500).json({ error: 'Failed to fetch comments' });
//   }
// });


app.get('/api/comments', async (req, res) => {
  const { playlistId } = req.query;
  // console.log('Received playlistId:', playlistId); // Debugging line
  try {
    // Populate the 'user' field with the 'profile' subfield of the User model
    const comments = await Comment.find({ playlistId }).populate('user', 'profile.username');
    // console.log('Fetched comments:', comments); // Log fetched comments for verification
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});






// app.get('/api/playlists/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const playlist = await PlaylistModel.findById(id)
//       .populate('creator', 'profile.username'); // Adjust the path to match your user schema

//     if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

//     res.json(playlist); // Only return the playlist
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching playlist', error });
//   }
// });

app.get('/api/playlists/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await PlaylistModel.findById(id)
      .populate('creator', 'profile.username') // Populate creator's username
      .populate('songs'); // Populate the songs array with full song details

    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

    res.json(playlist); // Return the playlist with populated songs
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error });
  }
});


// Endpoint to update bookmark status
app.patch('/api/playlists/:id/bookmark', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const playlist = await PlaylistModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.json(playlist);
  } catch (error) {
    console.error('Error updating bookmark:', error);
    res.status(500).json({ message: 'Error updating bookmark' });
  }
});


app.get('/api/bookPlaylists', async (req, res) => {
  const userId = req.query.userId;

  try {
    const playlists = await PlaylistModel.find({ bookmarkedBy: userId });
    
    res.json(playlists);
  } catch (error) {
    console.error('Error fetching book marked playlists:', error);
    res.status(500).json({ message: 'Error fetching playlists' });
  }
});




// DELETE endpoint to remove a playlist by ID
app.delete('/api/playlists/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await PlaylistModel.findByIdAndDelete(id);
    
    if (!deletedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    
    res.status(200).json({ message: 'Playlist deleted successfully!' });
  } catch (error) {
    console.error('Error deleting playlist:', error);
    res.status(500).json({ message: 'Error deleting playlist' });
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




// // Fetch all playlists route (no authentication)
app.get('/api/homePlaylists', async (req, res) => {
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

app.post('/api/playlists', async (req, res) => {
  const { name, genre, description, hashtags, coverImage, creator } = req.body;

  // Default image URL
  const defaultImageUrl = 'https://img.freepik.com/free-photo/red-background-with-slight-shades_23-2147734193.jpg?t=st=1730496549~exp=1730500149~hmac=2f5ef3cdc14e6b5b5d430d8bf27485b8bfed1572bd4d7868add1f4433b6d533e&w=996';
  
  try {
    const newPlaylist = new PlaylistModel({
      name,
      genre,
      description,
      hashtags,
      coverImage: coverImage || defaultImageUrl, // Use default if coverImage is missing
      creator,
    });

    const savedPlaylist = await newPlaylist.save();
    res.status(201).json(savedPlaylist);
  } catch (err) {
    console.error('Error adding playlist:', err);
    res.status(500).json({ message: 'Failed to add new playlist.' });
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




// In your backend code
app.post('/api/comments', async (req, res) => {
  const { text, user, playlistId } = req.body;
  
  try {
    const newComment = new Comment({
      text,
      user, // Assumes you're storing the user's ID
      playlistId
    });
    
    await newComment.save();
    res.status(201).json(newComment); // Return the saved comment
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Failed to save comment' });
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


app.get('/api/genres', async (req, res) => {
  try {
    const genres = await GenreModel.find(); // Assuming you have a Genre model
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching genres' });
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


