import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongItem from '../components/SongItem';
import AddSongForm from '../components/AddSongForm';
import axios from 'axios';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [], // Songs from the database
    };
  }

  componentDidMount() {
    this.fetchSongs();
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
  

  handleDelete = async (id) => {
    try {
      // Call the endpoint to mark the song as deleted
      await axios.put(`/api/songs/${id}/delete`, { deleted: true });
      
      // Update the state to mark the song as deleted locally
      this.setState((prevState) => ({
        songs: prevState.songs.map(song => 
          song._id === id ? { ...song, deleted: true } : song
        ),
      }));
    } catch (error) {
      console.error('Error updating song:', error);
    }
  };  
  

  // Callback function to refresh songs
  refreshSongs = () => {
    this.fetchSongs();
  };


render() {
  const { songs } = this.state;

  // Filter out deleted songs
  const activeSongs = songs.filter(song => !song.deleted);

  return (
    <div style={styles.nav}>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.songListContainer}>
            <h1>My Songs</h1>
            <div style={styles.songList}>
              {activeSongs.map(song => (
                <SongItem
                  key={song._id}
                  song={song}
                  onDelete={() => this.handleDelete(song._id)}
                />
              ))}
            </div>
          </div>
          <div style={styles.formContainer}>
            <AddSongForm onSongAdded={this.refreshSongs} />
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
    height: '100vh',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: '20px',
  },
  songListContainer: {
    flex: 0.65,
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  songList: {
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: 'calc(100vh - 150px)',
  },
  formContainer: {
    flex: 0.35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
};

export default Song;
