import React, { Component } from 'react';

class ProfileComponent extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profile-component">
        <img src={profile.image || '/placeholder.png'} alt="Profile" />
        <h3>{profile.name}</h3>
        <p>{profile.bio}</p>
      </div>
    );
  }
}

export default ProfileComponent;
