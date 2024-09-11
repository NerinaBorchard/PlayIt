import React, { Component } from 'react';

class EditProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.profile.name || '',
      bio: this.props.profile.bio || '',
      // Other fields...
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to save profile changes
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    );
  }
}

export default EditProfileComponent;
