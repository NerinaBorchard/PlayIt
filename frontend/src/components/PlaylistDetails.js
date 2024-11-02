// import React, { Component } from 'react';
// import { FaPlusCircle, FaEdit } from 'react-icons/fa';
// import { FaBookmark, FaRegBookmark  } from "react-icons/fa6";
// import SongList from './SongList';
// import { Link } from 'react-router-dom';

// class PlaylistDetails extends Component {
//   handleAddSong = () => {
//     alert('Add song functionality triggered!');
//   };

//   render() {
//     const { playlist, songs } = this.props; // Destructure songs here
//     const user = JSON.parse(localStorage.getItem('user'));
//     const userId = user?.id;

//     // Check if the current user is the creator of the playlist
//     const isCreator = userId === playlist.creator._id; // Assuming creator's ID is stored as _id

//     return (
//       <div style={styles.leftSection}>
//         <h1>{playlist.name}</h1>
//         <p style={styles.creatorText}>
//           By {playlist.creator.profile.username} - {songs.length} songs {/* Use songs.length */}
//         </p>
//         <p style={styles.description}>{playlist.description}</p>
//         <FaRegBookmark />
//         <FaBookmark />

//         <div style={styles.iconContainer}>
//           {isCreator && ( // Conditionally render icons if the user is the creator
//             <>
//               <FaPlusCircle style={styles.icon} onClick={this.handleAddSong} />
//               <Link to={`/editPlaylist/${playlist._id}`}>
//                 <FaEdit style={styles.icon} />
//               </Link>
//             </>
//           )}
//         </div>

//         <div style={styles.songHeader}>
//           <p style={styles.hash}>#</p>
//           <p style={styles.title}>Title</p>
//         </div>

//         <SongList songs={songs} /> {/* Pass songs to SongList */}
//       </div>
//     );
//   }
// }

// const styles = {
//   iconContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '10px',
//   },
//   icon: {
//     fontSize: '16px',
//     cursor: 'pointer',
//     color: 'black',
//   },
//   leftSection: {
//     width: '65%',
//     padding: '20px',
//   },
//   creatorText: {
//     color: '#888',
//     margin: '5px 0',
//   },
//   description: {
//     margin: '10px 0',
//   },
//   songHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '10px',
//   },
//   hash: {
//     width: '5%',
//     fontWeight: 'bold',
//   },
//   title: {
//     width: '90%',
//     fontWeight: 'bold',
//   },
// };

// export default PlaylistDetails;

import React, { Component } from 'react';
import { FaPlusCircle, FaEdit, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import SongList from './SongList';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PlaylistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false, // Local state to track bookmark status
    };
  }

  componentDidMount() {
    this.checkIfBookmarked();
  }

  checkIfBookmarked = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const { playlist } = this.props;

    // Check if the playlist is bookmarked by the user
    if (userId && playlist.bookmarkedBy) {
      const isBookmarked = playlist.bookmarkedBy.includes(userId);
      this.setState({ isBookmarked });
    }
  };

  handleBookmarkToggle = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;
    const { playlist } = this.props;
  
    // Toggle bookmark status
    this.setState(prevState => {
      const newStatus = !prevState.isBookmarked;
  
      // Prepare the update data based on the new bookmark status
      const updateData = newStatus
        ? { $addToSet: { bookmarkedBy: userId } } // Add userId to bookmarkedBy array
        : { $pull: { bookmarkedBy: userId } }; // Remove userId from bookmarkedBy array
  
      // Send the patch request to update the bookmark status in the database
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
    alert('Add song functionality triggered!');
  };

  render() {
    const { playlist, songs } = this.props;
    const { isBookmarked } = this.state;
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;

    // Check if the current user is the creator of the playlist
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

