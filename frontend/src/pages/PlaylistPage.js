import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import NavBar from '../components/NavBar';
import PlaylistItem from '../components/PlaylistItem';
import PlaylistForm from '../components/PlaylistForm';
import axios from 'axios';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?.id;
      const role = userData?.role; // Get the role from user data
  
      if (!userId) {
        console.error('User ID not found');
        return;
      }
  
      const response = await axios.get('/api/play');
      const allPlaylists = response.data;
  
      // Filter playlists based on the user's role
      const userPlaylists = role === 'admin' ? allPlaylists : allPlaylists.filter(playlist => playlist.creator === userId);
  
      // Update the state with the filtered playlists
      this.setState({ playlists: userPlaylists, userPlaylistCount: userPlaylists.length });
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };
  
  

  // Callback function to refresh songs
  refreshPlaylists = () => {
    this.fetchPlaylists();
  };


  render() {
    const { playlists } = this.state;

    return (
      <div style={styles.nav}>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.playlistContainer}>
            <div style={styles.playlistList}>
              <h1>My Playlists</h1>
              {playlists.map(playlist => (
                <div key={playlist._id} style={styles.link}>
                  <Link to={`/playlistView/${playlist._id}`} style={styles.link}>
                    <PlaylistItem
                      coverImage={playlist.coverImage}
                      name={playlist.name}
                      genre={playlist.genre}
                      description={playlist.description}
                      hashtags={playlist.hashtags}
                    />
                  </Link>
                </div>
              ))}

            </div>
            <div style={styles.playlistForm}>
              <PlaylistForm onPlaylistAdded={this.refreshPlaylists} playlistCount={this.state.userPlaylistCount} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  nav: {
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  playlistContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  playlistList: {
    width: '65%',
    padding: '20px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  playlistForm: {
    width: '30%',
    padding: '20px',
    position: 'sticky',
    top: '0',
    alignSelf: 'center',
  },
  link: {
    textDecoration: 'none', // Removes underline from the link
    color: 'inherit', // Inherit the color of PlaylistItem
  },
};

export default Playlist;
