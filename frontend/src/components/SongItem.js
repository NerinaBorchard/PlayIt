
// import React from 'react';

// const SongItem = ({ image, title, artist }) => {
//   return (
//     <div style={styles.songItem}>
//       <img src={image} alt={title} style={styles.songImage} />
//       <div style={styles.songDetails}>
//         <h3 style={styles.songTitle}>{title}</h3>
//         <p style={styles.songArtist}>{artist}</p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   songItem: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     padding: '10px',
//   },
//   songImage: {
//     width: '50px',
//     height: '50px',
//     objectFit: 'cover',
//     marginRight: '15px',
//   },
//   songDetails: {
//     flex: '1',
//   },
//   songTitle: {
//     margin: '0 0 5px',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//   },
//   songArtist: {
//     margin: '0',
//     color: '#777',
//   },
// };

// export default SongItem;


// src/components/SongItem.js
import React from 'react';

const SongItem = ({ song, onDelete }) => (
  <div style={{
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: '10px', 
    padding: '10px', 
    borderRadius: '8px', 
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <img 
      src={song.image} 
      alt={song.title} 
      style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} 
    />
    <div style={{ flex: 1 }}>
      <h4 style={{ margin: 0 }}>{song.title}</h4>
      <p style={{ margin: 0, color: '#555' }}>{song.artist}</p>
    </div>
    <button onClick={onDelete} style={{
      backgroundColor: '#FF6347', 
      color: '#fff', 
      border: 'none', 
      padding: '5px 10px', 
      borderRadius: '4px', 
      cursor: 'pointer'
    }}>
      Delete
    </button>
  </div>
);

export default SongItem;
