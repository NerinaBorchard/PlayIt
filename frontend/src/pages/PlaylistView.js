import React from 'react';

// Mock data for the playlist
const mockPlaylist = {
  id: 1,
  name: 'My Ayra Starr Collection',
  genre: 'Afrobeats',
  description: 'A collection of the best tracks by Ayra Starr.',
  coverImage: 'https://t2.genius.com/unsafe/832x0/https%3A%2F%2Fimages.genius.com%2F4c509629284908c33fa2002eeea8e2e8.1000x1000x1.png',
  creator: 'Nin',
  hashtags: ['AyraStarr', 'Afrobeats', 'Collection'],
  songs: [
    {
      id: 1,
      title: 'Lagos Love Story',
      artist: 'Ayra Starr',
      coverImage: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg'
    },
    {
      id: 2,
      title: 'Last Heartbreak Song',
      artist: 'Ayra Starr',
      coverImage: 'https://media.pitchfork.com/photos/66561ba1b43d5e61153bccdf/1:1/w_320,c_limit/Ayra-Starr.jpg'
    }
  ],
  comments: [
    { id: 1, text: 'Amazing collection!', user: 'User1' },
    { id: 2, text: 'Great vibe, love it!', user: 'User2' },
  ]
};

const PlaylistView = () => {
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        {/* Playlist Details */}
        <h1>{mockPlaylist.name}</h1>
        <p style={styles.creatorText}>By {mockPlaylist.creator} - {mockPlaylist.songs.length} songs</p>
        <p style={styles.description}>{mockPlaylist.description}</p>

        {/* Table Headers */}
        <div style={styles.songHeader}>
          <p style={styles.hash}>#</p>
          <p style={styles.title}>Title</p>
        </div>

        {/* Song List */}
        <div style={styles.songList}>
          {mockPlaylist.songs.map((song, index) => (
            <div key={song.id} style={styles.songRow}>
              <p style={styles.hash}>{index + 1}</p>
              <img src={song.coverImage} alt={song.title} style={styles.songImage} />
              <div style={styles.songInfo}>
                <p style={styles.songTitle}>{song.title}</p>
                <p style={styles.songArtist}>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.rightSection}>
        {/* Playlist Cover Image */}
        <img src={mockPlaylist.coverImage} alt="Playlist Cover" style={styles.playlistImage} />

        {/* Genre and Hashtags */}
        <div style={styles.tagsContainer}>
          <div style={styles.genreBubble}>{mockPlaylist.genre}</div>
          {mockPlaylist.hashtags.map(tag => (
            <div key={tag} style={styles.tagBubble}>#{tag}</div>
          ))}
        </div>

        {/* Comments Section */}
        <div style={styles.commentsSection}>
          <h3>Comments</h3>
          <div style={styles.commentList}>
            {mockPlaylist.comments.map(comment => (
              <p key={comment.id} style={styles.comment}><strong>{comment.user}:</strong> {comment.text}</p>
            ))}
          </div>

          {/* Add Comment */}
          <form onSubmit={handleCommentSubmit} style={styles.commentForm}>
            <input
              type="text"
              placeholder="Add a comment..."
              style={styles.commentInput}
            />
            <button type="submit" style={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  leftSection: {
    width: '65%',
    padding: '20px',
  },
  rightSection: {
    width: '30%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  creatorText: {
    color: '#888',
    margin: '5px 0',
  },
  description: {
    margin: '10px 0',
  },
  songHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  hash: {
    width: '5%',
    fontWeight: 'bold',
  },
  title: {
    width: '90%',
    fontWeight: 'bold',
  },
  songList: {
    marginTop: '10px',
  },
  songRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  songImage: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
  },
  songInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  songTitle: {
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#888',
  },
  playlistImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  genreBubble: {
    backgroundColor: '#1DB954',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '20px',
    margin: '5px',
  },
  tagBubble: {
    backgroundColor: '#eee',
    padding: '8px 12px',
    borderRadius: '20px',
    margin: '5px',
  },
  commentsSection: {
    width: '100%',
    marginTop: '20px',
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
    backgroundColor: '#1DB954',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },
};

export default PlaylistView;
