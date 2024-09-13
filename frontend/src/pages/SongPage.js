import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongItem from '../components/SongItem';
import AddSongForm from '../components/AddSongForm';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockSongs: [
        {
          id: 1,
          title: 'Lagos Love Story',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder1',
          dateAdded: '2024-09-10',
          image: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg',
        },
        {
          id: 2,
          title: 'Away',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder2',
          dateAdded: '2024-09-09',
          image: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fd54810c6ddab54f229e85191c1fdae92.1000x1000x1.jpg',
        },
        {
          id: 3,
          title: 'Last Heartbreak Song',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg',
        },
        {
          id: 4,
          title: 'Espresso',
          artist: 'Sabrina Carpenter',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F8e8e92eda3d816065a4272a56b6f5ef6.1000x1000x1.png',
        },
        {
          id: 5,
          title: 'Taste',
          artist: 'Sabrina Carpenter',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png',
        },
        {
          id: 6,
          title: 'Adore U',
          artist: 'Khalid',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fe774a7e37cf159eae15804f03323f598.1000x1000x1.png',
        },
        {
          id: 7,
          title: 'Altitude',
          artist: 'Khalid',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fe774a7e37cf159eae15804f03323f598.1000x1000x1.png',
        },
        {
          id: 8,
          title: 'Heatstroke',
          artist: 'Khalid',
          link: 'https://open.spotify.com/album/placeholder3',
          dateAdded: '2024-09-08',
          image: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fe774a7e37cf159eae15804f03323f598.1000x1000x1.png',
        },
      ],
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      mockSongs: prevState.mockSongs.filter(song => song.id !== id),
    }));
  };

  render() {
    const { mockSongs } = this.state;

    return (
      <div style={styles.nav}>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.songListContainer}>
              <h1>My Songs</h1>
              <div style={styles.songList}>
                {mockSongs.map(song => (
                  <SongItem
                    key={song.id}
                    song={song}
                    onDelete={() => this.handleDelete(song.id)}
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
    maxHeight: 'calc(100vh - 150px)', // Leave space for NavBar and header
  },
  formContainer: {
    flex: 0.35, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#f9f9f9', 
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '90%', 
  },
};

export default Song;
