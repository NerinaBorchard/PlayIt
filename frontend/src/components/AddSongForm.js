import React, { Component } from 'react';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      coverUrl: '',
      songLink: '',
      errorMessage: '', // Added state for error message
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, errorMessage: '' }); // Reset error message on change
  };

  validateSpotifyLink = (link) => {
    const spotifyUrlPattern = /^(https?:\/\/(open\.)?spotify\.com\/(track|album|artist)\/[a-zA-Z0-9]{22}(\?.*)?)$/;

    return spotifyUrlPattern.test(link);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, artist, coverUrl, songLink } = this.state;
    const userData = JSON.parse(localStorage.getItem('user'));
    const creatorId = userData?.id;

    const finalCoverUrl = coverUrl || 'https://img.freepik.com/free-photo/abstract-smooth-orange-background-layout-designstudioroom-web-template-business-report-with-smooth-c_1258-54783.jpg';

    // Validate Spotify URL
    if (!this.validateSpotifyLink(songLink)) {
      this.setState({ errorMessage: 'Please enter a valid Spotify song URL.' });
      return;
    }

    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, artist, songLink, coverUrl: finalCoverUrl, creator: creatorId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add song');
      }

      const data = await response.json();
      console.log('New song added:', data);

      // Call the onSongAdded prop to refresh the song list
      this.props.onSongAdded();

      this.setState({ title: '', artist: '', coverUrl: '', songLink: '', errorMessage: '' }); // Reset fields and error message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    const { title, artist, coverUrl, songLink, errorMessage } = this.state;

    return (
      <div style={styles.formContainer}>
        <h2>Add New Song</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Song Title</label>
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Artist</label>
            <input 
              type="text" 
              name="artist" 
              value={artist} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Spotify Song Link</label>
            <input 
              type="url" 
              name="songLink" 
              value={songLink} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Cover Image URL (Optional)</label>
            <input 
              type="url" 
              name="coverUrl" 
              value={coverUrl} 
              onChange={this.handleChange} 
              style={styles.input} 
            />
          </div>
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Display error message */}
          <button type="submit" style={styles.submitButton}>Add Song</button>
        </form>
      </div>
    );
  }
}

const styles = {
  formContainer: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px 15px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red',
    fontSize: '12px',
    marginTop: '10px',
  },
};

export default SongForm;
