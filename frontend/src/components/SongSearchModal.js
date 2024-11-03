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

  // Filter out deleted songs
  const activeSongs = songs.filter(song => !song.deleted);
  const filteredSongs = activeSongs.filter(song =>
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
          <button onClick={onClose} style={styles.closeButton}>×</button>
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
                  ...modalStyles.songItem,
                  fontWeight: selectedSongs.some(selected => selected._id === song._id) ? 'bold' : 'normal',
                }}
              >
                <img src={song.image} alt={song.title} style={modalStyles.songImage} />
                <div style={modalStyles.songInfo}>
                  <span>{song.title}</span>
                  <small style={{ marginTop: '2px', color: 'gray' }}>{song.artist}</small>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleAddSongs} style={styles.saveButton}>Add Selected Songs</button>
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
    position: 'relative',
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    width: '90%',
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
  songItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
  songImage: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '10px',
  },
  songInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const styles = {
  saveButton: {
    padding: '12px 20px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default SongSearchModal;
