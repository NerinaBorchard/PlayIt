import React, { Component } from 'react';
import ProfilePreviewComponent from '../components/ProfilePreviewComponent';

class FollowersFollowingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'followers', 
    };
  }

  // Mock data
  mockFollowers = [
    {
      id: 1,
      profile: { username: '@johnDoe', name: 'John Doe', picture: 'https://example.com/profile1.jpg' },
    },
    {
      id: 2,
      profile: { username: '@janeSmith', name: 'Jane Smith', picture: 'https://example.com/profile2.jpg' },
    },
  ];

  mockFollowing = [
    {
      id: 3,
      profile: { username: '@markTwain', name: 'Mark Twain', picture: 'https://example.com/profile3.jpg' },
    },
    {
      id: 4,
      profile: { username: '@ericaJohnson', name: 'Erica Johnson', picture: 'https://example.com/profile4.jpg' },
    },
  ];

  setView = (view) => {
    this.setState({ view });
  };

  render() {
    const { view } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.tabContainer}>
          <button
            onClick={() => this.setView('followers')}
            style={view === 'followers' ? styles.activeTab : styles.tab}
          >
            Followers
          </button>
          <button
            onClick={() => this.setView('following')}
            style={view === 'following' ? styles.activeTab : styles.tab}
          >
            Following
          </button>
        </div>

        <div style={styles.listContainer}>
          {view === 'followers' && this.mockFollowers.map(user => (
            <ProfilePreviewComponent key={user.id} user={user} />
          ))}
          {view === 'following' && this.mockFollowing.map(user => (
            <ProfilePreviewComponent key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

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
    flexDirection: 'column', // Ensures vertical stacking
    gap: '10px',
  },
};

export default FollowersFollowingPage;
