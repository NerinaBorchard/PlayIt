// const express = require("express");
// const path = require("path");
// const { MongoClient } = require('mongodb');

// const app = express();

// // MongoDB connection string (replace 'nerina' with the correct password)
// const url = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/?retryWrites=true&w=majority&appName=playit";
// const client = new MongoClient(url);

// app.use(express.static(path.join(__dirname, '../../frontend/public')));

// // MongoDB connection
// async function main() {
//     try {
//         // Create connection
//         await client.connect();
//         console.info("Connected to MongoDB");

//         // Set the database and collection names
//         const db = client.db("playit"); // Replace with your actual database name
//         // const collection = db.collection("playlists"); 
//         // // Fetch all playlists and log them to the console
//         // const playlists = await collection.find({}).toArray();
//         // console.log("Playlists in the collection:");
//         // console.log(playlists);



//         // const collection = db.collection("songs"); 
//         // // Fetch all playlists and log them to the console
//         // const songs = await collection.find({}).toArray();
//         // console.log("Songs in the collection:");
//         // console.log(songs);

//         const collection = db.collection("users"); 
//         // Fetch all playlists and log them to the console
//         const users = await collection.find({}).toArray();
//         console.log("Users in the collection:");
//         console.log(users);
        
       

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the MongoDB connection when the server shuts down
//         // You may want to leave the connection open if you're making frequent database calls
//         await client.close();
//     }
// }

// // Call main to establish the MongoDB connection
// main().catch(console.error);

// // Serve index.html for all other routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
// });

// // Start the server
// app.listen(3001, () => {
//     console.log("Listening on http://localhost:3001");
// });











// const express = require('express');
// const path = require('path');
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');  // Import bcrypt

// const app = express();
// const url = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/?retryWrites=true&w=majority&appName=playit";
// const client = new MongoClient(url);

// app.use(bodyParser.json());  // To parse JSON from request body
// app.use(express.static(path.join(__dirname, '../../frontend/public')));

// // MongoDB connection
// async function main() {
//     try {
//         await client.connect();
//         console.info("Connected to MongoDB");

//         const db = client.db("playit");
//         const usersCollection = db.collection("users");

//         // Login API route
//         app.post('/api/login', async (req, res) => {
//             const { email, password } = req.body;
            
//             // Find the user with the provided email
//             const user = await usersCollection.findOne({ email: email });
            
//             if (user) {
//                 // Compare provided password with hashed password
//                 const isPasswordValid = await bcrypt.compare(password, user.password);
//                 if (isPasswordValid) {
//                     res.status(200).json({
//                         message: "Login successful",
//                         user: {
//                             username: user.profile.username,
//                             name: user.profile.name,
//                             email: user.email,
//                             playlists: user.playlists,
//                             songs: user.songs,
//                         }
//                     });
//                 } else {
//                     res.status(401).json({ message: "Invalid email or password" });
//                 }
//             } else {
//                 res.status(401).json({ message: "Invalid email or password" });
//             }
//         });

//         // Sign Up API route
//         app.post('/api/signup', async (req, res) => {
//             const { email, password } = req.body;

//             // Check if the user already exists
//             const existingUser = await usersCollection.findOne({ email: email });
//             if (existingUser) {
//                 return res.status(409).json({ message: "User already exists" });
//             }

//             // Hash the password
//             const hashedPassword = await bcrypt.hash(password, 10);

//             // Create new user object
//             const newUser = {
//                 email: email,
//                 password: hashedPassword,  // Save the hashed password
//                 profile: {
//                     username: email.split('@')[0],  // Use part before '@' as username
//                     name: '',  // Optionally set this to an empty string or prompt for it
//                     picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
//                 },
//                 playlists: [],
//                 songs: []
//             };

//             // Insert the new user into the database
//             await usersCollection.insertOne(newUser);
//             res.status(201).json({ message: "User created successfully" });
            
//         });

//     } catch (e) {
//         console.error(e);
//     } 
// }

// main().catch(console.error());

// // Serve index.html for all other routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
// });

// // Start the server
// app.listen(3001, () => {
//     console.log("Listening on http://localhost:3001");
// });


















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Create the app
// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection string
// const mongoURI = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/playit?retryWrites=true&w=majority";

// // Connect to MongoDB using Mongoose
// mongoose.connect(mongoURI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB:', err));

// // Define a Song schema and model
// const songSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   artist: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
//   dateAdded: {
//     type: Date,
//     default: Date.now, // Automatically sets to the current date
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   creator: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User', // Reference to the User model
//   },
// });

// const Song = mongoose.model('Song', songSchema);

// // API endpoint to fetch songs
// app.get('/api/songs', async (req, res) => {
//   try {
//     const songs = await Song.find(); // Fetch all songs
//     res.json(songs);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch songs' });
//   }
// });

// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     genre: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     coverImage: {
//         type: String,
//         required: true,
//     },
//     hashtags: [{
//         type: String,
//         required: false,
//     }],
//     creator: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User', // Reference to the User model
//     },
//     songs: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Song', // Reference to the Song model
//     }],
//     comments: [{
//         userId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User', // Reference to the User model for the commenter
//         },
//         text: {
//             type: String,
//             required: true,
//         },
//         date: {
//             type: Date,
//             default: Date.now,
//         },
//     }],
//     dateCreated: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const PlaylistModel = mongoose.model('Playlist', playlistSchema);

// // API endpoint to fetch songs
// app.get('/api/playlists', async (req, res) => {
//     try {
//       const playlists = await PlaylistModel.find(); // Fetch all playlists
//       res.json(playlists);
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to fetch playlists' });
//     }
//   });

//   const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true, // Ensure emails are unique
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     profile: {
//         username: {
//             type: String,
//             required: true,
//         },
//         name: {
//             type: String,
//             required: true,
//         },
//         picture: {
//             type: String,
//             default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // Default profile picture
//         },
//     },
//     playlists: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Playlist', // Reference to the Playlist model
//     }],
//     songs: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Song', // Reference to the Song model
//     }],
// });

// // Create a User model
// const UserModel = mongoose.model('User', userSchema);

// // API endpoint to fetch users
// app.get('/api/users', async (req, res) => {
//     try {
//       const users = await UserModel.find(); // Fetch all users
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to fetch users' });
//     }
//   });


// // Start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Import bcrypt
const cors = require('cors');

// Initialize express
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// MongoDB connection string (for Mongoose)
const mongoURI = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/playit?retryWrites=true&w=majority";

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

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).json({
      message: "Login successful",
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

// Fetch playlists route
app.get('/api/playlists', async (req, res) => {
  try {
    const playlists = await PlaylistModel.find(); // Fetch all playlists
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

