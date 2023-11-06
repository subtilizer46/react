import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext'; 
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import Course from '../Course/Course';
import AddCourse from '../AddCourse/AddCourse'; 
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
import CourseDetails from '../CourseDetails/CourseDetails';
import { CoursesProvider } from '../CoursesContext/CoursesContext';  
function HomePage() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <CoursesProvider>
            <Routes>
              <Route path="/" element={<HeroSection />} /> 
              <Route path="/courses" element={<Course />} />
              <Route path="/courses/add-course" element={<AddCourse />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
            </Routes>
          </CoursesProvider>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default HomePage;