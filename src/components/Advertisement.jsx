import React from "react";

const Advertisement = () => {
    return(
        <div className="section pl-0">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://searcheducation.com/img/img_28n.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://searcheducation.com/img/mini_banner_3.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://searcheducation.com/img/img_28n.jpg" alt="Third slide" />
                    </div>
                </div>
            </div> 
        </div>
    );

}

export default Advertisement;
