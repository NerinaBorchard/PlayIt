import React, { Component } from 'react';

class PlaylistCover extends Component {
  render() {
    const { coverImage } = this.props;
    return (
      <img src={coverImage} alt="Playlist Cover" style={styles.playlistImage} />
    );
  }
}

const styles = {
  playlistImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
};

export default PlaylistCover;
