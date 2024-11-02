import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: '', // Default to empty; this will be updated after fetching data
      user: {
        username: '',
        name: '',
        email: '',
      },
      redirectTo: null, // For redirect after actions
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      const userId = userData?.id;
      if (!userId) throw new Error("User ID not found");

      const response = await axios.get(`/api/user/${userId}`);
      const userDetails = response.data;

      this.setState({ 
        user: {
          username: userDetails.username,
          name: userDetails.name,
          email: userDetails.email,
          picture: userDetails.picture,
        },
        // profilePicture: userDetails.profilePicture
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  getDefaultProfilePicture = () => {
    return 'https://img.freepik.com/free-photo/abstract-smooth-orange-background-layout-designstudioroom-web-template-business-report-with-smooth-c_1258-54783.jpg';
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData?.id;
    if (!userId) {
      alert('User ID not found');
      return;
    }

    try {
      const response = await axios.put(`/api/user/${userId}`, {
        username: this.state.user.username,
        name: this.state.user.name,
        email: this.state.user.email,
        picture: this.state.picture,
      });

      alert(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      this.setState({ redirectTo: '/profile' });
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  handleDeleteProfile = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData?.id;
    if (!userId) {
      alert('User ID not found');
      return;
    }

    if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
      try {
        await axios.delete(`/api/user/${userId}`);
        alert('Profile deleted successfully');
        
        localStorage.removeItem('user');
        this.setState({ redirectTo: '/' });
      } catch (error) {
        console.error('Error deleting profile:', error);
        alert('Failed to delete profile');
      }
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Navigate to={this.state.redirectTo} />;
    }

    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Profile</h1>

          <div style={styles.profilePictureContainer}>
            <img
              src={this.state.user.picture}
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

          <button onClick={this.handleDeleteProfile} style={styles.deleteButton}>
            Delete Profile
          </button>
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
  deleteButton: {
    padding: '12px 24px',
    background: 'linear-gradient(90deg, rgba(223,8,8,1) 0%, rgba(218,83,20,1) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};

export default EditProfilePage;
