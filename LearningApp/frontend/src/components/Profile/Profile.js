import React from 'react';
import styles from './Profile.module.css'; // Import the CSS module

function Profile() {
  const user = {
    name: 'Ram',
    email: 'ram@gamail.com',
    role: 'Associate Software Engineer',
    location: 'Bangalore, India',
    interests: ['Coding', 'Gym'],
    achievements: [
      'Completed React JS course',
      'Published Python web app',
      'Attended programming conference',
    ]
  };

  return (
    <div className={styles['profile-container']}>
      <h1 className={styles['heading']}>My Profile</h1>

      <div className={styles['profile-details']}>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>

      <div className={styles['statistics']}>
        <h2>Interests</h2>
        <ul>
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <div className={styles['statistics']}>
        <h2>Achievements</h2>
        <ul>
          {user.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className={styles['statistics']}>
        <h2>Profile Statistics</h2>
        <p><strong>Course Completion:</strong> 80%</p>
        <p><strong>Projects Completed:</strong> 5</p>
      </div>
    </div>
  );
}

export default Profile;
