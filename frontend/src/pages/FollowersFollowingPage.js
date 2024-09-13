import React, { useState } from 'react';
import ProfilePreviewComponent from '../components/ProfilePreviewComponent';

const FollowersFollowingPage = () => {
  const [view, setView] = useState('followers'); // 'followers' or 'following'

  const mockFollowers = [
    { id: 1, username: '@johnDoe', name: 'John Doe', profileImage: 'https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-playful-fluffy-generated-by-artificial-intelligence_25030-64542.jpg?t=st=1726187920~exp=1726191520~hmac=f215140db9fd86826713851bc39ec830e8d13ebf2d09efdbd12fb272701356eb&w=1060' },
    { id: 2, username: '@janeSmith', name: 'Jane Smith', profileImage: 'https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-playful-fluffy-generated-by-artificial-intelligence_25030-64542.jpg?t=st=1726187920~exp=1726191520~hmac=f215140db9fd86826713851bc39ec830e8d13ebf2d09efdbd12fb272701356eb&w=1060' },
  ];

  const mockFollowing = [
    { id: 3, username: '@markTwain', name: 'Mark Twain', profileImage: 'https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-playful-fluffy-generated-by-artificial-intelligence_25030-64542.jpg?t=st=1726187920~exp=1726191520~hmac=f215140db9fd86826713851bc39ec830e8d13ebf2d09efdbd12fb272701356eb&w=1060' },
    { id: 4, username: '@ericaJohnson', name: 'Erica Johnson', profileImage: 'https://img.freepik.com/free-photo/cute-puppy-sitting-outdoors-looking-camera-playful-fluffy-generated-by-artificial-intelligence_25030-64542.jpg?t=st=1726187920~exp=1726191520~hmac=f215140db9fd86826713851bc39ec830e8d13ebf2d09efdbd12fb272701356eb&w=1060' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.tabContainer}>
        <button
          onClick={() => setView('followers')}
          style={view === 'followers' ? styles.activeTab : styles.tab}
        >
          Followers
        </button>
        <button
          onClick={() => setView('following')}
          style={view === 'following' ? styles.activeTab : styles.tab}
        >
          Following
        </button>
      </div>

      <div style={styles.listContainer}>
        {view === 'followers' && mockFollowers.map(user => (
          <ProfilePreviewComponent key={user.id} user={user} />
        ))}
        {view === 'following' && mockFollowing.map(user => (
          <ProfilePreviewComponent key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  activeTab: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    backgroundColor: '#ccc',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default FollowersFollowingPage;