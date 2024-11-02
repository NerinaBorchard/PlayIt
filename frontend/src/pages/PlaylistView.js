import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PlaylistDetails from '../components/PlaylistDetails';
import PlaylistCover from '../components/PlaylistCover';
import CommentSection from '../components/CommentSection';
import TagBubble from '../components/TagBubble';
import axios from 'axios';

const PlaylistView = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [comments, setComments] = useState([]);
  const [songs, setSongs] = useState([]); // State for songs

  // Function to fetch the playlist details
  const fetchPlaylist = async (id) => {
    try {
      const response = await fetch(`/api/playlists/${id}`);
      const playlistData = await response.json();
      if (response.ok) {
        setPlaylist(playlistData);
        setSongs(playlistData.songs); // Set the songs from the fetched playlist
      } else {
        console.error(playlistData.message);
      }
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  // Function to fetch comments for the playlist
  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/comments?playlistId=${id}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // useEffect to fetch playlist and comments on component mount
  useEffect(() => {
    fetchPlaylist(id); // Pass the id to the fetchPlaylist function
    fetchComments();
  }, [id]);

  const onAddComment = async (newCommentText) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.id;

      const newComment = {
        user: userId,
        text: newCommentText,
        playlistId: id,
      };
      console.log('New comment:', newComment);

      await axios.post('/api/comments', newComment);
      fetchComments();
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  if (!playlist) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.nav}>
      <NavBar />
      <div style={styles.normal}>
        <div style={styles.container}>
          <PlaylistDetails playlist={playlist} songs={songs} /> {/* Pass songs here */}
          <div style={styles.rightSection}>
            <PlaylistCover coverImage={playlist.coverImage} />
            <div style={styles.tagsContainer}>
              <TagBubble text={playlist.genre} />
              {(playlist.hashtags || []).map(tag => (
                <TagBubble key={tag} text={`#${tag}`} />
              ))}
            </div>
          </div>
        </div>
        <CommentSection comments={comments} onAddComment={onAddComment} />
      </div>
    </div>
  );
};

const styles = {
  nav:  {
    fontFamily: 'Arial, sans-serif',
  },
  normal: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  rightSection: {
    width: '30%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  },
};

export default PlaylistView;
