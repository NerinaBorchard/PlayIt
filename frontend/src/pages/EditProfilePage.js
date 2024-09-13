import React, { Component } from 'react';

class EditProfilePage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Profile</h1>

          {/* Change Profile Picture Section */}
          <div style={styles.profilePictureContainer}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4935eafa-878e-43fd-a1dd-4234943bedec/dcr6m3m-73080ad4-bf39-405b-9697-2b812f5632a7.jpg/v1/fill/w_1024,h_768,q_75,strp/cool_nature_background_by_sugar__spice_dcr6m3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDkzNWVhZmEtODc4ZS00M2ZkLWExZGQtNDIzNDk0M2JlZGVjXC9kY3I2bTNtLTczMDgwYWQ0LWJmMzktNDA1Yi05Njk3LTJiODEyZjU2MzJhNy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOvZXX_5pUU6yENdBCN1VaRZvWq88R4fL41sdfrSRJw" // Placeholder image; replace with actual user profile pic
              alt="Profile"
              style={styles.profilePicture}
            />
            <button style={styles.changePicButton}>Change Profile</button>
          </div>

          <form style={styles.form}>
            <label style={styles.label}>
              Username:
              <input type="text" defaultValue="yourusername" style={styles.input} />
            </label>
            <label style={styles.label}>
              Name:
              <input type="text" defaultValue="Your Name" style={styles.input} />
            </label>
            <label style={styles.label}>
              Email:
              <input type="email" defaultValue="your.email@example.com" style={styles.input} />
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
    // minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    // padding: '40px 20px', // Adds padding on all sides to avoid stretching
  },
  editContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    padding: '10px 20px',
    backgroundColor: '#ddd',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '14px',
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
    marginLeft: '50px',
    alignSelf: 'center',
  },
};

export default EditProfilePage;
