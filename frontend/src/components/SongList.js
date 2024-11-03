import React, { Component } from 'react';

class SongList extends Component {
  render() {
    return (
      <div style={styles.songList}>
        {this.props.songs.map((song, index) => (
          <div
            key={song._id}
            style={{
              ...styles.songRow,
              ...(song.deleted ? styles.deletedSong : {}),
            }}
          >
            <p style={styles.hash}>{index + 1}</p>
            <img src={song.image} alt={song.title} style={styles.songImage} />
            <div style={styles.songInfo}>
              {/* If the song is not deleted, make it clickable; otherwise, just show the title */}
              {song.deleted ? (
                <h4 style={styles.songTitle}>{song.title}</h4>
              ) : (
                <a href={song.link} target="_blank" rel="noopener noreferrer" style={styles.songTitleLink}>
                  <h4 style={styles.songTitle}>{song.title}</h4>
                </a>
              )}
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
  songTitleLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  songArtist: {
    color: '#888',
    margin: '0',
  },
  hash: {
    width: '5%',
    fontWeight: 'bold',
  },
  deletedSong: {
    color: '#aaa', // Greyed out color for deleted songs
    cursor: 'default', // Remove the pointer cursor for non-clickable items
  },
};

export default SongList;
