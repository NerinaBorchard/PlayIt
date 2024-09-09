import React, { Component } from 'react';

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updatePost(this.state.title, this.state.description);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Post Title</label><br/>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        /> <br/>
        <label> Post Description</label><br/>
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        /><br/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EditPost;
