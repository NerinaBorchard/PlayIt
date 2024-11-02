import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import NavBar from '../components/NavBar';
import PlaylistDetails from '../components/PlaylistDetails';
import PlaylistCover from '../components/PlaylistCover';
import CommentSection from '../components/CommentSection';
import TagBubble from '../components/TagBubble';
import axios from 'axios';

const PlaylistView = () => {
  const { id } = useParams(); // Get the playlist ID from URL
  const [playlist, setPlaylist] = useState(null);
  const [comments, setComments] = useState([]); // Separate state for comments

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`/api/playlists/${id}`);
        setPlaylist(response.data); // Set the playlist
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    // const fetchComments = async () => {
    //   try {
    //     const response = await axios.get(`/api/comments/${id}`);
    //     setComments(response.data); // Set the comments
    //   } catch (error) {
    //     console.error('Error fetching comments:', error);
    //   }
    // };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments?playlistId=${id}`);
        setComments(response.data); // Set the comments specific to this playlist
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    

    fetchPlaylist();
    fetchComments();
  }, [id]);

  if (!playlist) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.nav}>
      <NavBar />
      <div style={styles.normal}>
        <div style={styles.container}>
          <PlaylistDetails playlist={playlist} />
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
        <CommentSection comments={comments || []} /> {/* Pass comments to CommentSection */}
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
