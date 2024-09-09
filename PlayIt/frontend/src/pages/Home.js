import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello Home Page!</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
        </nav>
        <p>This is the home page content.</p>
      </div>
    );
  }
}

export default Home;
