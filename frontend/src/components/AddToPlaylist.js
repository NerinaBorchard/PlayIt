import React, { Component } from 'react';

class AddToPlaylistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylist: '',
    };
  }

  handlePlaylistChange = (e) => {
    this.setState({ selectedPlaylist: e.target.value });
  }

  handleAddToPlaylist = () => {
    // Add functionality for adding the song to the selected playlist
  }

  render() {
    const { playlists } = this.props;

    return (
      <div className="add-to-playlist">
        <select onChange={this.handlePlaylistChange}>
          <option>Select Playlist</option>
          {playlists.map(playlist => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <button onClick={this.handleAddToPlaylist}>Add to Playlist</button>
      </div>
    );
  }
}

export default AddToPlaylistComponent;
