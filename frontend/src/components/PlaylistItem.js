import React from 'react';
// import { Link } from 'react-router-dom';

const PlaylistItem = ({ coverImage, name, genre, description, hashtags, link }) => (
  // <Link to={link} style={{ textDecoration: 'none' }}>
    <div style={styles.container}>
      <img src={coverImage} alt={name} style={styles.coverImage} />
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <div style={styles.genreBubble}>{genre}</div>
        <p style={styles.description}>{description}</p>
        <p style={styles.hashtags}>
          {hashtags.map((tag, index) => (
            <span key={index} style={styles.tag}>#{tag} </span>
          ))}
        </p>
      </div>
    </div>
  // </Link>
);

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
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  info: {
    marginTop: '10px',
    marginLeft: '20px',
  },
  name: {
    margin: '0 0 15px',
    fontSize: '20px',
    color: '#333',
  },
  genreBubble: {
    display: 'inline-block',
    padding: '5px 10px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    borderRadius: '50px',
    color: '#fff',
    fontSize: '12px',
    marginBottom: '10px',
    textAlign: 'center',
    width: 'fit-content',
    margin: '0 0 15px',
  },
  description: {
    margin: '0 0 15px',
    fontSize: '16px',
    color: '#555',
  },
  hashtags: {
    fontSize: '14px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  tag: {
    marginRight: '5px',
  },
};

export default PlaylistItem;
