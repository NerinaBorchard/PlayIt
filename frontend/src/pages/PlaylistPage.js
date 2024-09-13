import React from 'react';
import NavBar from '../components/NavBar';
import PlaylistItem from '../components/PlaylistItem';
import PlaylistForm from '../components/PlaylistForm';

class Playlist extends React.Component {
  render() {
    const mockPlaylists = [
      {
        id: 1,
        name: 'My Ayra Starr Collection',
        genre: 'Afrobeats',
        description: 'A collection of the best tracks by Ayra Starr.',
        coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F4c509629284908c33fa2002eeea8e2e8.1000x1000x1.png',
        hashtags: ['AyraStarr', 'Afrobeats', 'Collection'],
        creator: 'Nin',
        link: '/playlistView'
      },
      {
        id: 2,
        name: "I Can't Relate to Desperation",
        genre: 'Pop',
        description: 'A playlist for the app.',
        coverImage: 'https://i.pinimg.com/564x/6e/ea/1a/6eea1a8cbc8c0543bcf907c830ac56d4.jpg',
        hashtags: ['Pop', 'Kiss', 'Sweet'],
        creator: 'Nin',
        link: '/playlistView'
      },
      {
        id: 3,
        name: 'Just Khalid',
        genre: 'R&B',
        description: 'A selection of Khalid’s most popular R&B tracks.',
        coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F7bcf11bfc76756c6dc22eeff970cfd47.1000x1000x1.png',
        hashtags: ['Khalid', 'RnB', 'Hits'],
        creator: 'Nerina',
        link: '/playlistView'
      },
      {
        id: 4,
        name: 'Tigers',
        genre: ' Amapiano',
        description: 'Asambe',
        coverImage: 'https://i.pinimg.com/736x/52/66/79/526679d90db1af2bb0c5a2307e6c9f1a.jpg',
        hashtags: ['Tyla', 'RnB', ' Amapiano'],
        creator: 'Nerina',
        link: '/playlistView'
      },
    ];

    return (
      <div style={styles.nav}>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.playlistContainer}>
            <div style={styles.playlistList}>
              <h1>My Playlists</h1>
              {mockPlaylists.map(playlist => (
                <PlaylistItem
                  key={playlist.id}
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
    maxHeight: '80vh', // This limits the height of the playlist section
    overflowY: 'auto', // Adds scroll functionality to the playlist list
  },
  playlistForm: {
    width: '30%', // Adjust width to your preference
    padding: '20px',
    position: 'sticky', // Keeps the form in place
    top: '0', // Ensures the form stays visible as the user scrolls
    alignSelf: 'center', // Center the form vertically
  },
};

export default Playlist;
