import { useContext } from 'react';
import { useParams } from 'react-router-dom'; // <-- Import useParams
import { CoursesContext } from '../CoursesContext/CoursesContext';

function CourseDetails() {
    const [courses] = useContext(CoursesContext);
    const { id } = useParams(); 
    const courseId = parseInt(id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return <p>Course not found.</p>;
    }

    return (
        <div>
            <h1>{course.title}</h1>
            <img src={course.image} alt={course.title} />
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
        </div>
    );
}

export default CourseDetails;
