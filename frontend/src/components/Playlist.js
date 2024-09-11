import React, { Component } from 'react';

class PlaylistComponent extends Component {
  render() {
    const { name, songCount } = this.props.playlist;
    const { style } = this.props;

    return (
      <div style={style}>
        <h3>{name}</h3>
        <p>Songs: {songCount}</p>
        {/* Add any additional playlist details here */}
      </div>
    );
  }
}

export default PlaylistComponent;
