import React, { useState } from 'react';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, artist, coverUrl });
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Song Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            style={styles.input} 
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Artist</label>
          <input 
            type="text" 
            value={artist} 
            onChange={(e) => setArtist(e.target.value)} 
            style={styles.input} 
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Cover Image URL</label>
          <input 
            type="url" 
            value={coverUrl} 
            onChange={(e) => setCoverUrl(e.target.value)} 
            style={styles.input} 
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Add Song</button>
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SongForm;
