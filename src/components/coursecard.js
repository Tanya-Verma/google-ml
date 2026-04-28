import React from "react";
import "../styles/card.css";

function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p className="level">{course.level}</p>
      <a href={course.link} target="_blank" rel="noreferrer">
        View Course →
      </a>
    </div>
  );
}

export default CourseCard;