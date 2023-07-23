import React from "react";

function CoursesCard(props) {
  return (
    <div className="card course-card">
      <div className="card-img-top">
        <img className="square-img" src={props.img} alt="course_img" />
        <div className="card-body">
        <h2 className="courses-heading">{props.name}</h2>     
        <p className="months">12 Months <span className="seperator">|</span> Months</p>
        <button type="button" className="explore mt-3">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
