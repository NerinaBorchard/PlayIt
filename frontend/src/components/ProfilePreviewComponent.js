import React, { Component } from 'react';

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
    const { username, name, picture } = profile;

    return (
      <div style={styles.container}>
        <img src={picture} alt={username} style={styles.profileImage} />
        <div>
          <p style={styles.username}>{username}</p>
          <p style={styles.name}>{name}</p>
        </div>
      </div>
    );
  }
}

export default ProfilePreviewComponent;
