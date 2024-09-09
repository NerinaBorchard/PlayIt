import React, { Component } from 'react';
import EditPost from './EditPost';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.title,
      author: this.props.author,
      description: this.props.description,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  updatePost = (title, description) => {
    this.setState({ title, description });
    this.toggleEdit();
  };

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>{this.state.author}</h3>
        <p>{this.state.description}</p>
        <button onClick={this.toggleEdit}>
          {this.state.isEditing ? 'Cancel' : 'Edit Post'}
        </button>
        {this.state.isEditing && (
          <EditPost
            title={this.state.title}
            description={this.state.description}
            updatePost={this.updatePost}
          />
        )}
      </div>
    );
  }
}

export default Post;
