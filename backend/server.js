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
            
//             // Find the user with the provided email and password
//             const user = await usersCollection.findOne({ email: email, password: password });
            
//             if (user) {
//                 res.status(200).json({
//                     message: "Login successful",
//                     user: {
//                         username: user.profile.username,
//                         name: user.profile.name,
//                         email: user.email,
//                         playlists: user.playlists,
//                         songs: user.songs,
//                     }
//                 });
//             } else {
//                 res.status(401).json({ message: "Invalid email or password" });
//             }
//         });

//     } catch (e) {
//         console.error(e);
//     } 
// }

// main().catch(console.error);

// // Serve index.html for all other routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
// });

// // Start the server
// app.listen(3001, () => {
//     console.log("Listening on http://localhost:3001");
// });








const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');  // Import bcrypt

const app = express();
const url = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/?retryWrites=true&w=majority&appName=playit";
const client = new MongoClient(url);

app.use(bodyParser.json());  // To parse JSON from request body
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// MongoDB connection
async function main() {
    try {
        await client.connect();
        console.info("Connected to MongoDB");

        const db = client.db("playit");
        const usersCollection = db.collection("users");

        // Login API route
        app.post('/api/login', async (req, res) => {
            const { email, password } = req.body;
            
            // Find the user with the provided email
            const user = await usersCollection.findOne({ email: email });
            
            if (user) {
                // Compare provided password with hashed password
                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (isPasswordValid) {
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
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        });

        // Sign Up API route
        app.post('/api/signup', async (req, res) => {
            const { email, password } = req.body;

            // Check if the user already exists
            const existingUser = await usersCollection.findOne({ email: email });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists" });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user object
            const newUser = {
                email: email,
                password: hashedPassword,  // Save the hashed password
                profile: {
                    username: email.split('@')[0],  // Use part before '@' as username
                    name: '',  // Optionally set this to an empty string or prompt for it
                    picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                },
                playlists: [],
                songs: []
            };

            // Insert the new user into the database
            await usersCollection.insertOne(newUser);
            res.status(201).json({ message: "User created successfully" });
        });

    } catch (e) {
        console.error(e);
    } 
}

main().catch(console.error());

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

// Start the server
app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
