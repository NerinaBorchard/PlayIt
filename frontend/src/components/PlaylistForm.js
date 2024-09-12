// src/components/PlaylistForm.js
import React, { useState } from 'react';

const PlaylistForm = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, genre, description, hashtags });
  };

  return (
    <div style={styles.formContainer}>
      <h2>Create New Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={styles.input} 
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Genre</label>
          <input 
            type="text" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            style={styles.input} 
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            style={styles.textarea} 
            rows="3"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Hashtags</label>
          <input 
            type="text" 
            value={hashtags} 
            onChange={(e) => setHashtags(e.target.value)} 
            style={styles.input} 
            placeholder="Separate with commas"
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Create Playlist</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  textarea: {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#1DB954',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PlaylistForm;
