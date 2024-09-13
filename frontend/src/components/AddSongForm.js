import React, { Component } from 'react';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      coverUrl: '',
      songLink: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, artist, coverUrl, songLink } = this.state;
    // Handle form submission logic here
    console.log({ title, artist, coverUrl, songLink });
  };

  render() {
    const { title, artist, coverUrl, songLink } = this.state;

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
            <label style={styles.label}>Cover Image URL</label>
            <input 
              type="url" 
              name="coverUrl" 
              value={coverUrl} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
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
};

export default SongForm;
