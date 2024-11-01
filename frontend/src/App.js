// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import Playlist from './pages/PlaylistPage';
import Song from './pages/SongPage';
import Profile from './pages/ProfilePage';
import PlaylistView from './pages/PlaylistView';
import EditProfilePage from './pages/EditProfilePage';
import FollowersFollowingPage from './pages/FollowersFollowingPage';
import EditPlaylist from './pages/EditPlaylist';
import Search from './pages/SearchPage';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="/followersFollowing" element={<FollowersFollowingPage />} />
          {/* <Route path="/editPlaylist" element={<EditPlaylist />} /> */}
          {/* <Route path="/editPlaylist/:playlistId" element={EditPlaylist} /> */}
          {/* <Route path="/editPlaylist/:playlistId" component={EditPlaylist} /> */}
          <Route path="/editPlaylist/:playlistId" element={<EditPlaylist />} />


          <Route path="/search" element={<Search />} />
          <Route path="/playlistView/:id" element={<PlaylistView />} />
          {/* <Route path="/playlistView" element={<PlaylistView />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
