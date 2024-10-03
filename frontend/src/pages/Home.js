// import React, { Component } from 'react';
// import NavBar from '../components/NavBar';
// import SongComponent from '../components/Song';  
// import PlaylistComponent from '../components/Playlist';

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
//     };
//   }

//   handleSearchChange = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };

//   render() {
//     const { searchQuery } = this.state;

//     const mockSongs = [
//       {
//         id: 1,
//         title: 'Lagos Love Story',
//         artist: 'Ayra Starr',
//         link: 'https://open.spotify.com/album/placeholder1', 
//         dateAdded: '2024-09-10',
//         image: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg' 
//       },
//       {
//         id: 2,
//         title: 'Away',
//         artist: 'Ayra Starr',
//         link: 'https://open.spotify.com/album/placeholder2', 
//         dateAdded: '2024-09-09',
//         image: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fd54810c6ddab54f229e85191c1fdae92.1000x1000x1.jpg' 
//       },
//       {
//         id: 3,
//         title: 'Last Heartbreak Song',
//         artist: 'Ayra Starr',
//         link: 'https://open.spotify.com/album/placeholder3', 
//         dateAdded: '2024-09-08',
//         image: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg' 
//       },
//       {
//           id: 4,
//           title: 'Espresso',
//           artist: 'Sabrina Carpenter',
//           link: 'https://open.spotify.com/album/placeholder3', 
//           dateAdded: '2024-09-08',
//           image: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F8e8e92eda3d816065a4272a56b6f5ef6.1000x1000x1.png' 
//       },
//       {
//           id: 5,
//           title: 'Taste',
//           artist: 'Sabrina Carpenter',
//           link: 'https://open.spotify.com/album/placeholder3', 
//           dateAdded: '2024-09-08',
//           image: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png' 
//         }
//     ];

//     const mockPlaylists = [
//       {
//         id: 1,
//         name: 'My Ayra Starr Collection',
//         songCount: 25,
//         coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F4c509629284908c33fa2002eeea8e2e8.1000x1000x1.png',
//         creator: 'Nin',
//         link: '/playlistView' 
//       },
//       {
//         id: 2,
//         name: "I can't relate to desperation",
//         songCount: 40,
//         coverImage: 'https://i.pinimg.com/564x/6e/ea/1a/6eea1a8cbc8c0543bcf907c830ac56d4.jpg',
//         creator: 'Nin',
//         link: '/playlistView'
//       },
//       {
//           id: 3,
//           name: 'Just Khalid',
//           songCount: 15,
//           coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F7bcf11bfc76756c6dc22eeff970cfd47.1000x1000x1.png',
//           creator: 'Nerina',
//           link: '/playlistView'
//       }
//     ];

//     const styles = {
//       homePage: {
//         fontFamily: 'Arial, sans-serif',
//         minHeight: '100vh',
//         backgroundColor: '#faf7f7',
//       },
//       section: {
//         // padding: '20px',
//         margin: '20px 0',
//         paddingLeft: '20px',
//         paddingBottom: '20px',
//       },
//       sectionHeading: {
//         marginBottom: '10px',
//       },
//       itemList: {
//         display: 'flex',
//         gap: '15px',
//         flexWrap: 'wrap',
//       },
//       itemComponent: {
//         border: '2px solid #0000', 
//         padding: '15px',
//         width: '200px',
//         textAlign: 'center',
//         borderRadius: '5px',
//         backgroundColor: '#fff',
//         transition: 'transform 0.3s',
//       },
//       itemComponentHover: {
//         transform: 'translateY(-5px)',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       },
//       searchBarContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         margin: '40px 0',
//       },
//       searchBar: {
//         padding: '10px',
//         width: '50%',
//         borderRadius: '5px',
//         border: '2px solid #ccc',
//         fontSize: '16px',
//       },
//     };

//     return (
//       <div style={styles.homePage}>
//         <NavBar />
//         {/* Songs Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>New Songs</h2>
//           <div style={styles.itemList}>
//             {mockSongs.map(song => (
//               <SongComponent key={song.id} song={song} style={styles.itemComponent} />
//             ))}
//           </div>
//         </section>

//         {/* Playlists Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>New Playlists</h2>
//           <div style={styles.itemList}>
//             {mockPlaylists.map(playlist => (
//               <PlaylistComponent key={playlist.id} playlist={playlist} style={styles.itemComponent} />
//             ))}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default HomePage;




import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';  
import PlaylistComponent from '../components/Playlist';
import axios from 'axios'; // Import axios to make API calls

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      songs: [],       // State to hold the fetched songs
      playlists: [],   // State to hold the fetched playlists
    };
  }

  componentDidMount() {
    // Fetch songs from your MongoDB API
    axios.get('/api/songs')
      .then(response => {
        this.setState({ songs: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the songs!", error);
      });

    // Fetch playlists from your MongoDB API
    axios.get('/api/playlists')
      .then(response => {
        this.setState({ playlists: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the playlists!", error);
      });
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery, songs, playlists } = this.state;

    const styles = {
      homePage: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#faf7f7',
      },
      section: {
        margin: '20px 0',
        paddingLeft: '20px',
        paddingBottom: '20px',
      },
      sectionHeading: {
        marginBottom: '10px',
      },
      itemList: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
      },
      itemComponent: {
        border: '2px solid #0000', 
        padding: '15px',
        width: '200px',
        textAlign: 'center',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s',
      },
    };

    return (
      <div style={styles.homePage}>
        <NavBar />
        {/* Songs Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>New Songs</h2>
          <div style={styles.itemList}>
            {songs.map(song => (
              <SongComponent key={song._id} song={song} style={styles.itemComponent} />
            ))}
          </div>
        </section>

        {/* Playlists Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>New Playlists</h2>
          <div style={styles.itemList}>
            {playlists.map(playlist => (
              <PlaylistComponent key={playlist._id} playlist={playlist} style={styles.itemComponent} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
