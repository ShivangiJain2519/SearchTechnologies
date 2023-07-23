import React from "react";
import workImg from "../images/work-.png";

const Work = () =>{
    return (
    <div className="section pl-0" id="work-section">
        <h5 className="heading-light-grey text-center">Our Process</h5>
        <h2 className="heading-dark-grey text-center">How it works</h2>
        <img className="work-img" src={workImg} alt="" />
    </div>
    );
}

export default Work;