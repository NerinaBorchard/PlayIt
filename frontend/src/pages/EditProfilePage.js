import React, { Component } from 'react';

class EditProfilePage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.editContainer}>
          <h1 style={styles.title}>Edit Profile</h1>

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
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  },
  editContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  saveButton: {
    padding: '10px 20px',
    background: 'linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(222,69,31,1) 35%, rgba(255,175,0,1) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default EditProfilePage;
