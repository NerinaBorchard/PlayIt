import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';
import PlaylistComponent from '../components/Playlist';
import ProfilePreviewComponent from '../components/ProfilePreviewComponent';
import axios from 'axios';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      songs: [],
      playlists: [],
      users: [],
      view: 'songs',
    };
  }

  componentDidMount() {
    axios.get('/api/songs')
      .then(response => {
        this.setState({ songs: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the songs!", error);
      });

    axios.get('/api/homePlaylists')
      .then(response => {
        this.setState({ playlists: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the playlists!", error);
      });

    axios.get('/api/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  setView = (view) => {
    this.setState({ view });
  };

  render() {
    const { searchQuery, songs, playlists, users, view } = this.state;

    const styles = {
      SearchPage: {
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#faf7f7',
      },
      searchBarContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '40px 0',
      },
      searchBar: {
        padding: '10px',
        width: '50%',
        borderRadius: '5px',
        border: '2px solid #ccc',
        fontSize: '16px',
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
      section: {
        paddingLeft: '20px',
        paddingBottom: '20px',
      },
      itemList: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        flexDirection: view === 'users' ? 'column' : 'row',
      },
    };

    // Enhanced filtering logic based on `view`, `searchQuery`, and `deleted` status
    const filteredItems = (() => {
      const lowerCaseQuery = searchQuery.toLowerCase();

      if (view === 'songs') {
        return songs.filter(song => 
          !song.deleted && (
            song.title.toLowerCase().includes(lowerCaseQuery) ||
            song.artist.toLowerCase().includes(lowerCaseQuery)
          )
        );
      } else if (view === 'playlists') {
        return playlists.filter(playlist => 
          !playlist.deleted && (
            playlist.name.toLowerCase().includes(lowerCaseQuery) ||
            playlist.creator.toLowerCase().includes(lowerCaseQuery)
          )
        );
      } else if (view === 'users') {
        return users.filter(user => 
          !user.deleted && (
            user.profile.username.toLowerCase().includes(lowerCaseQuery) || 
            user.profile.name.toLowerCase().includes(lowerCaseQuery)
          )
        );
      }
      return [];
    })();

    return (
      <div style={styles.SearchPage}>
        <NavBar />
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Search songs, playlists, or users..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            style={styles.searchBar}
          />
        </div>

        {/* Tab Selection */}
        <div style={styles.tabContainer}>
          <button
            onClick={() => this.setView('songs')}
            style={view === 'songs' ? styles.activeTab : styles.tab}
          >
            Songs
          </button>
          <button
            onClick={() => this.setView('playlists')}
            style={view === 'playlists' ? styles.activeTab : styles.tab}
          >
            Playlists
          </button>
          <button
            onClick={() => this.setView('users')}
            style={view === 'users' ? styles.activeTab : styles.tab}
          >
            Users
          </button>
        </div>

        {/* Render Items Based on Selected View and Search Query */}
        <section style={styles.section}>
          <div style={styles.itemList}>
            {view === 'songs' && filteredItems.map(song => (
              <SongComponent key={song._id} song={song} />
            ))}
            {view === 'playlists' && filteredItems.map(playlist => (
              <PlaylistComponent key={playlist._id} playlist={playlist} />
            ))}
            {view === 'users' && filteredItems.map(user => (
              <ProfilePreviewComponent key={user.id} user={user} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchPage;
