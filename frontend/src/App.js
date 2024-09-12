// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Posts from './pages/Posts';

// // class App extends Component {
// //   render() {
// //     return (
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/posts" element={<Posts />} />
// //         </Routes>
// //       </Router>
// //     );
// //   }
// // }

// // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import SplashPage from './pages/SplashPage';
// // import SignInPage from './pages/SignInPage';
// // import SignUpPage from './pages/SignUpPage';

// // function App() {
// //     return (
// //         <Router>
// //             <Switch>
// //                 <Route path="/" exact component={SplashPage} />
// //                 <Route path="/signin" component={SignInPage} />
// //                 <Route path="/signup" component={SignUpPage} />
// //             </Switch>
// //         </Router>
// //     );
// // }

// // export default App;

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SplashPage from './pages/SplashPage';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// import Home from './pages/Home';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<SplashPage />} />
//           <Route path="/signin" element={<SignInPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;

// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import Playlist from './pages/PlaylistPage';
import Song from './pages/SongPage';
// import Profile from './pages/ProfilePage';
import PlaylistView from './pages/PlaylistView';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/songs" element={<Song />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/playlistView/:id" element={<PlaylistView />} /> */}

          <Route path="/playlistView" element={<PlaylistView />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
