// CoursesContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CoursesContext = createContext();

export const CoursesProvider = props => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data.courses))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <CoursesContext.Provider value={[courses, setCourses]}>
            {props.children}
        </CoursesContext.Provider>
    );
};
