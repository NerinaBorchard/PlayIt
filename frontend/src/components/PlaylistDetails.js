import React, { Component } from 'react';
import { FaPlusCircle, FaEdit } from 'react-icons/fa';
import SongList from './SongList';
import { Link } from 'react-router-dom';

class PlaylistDetails extends Component {
  handleAddSong = () => {
    alert('Add song functionality triggered!');
  };

  render() {
    const { playlist, songs } = this.props; // Destructure songs here

    return (
      <div style={styles.leftSection}>
        <h1>{playlist.name}</h1>
        <p style={styles.creatorText}>
          By {playlist.creator.profile.username} - {songs.length} songs {/* Use songs.length */}
        </p>
        <p style={styles.description}>{playlist.description}</p>

        <div style={styles.iconContainer}>
          <FaPlusCircle style={styles.icon} onClick={this.handleAddSong} />
          <Link to={`/editPlaylist/${playlist._id}`}>
            <FaEdit style={styles.icon} />
          </Link>
        </div>

        <div style={styles.songHeader}>
          <p style={styles.hash}>#</p>
          <p style={styles.title}>Title</p>
        </div>

        <SongList songs={songs} /> {/* Pass songs to SongList */}
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
