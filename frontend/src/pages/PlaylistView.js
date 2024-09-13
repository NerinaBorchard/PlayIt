import React, { Component } from 'react';
import PlaylistDetails from '../components/PlaylistDetails';
import PlaylistCover from '../components/PlaylistCover';
import CommentSection from '../components/CommentSection';
import TagBubble from '../components/TagBubble';
import NavBar from '../components/NavBar';
import SongList from '../components/SongList';

class PlaylistView extends Component {
  render() {
    const playlist = {
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
              {playlist.hashtags.map(tag => (
                <TagBubble key={tag} text={`#${tag}`} />
              ))}
            </div>
          </div>
        </div>
        <CommentSection comments={playlist.comments} />
      </div>
      </div>
    );
  }
}

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


