// import React, { Component } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';

// class EditPlaylist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       description: '',
//       genre: '',
//       coverImage: '',
//     };
//   }

//   componentDidMount() {
//     const { playlistId } = this.props;

//     // Fetch the playlist details based on ID
//     axios.get(`/api/playlists/${playlistId}`)
//       .then(response => {
//         const { name, description, genre, coverImage } = response.data;
//         this.setState({ name, description, genre, coverImage });
//       })
//       .catch(error => console.error('Error fetching playlist:', error));
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { playlistId } = this.props;
    
//     // Prepare updated data
//     const updatedData = {
//       name: this.state.name,
//       description: this.state.description,
//       genre: this.state.genre,
//       coverImage: this.state.coverImage,
//     };

//     try {
//       // Send PUT request to update the playlist
//       await axios.put(`/api/playlists/${playlistId}`, updatedData);
//       alert('Playlist updated successfully!');
      
//       // Navigate back to the previous page
//       this.props.navigate(-1); // Using navigate to go back
//     } catch (error) {
//       console.error('Error updating playlist:', error);
//     }
//   };

//   handleDeletePlaylist = async () => {
//     const { playlistId } = this.props;
  
//     // Confirm deletion
//     const confirmDelete = window.confirm('Are you sure you want to delete this playlist?');
//     if (!confirmDelete) return;
  
//     try {
//       // Send DELETE request to remove the playlist
//       await axios.delete(`/api/playlists/${playlistId}`);
//       alert('Playlist deleted successfully!');
  
//       // Navigate back to the previous page
//       this.props.navigate(-1);
//     } catch (error) {
//       console.error('Error deleting playlist:', error);
//       alert('Failed to delete playlist. Please try again.');
//     }
//   };
  

//   render() {
//     const { name, description, genre, coverImage } = this.state;

//     return (
//       <div style={styles.container}>
//         <div style={styles.editContainer}>
//           <h1 style={styles.title}>Edit Playlist</h1>
//           <div style={styles.coverImageContainer}>
//             <img src={coverImage} alt="Cover" style={styles.coverImage} />
//             <div style={styles.imageButtonContainer}>
//               <label htmlFor="fileInput" style={styles.changePicButton}>
//                 Choose Cover Image
//               </label>
//               <input
//                 type="file"
//                 id="fileInput"
//                 accept="image/*"
//                 onChange={this.handleImageChange}
//                 style={styles.changePicInput}
//               />
//             </div>
//           </div>
//           <form onSubmit={this.handleSubmit} style={styles.form}>
//             <label style={styles.label}>
//               Playlist Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={this.handleChange}
//                 style={styles.input}
//               />
//             </label>
//             <label style={styles.label}>
//               Description:
//               <textarea
//                 name="description"
//                 value={description}
//                 onChange={this.handleChange}
//                 style={styles.textarea}
//               />
//             </label>
//             <label style={styles.label}>
//               Genre:
//               <input
//                 type="text"
//                 name="genre"
//                 value={genre}
//                 onChange={this.handleChange}
//                 style={styles.input}
//               />
//             </label>
//             <button type="submit" style={styles.saveButton}>Save Changes</button>
//           </form>
          
//           {/* Delete Playlist Button */}
//           <button onClick={this.handleDeletePlaylist} style={styles.deleteButton}>
//             Delete Playlist
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// // Wrap the EditPlaylist component to access the useParams and useNavigate hooks
// const EditPlaylistWrapper = () => {
//   const { playlistId } = useParams();
//   const navigate = useNavigate(); // Get the navigate function

