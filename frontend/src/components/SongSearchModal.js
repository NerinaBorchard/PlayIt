import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongSearchModal = ({ isOpen, onClose, onSongSelect }) => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    if (isOpen) {
      fetchSongs();
    }
  }, [isOpen]);

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSongSelection = (song) => {
    if (selectedSongs.some(selected => selected._id === song._id)) {
      setSelectedSongs(selectedSongs.filter(selected => selected._id !== song._id));
    } else {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  const handleAddSongs = () => {
    onSongSelect(selectedSongs);
    setSelectedSongs([]); // Clear selection after adding
  };

  return (
    isOpen && (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.container}>
          <h2>Select a Song</h2>
          <input
            type="text"
            placeholder="Search songs..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={modalStyles.searchInput}
          />
          <ul style={modalStyles.songList}>
            {filteredSongs.map(song => (
              <li
                key={song._id}
                onClick={() => toggleSongSelection(song)}
                style={{
                  cursor: 'pointer',
                  fontWeight: selectedSongs.some(selected => selected._id === song._id) ? 'bold' : 'normal',
                }}
              >
                {song.title} by {song.artist}
              </li>
            ))}
          </ul>
          <button onClick={handleAddSongs} style={modalStyles.addButton}>Add Selected Songs</button>
          <button onClick={onClose} style={modalStyles.closeButton}>Close</button>
        </div>
      </div>
    )
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  songList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    maxHeight: '200px',
    overflowY: 'auto',
  },
  addButton: {
    marginTop: '10px',
    padding: '5px 10px',
    marginRight: '10px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '5px 10px',
  },
};

export default SongSearchModal;
