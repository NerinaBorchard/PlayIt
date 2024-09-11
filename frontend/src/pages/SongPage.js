// src/pages/Song.js
import React from 'react';
import NavBar from '../components/NavBar';

class Song extends React.Component {
  render() {
    const mockSongs = [
      { id: 1, title: 'Song One', artist: 'Artist A' },
      { id: 2, title: 'Song Two', artist: 'Artist B' },
      { id: 3, title: 'Song Three', artist: 'Artist C' },
    ];

    return (
      <div>
        <NavBar />
        <h1>My Songs</h1>
        <ul>
          {mockSongs.map(song => (
            <li key={song.id}>{song.title} by {song.artist}</li>
          ))}
        </ul>
        <button>Add New Song</button>
      </div>
    );
  }
}

export default Song;
