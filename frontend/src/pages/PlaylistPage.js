import React from 'react';
import NavBar from '../components/NavBar';
import PlaylistItem from '../components/PlaylistItem';
import PlaylistForm from '../components/PlaylistForm';
import axios from 'axios';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [], // Playlists from the database
    };
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  // fetchPlaylists = async () => {
  //   try {
  //     // Retrieve user data from local storage
  //     const userData = JSON.parse(localStorage.getItem('user'));
  //     const userPlaylistIds = userData?.playlists || [];

  //     // Fetch playlists from the database
  //     const response = await axios.get('/api/playlists');
  //     const allPlaylists = response.data;

  //     // Filter playlists to only include the ones that belong to the user
  //     const userPlaylists = allPlaylists.filter(playlist => userPlaylistIds.includes(playlist._id));

  //     // Update the state with the filtered playlists
  //     this.setState({ playlists: userPlaylists });
  //   } catch (error) {
  //     console.error('Error fetching playlists:', error);
  //   }
  // };

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
                <PlaylistItem
                  key={playlist._id} // Use _id for unique key
                  coverImage={playlist.coverImage}
                  name={playlist.name}
                  genre={playlist.genre}
                  description={playlist.description}
                  hashtags={playlist.hashtags}
                  link={playlist.link}
                />
              ))}
            </div>

            <div style={styles.playlistForm}>
              <PlaylistForm />
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
};

export default Playlist;
