// src/components/PlaylistItem.js
import React from 'react';

const PlaylistItem = ({ coverImage, name, genre, description, hashtags }) => {
  return (
    <div style={styles.container}>
      {/* Playlist Cover Image */}
      <img src={coverImage} alt={name} style={styles.coverImage} />
      
      {/* Playlist Information */}
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        
        {/* Genre in Round Bubble */}
        <div style={styles.genreBubble}>{genre}</div>
        
        <p style={styles.description}>{description}</p>
        <p style={styles.hashtags}>
          {hashtags.map((tag, index) => (
            <span key={index} style={styles.tag}>#{tag} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  coverImage: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  info: {
    marginLeft: '20px',
  },
  name: {
    margin: '0 0 5px',
    fontSize: '20px',
    color: '#333',
  },
  genreBubble: {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#1DB954',
    borderRadius: '50px',
    color: '#fff',
    fontSize: '12px',
    marginBottom: '10px',
    textAlign: 'center',
    width: 'fit-content',
  },
  description: {
    margin: '0 0 10px',
    fontSize: '16px',
    color: '#555',
  },
  hashtags: {
    fontSize: '14px',
    color: '#1DB954',
  },
  tag: {
    marginRight: '5px',
  },
};

export default PlaylistItem;