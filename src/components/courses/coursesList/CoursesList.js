import React from "react";
import { useSelector } from "react-redux";

const CoursesList = () => {
  const courses = useSelector((state) => state.courses.coursesItems);
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <p>{course.courseName}</p>
          <button
            type="button"
            id={course.id}
            // onClick={this.onHandleClick}
          >
            Delete course
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
