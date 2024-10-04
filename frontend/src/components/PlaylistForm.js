// import React, { Component } from 'react';

// const styles = {
//   formContainer: {
//     padding: '30px',
//     paddingTop: '10px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   formGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '14px',
//     color: '#333',
//   },
//   input: {
//     width: '90%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     fontSize: '14px',
//   },
//   textarea: {
//     width: '90%',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     fontSize: '14px',
//   },
//   submitButton: {
//     padding: '10px 15px',
//     background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// class PlaylistForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       genre: '',
//       description: '',
//       hashtags: '',
//       image: '',
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, genre, description, hashtags } = this.state;
//     // Handle form submission logic
//     console.log({ name, genre, description, hashtags });
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, genre, description, hashtags, image } = this.state;

//     return (
//       <div style={styles.formContainer}>
//         <h2>Create New Playlist</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Name</label>
//             <input 
//               type="text" 
//               name="name"
//               value={name} 
//               onChange={this.handleChange} 
//               style={styles.input} 
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Genre</label>
//             <input 
//               type="text" 
//               name="genre"
//               value={genre} 
//               onChange={this.handleChange} 
//               style={styles.input} 
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Description</label>
//             <textarea 
//               name="description"
//               value={description} 
//               onChange={this.handleChange} 
//               style={styles.textarea} 
//               rows="3"
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Hashtags</label>
//             <input 
//               type="text" 
//               name="hashtags"
//               value={hashtags} 
//               onChange={this.handleChange} 
//               style={styles.input} 
//               placeholder="Separate with commas"
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Image URL</label>
//             <input 
//               type="text" 
//               name="image"
//               value={image} 
//               onChange={this.handleChange} 
//               style={styles.input} 
//               required
//             />
//           </div>
//           <button type="submit" style={styles.submitButton}>Create Playlist</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default PlaylistForm;


import React, { Component } from 'react';
import axios from 'axios'; // Import axios for API calls

const styles = {
  formContainer: {
    padding: '30px',
    paddingTop: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  textarea: {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px 15px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    fontSize: '14px',
    color: 'green', // Or red for error messages
  }
};

class PlaylistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      description: '',
      hashtags: '',
      image: '',
      message: '',
      error: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, genre, description, hashtags, image } = this.state; // Use 'image' here
    const userData = JSON.parse(localStorage.getItem('user'));
    const creatorId = userData?.id;

    try {
        // First API call to add the playlist
        const response = await fetch('/api/playlists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name, 
                genre, 
                description, 
                hashtags: hashtags.split(',').map(tag => tag.trim()), // Convert comma-separated hashtags to an array
                coverImage: image, // Use 'image' instead of 'coverImage'
                creator: creatorId 
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to add playlist');
        }

        const data = await response.json();
        console.log('New playlist added:', data);

        // Reset the form fields
        this.setState({ 
            name: '', 
            genre: '', 
            description: '', 
            hashtags: '', // Reset to empty string for text input
            image: '' // Reset image as well
        });
    } catch (error) {
        console.error('Error:', error);
        this.setState({ message: error.message, error: true }); // Show error message to user
    }
};


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, message: '', error: false }); // Reset message on input change
  };

  render() {
    const { name, genre, description, hashtags, image, message, error } = this.state;

    return (
      <div style={styles.formContainer}>
        <h2>Create New Playlist</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input 
              type="text" 
              name="name"
              value={name} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Genre</label>
            <input 
              type="text" 
              name="genre"
              value={genre} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea 
              name="description"
              value={description} 
              onChange={this.handleChange} 
              style={styles.textarea} 
              rows="3"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Hashtags</label>
            <input 
              type="text" 
              name="hashtags"
              value={hashtags} 
              onChange={this.handleChange} 
              style={styles.input} 
              placeholder="Separate with commas"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Image URL</label>
            <input 
              type="text" 
              name="image"
              value={image} 
              onChange={this.handleChange} 
              style={styles.input} 
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>Create Playlist</button>
        </form>
        {message && <div style={{ ...styles.message, color: error ? 'red' : 'green' }}>{message}</div>}
      </div>
    );
  }
}

export default PlaylistForm;
