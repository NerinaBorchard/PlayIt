import React, { Component } from 'react';

class SongComponent extends Component {
  render() {
    const { name, artist, link, dateAdded, imageUrl } = this.props.song;
    const { style } = this.props;

    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}>
        <div 
          style={{
            ...style, 
            width: '220px', 
            padding: '10px', 
            borderRadius: '8px', 
            backgroundColor: '#fff', 
            cursor: 'pointer', 
            textAlign: 'center', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            minHeight: '320px', // Ensures all song cards are consistent in size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

          {/* Song Cover Image */}
          <img 
            src={imageUrl} 
            alt={name} 
            style={{
              width: '100%', 
              height: '220px', 
              borderRadius: '8px 8px 0 0', 
              objectFit: 'cover'
            }} 
          />

          {/* Song Name */}
          <h3 
            style={{
              margin: '10px 0', 
              color: '#333', 
              fontSize: '16px', 
              lineHeight: '1.2', 
              height: '2.4em', // Height for two lines
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical'
            }}
          >
            {name}
          </h3>

          {/* Song Artist */}
          <p style={{ margin: '5px 0', color: '#999' }}>
            {artist}
          </p>
        </div>
      </a>
    );
  }
}

export default SongComponent;
