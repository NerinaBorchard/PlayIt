"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt'); // Import bcrypt
var cors = require('cors');
var jwt = require('jsonwebtoken');

// Initialize express
var app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express["static"](path.join(__dirname, '../../frontend/public')));

// MongoDB connection string
var mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(function () {
  return console.log('Connected to MongoDB via Mongoose');
})["catch"](function (err) {
  return console.error('Failed to connect to MongoDB:', err);
});

// Define Mongoose schemas and models

// Song Schema
var songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    "default": Date.now
  },
  image: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
var Song = mongoose.model('Song', songSchema);

// Playlist Schema
var playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  hashtags: [{
    type: String
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
  dateCreated: {
    type: Date,
    "default": Date.now
  },
  bookmarkedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }] // To store user IDs of bookmarks
});
var PlaylistModel = mongoose.model('Playlist', playlistSchema);

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

var commentSchema = new mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  playlistId: String
});
var Comment = mongoose.model('Comment', commentSchema);

// User Schema
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      "default": 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  },
  playlists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  }],
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }]
});
var UserModel = mongoose.model('User', userSchema);
var GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});
var GenreModel = mongoose.model('Genre', GenreSchema);

// API Routes

var JWT_SECRET = process.env.JWT_SECRET;

// API Routes

// Login route
app.post('/api/login', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, email, password, user, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.next = 3;
          return UserModel.findOne({
            email: email
          });
        case 3:
          user = _context.sent;
          _context.t0 = user;
          if (!_context.t0) {
            _context.next = 9;
            break;
          }
          _context.next = 8;
          return bcrypt.compare(password, user.password);
        case 8:
          _context.t0 = _context.sent;
        case 9:
          if (!_context.t0) {
            _context.next = 14;
            break;
          }
          // Generate a JWT token
          token = jwt.sign({
            id: user._id,
            email: user.email
          }, JWT_SECRET, {
            expiresIn: '1h'
          });
          res.status(200).json({
            message: "Login successful",
            token: token,
            // Send the token to the client
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
          _context.next = 15;
          break;
        case 14:
          res.status(401).json({
            message: "Invalid email or password"
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Signup route
app.post('/api/signup', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, password, existingUser, hashedPassword, profilePictures, randomProfilePicture, newUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 3;
          return UserModel.findOne({
            email: email
          });
        case 3:
          existingUser = _context2.sent;
          if (!existingUser) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(409).json({
            message: "User already exists"
          }));
        case 6:
          _context2.next = 8;
          return bcrypt.hash(password, 10);
        case 8:
          hashedPassword = _context2.sent;
          // Array of profile picture file paths
          profilePictures = ['assets/images/user.png', 'assets/images/user1.png', 'assets/images/user2.png']; // Select a random profile picture
          randomProfilePicture = profilePictures[Math.floor(Math.random() * profilePictures.length)];
          newUser = new UserModel({
            email: email,
            password: hashedPassword,
            profile: {
              username: email.split('@')[0],
              name: email.split('@')[0],
              picture: randomProfilePicture // Set the random profile picture path
            },
            playlists: [],
            songs: []
          });
          _context2.next = 14;
          return newUser.save();
        case 14:
          res.status(201).json({
            message: "User created successfully"
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Fetch all songs route (no authentication)
app.get('/api/songs', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var songs;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Song.find();
        case 3:
          songs = _context3.sent;
          // Fetch all songs
          res.json(songs);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: 'Failed to fetch songs'
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Add new song route
app.post('/api/songs', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, title, artist, songLink, coverUrl, creator, newSong, savedSong;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body3 = req.body, title = _req$body3.title, artist = _req$body3.artist, songLink = _req$body3.songLink, coverUrl = _req$body3.coverUrl, creator = _req$body3.creator;
          _context4.prev = 1;
          newSong = new Song({
            title: title,
            artist: artist,
            link: songLink,
            image: coverUrl,
            creator: creator
          });
          _context4.next = 5;
          return newSong.save();
        case 5:
          savedSong = _context4.sent;
          _context4.next = 8;
          return UserModel.findByIdAndUpdate(creator, {
            $push: {
              songs: savedSong._id
            }
          }, {
            "new": true
          });
        case 8:
          res.status(201).json(savedSong);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.error('Error adding song:', _context4.t0);
          res.status(500).json({
            message: 'Failed to add new song.'
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Delete a song by ID
app["delete"]('/api/songs/:id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var songId, deletedSong;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          songId = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return Song.findByIdAndDelete(songId);
        case 4:
          _context5.next = 6;
          return Song.findByIdAndDelete(songId);
        case 6:
          deletedSong = _context5.sent;
          if (deletedSong) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Song not found'
          }));
        case 9:
          // Optionally, you can also update the user's song list if needed.
          // const userId = deletedSong.creator;
          // await User.findByIdAndUpdate(userId, { $pull: { songs: songId } });

          res.status(200).json({
            message: 'Song deleted successfully'
          });
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          console.error('Error deleting song:', _context5.t0);
          res.status(500).json({
            message: 'Failed to delete song'
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 12]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

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

app.get('/api/comments', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var playlistId, comments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          playlistId = req.query.playlistId; // console.log('Received playlistId:', playlistId); // Debugging line
          _context6.prev = 1;
          _context6.next = 4;
          return Comment.find({
            playlistId: playlistId
          }).populate('user', 'profile.username');
        case 4:
          comments = _context6.sent;
          // console.log('Fetched comments:', comments); // Log fetched comments for verification
          res.json(comments);
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          console.error('Error fetching comments:', _context6.t0);
          res.status(500).json({
            error: 'Failed to fetch comments'
          });
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

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

app.get('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, playlist;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return PlaylistModel.findById(id).populate('creator', 'profile.username') // Populate creator's username
          .populate('songs');
        case 4:
          playlist = _context7.sent;
          if (playlist) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 7:
          res.json(playlist); // Return the playlist with populated songs
          _context7.next = 13;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          res.status(500).json({
            message: 'Error fetching playlist',
            error: _context7.t0
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// Endpoint to update bookmark status
app.patch('/api/playlists/:id/bookmark', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, updateData, playlist;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          updateData = req.body;
          _context8.prev = 2;
          _context8.next = 5;
          return PlaylistModel.findByIdAndUpdate(id, updateData, {
            "new": true
          });
        case 5:
          playlist = _context8.sent;
          if (playlist) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 8:
          res.json(playlist);
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](2);
          console.error('Error updating bookmark:', _context8.t0);
          res.status(500).json({
            message: 'Error updating bookmark'
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 11]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
app.get('/api/bookPlaylists', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, playlists;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          userId = req.query.userId;
          _context9.prev = 1;
          _context9.next = 4;
          return PlaylistModel.find({
            bookmarkedBy: userId
          });
        case 4:
          playlists = _context9.sent;
          res.json(playlists);
          _context9.next = 12;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          console.error('Error fetching book marked playlists:', _context9.t0);
          res.status(500).json({
            message: 'Error fetching playlists'
          });
        case 12:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// DELETE endpoint to remove a playlist by ID
app["delete"]('/api/playlists/:id', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, deletedPlaylist;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          id = req.params.id;
          _context10.next = 4;
          return PlaylistModel.findByIdAndDelete(id);
        case 4:
          deletedPlaylist = _context10.sent;
          if (deletedPlaylist) {
            _context10.next = 7;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 7:
          res.status(200).json({
            message: 'Playlist deleted successfully!'
          });
          _context10.next = 14;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.error('Error deleting playlist:', _context10.t0);
          res.status(500).json({
            message: 'Error deleting playlist'
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

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
app.get('/api/homePlaylists', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return PlaylistModel.find().populate('creator', 'profile.username') // Populate the 'creator' field with the user's 'username'
          .populate('songs');
        case 3:
          playlists = _context11.sent;
          // Optionally populate songs as well

          // Modify playlists to replace the creator field with just the username
          playlists = playlists.map(function (playlist) {
            return _objectSpread(_objectSpread({}, playlist._doc), {}, {
              // Get the original playlist document
              creator: playlist.creator.profile.username // Replace creator with the username
            });
          });
          res.json(playlists);
          _context11.next = 11;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            error: 'Failed to fetch playlists'
          });
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
app.post('/api/playlists', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body4, name, genre, description, hashtags, coverImage, creator, defaultImageUrl, newPlaylist, savedPlaylist;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body4 = req.body, name = _req$body4.name, genre = _req$body4.genre, description = _req$body4.description, hashtags = _req$body4.hashtags, coverImage = _req$body4.coverImage, creator = _req$body4.creator; // Default image URL
          defaultImageUrl = 'https://img.freepik.com/free-photo/red-background-with-slight-shades_23-2147734193.jpg?t=st=1730496549~exp=1730500149~hmac=2f5ef3cdc14e6b5b5d430d8bf27485b8bfed1572bd4d7868add1f4433b6d533e&w=996';
          _context12.prev = 2;
          newPlaylist = new PlaylistModel({
            name: name,
            genre: genre,
            description: description,
            hashtags: hashtags,
            coverImage: coverImage || defaultImageUrl,
            // Use default if coverImage is missing
            creator: creator
          });
          _context12.next = 6;
          return newPlaylist.save();
        case 6:
          savedPlaylist = _context12.sent;
          res.status(201).json(savedPlaylist);
          _context12.next = 14;
          break;
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](2);
          console.error('Error adding playlist:', _context12.t0);
          res.status(500).json({
            message: 'Failed to add new playlist.'
          });
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[2, 10]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

// Fetch all playlists route (no authentication)
app.get('/api/play', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var playlists;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return PlaylistModel.find();
        case 3:
          playlists = _context13.sent;
          // Fetch all songs
          res.json(playlists);
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            error: 'Failed to fetch songs'
          });
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());
app.post('/api/playlists', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body5, name, genre, description, hashtags, coverImage, creator, newPlaylist, savedPlaylist;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _req$body5 = req.body, name = _req$body5.name, genre = _req$body5.genre, description = _req$body5.description, hashtags = _req$body5.hashtags, coverImage = _req$body5.coverImage, creator = _req$body5.creator;
          _context14.prev = 1;
          // Create and save the new playlist
          newPlaylist = new PlaylistModel({
            name: name,
            genre: genre,
            description: description,
            hashtags: hashtags,
            coverImage: coverImage,
            creator: creator
          });
          _context14.next = 5;
          return newPlaylist.save();
        case 5:
          savedPlaylist = _context14.sent;
          // Save the playlist to the database

          res.status(201).json(savedPlaylist); // Return the saved playlist details
          _context14.next = 13;
          break;
        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14["catch"](1);
          console.error('Error adding playlist:', _context14.t0);
          res.status(500).json({
            message: 'Failed to add new playlist.'
          });
        case 13:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 9]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

// Update playlist route
app.put('/api/playlists/:playlistId', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var playlistId, _req$body6, name, genre, description, coverImage, updatedPlaylist;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          playlistId = req.params.playlistId;
          _req$body6 = req.body, name = _req$body6.name, genre = _req$body6.genre, description = _req$body6.description, coverImage = _req$body6.coverImage;
          _context15.prev = 2;
          _context15.next = 5;
          return PlaylistModel.findByIdAndUpdate(playlistId, {
            name: name,
            genre: genre,
            description: description,
            coverImage: coverImage
          }, {
            "new": true
          } // Return the updated document
          );
        case 5:
          updatedPlaylist = _context15.sent;
          if (updatedPlaylist) {
            _context15.next = 8;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            message: 'Playlist not found'
          }));
        case 8:
          res.json({
            message: 'Playlist updated successfully',
            playlist: updatedPlaylist
          });
          _context15.next = 15;
          break;
        case 11:
          _context15.prev = 11;
          _context15.t0 = _context15["catch"](2);
          console.error('Error updating playlist:', _context15.t0);
          res.status(500).json({
            message: 'Failed to update playlist'
          });
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 11]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

// In your backend code
app.post('/api/comments', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var _req$body7, text, user, playlistId, newComment;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _req$body7 = req.body, text = _req$body7.text, user = _req$body7.user, playlistId = _req$body7.playlistId;
          _context16.prev = 1;
          newComment = new Comment({
            text: text,
            user: user,
            // Assumes you're storing the user's ID
            playlistId: playlistId
          });
          _context16.next = 5;
          return newComment.save();
        case 5:
          res.status(201).json(newComment); // Return the saved comment
          _context16.next = 12;
          break;
        case 8:
          _context16.prev = 8;
          _context16.t0 = _context16["catch"](1);
          console.error('Error saving comment:', _context16.t0);
          res.status(500).json({
            error: 'Failed to save comment'
          });
        case 12:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 8]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

// Fetch all users route (no authentication)
app.get('/api/users', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return UserModel.find();
        case 3:
          users = _context17.sent;
          // Fetch all users
          res.json(users);
          _context17.next = 10;
          break;
        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          res.status(500).json({
            error: 'Failed to fetch users'
          });
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 7]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());

// Fetch user profile by ID route
app.get('/api/user/:userId', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          userId = req.params.userId; // Get userId from request parameters
          _context18.next = 4;
          return UserModel.findById(userId).populate('playlists').populate('songs');
        case 4:
          user = _context18.sent;
          if (user) {
            _context18.next = 7;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 7:
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
          _context18.next = 13;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          res.status(500).json({
            error: 'Failed to fetch user profile'
          }); // Handle server errors
        case 13:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

// Update user profile route
app.put('/api/user/:userId', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var userId, _req$body8, username, name, email, picture, updatedUser;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          userId = req.params.userId;
          _req$body8 = req.body, username = _req$body8.username, name = _req$body8.name, email = _req$body8.email, picture = _req$body8.picture;
          _context19.prev = 2;
          _context19.next = 5;
          return UserModel.findByIdAndUpdate(userId, {
            profile: {
              username: username,
              name: name,
              picture: picture
            }
          }, {
            "new": true
          } // Return the updated document
          );
        case 5:
          updatedUser = _context19.sent;
          if (updatedUser) {
            _context19.next = 8;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));
        case 8:
          res.json({
            message: 'User profile updated successfully',
            user: {
              id: updatedUser._id,
              username: updatedUser.profile.username,
              name: updatedUser.profile.name,
              email: updatedUser.email,
              picture: updatedUser.profile.picture
            }
          });
          _context19.next = 15;
          break;
        case 11:
          _context19.prev = 11;
          _context19.t0 = _context19["catch"](2);
          console.error('Error updating user:', _context19.t0);
          res.status(500).json({
            message: 'Failed to update user profile'
          });
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[2, 11]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());

// Delete user profile
app["delete"]('/api/user/:id', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var userId;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          userId = req.params.id;
          _context20.prev = 1;
          _context20.next = 4;
          return UserModel.findByIdAndDelete(userId);
        case 4:
          _context20.next = 6;
          return Song.deleteMany({
            creator: userId
          });
        case 6:
          _context20.next = 8;
          return PlaylistModel.deleteMany({
            creator: userId
          });
        case 8:
          res.status(200).json({
            message: "User profile deleted successfully."
          });
          _context20.next = 15;
          break;
        case 11:
          _context20.prev = 11;
          _context20.t0 = _context20["catch"](1);
          console.error('Error deleting user profile:', _context20.t0);
          res.status(500).json({
            message: "Failed to delete user profile."
          });
        case 15:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 11]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());
app.get('/api/genres', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var genres;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return GenreModel.find();
        case 3:
          genres = _context21.sent;
          // Assuming you have a Genre model
          res.json(genres);
          _context21.next = 10;
          break;
        case 7:
          _context21.prev = 7;
          _context21.t0 = _context21["catch"](0);
          res.status(500).json({
            message: 'Error fetching genres'
          });
        case 10:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 7]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());

// Serve index.html for all other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

// Start the server
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});