import React, { Component } from 'react';

class SongList extends Component {
  render() {
    return (
      <div style={styles.songList}>
        {this.props.songs.map((song, index) => (
          <div key={song.id} style={styles.songRow}>
            <p style={styles.hash}>{index + 1}</p>
            <img src={song.coverImage} alt={song.title} style={styles.songImage} />
            <div style={styles.songInfo}>
              <h4 style={styles.songTitle}>{song.title}</h4>
              <p style={styles.songArtist}>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
songList: {
    marginTop: '10px',
    },
    songRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    },
    songImage: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    },
    songInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    },
    songTitle: {
    fontWeight: 'bold',
    margin: '0',
    },
    songArtist: {
    color: '#888',
    margin: '0',
    },
    hash: {
        width: '5%',
        fontWeight: 'bold',
    },
};

export default SongList;
