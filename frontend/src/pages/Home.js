// import React, { Component } from 'react';
// import SongComponent from '../components/Song';  // Assuming you've created this
// import PlaylistComponent from '../components/Playlist';  // We'll create this next

// class HomePage extends Component {
//   render() {
//     const mockSongs = [
//       { id: 1, name: 'Song A', artist: 'Artist A', link: '#', dateAdded: '2024-09-10' },
//       { id: 2, name: 'Song B', artist: 'Artist B', link: '#', dateAdded: '2024-09-09' },
//       { id: 3, name: 'Song C', artist: 'Artist C', link: '#', dateAdded: '2024-09-08' },
//     ];

//     const mockPlaylists = [
//       { id: 1, name: 'Playlist A', songCount: 12 },
//       { id: 2, name: 'Playlist B', songCount: 8 },
//       { id: 3, name: 'Playlist C', songCount: 20 },
//     ];

//     const styles = {
//       homePage: {
//         fontFamily: 'Arial, sans-serif',
//       },
//       navbar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '10px 20px',
//         backgroundColor: '#333',
//         color: 'white',
//       },
//       logo: {
//         fontSize: '24px',
//         fontWeight: 'bold',
//       },
//       navLinks: {
//         listStyleType: 'none',
//         display: 'flex',
//         gap: '15px',
//       },
//       navLinkItem: {
//         display: 'inline',
//       },
//       navLink: {
//         color: 'white',
//         textDecoration: 'none',
//         padding: '5px 10px',
//         transition: 'background-color 0.3s',
//       },
//       navLinkHover: {
//         backgroundColor: '#555',
//       },
//       section: {
//         padding: '20px',
//         margin: '20px 0',
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
//         border: '1px solid #ddd',
//         padding: '15px',
//         width: '200px',
//         textAlign: 'center',
//         borderRadius: '8px',
//         transition: 'transform 0.3s',
//       },
//       itemComponentHover: {
//         transform: 'translateY(-5px)',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       },
//     };

//     return (
//       <div style={styles.homePage}>
//         {/* Navigation Bar */}
//         <nav style={styles.navbar}>
//           <div style={styles.logo}>MyMusicApp</div>
//           <ul style={styles.navLinks}>
//             <li style={styles.navLinkItem}>
//               <a href="/" style={styles.navLink}>Home</a>
//             </li>
//             <li style={styles.navLinkItem}>
//               <a href="/playlists" style={styles.navLink}>Playlists</a>
//             </li>
//             <li style={styles.navLinkItem}>
//               <a href="/songs" style={styles.navLink}>Songs</a>
//             </li>
//             <li style={styles.navLinkItem}>
//               <a href="/profile" style={styles.navLink}>Profile</a>
//             </li>
//           </ul>
//         </nav>

//         {/* Songs Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>Songs</h2>
//           <div style={styles.itemList}>
//             {mockSongs.map(song => (
//               <SongComponent key={song.id} song={song} style={styles.itemComponent} />
//             ))}
//           </div>
//         </section>

//         {/* Playlists Section */}
//         <section style={styles.section}>
//           <h2 style={styles.sectionHeading}>Playlists</h2>
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

// src/pages/HomePage.js
import React, { Component } from 'react';
import NavBar from '../components/NavBar';  // Import the NavBar component
import SongComponent from '../components/Song';  
import PlaylistComponent from '../components/Playlist';

class HomePage extends Component {
  render() {
    const mockSongs = [
      { id: 1, name: 'Song A', artist: 'Artist A', link: '#', dateAdded: '2024-09-10' },
      { id: 2, name: 'Song B', artist: 'Artist B', link: '#', dateAdded: '2024-09-09' },
      { id: 3, name: 'Song C', artist: 'Artist C', link: '#', dateAdded: '2024-09-08' },
    ];

    const mockPlaylists = [
      { id: 1, name: 'Playlist A', songCount: 12 },
      { id: 2, name: 'Playlist B', songCount: 8 },
      { id: 3, name: 'Playlist C', songCount: 20 },
    ];

    const styles = {
      homePage: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
      },
      section: {
        padding: '20px',
        margin: '20px 0',
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
        border: '1px solid #ddd',
        padding: '15px',
        width: '200px',
        textAlign: 'center',
        borderRadius: '8px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s',
      },
      itemComponentHover: {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      },
    };

    return (
      <div style={styles.homePage}>
        {/* Use NavBar Component */}
        <NavBar />

        {/* Songs Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Songs</h2>
          <div style={styles.itemList}>
            {mockSongs.map(song => (
              <SongComponent key={song.id} song={song} style={styles.itemComponent} />
            ))}
          </div>
        </section>

        {/* Playlists Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Playlists</h2>
          <div style={styles.itemList}>
            {mockPlaylists.map(playlist => (
              <PlaylistComponent key={playlist.id} playlist={playlist} style={styles.itemComponent} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
