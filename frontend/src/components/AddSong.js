import React, { Component } from 'react';

class AddSongComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist: '',
      link: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newSong = this.state;
    // Add functionality to save the song
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Song Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Spotify Link"
          value={this.state.link}
          onChange={this.handleChange}
        />
        <button type="submit">Add Song</button>
      </form>
    );
  }
}

export default AddSongComponent;
