import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SongComponent from '../components/Song';
import PlaylistComponent from '../components/Playlist';
import ProfilePreviewComponent from '../components/ProfilePreviewComponent';
import axios from 'axios';
import Fuse from 'fuse.js'; // Import Fuse.js

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      songs: [],
      playlists: [],
      users: [],
      view: 'songs',
      suggestions: [], // State for autocomplete suggestions
      showSuggestions: false, // New state to control the visibility of the suggestion box
    };
    this.suggestionBoxRef = React.createRef(); // Create a ref for the suggestion box
  }

  componentDidMount() {
    // Set up event listener for clicks outside of the suggestion box
    document.addEventListener('mousedown', this.handleClickOutside);
    
    // Fetch data
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

  componentWillUnmount() {
    // Clean up event listener
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    // Check if the click is outside the suggestion box
    if (this.suggestionBoxRef.current && !this.suggestionBoxRef.current.contains(event.target)) {
      this.setState({ showSuggestions: false }); // Hide suggestions if clicked outside
    }
  };

  handleSearchChange = (event) => {
    const query = event.target.value;
    this.setState({ searchQuery: query, showSuggestions: true }, this.updateSuggestions);
  };

  // Update suggestions based on search query
  updateSuggestions = () => {
    const { searchQuery, songs, playlists, users } = this.state;

    const fuseOptions = {
      threshold: 0.3, // Adjust based on how fuzzy you want the search
    };

    // Search songs
    const songFuse = new Fuse(songs, { ...fuseOptions, keys: ['title', 'artist'] });
    const filteredSongs = songFuse.search(searchQuery).map(result => result.item);

    // Search playlists
    const playlistFuse = new Fuse(playlists, { ...fuseOptions, keys: ['name', 'creator'] });
    const filteredPlaylists = playlistFuse.search(searchQuery).map(result => result.item);

    // Search users
    const userFuse = new Fuse(users, { ...fuseOptions, keys: ['profile.username', 'profile.name'] });
    const filteredUsers = userFuse.search(searchQuery).map(result => result.item);

    // Combine suggestions
    this.setState({
      suggestions: [
        ...filteredSongs,
        ...filteredPlaylists,
        ...filteredUsers
      ],
    });
  };

  handleSuggestionClick = (item) => {
    // Update search query and hide suggestions
    this.setState({
      searchQuery: item.title || item.name || item.profile.username,
      showSuggestions: false, // Hide suggestions after selection
    });
  };

  setView = (view) => {
    this.setState({ view });
  };

  render() {
    const { searchQuery, songs, playlists, users, view, suggestions, showSuggestions } = this.state;

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
        position: 'relative',
      },
      searchBar: {
        padding: '10px',
        width: '50%',
        borderRadius: '5px',
        border: '2px solid #ccc',
        fontSize: '16px',
      },
      suggestionBox: {
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 10,
        width: '50%',
        marginTop: '50px',
        maxHeight: '200px',
        overflowY: 'auto',
        borderRadius: '5px',
      },
      suggestionItem: {
        padding: '10px',
        cursor: 'pointer',
      },
      tabContainer: {
        marginTop: '50px',
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
        justifyContent: 'center',
      },
    };

    const filteredItems = (() => {
      const lowerCaseQuery = searchQuery.toLowerCase();
    
      const filterAndReverse = (items, filterFn) => 
        items.filter(filterFn).reverse();
    
      if (view === 'songs') {
        return filterAndReverse(songs, song => 
          song.title.toLowerCase().includes(lowerCaseQuery) ||
          song.artist.toLowerCase().includes(lowerCaseQuery) || // Filter by artist name
          (song.genre && song.genre.toLowerCase().includes(lowerCaseQuery)) || // Filter by genre
          (song.hashtags && song.hashtags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) // Filter by hashtags
        );
      } else if (view === 'playlists') {
        return filterAndReverse(playlists, playlist => 
          playlist.name.toLowerCase().includes(lowerCaseQuery) ||
          playlist.creator.toLowerCase().includes(lowerCaseQuery) || // Filter by playlist creator
          (playlist.genre && playlist.genre.toLowerCase().includes(lowerCaseQuery)) || // Filter by genre
          (playlist.hashtags && playlist.hashtags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) // Filter by hashtags
        );
      } else if (view === 'users') {
        return users.filter(user => 
          user.profile.username.toLowerCase().includes(lowerCaseQuery) || 
          user.profile.name.toLowerCase().includes(lowerCaseQuery)
        );
      }
      return [];
    })();

    return (
      <div style={styles.SearchPage}>
        <NavBar />
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
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Search songs, playlists, or users..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            style={styles.searchBar}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div ref={this.suggestionBoxRef} style={styles.suggestionBox}>
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  style={styles.suggestionItem}
                  onClick={() => this.handleSuggestionClick(item)}
                >
                  {item.title || item.name || item.profile.username}
                </div>
              ))}
            </div>
          )}
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
              <ProfilePreviewComponent key={user._id} user={user} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchPage;
