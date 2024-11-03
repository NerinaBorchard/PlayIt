import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  profileImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  username: {
    fontWeight: 'bold',
  },
  name: {
    color: '#555',
  },
};

class ProfilePreviewComponent extends Component {
  render() {
    const { profile } = this.props.user;
    const { username, name, picture, id } = profile; // Ensure 'id' is included in the profile

    return (
      <Link to={`/profile/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link for navigation */}
        <div style={styles.container}>
          <img src={picture} alt={username} style={styles.profileImage} />
          <div>
            <p style={styles.username}>{username}</p>
            <p style={styles.name}>{name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProfilePreviewComponent;
