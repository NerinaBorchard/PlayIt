import React from 'react';

const ProfilePreviewComponent = ({ user }) => (
  <div style={styles.container}>
    <img src={user.profileImage} alt={user.username} style={styles.profileImage} />
    <div>
      <p style={styles.username}>{user.username}</p>
      <p style={styles.name}>{user.name}</p>
    </div>
  </div>
);

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

export default ProfilePreviewComponent;
