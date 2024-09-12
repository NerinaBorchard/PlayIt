// import React, { Component } from 'react';

// class PlaylistComponent extends Component {
//   render() {
//     const { name, songCount, coverImage, creator, link } = this.props.playlist;
//     const { style } = this.props;

//     return (
//       <a 
//         href={link} 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         style={{ textDecoration: 'none' }}>
//         <div 
//           style={{
//             ...style, 
//             width: '220px', 
//             padding: '10px', 
//             borderRadius: '8px', 
//             backgroundColor: '#fff', 
//             cursor: 'pointer', 
//             textAlign: 'center', 
//             boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//             transition: 'transform 0.3s'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//           onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

//           {/* Playlist Cover Image - Ensure it's always square */}
//           <img 
//             src={coverImage} 
//             alt={name} 
//             style={{
//               width: '100%', 
//               height: '220px', // Set height equal to width for a square shape
//               borderRadius: '8px 8px 0 0', 
//               objectFit: 'cover' // Ensures the image covers the container without stretching
//             }} 
//           />
          
//           {/* Playlist Name */}
//           <h3 style={{ margin: '10px 0', color: '#333' }}>{name}</h3>
          
//           {/* Playlist Creator */}
//           <p style={{ margin: '5px 0', color: '#999' }}>
//             By <span style={{ color: '#1DB954' }}>{creator}</span>
//           </p>
//         </div>
//       </a>
//     );
//   }
// }

// export default PlaylistComponent;

import React, { Component } from 'react';

class PlaylistComponent extends Component {
  render() {
    const { name, songCount, coverImage, creator, link } = this.props.playlist;
    const { style } = this.props;

    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}>
        <div 
          style={{
            ...style, 
            width: '220px', 
            padding: '10px', 
            borderRadius: '8px', 
            backgroundColor: '#fff', 
            cursor: 'pointer', 
            textAlign: 'center', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            minHeight: '320px', // Ensures cards are of consistent size
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

          {/* Playlist Cover Image - Ensure it's always square */}
          <img 
            src={coverImage} 
            alt={name} 
            style={{
              width: '100%', 
              height: '220px', 
              borderRadius: '8px 8px 0 0', 
              objectFit: 'cover'
            }} 
          />

          {/* Playlist Name */}
          <h3 
            style={{
              margin: '10px 0', 
              color: '#333', 
              fontSize: '16px', 
              lineHeight: '1.2', 
              height: '2.4em', // Height for two lines
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical'
            }}
          >
            {name}
          </h3>

          {/* Playlist Creator */}
          {/* <p style={{ margin: '5px 0', color: '#999' }}>
            By <span style={{ color: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)' }}>{creator}</span>
          </p> */}
          <p style={{ margin: '5px 0', color: '#999' }}>
            By  &nbsp;
            <span 
                style={{
                background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
                WebkitBackgroundClip: 'text', // Clips the background to the text
                WebkitTextFillColor: 'transparent', // Makes the text fill transparent to show the gradient
                fontWeight: 'bold'
                }}>
                {creator}
            </span>
            </p>

        </div>
      </a>
    );
  }
}

export default PlaylistComponent;
