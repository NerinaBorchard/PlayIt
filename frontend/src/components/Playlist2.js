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
    const { _id, name, coverImage, creator } = this.props.playlist;
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
          {/* <p style={styles.creatorText}>
            By &nbsp;
            <span style={styles.creatorName}>{creator}</span>
          </p> */}
        </div>
      </Link>
    );
  }
}

export default PlaylistComponent;

