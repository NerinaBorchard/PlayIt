"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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

var express = require('express');
var path = require('path');
var _require = require('mongodb'),
  MongoClient = _require.MongoClient;
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt'); // Import bcrypt

var app = express();
var url = "mongodb+srv://u21537144:vHpb6E2jMOq6iHH5@playit.xyo7t.mongodb.net/?retryWrites=true&w=majority&appName=playit";
var client = new MongoClient(url);
app.use(bodyParser.json()); // To parse JSON from request body
app.use(express["static"](path.join(__dirname, '../../frontend/public')));

// MongoDB connection
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var db, usersCollection;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return client.connect();
        case 3:
          console.info("Connected to MongoDB");
          db = client.db("playit");
          usersCollection = db.collection("users"); // Login API route
          app.post('/api/login', /*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
              var _req$body, email, password, user, isPasswordValid;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _req$body = req.body, email = _req$body.email, password = _req$body.password; // Find the user with the provided email
                    _context.next = 3;
                    return usersCollection.findOne({
                      email: email
                    });
                  case 3:
                    user = _context.sent;
                    if (!user) {
                      _context.next = 11;
                      break;
                    }
                    _context.next = 7;
                    return bcrypt.compare(password, user.password);
                  case 7:
                    isPasswordValid = _context.sent;
                    if (isPasswordValid) {
                      res.status(200).json({
                        message: "Login successful",
                        user: {
                          username: user.profile.username,
                          name: user.profile.name,
                          email: user.email,
                          playlists: user.playlists,
                          songs: user.songs
                        }
                      });
                    } else {
                      res.status(401).json({
                        message: "Invalid email or password"
                      });
                    }
                    _context.next = 12;
                    break;
                  case 11:
                    res.status(401).json({
                      message: "Invalid email or password"
                    });
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());

          // Sign Up API route
          app.post('/api/signup', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
              var _req$body2, email, password, existingUser, hashedPassword, newUser;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Check if the user already exists
                    _context2.next = 3;
                    return usersCollection.findOne({
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
                    // Create new user object
                    newUser = {
                      email: email,
                      password: hashedPassword,
                      // Save the hashed password
                      profile: {
                        username: email.split('@')[0],
                        // Use part before '@' as username
                        name: '',
                        // Optionally set this to an empty string or prompt for it
                        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                      },
                      playlists: [],
                      songs: []
                    }; // Insert the new user into the database
                    _context2.next = 12;
                    return usersCollection.insertOne(newUser);
                  case 12:
                    res.status(201).json({
                      message: "User created successfully"
                    });
                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _main.apply(this, arguments);
}
main()["catch"](console.error());

// Serve index.html for all other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

// Start the server
app.listen(3001, function () {
  console.log("Listening on http://localhost:3001");
});