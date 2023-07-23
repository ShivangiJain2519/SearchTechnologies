import React from "react";
import Card from "./CoursesCard";
import courses from "../courses";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function createCard(courses){
    return <Card
        key={courses.id}
        name={courses.name}
        img={courses.imgURL}
        brand={courses.brand}
        location={courses.location}
    />
}

const Courses = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
    <div className="section" id="course-section">
      <h5 className="heading-light-grey">Explore Our</h5>
      <h2 className="heading-dark-grey">Trending Courses</h2>
      <Carousel responsive={responsive} className="card-section">
        {courses.map(createCard)} 
      </Carousel>
    </div>
  );
}

export default Courses;
