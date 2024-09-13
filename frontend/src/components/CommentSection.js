import React, { Component } from 'react';

class CommentSection extends Component {
  handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic
  };

  render() {
    const { comments } = this.props;

    return (
      <div style={styles.commentsSection}>
        <h3>Comments</h3>
        <div style={styles.commentList}>
          {comments.map(comment => (
            <><p key={comment.id} style={styles.comment}><strong>{comment.user}:</strong> {comment.text}</p><br /></>
          ))}
        </div>

        <form onSubmit={this.handleCommentSubmit} style={styles.commentForm}>
          <input
            type="text"
            placeholder="Add a comment..."
            style={styles.commentInput}
          />
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>
    );
  }
}

const styles = {
  commentsSection: {
    width: '100%',
    maxWidth: '600px',  // Set a maximum width for the comments section
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  commentList: {
    maxHeight: '150px',
    overflowY: 'auto',
    marginBottom: '10px',
  },
  comment: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',  // Make comments only as long as the text
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  commentInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  submitButton: {
    padding: '10px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

export default CommentSection;
