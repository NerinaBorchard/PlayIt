// PlaylistComments.js
import React, { useEffect, useState } from 'react';
import CommentSection from './CommentSection';

const PlaylistComments = ({ playlistId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments for the playlist when the component mounts or playlistId changes
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [playlistId]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await fetch(`/api/playlists/${playlistId}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: newComment }),
        });
        const newCommentData = await response.json();
        setComments([...comments, newCommentData]); // Add the new comment to the list
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  return (
    <div className="playlist-comments">
      <h3>Comments</h3>
      <CommentSection comments={comments} />
      
      <div className="add-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
    </div>
  );
};

export default PlaylistComments;
