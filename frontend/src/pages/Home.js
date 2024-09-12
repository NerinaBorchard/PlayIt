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
        {
          id: 1,
          name: 'Lagos Love Story',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder1', // Replace with real link
          dateAdded: '2024-09-10',
          imageUrl: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg' // Replace with actual album art link
        },
        {
          id: 2,
          name: 'Away',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder2', // Replace with real link
          dateAdded: '2024-09-09',
          imageUrl: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2Fd54810c6ddab54f229e85191c1fdae92.1000x1000x1.jpg' // Replace with actual album art link
        },
        {
          id: 3,
          name: 'Last Heartbreak Song',
          artist: 'Ayra Starr',
          link: 'https://open.spotify.com/album/placeholder3', // Replace with real link
          dateAdded: '2024-09-08',
          imageUrl: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg' // Replace with actual album art link
        },
        {
            id: 4,
            name: 'Espresso',
            artist: 'Sabrina Carpenter',
            link: 'https://open.spotify.com/album/placeholder3', // Replace with real link
            dateAdded: '2024-09-08',
            imageUrl: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F8e8e92eda3d816065a4272a56b6f5ef6.1000x1000x1.png' // Replace with actual album art link
        },
        {
            id: 5,
            name: 'Taste',
            artist: 'Sabrina Carpenter',
            link: 'https://open.spotify.com/album/placeholder3', // Replace with real link
            dateAdded: '2024-09-08',
            imageUrl: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png' // Replace with actual album art link
          }
      ];
      
      const mockPlaylists = [
        {
          id: 1,
          name: 'My Ayra Starr Collection',
          songCount: 25,
          coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F4c509629284908c33fa2002eeea8e2e8.1000x1000x1.png', // Replace with actual image URL
          creator: 'Nin',
          link: '/playlists/1' // Example route for viewing the playlist
        },
        {
          id: 2,
          name: "I can't relate to desperation",
          songCount: 40,
          coverImage: 'https://i.pinimg.com/564x/6e/ea/1a/6eea1a8cbc8c0543bcf907c830ac56d4.jpg', // Replace with actual image URL
          creator: 'Nin',
          link: '/playlists/2'
        },
        {
            id: 3,
            name: 'Just Khalid',
            songCount: 15,
            coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F7bcf11bfc76756c6dc22eeff970cfd47.1000x1000x1.png',
            creator: 'Nerina',
            link: '/playlists/3'
        }
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