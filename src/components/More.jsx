import React from "react";

const More = () =>{
    return (
        <div className="section more">
            <div className="row pl-5">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="card more-card">
                                <div className="card-body">
                                    <h1 className="number">19,000 +</h1>
                                    <p className="left-heading">Success Stories</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="card more-card">
                                <div className="card-body">
                                    <h1 className="number">2,000 +</h1>
                                    <p className="left-heading">Helped Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="card more-card">
                                <div className="card-body">
                                    <h1 className="number">99.99 %</h1>
                                    <p className="left-heading">Acceptance rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="card more-card">
                                <div className="card-body">
                                    <h1 className="number">8,000 +</h1>
                                    <p className="left-heading">Educated Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card more-data">
                        <img className="card-img-top more-image" src="https://searcheducation.com/img/groupvector.png" alt="Icon" />
                        <div className="card-body more-body">
                            <h1 className="more-data-heading pb-4">To Know More About us</h1>
                            <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default More;