import React, { Component } from 'react';
import { FaPlusCircle, FaEdit, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import SongList from './SongList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SongSearchModal from './SongSearchModal';

class PlaylistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false,
      showModal: false,
      songsAdd: [],
    };
  }

  componentDidMount() {
    this.checkIfBookmarked();
    this.fetchSongs();
  }

  checkIfBookmarked = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const { playlist } = this.props;

    if (userId && playlist.bookmarkedBy) {
      const isBookmarked = playlist.bookmarkedBy.includes(userId);
      this.setState({ isBookmarked });
    }
  };

  fetchSongs = async () => {
    try {
      const response = await axios.get('/api/songs');
      this.setState({ songsAdd: response.data });
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  handleBookmarkToggle = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const { playlist } = this.props;

    this.setState(prevState => {
      const newStatus = !prevState.isBookmarked;
      const updateData = newStatus
        ? { $addToSet: { bookmarkedBy: userId } }
        : { $pull: { bookmarkedBy: userId } };

      axios.patch(`/api/playlists/${playlist._id}/bookmark`, updateData)
        .then(response => {
          console.log('Bookmark status updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating bookmark status:', error);
        });

      return { isBookmarked: newStatus };
    });
  };

  handleAddSong = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleSongSelect = async (selectedSongs) => {
    const { playlist } = this.props;
    const songIds = selectedSongs.map(song => song._id);
  
    console.log("Song IDs being added:", songIds); // Debugging line
  
    try {
      await axios.patch(`/api/playlists/${playlist._id}/songs`, { songIds });
      console.log('Songs added to playlist:', selectedSongs.map(song => song.title));
      this.setState({ showModal: false });
    } catch (error) {
      console.error('Error adding songs to playlist?:', error);
    }
  };
  
  

  render() {
    const { playlist, songs } = this.props;
    const { isBookmarked, showModal, songsAdd } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const isCreator = userId === playlist.creator._id;

    return (
      <div style={styles.leftSection}>
        <h1>{playlist.name}</h1>
        <p style={styles.creatorText}>
          By {playlist.creator.profile.username} - {songs.length} songs
        </p>
        <p style={styles.description}>{playlist.description}</p>

        <div style={styles.iconContainer}>
          <div onClick={this.handleBookmarkToggle}>
            {isBookmarked ? <FaBookmark style={styles.icon} /> : <FaRegBookmark style={styles.icon} />}
          </div>

          {isCreator && (
            <>
              <FaPlusCircle style={styles.icon} onClick={this.handleAddSong} />
              <Link to={`/editPlaylist/${playlist._id}`}>
                <FaEdit style={styles.icon} />
              </Link>
            </>
          )}
        </div>

        <div style={styles.songHeader}>
          <p style={styles.hash}>#</p>
          <p style={styles.title}>Title</p>
        </div>

        <SongList songs={songs} />

        <SongSearchModal
          isOpen={showModal}
          songs={songsAdd}
          onClose={this.handleCloseModal}
          onSongSelect={this.handleSongSelect}
        />
      </div>
    );
  }
}


const styles = {
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    fontSize: '16px',
    cursor: 'pointer',
    color: 'black',
  },
  leftSection: {
    width: '65%',
    padding: '20px',
  },
  creatorText: {
    color: '#888',
    margin: '5px 0',
  },
  description: {
    margin: '10px 0',
  },
  songHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  hash: {
    width: '5%',
    fontWeight: 'bold',
  },
  title: {
    width: '90%',
    fontWeight: 'bold',
  },
};

export default PlaylistDetails;

