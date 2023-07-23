import React from "react";
import Card from "./Card";
import university from "../university";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function createCard(university){
    return <Card
        key={university.id}
        name={university.name}
        img={university.imgURL}
        brand={university.brand}
        location={university.location}
    />
}

const University = () => {
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
    <div className="section" id="university-section">
      <h5 className="heading-light-grey">Our Popular</h5>
      <h2 className="heading-orange">Search<span className="heading-dark-grey"> Universities</span></h2>
      <Carousel responsive={responsive} className="card-section">
        {university.map(createCard)} 
      </Carousel>
    </div>
  );
}

export default University;
