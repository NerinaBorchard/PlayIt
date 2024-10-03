import React, { Component } from 'react';
import axios from 'axios';

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4935eafa-878e-43fd-a1dd-4234943bedec/dcr6m3m-73080ad4-bf39-405b-9697-2b812f5632a7.jpg/v1/fill/w_1024,h_768,q_75,strp/cool_nature_background_by_sugar__spice_dcr6m3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDkzNWVhZmEtODc4ZS00M2ZkLWExZGQtNDIzNDk0M2JlZGVjXC9kY3I2bTNtLTczMDgwYWQ0LWJmMzktNDA1Yi05Njk3LTJiODEyZjU2MzJhNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOvZXX_5pUU6yENdBCN1VaRZvWq88R4fL41sdfrSRJw',
      user: {
        username: '',
        name: '',
        email: '',
      },
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    try {
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?.id; // Assuming userData contains the user's ID

      // Fetch user details from the API
      const response = await axios.get(`/api/user/${userId}`);
      console.log('User details:', userId);
      const userDetails = response.data;

      // Update the state with user details
      this.setState({ 
        user: userDetails,
        profilePicture: userDetails.profilePicture || this.state.profilePicture // Optional: Use the fetched profile picture if available
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Here you can implement saving the profile data (e.g., sending it to the server)
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Profile</h1>

          {/* Change Profile Picture Section */}
          <div style={styles.profilePictureContainer}>
            <img
              src={this.state.profilePicture}
              alt="Profile"
              style={styles.profilePicture}
            />
            <label htmlFor="fileInput" style={styles.changePicButton}>
              Change Profile
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={this.handleImageChange}
              style={styles.changePicInput}
            />
          </div>

          <form onSubmit={this.handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Username:
              <input
                type="text"
                value={this.state.user.username}
                onChange={(e) => this.setState({ user: { ...this.state.user, username: e.target.value } })}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Name:
              <input
                type="text"
                value={this.state.user.name}
                onChange={(e) => this.setState({ user: { ...this.state.user, name: e.target.value } })}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                value={this.state.user.email}
                onChange={(e) => this.setState({ user: { ...this.state.user, email: e.target.value } })}
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
  profilePictureContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    borderRadius: '5px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
    border: '2px solid #ddd',
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
  changePicInput: {
    display: 'none',
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

export default EditProfilePage;
