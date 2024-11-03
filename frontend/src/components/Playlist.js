import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  name: {
    marginTop: '10px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '1.2',
    height: '2.4em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  creatorText: {
    margin: '5px 0 0',
    color: '#999',
  },
  creatorName: {
    color: '#df0808',
    fontWeight: 'bold',
    marginTop: '50px',
    marginBottom: '-100px',
  },
  genreBubble: {
    display: 'inline-block',
    padding: '5px 10px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    borderRadius: '50px',
    color: '#fff',
    fontSize: '12px',
    margin: '0 auto 15px', // Centers horizontally and adds bottom margin
    textAlign: 'center',
    width: 'fit-content',
  },  
  hashtags: {
    fontSize: '14px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};

class PlaylistComponent extends Component {
  handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  render() {
    const { _id, name, coverImage, creator, genre, hashtags  } = this.props.playlist;
    const { style } = this.props;

    return (
      <Link to={`/playlistView/${_id}`} style={{ textDecoration: 'none' }}>
        <div
          style={{ ...styles.card, ...style }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <img src={coverImage} alt={name} style={styles.image} />
          <h3 style={styles.name}>{name}</h3>
          <p style={styles.hashtags}>
            {hashtags.map((tag, index) => (
              <span key={index} style={styles.tag}>#{tag} </span>
            ))}
          </p>
          <div style={styles.genreBubble}>{genre}</div>
          <p style={styles.creatorText}>
            By &nbsp;
            <span style={styles.creatorName}>{creator}</span>
          </p>
        </div>
      </Link>
    );
  }
}

export default PlaylistComponent;

