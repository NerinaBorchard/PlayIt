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
      const userSongIds = userData?.songs || [];

      // Fetch songs from the database
      const response = await axios.get('/api/songs');
      const allSongs = response.data;

      // Filter songs to only include the ones that belong to the user
      const userSongs = allSongs.filter(song => userSongIds.includes(song._id));

      // Update the state with the filtered songs
      this.setState({ songs: userSongs });
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  handleDelete = async (id) => {
    try {
      // Delete song from the backend
      await axios.delete(`/api/songs/${id}`);
      
      // Update state to remove the deleted song
      this.setState((prevState) => ({
        songs: prevState.songs.filter(song => song._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  };

  render() {
    const { songs } = this.state;

    return (
      <div style={styles.nav}>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.songListContainer}>
              <h1>My Songs</h1>
              <div style={styles.songList}>
                {songs.map(song => (
                  <SongItem
                    key={song._id}
                    song={song}
                    onDelete={() => this.handleDelete(song._id)}
                  />
                ))}
              </div>
            </div>
            <div style={styles.formContainer}>
              <AddSongForm />
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
