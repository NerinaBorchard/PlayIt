import React, { Component } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <NavBar /> {/* Keep the NavBar on the page */}

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
              <p style={styles.followStats}>
                <span>Followers: 123</span> | <span>Following: 456</span>
              </p>
            </div>
            <Link to="/editProfile" style={styles.editButton}>Edit Profile</Link>
          </div>

          <div style={styles.playlistsContainer}>
            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Playlists I've Made</h3>
              {/* Add Playlist items here */}
            </div>

            <div style={styles.playlistsSection}>
              <h3 style={styles.sectionTitle}>Playlists I've Saved</h3>
              {/* Add Saved Playlists items here */}
            </div>
          </div>
        </div>

        <button style={styles.logoutButton}>Logout</button>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileIcon: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
    border: '3px solid #1DB954',
  },
  profileDetails: {
    textAlign: 'left',
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
    color: '#777',
  },
  editButton: {
    marginTop: '10px',
    padding: '10px 20px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '16px',
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
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProfilePage;
