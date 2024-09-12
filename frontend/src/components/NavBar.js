import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logoImage from '../../public/assets/images/clearLogo.png'; // Adjust the path as necessary

class NavBar extends Component {
  render() {
    const styles = {
      navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
        // background: 'white',
        color: 'white',
      },
      logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
      },
      logoImage: {
        height: '40px', // Adjust height as necessary
        marginRight: '10px',
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
        color: 'black',
        textDecoration: 'none',
        padding: '5px 10px',
        transition: 'background-color 0.3s',
        fontWeight: 'bold',
      },
    };

    return (
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          {/* <img src='/assets/images/clearLogo.png' alt="Logo" style={styles.logoImage} /> */}
          {/* PlayIt */}
        </div>
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
          <li style={styles.navLinkItem}>
            <Link to="/" style={styles.navLink}>Sign Out</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
