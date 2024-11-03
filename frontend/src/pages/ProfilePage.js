import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';
import PlaylistComponent from '../components/Playlist2';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      playlists: [],
      user: {},
      bookmarked: [],
    };
  }

  componentDidMount() {
    this.fetchSongs();
    this.fetchPlaylists();
    this.fetchUserDetails();
    this.fetchBookmarkedPlaylists();
  }

  fetchSongs = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const creatorId = userData?.id;

      if (!creatorId) {
        console.error('User ID not found');
        return;
      }

      const response = await axios.get('/api/songs');
      const allSongs = response.data;

      const userSongs = allSongs.filter(song => song.creator === creatorId);
      this.setState({ songs: userSongs });
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  fetchPlaylists = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?.id;

      if (!userId) {
        console.error('User ID not found');
        return;
      }

      const response = await axios.get('/api/play');
      const allPlaylists = response.data;

      const userPlaylists = allPlaylists.filter(playlist => playlist.creator === userId);
      this.setState({ playlists: userPlaylists });
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  fetchUserDetails = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log("User Data:", userData);
    if (userData) {
      this.setState({ user: userData });
    }
  };

  fetchBookmarkedPlaylists = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;

    try {
      const response = await axios.get(`/api/bookPlaylists?userId=${userId}`);
      this.setState({ bookmarked: response.data });
    } catch (error) {
      console.error('Error fetching bookmarked playlists:', error);
    }
  };

  render() {
    const { songs, playlists, user, bookmarked } = this.state;

    return (
      <div style={styles.container}>
        <NavBar />

        <div style={styles.profileContainer}>
          <div style={styles.profileHeader}>
            <img
              src={user.picture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt="Profile Icon"
              style={styles.profileIcon}
            />

            <div style={styles.profileDetails}>
              <h1 style={styles.username}>@{user.username}</h1>
              <h2 style={styles.name}>{user.name}</h2>
              <div style={styles.followStats}>
                <div style={styles.statItem}>
                  <p style={styles.statNumber}>{user.followers || 0}</p>
                  <p style={styles.statLabel}>Followers</p>
                </div>
                <div style={styles.statItem}>
                  <p style={styles.statNumber}>{user.following || 0}</p>
                  <p style={styles.statLabel}>Following</p>
                </div>
              </div>
            </div>
            <Link to="/editProfile" style={styles.editButton}>
              <FiEdit2 size={20} color="#fff" />
            </Link>
          </div>

          <div style={styles.playlistsContainer}>
            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Playlists I've Made</h3>
              <div style={styles.itemList}>
                {playlists.map((playlist) => (
                  <PlaylistComponent key={playlist._id} playlist={playlist} />
                ))}
              </div>
            </div>

            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Songs I've Added</h3>
              <div style={styles.itemList}>
                {songs.map((song) => (
                  <SongComponent key={song._id} song={song} />
                ))}
              </div>
            </div>
            
            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Saved Playlists</h3>
              <div style={styles.itemList}>
                {bookmarked.map((playlist) => (
                  <PlaylistComponent key={playlist._id} playlist={playlist} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  profileContainer: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileHeader: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  profileIcon: {
    width: '150px',
    height: '150px',
    marginBottom: '10px',
    border: '3px solid', // Keep this line for the border width and style
    borderColor: 'rgba(222,69,31,1)', // Change this to your desired color
    borderRadius: '50%', // Keeps the circular shape
    objectFit: 'cover', 
  },
  profileDetails: {
    textAlign: 'center',
  },
  username: {
    fontSize: '24px',
    color: '#333',
    margin: '0',
  },
  name: {
    fontSize: '20px',
    color: '#555',
    margin: '5px 0',
  },
  followStats: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '10px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  },
  statLabel: {
    fontSize: '16px',
    margin: '0',
    color: '#777',
  },
  editButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    padding: '10px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistsContainer: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  playlistsSection: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '22px',
    color: '#333',
    marginBottom: '15px',
  },
  itemList: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
};

export default ProfilePage;











