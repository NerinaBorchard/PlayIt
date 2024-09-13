import React, { Component } from 'react';
import ContextMenu from './ContextMenu';
import { FaEllipsisV } from 'react-icons/fa'; 

class SongItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuPosition: { x: 0, y: 0 },
    };
  }

  handleContextMenu = (e) => {
    e.preventDefault();
    this.setState({
      menuPosition: { x: e.clientX, y: e.clientY },
      showMenu: true,
    });
  };

  handleCloseMenu = () => {
    this.setState({ showMenu: false });
  };

  handleDelete = () => {
    const { onDelete } = this.props;
    onDelete();
    this.handleCloseMenu();
  };

  handleAddToPlaylist = () => {
    console.log('Add to Playlist');
    this.handleCloseMenu();
  };

  render() {
    const { song } = this.props;
    const { showMenu, menuPosition } = this.state;

    return (
      <div
        onContextMenu={this.handleContextMenu}
        style={styles.songItem}
      >
        <img src={song.image} alt={song.title} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.title}>{song.title}</h2>
          <p style={styles.artist}>{song.artist}</p>
          <a href={song.link} style={styles.link}>Listen on Spotify</a>
        </div>
        <div
          style={styles.menuIcon}
          onClick={(e) => {
            e.stopPropagation(); 
            this.handleContextMenu(e);
          }}
        >
          <FaEllipsisV />
        </div>
        {showMenu && (
          <ContextMenu
            x={menuPosition.x}
            y={menuPosition.y}
            onClose={this.handleCloseMenu}
            onDelete={this.handleDelete}
            onAddToPlaylist={this.handleAddToPlaylist}
          />
        )}
        {showMenu && <div style={styles.overlay} onClick={this.handleCloseMenu} />}
      </div>
    );
  }
}

const styles = {
  songItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    position: 'relative',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '60px',
    height: '60px',
    borderRadius: '4px',
    marginRight: '15px',
  },
  details: {
    flex: 1,
  },
  title: {
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  artist: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#555',
  },
  link: {
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    textDecoration: 'none',
  },
  menuIcon: {
    marginLeft: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#333',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 999,
  },
};

export default SongItem;
