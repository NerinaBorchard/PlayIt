import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';
import PlaylistComponent from '../components/Playlist';
import { Link } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi'; 

class ProfilePage extends Component {
  render() {
    const mockPlaylists = [
      {
        id: 1,
        name: 'My Ayra Starr Collection',
        songCount: 25,
        coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F4c509629284908c33fa2002eeea8e2e8.1000x1000x1.png',
        creator: 'Nin',
        link: '/playlistView'
      },
      {
        id: 2,
        name: "I can't relate to desperation",
        songCount: 40,
        coverImage: 'https://i.pinimg.com/564x/6e/ea/1a/6eea1a8cbc8c0543bcf907c830ac56d4.jpg',
        creator: 'Nin',
        link: '/playlistView'
      }
    ];

    const mockSaves = [
      {
        id: 3,
        name: 'Just Khalid',
        songCount: 40,
        coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F7bcf11bfc76756c6dc22eeff970cfd47.1000x1000x1.png',
        creator: 'Nerina',
        link: '/playlistView'
      },
      {
        id: 4,
        name: 'Tigers',
        songCount: 40,
        coverImage: 'https://i.pinimg.com/736x/52/66/79/526679d90db1af2bb0c5a2307e6c9f1a.jpg',
        creator: 'Nerina',
        link: '/playlistView'
      },
    ];

    const mockSongs = [
      {
        id: 1,
        name: 'Lagos Love Story',
        artist: 'Ayra Starr',
        link: 'https://open.spotify.com/album/placeholder1',
        dateAdded: '2024-09-10',
        imageUrl: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg'
      },
      {
        id: 2,
        name: 'Away',
        artist: 'Ayra Starr',
        link: 'https://open.spotify.com/album/placeholder2', 
        dateAdded: '2024-09-09',
        imageUrl: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fd54810c6ddab54f229e85191c1fdae92.1000x1000x1.jpg' 
      },
      {
        id: 3,
        name: 'Last Heartbreak Song',
        artist: 'Ayra Starr',
        link: 'https://open.spotify.com/album/placeholder3', 
        dateAdded: '2024-09-08',
        imageUrl: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg' 
      },
      {
          id: 4,
          name: 'Espresso',
          artist: 'Sabrina Carpenter',
          link: 'https://open.spotify.com/album/placeholder3', 
          dateAdded: '2024-09-08',
          imageUrl: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F8e8e92eda3d816065a4272a56b6f5ef6.1000x1000x1.png' 
      },
      {
          id: 5,
          name: 'Taste',
          artist: 'Sabrina Carpenter',
          link: 'https://open.spotify.com/album/placeholder3', 
          dateAdded: '2024-09-08',
          imageUrl: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png' 
        }
    ];

    return (
      <div style={styles.container}>
        <NavBar />

        <div style={styles.profileContainer}>
          <div style={styles.profileHeader}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4935eafa-878e-43fd-a1dd-4234943bedec/dcr6m3m-73080ad4-bf39-405b-9697-2b812f5632a7.jpg/v1/fill/w_1024,h_768,q_75,strp/cool_nature_background_by_sugar__spice_dcr6m3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDkzNWVhZmEtODc4ZS00M2ZkLWExZGQtNDIzNDk0M2JlZGVjXC9kY3I2bTNtLTczMDgwYWQ0LWJmMzktNDA1Yi05Njk3LTJiODEyZjU2MzJhNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOvZXX_5pUU6yENdBCN1VaRZvWq88R4fL41sdfrSRJw"
              alt="Profile Icon"
              style={styles.profileIcon}
            />
            <div style={styles.profileDetails}>
              <h1 style={styles.username}>@nin</h1>
              <h2 style={styles.name}>Nin</h2>
              {/* <p style={styles.followStats}>
                <span>Followers: 123</span> | <span>Following: 456</span>
              </p> */}
              <p style={styles.followStats}>
                <Link to="/followersFollowing">Followers: 123</Link> | <Link to="/followersFollowing">Following: 456</Link>
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
                {mockPlaylists.map((playlist) => (
                  <PlaylistComponent key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </div>

            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Songs I've Added</h3>
              <div style={styles.itemList}>
                {mockSongs.map((song) => (
                  <SongComponent key={song.id} song={song} />
                ))}
              </div>
            </div>
            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Saved Playlists</h3>
              <div style={styles.itemList}>
                {mockSaves.map((playlist) => (
                  <PlaylistComponent key={playlist.id} playlist={playlist} />
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
    // minHeight: '100vh',
    // padding: '20px',
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
    // borderRadius: '100%',
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
