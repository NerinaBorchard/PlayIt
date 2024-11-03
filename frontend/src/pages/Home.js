// import React, { Component } from 'react';
// import NavBar from '../components/NavBar';
// import SongComponent from '../components/Song';  
// import PlaylistComponent from '../components/Playlist';
// import axios from 'axios'; // Import axios to make API calls

// class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       songs: [],       // State to hold the fetched songs
//       playlists: [],   // State to hold the fetched playlists
//     };
//   }

//   componentDidMount() {
//     // Fetch songs from your MongoDB API
//     axios.get('/api/songs')
//       .then(response => {
//         this.setState({ songs: response.data });
//       })
//       .catch(error => {
//         console.error("There was an error fetching the songs!", error);
//       });

//    // Fetch playlists from your MongoDB API
//     axios.get('/api/homePlaylists')
//     .then(response => {
//       console.log("Playlists fetched:", response.data); // Log playlists data
//       this.setState({ playlists: response.data });
//     })
//     .catch(error => {
//       console.error("There was an error fetching the playlists!", error);
//     });
//   }

//   render() {
//     const { songs, playlists } = this.state;

//     const styles = {
//       homePage: {
//         fontFamily: 'Arial, sans-serif',
//         minHeight: '100vh',
//         backgroundColor: '#faf7f7',
//       },
//       section: {
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
//     };

//     return (
//       <div style={styles.homePage}>
//         <NavBar />
//         {/* Songs Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>New Songs</h2>
//           <div style={styles.itemList}>
//             {songs.map(song => (
//               <SongComponent key={song._id} song={song} style={styles.itemComponent} />
//             ))}
//           </div>
//         </section>

//         {/* Playlists Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>New Playlists</h2>
//           <div style={styles.itemList}>
//             {playlists.map(playlist => (
//               <PlaylistComponent key={playlist._id} playlist={playlist} style={styles.itemComponent} />
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
    axios.get('/api/homePlaylists')
      .then(response => {
        console.log("Playlists fetched:", response.data); // Log playlists data
        this.setState({ playlists: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the playlists!", error);
      });
  }

  render() {
    const { songs, playlists } = this.state;

    // Filter out deleted songs and playlists
    const activeSongs = songs.filter(song => !song.deleted);
    const activePlaylists = playlists.filter(playlist => !playlist.deleted);

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
            {activeSongs.map(song => (
              <SongComponent key={song._id} song={song} style={styles.itemComponent} />
            ))}
          </div>
        </section>

        {/* Playlists Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>New Playlists</h2>
          <div style={styles.itemList}>
            {activePlaylists.map(playlist => (
              <PlaylistComponent key={playlist._id} playlist={playlist} style={styles.itemComponent} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
