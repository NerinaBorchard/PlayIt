import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContextMenu extends Component {
  render() {
    const { x, y, onClose, onDelete, onAddToPlaylist } = this.props;

    return ReactDOM.createPortal(
      <div
        style={{ ...styles.menu, top: y, left: x }}
        onClick={e => e.stopPropagation()}
      >
        <div style={styles.menuItem} onClick={onAddToPlaylist}>
          Add to Playlist
        </div>
        <div style={{ ...styles.menuItem, ...styles.menuItemLast }} onClick={onDelete}>
          Delete
        </div>
      </div>,
      document.body
    );
  }
}

const styles = {
  menu: {
    position: 'absolute',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    cursor: 'pointer',
  },
  menuItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '14px',
    color: '#333',
  },
  menuItemLast: {
    borderBottom: 'none',
  },
};

export default ContextMenu;
