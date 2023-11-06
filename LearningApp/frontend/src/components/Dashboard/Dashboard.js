import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      instructor: 'Dhiraj',
      progress: 40,
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      instructor: 'Dhiraj',
      progress: 70,
    },
    // Add more courses as needed
  ];

  const assignments = [
    {
      id: 1,
      title: 'HTML Basics',
      dueDate: '2023-11-15',
    },
    {
      id: 2,
      title: 'JavaScript Quiz',
      dueDate: '2023-11-20',
    },
    // Add more assignments as needed
  ];

  return (
    <div className={styles['dashboard-container']}>
        <h1 className={styles['heading']}>Welcome to AcademeX</h1>

      <div className={styles['course-list']}>
        <h2>My Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Progress: {course.progress}%</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles['assignments']}>
        <h2>Upcoming Assignments</h2>
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <h3>{assignment.title}</h3>
              <p>Due Date: {assignment.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles['quick-links']}>
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/courses">Browse Courses</a></li>
          <li><a href="/profile">My Profile</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;