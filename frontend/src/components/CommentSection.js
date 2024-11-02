import React, { Component } from 'react';

class CommentSection extends Component {
  handleCommentSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.commentInput;
    const newComment = {
      user: { profile: { username: "CurrentUser" } }, // Replace with actual current user's info
      text: input.value,
    };
    
    // You should ideally pass this function down from PlaylistView to update the comments state
    this.props.onAddComment(newComment); // Call a prop function to add a new comment
    input.value = ""; // Clear input after submission
  };

  render() {
    const { comments } = this.props;

    return (
      <div style={styles.commentsSection}>
        <h3>Comments</h3>
        <div style={styles.commentList}>
        {comments.map((comment, index) => (
          <div key={comment._id || index} style={styles.comment}>
            <strong>
              {comment.user && comment.user.profile && comment.user.profile.username 
                ? comment.user.profile.username 
                : "Unknown User"}:
            </strong> {comment.text}
          </div>
        ))}

        </div>

        <form onSubmit={this.handleCommentSubmit} style={styles.commentForm}>
          <input
            type="text"
            name="commentInput" // Make sure to name the input for form handling
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
      maxWidth: '600px',
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
      display: 'block', // Set to 'block' for vertical stacking
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
