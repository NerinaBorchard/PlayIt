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

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { title, artist, coverUrl, songLink } = this.state;
  //   const userData = JSON.parse(localStorage.getItem('user'));
  //   const creatorId = userData?.id;
  
  //   try {
  //     // First API call to add the song
  //     const response = await fetch('/api/songs', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ title, artist, songLink, coverUrl, creator: creatorId }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to add song');
  //     }
  
  //     const data = await response.json();
  //     console.log('New song added:', data);
  
  //     // Second API call to update the creator's song list
  //     // const updateResponse = await fetch(`/api/users/${creatorId}/songs`, {
  //     //   method: 'PUT',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({ songId: data._id }), // Pass the new song's ID
  //     // });
  
  //     // if (!updateResponse.ok) {
  //     //   throw new Error('Failed to update user\'s song list');
  //     // }
  
  //     // console.log('User song list updated');
      
  //     // Optionally reset the form or handle success state
  //     this.setState({ title: '', artist: '', coverUrl: '', songLink: '' });
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  handleSubmit = async (e) => {
    e.preventDefault();
    const { title, artist, coverUrl, songLink } = this.state;
    const userData = JSON.parse(localStorage.getItem('user'));
    const creatorId = userData?.id;
    
    const finalCoverUrl = coverUrl || 'https://img.freepik.com/free-photo/abstract-smooth-orange-background-layout-designstudioroom-web-template-business-report-with-smooth-c_1258-54783.jpg';
  
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
  
      this.setState({ title: '', artist: '', coverUrl: '', songLink: '' });
    } catch (error) {
      console.error('Error:', error);
    }
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
