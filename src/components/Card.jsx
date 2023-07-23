import React from "react";

function Card(props) {
  return (
    <div className="card university-card">
      <div className="card-img-top">
        <img className="square-img" src={props.img} alt="avatar_img" />
        <img className="circle-img" src={props.brand} alt="avatar_img" />
        <h2 className="name">{props.name}</h2>
        <p className="location"><i className="fa-solid fa-location-dot"></i>{props.location}</p>       
      </div>
    </div>
  );
}

export default Card;
