import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Course.module.css';

function Course() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data.courses))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={styles.container}>
            {courses.map(({ id, title, description, image, instructor, price }) => (
                <div key={id} className={styles.course}>
                    {/* Adjust the image source URL to point to the /static/ endpoint */}
                    <img src={`${image}`} alt={title} className={styles.courseImage} />
                    <h2 className={styles.courseTitle}>{title}</h2>
                    <p className={styles.courseDescription}>{description}</p>
                    <p className={styles.instructor}>Instructor: {instructor}</p>
                    <p className={styles.price}>Price: ${price}</p>
                    <Link to={`/courses/${id}`} className={styles.courseLink}>View Course Details</Link>
                    <Link to={`/courses/${id}/enroll`} className={styles.enrollButton}>Enroll Now</Link>
                </div>
            ))}
        </div>
    );
}

export default Course;
