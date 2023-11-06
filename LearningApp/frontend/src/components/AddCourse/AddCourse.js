import React, { useState, useEffect } from 'react';
import styles from './AddCourse.module.css';

function AddCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/courses') 
            .then(response => response.json())
            .then(data => {
                if (data && data.courses) {
                    setCourses(data.courses);
                } else {
                    console.error("Expected 'courses' key not found in data");
                }
            })
            .catch(error => console.error('Error fetching courses:', error.message));
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, image }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setTitle('');
                setDescription('');
                setImage('');
            } else {
                alert('Error adding course');
            }
        });
    };

    const handleDelete = (courseId) => {
        fetch(`http://localhost:5000/api/courses/${courseId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
            } else {
                alert('Error deleting course');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.addCourse}>
                <h2>Add New Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Description:</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Image URL:</label>
                        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.courseButton}>Add Course</button>
                </form>
            </div>

            <div className={styles.courseList}>
                <h2>Courses</h2>
                <ul>
                    {Array.isArray(courses) && courses.map(course => (
                        <li key={course.id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <img src={course.image} alt={course.title} width="200" />
                            <button onClick={() => handleDelete(course.id)} className={styles.courseButton}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddCourse;
