import React, { Component } from 'react';

const styles = {
  card: {
    width: '220px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '220px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  songTitle: {
    margin: '30px 0 3px', // Reduced gap between title and artist
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.2',
    height: '1.2em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  artistName: {
    // margin: '3px 0', // Reduced gap between title and artist
    color: '#999',
    fontSize: '14px',
  },
};


class SongComponent extends Component {
  render() {
    const { title, artist, link, image } = this.props.song;
    const { style } = this.props;

    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}>
        <div 
          style={{ ...styles.card, ...style }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

          {/* Song Cover Image */}
          <img 
            src={image} 
            alt={title} 
            style={styles.image} 
          />

          {/* Song Name */}
          <h3 style={styles.songTitle}>
            {title}
          </h3>

          {/* Song Artist */}
          <p style={styles.artistName}>
            {artist}
          </p>
        </div>
      </a>
    );
  }
}

export default SongComponent;

