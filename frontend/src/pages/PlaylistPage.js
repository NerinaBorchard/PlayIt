// src/pages/Playlist.js
import React from 'react';
import NavBar from '../components/NavBar';

class Playlist extends React.Component {
  render() {
    const mockPlaylists = [
      { id: 1, name: 'Playlist One', description: 'Chill vibes' },
      { id: 2, name: 'Playlist Two', description: 'Workout hits' },
    ];

    return (
      <div>
        <NavBar />
        <h1>My Playlists</h1>
        <ul>
          {mockPlaylists.map(playlist => (
            <li key={playlist.id}>{playlist.name} - {playlist.description}</li>
          ))}
        </ul>
        <button>Add New Playlist</button>
      </div>
    );
  }
}

export default Playlist;