//   return <EditPlaylist playlistId={playlistId} navigate={navigate} />; // Pass navigate to props
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: 'white',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   editContainer: {
//     width: '100%',
//     maxWidth: '600px',
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '8px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: '28px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   coverImageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: '30px',
//   },
//   coverImage: {
//     width: '300px',
//     height: '300px',
//     objectFit: 'cover',
//     marginBottom: '10px',
//     borderRadius: '8px',
//     border: '2px solid #ddd',
//   },
//   imageButtonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
//   changePicInput: {
//     display: 'none',
//   },
//   changePicButton: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     fontSize: '16px',
//     marginTop: '10px',
//     transition: 'background-color 0.3s ease',
//   },
//   form: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     marginBottom: '10px',
//     fontSize: '16px',
//     color: '#333',
//   },
//   input: {
//     padding: '12px',
//     fontSize: '16px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     marginBottom: '20px',
//     width: '100%',
//   },
//   textarea: {
//     padding: '12px',
//     fontSize: '16px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     marginBottom: '20px',
//     width: '100%',
//     height: '100px',
//   },
//   saveButton: {
//     padding: '12px 20px',
//     background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   deleteButton: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, rgba(223,8,8,1) 0%, rgba(218,83,20,1) 100%)',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     fontSize: '16px',
//     marginTop: '20px',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default EditPlaylistWrapper;








import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

class EditPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      genre: '',
      coverImage: '',
    };
  }

  componentDidMount() {
    const { playlistId } = this.props;

    // Fetch the playlist details based on ID
    axios.get(`/api/playlists/${playlistId}`)
      .then(response => {
        const { name, description, genre, coverImage } = response.data;
        this.setState({ name, description, genre, coverImage });
      })
      .catch(error => console.error('Error fetching playlist:', error));
  }

  handleSubmit = async (e) => {
      e.preventDefault();
      const { playlistId } = this.props;

      // Prepare updated data
      const updatedData = {
        name: this.state.name,
        description: this.state.description,
        genre: this.state.genre,
        coverImage: this.state.coverImage,
      };

      try {
        // Send PUT request to update the playlist
        await axios.put(`/api/playlists/${playlistId}`, updatedData);
        alert('Playlist updated successfully!');

        // Navigate to /playlists
        this.props.navigate('/playlists'); // Navigate to playlists page
      } catch (error) {
        console.error('Error updating playlist:', error);
        alert('Failed to update playlist. Please try again.');
      }
  };

  // Updated deletePlaylist method
  deletePlaylist = async (playlistId) => {
      try {
        await axios.delete(`/api/playlists/${playlistId}`);
        alert('Playlist deleted successfully!');

        // Navigate to /playlists
        this.props.navigate('/playlists'); // Navigate to playlists page
      } catch (error) {
        console.error('Error deleting playlist:', error);
        alert('Failed to delete playlist. Please try again.');
      }
  };


  handleDeletePlaylist = () => {
    const { playlistId } = this.props;

    // Confirm deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this playlist?');
    if (!confirmDelete) return;

    // Call the deletePlaylist function
    this.deletePlaylist(playlistId);
  };

  render() {
    const { name, description, genre, coverImage } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Playlist</h1>
          <div style={styles.coverImageContainer}>
            <img src={coverImage} alt="Cover" style={styles.coverImage} />
            <div style={styles.imageButtonContainer}>
              <label htmlFor="fileInput" style={styles.changePicButton}>
                Choose Cover Image
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={this.handleImageChange}
                style={styles.changePicInput}
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Playlist Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
                style={styles.textarea}
              />
            </label>
            <label style={styles.label}>
              Genre:
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={this.handleChange}
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.saveButton}>Save Changes</button>
          </form>
          
          {/* Delete Playlist Button */}
          <button onClick={this.handleDeletePlaylist} style={styles.deleteButton}>
            Delete Playlist
          </button>
        </div>
      </div>
    );
  }
}


// Wrap the EditPlaylist component to access the useParams and useNavigate hooks
const EditPlaylistWrapper = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate(); // Get the navigate function

  return <EditPlaylist playlistId={playlistId} navigate={navigate} />; // Pass navigate to props
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  editContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  coverImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  },
  coverImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '2px solid #ddd',
  },
  imageButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  changePicInput: {
    display: 'none',
  },
  changePicButton: {
    padding: '12px 24px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
    height: '100px',
  },
  saveButton: {
    padding: '12px 20px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '50%',
    alignSelf: 'center',
  },
  deleteButton: {
    padding: '12px 24px',
    background: 'linear-gradient(90deg, rgba(223,8,8,1) 0%, rgba(218,83,20,1) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};

export default EditPlaylistWrapper;
