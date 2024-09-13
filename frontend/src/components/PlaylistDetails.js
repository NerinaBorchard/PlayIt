import React, { Component } from 'react';
import { FaPlusCircle, FaEdit } from 'react-icons/fa';
import SongList from './SongList';
import { Link } from 'react-router-dom';

class PlaylistDetails extends Component {
  handleAddSong = () => {
    // Functionality to add a song
    alert('Add song functionality triggered!');
  };

  handleEditPlaylist = () => {
    // Navigate to the edit playlist page
    alert('Edit playlist functionality triggered!');
    // Example navigation logic (if using react-router)
    // this.props.history.push('/edit-playlist');
  };

  render() {
    const { playlist } = this.props;

    return (
      <div style={styles.leftSection}>
        <h1>{playlist.name}</h1>
        <p style={styles.creatorText}>By {playlist.creator} - {playlist.songs.length} songs</p>
        <p style={styles.description}>{playlist.description}</p>

        <div style={styles.iconContainer}>
          <FaPlusCircle 
            style={styles.icon}
            onClick={this.handleAddSong}
          />
          
          <Link to="/editPlaylist" >
              <FaEdit style={styles.icon} />
            </Link>
        </div>

        <div style={styles.songHeader}>
          <p style={styles.hash}>#</p>
          <p style={styles.title}>Title</p>
        </div>

        <SongList songs={playlist.songs} />
      </div>
    );
  }
}

const styles = {
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '10px'
    },
    icon: {
        fontSize: '16px',
        cursor: 'pointer',
        color: 'black', 
    },
    leftSection: {
    width: '65%',
    padding: '20px',
    },
    creatorText: {
    color: '#888',
    margin: '5px 0',
    },
    description: {
    margin: '10px 0',
    },
    songHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    },
    hash: {
    width: '5%',
    fontWeight: 'bold',
    },
    title: {
    width: '90%',
    fontWeight: 'bold',
    },
};

export default PlaylistDetails;

