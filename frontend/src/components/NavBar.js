import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  // Handle user logout
  handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove auth token from local storage
    console.log('User logged out');
    this.setState({ redirectTo: '/' }); // Redirect to login page
  };

  render() {
    const styles = {
      navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
        color: 'white',
      },
      logo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      },
      logoImage: {
        width: '100px', // Adjust size as needed
        height: 'auto',
        marginRight: '10px', // Space between logo image and text
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
        cursor: 'pointer',
      },
    };

    if (this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />;
    }

    return (
      <nav style={styles.navbar}>
        <Link to="/search" style={styles.logo}>
          <img src="/assets/images/homeLogo.png" alt="Logo" style={styles.logoImage} />
        </Link>
        <ul style={styles.navLinks}>
        <li style={styles.navLinkItem}>
            <Link to="/Search" style={styles.navLink}>Home</Link>
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
            <button onClick={this.handleLogout} style={{ ...styles.navLink, background: 'none', border: 'none' }}>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
