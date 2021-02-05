import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "../redux/actions/coursesActions";
import { getStudents } from "../redux/actions/studentsActions";
import { getTutors } from "../redux/actions/tutorsActions";
import { getStudentsOperation } from "../redux/operations/studentsOperations";
import { getTutorsOperation } from "../redux/operations/tutorOperations";
import Navigation from "./navigation/Navigation";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutorsOperation());
    dispatch(getStudentsOperation());

    // if (localStorage.getItem("courses")) {
    //   const courses = JSON.parse(localStorage.getItem("courses"));
    //   dispatch(getCourses(courses));
    // }
    // if (localStorage.getItem("tutors")) {
    //   const tutors = JSON.parse(localStorage.getItem("tutors"));
    //   dispatch(getTutors(tutors));
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='app'>
      <Navigation />
    </div>
  );
};

export default App;
