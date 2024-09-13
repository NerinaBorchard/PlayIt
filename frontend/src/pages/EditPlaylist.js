import React, { Component } from 'react';

class EditPlaylist extends Component {
  constructor(props) {
    super(props);

    // Mock data for the playlist
    const mockPlaylist = {
      name: 'Chill Vibes',
      description: 'A collection of smooth and relaxing tracks to wind down to.',
      genre: 'Chill',
      coverImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4935eafa-878e-43fd-a1dd-4234943bedec/dcr6m3m-73080ad4-bf39-405b-9697-2b812f5632a7.jpg/v1/fill/w_1024,h_768,q_75,strp/cool_nature_background_by_sugar__spice_dcr6m3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDkzNWVhZmEtODc4ZS00M2ZkLWExZGQtNDIzNDk0M2JlZGVjXC9kY3I2bTNtLTczMDgwYWQ0LWJmMzktNDA1Yi05Njk3LTJiODEyZjU2MzJhNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOvZXX_5pUU6yENdBCN1VaRZvWq88R4fL41sdfrSRJw', // Placeholder image
    };

    this.state = {
      name: mockPlaylist.name,
      description: mockPlaylist.description,
      genre: mockPlaylist.genre,
      coverImage: mockPlaylist.coverImage,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ coverImage: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Playlist updated successfully!');
    console.log(this.state);
  };

  render() {
    const { name, description, genre, coverImage } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Playlist</h1>

          {/* Change Playlist Cover Section */}
          <div style={styles.coverImageContainer}>
            <img
              src={coverImage}
              alt="Cover"
              style={styles.coverImage}
            />
            <div style={styles.imageButtonContainer}>
              <label htmlFor="fileInput" style={styles.changePicButton}>
                Choose Cover Image
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={this.handleImageChange}
                style={styles.changePicInput}
              />
            </div>
          </div>

          <form onSubmit={this.handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Playlist Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                style={styles.input}
              />
            </label>

            <label style={styles.label}>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
                style={styles.textarea}
              />
            </label>

            <label style={styles.label}>
              Genre:
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={this.handleChange}
                style={styles.input}
              />
            </label>

            <button type="submit" style={styles.saveButton}>Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  editContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  coverImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  },
  coverImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '2px solid #ddd',
  },
  imageButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  changePicInput: {
    display: 'none',
  },
  changePicButton: {
    padding: '12px 24px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  changePicButtonHover: {
    backgroundColor: '#005bb5',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '100%',
    height: '100px',
  },
  saveButton: {
    padding: '12px 20px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '50%',
    alignSelf: 'center',
  },
};

export default EditPlaylist;
