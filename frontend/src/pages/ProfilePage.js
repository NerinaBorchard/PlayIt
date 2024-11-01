import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';
import PlaylistComponent from '../components/Playlist';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [], // Songs from the database
      playlists: [], // Playlists from the database
      user: {}, // Current user details
    };
  }

  componentDidMount() {
    this.fetchSongs();
    this.fetchPlaylists();
    this.fetchUserDetails(); // Fetch user details
  }

  fetchSongs = async () => {
    try {
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('user'));
      const creatorId = userData?.id; // Get the creator ID from local storage
  
      if (!creatorId) {
        console.error('User ID not found');
        return;
      }
  
      // Fetch songs from the database
      const response = await axios.get('/api/songs');
      const allSongs = response.data;
  
      // Filter songs to only include the ones created by the current user
      const userSongs = allSongs.filter(song => song.creator === creatorId);
  
      // Update the state with the filtered songs
      this.setState({ songs: userSongs });
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };


  fetchPlaylists = async () => {
    try {
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?.id; // Assuming the user ID is stored in 'id'
      
      if (!userId) {
        console.error('User ID not found');
        return;
      }

      // Fetch playlists from the database
      const response = await axios.get('/api/play');
      const allPlaylists = response.data;
  
      // Filter playlists to only include the ones created by the user
      const userPlaylists = allPlaylists.filter(playlist => playlist.creator === userId);
  
      // Update the state with the filtered playlists
      this.setState({ playlists: userPlaylists });
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  // fetchUserDetails = () => {
  //   // Retrieve user data from local storage
  //   const userData = JSON.parse(localStorage.getItem('user'));
  //   console.log("User Data:", userData); // 
  //   // Update the state with user details
  //   if (userData) {
  //     this.setState({ user: userData });
  //   }
  // };

  fetchUserDetails = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log("User Data:", userData); // Check if userData has `profile.picture`
  if (userData) {
    this.setState({ user: userData });
  }
};


  render() {
    const { songs, playlists, user } = this.state;

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
              <p style={styles.followStats}>
                <Link to="/followersFollowing">Followers: {user.followers || 0}</Link> | <Link to="/followersFollowing">Following: {user.following || 0}</Link>
              </p>
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
                  <PlaylistComponent key={playlist.id} playlist={playlist} />
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
    border: '3px solid',
    borderImage: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%) 1',
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
    fontSize: '16px',
    color: '#ccc',
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
