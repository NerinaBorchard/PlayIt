import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

class EditPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      genre: '',
      coverImage: '',
      hashtags: '',
      genres: [],
      imageFile: null, // New state for storing the selected image file
    };
  }

  componentDidMount() {
    const { playlistId } = this.props;

    // Fetch the playlist details based on ID
    axios.get(`/api/playlists/${playlistId}`)
      .then(response => {
        const { name, description, genre, coverImage, hashtags } = response.data;
        this.setState({ 
          name, 
          description, 
          genre, 
          coverImage, 
          hashtags: hashtags.join(', ') 
        });
      })
      .catch(error => console.error('Error fetching playlist:', error));

    // Fetch genres from the API
    axios.get('/api/genres')
      .then(response => {
        this.setState({ genres: response.data });
      })
      .catch(error => console.error("Error fetching genres:", error));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ imageFile: file, coverImage: URL.createObjectURL(file) });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { playlistId } = this.props;

    // Prepare updated data
    const updatedData = {
      name: this.state.name,
      description: this.state.description,
      genre: this.state.genre,
      coverImage: this.state.coverImage,
      hashtags: this.state.hashtags.split(',').map(tag => tag.trim()),
    };

    try {
      await axios.put(`/api/playlists/${playlistId}`, updatedData);
      alert('Playlist updated successfully!');
      this.props.navigate('/playlists');
    } catch (error) {
      console.error('Error updating playlist:', error);
      alert('Failed to update playlist. Please try again.');
    }
  };

  handleDeletePlaylist = () => {
    const { playlistId } = this.props;
    const confirmDelete = window.confirm('Are you sure you want to delete this playlist?');
    if (!confirmDelete) return;
    this.deletePlaylist(playlistId);
  };

  deletePlaylist = async (playlistId) => {
    try {
      await axios.delete(`/api/playlists/${playlistId}`);
      alert('Playlist deleted successfully!');
      this.props.navigate('/playlists');
    } catch (error) {
      console.error('Error deleting playlist:', error);
      alert('Failed to delete playlist. Please try again.');
    }
  };

  render() {
    const { name, description, genre, coverImage, hashtags, genres } = this.state;

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
              <select
                name="genre"
                value={genre}
                onChange={this.handleChange}
                style={styles.input}
              >
                <option value="">Select a Genre</option>
                {genres.map((g) => (
                  <option key={g._id} value={g.name}>{g.name}</option>
                ))}
              </select>
            </label>
            <label style={styles.label}>
              Hashtags:
              <input
                type="text"
                name="hashtags"
                value={hashtags}
                onChange={this.handleChange}
                style={styles.input}
                placeholder="Separate with commas"
              />
            </label>
            <button type="submit" style={styles.saveButton}>Save Changes</button>
          </form>
          <button onClick={this.handleDeletePlaylist} style={styles.deleteButton}>
            Delete Playlist
          </button>
        </div>
      </div>
    );
  }
}

const EditPlaylistWrapper = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();

  return <EditPlaylist playlistId={playlistId} navigate={navigate} />;
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
