// // src/components/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// class NavBar extends React.Component {
//   render() {
//     return (
//       <nav style={styles.navBar}>
//         <Link to="/" style={styles.logo}>MyLogo</Link>
//         <ul style={styles.navList}>
//           <li><Link to="/home" style={styles.navItem}>Home</Link></li>
//           <li><Link to="/playlist" style={styles.navItem}>Playlist</Link></li>
//           <li><Link to="/song" style={styles.navItem}>Song</Link></li>
//           <li><Link to="/profile" style={styles.navItem}>Profile</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// const styles = {
//   navBar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#333',
//     color: '#fff'
//   },
//   logo: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     color: '#fff',
//   },
//   navList: {
//     listStyleType: 'none',
//     display: 'flex',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     marginLeft: '20px',
//     textDecoration: 'none',
//     color: '#fff',
//   }
// };

// export default NavBar;

// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      listStyleType: 'none',
      display: 'flex',
      gap: '15px',
    },
    navLinkItem: {
      display: 'inline',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      padding: '5px 10px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyMusicApp</div>
      <ul style={styles.navLinks}>
        <li style={styles.navLinkItem}>
          <Link to="/home" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navLinkItem}>
          <Link to="/playlists" style={styles.navLink}>Playlists</Link>
        </li>
        <li style={styles.navLinkItem}>
          <Link to="/songs" style={styles.navLink}>Songs</Link>
        </li>
        <li style={styles.navLinkItem}>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

