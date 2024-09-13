import React, { Component } from 'react';

class TagBubble extends Component {
  render() {
    const { text } = this.props;
    return (
      <div style={styles.tagBubble}>
        {text}
      </div>
    );
  }
}

const styles = {
  tagBubble: {
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    padding: '8px 12px',
    borderRadius: '20px',
    margin: '5px',
  },
};

export default TagBubble;
