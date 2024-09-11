import React, { Component } from 'react';

class FeedComponent extends Component {
  render() {
    const { feedItems } = this.props;

    return (
      <div className="feed-component">
        {feedItems.map(item => (
          <div key={item.id} className="feed-item">
            <h4>{item.type === 'song' ? item.songName : item.playlistName}</h4>
            {/* Display additional info based on type */}
          </div>
        ))}
      </div>
    );
  }
}

export default FeedComponent;
