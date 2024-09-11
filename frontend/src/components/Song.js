// import React, { Component } from 'react';

// class SongComponent extends Component {
//   render() {
//     const { name, artist, link, dateAdded } = this.props.song;
//     return (
//       <div className="song-component">
//         <h3>{name}</h3>
//         <p>{artist}</p>
//         <a href={link} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
//         <p>Date Added: {dateAdded}</p>
//       </div>
//     );
//   }
// }

// export default SongComponent;

import React, { Component } from 'react';

class SongComponent extends Component {
  render() {
    const { name, artist, link, dateAdded } = this.props.song;
    const { style } = this.props;

    return (
      <div style={style}>
        <h3>{name}</h3>
        <p>Artist: {artist}</p>
        <p>Date Added: {dateAdded}</p>
        <a href={link}>Listen</a>
      </div>
    );
  }
}

export default SongComponent;
