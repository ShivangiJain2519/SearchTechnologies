import React from "react";

const Services = () =>{
    return (
        <div className="section pl-0" id="work-section">
    <h5 className="heading-light-grey text-center">Let's check our</h5>
    <h2 className="heading-orange text-center">Search<span className="heading-dark-grey"> Services</span></h2>
        <div className="row mx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card card-services">
                    <div className="service-image">
                        <img className="card-img-top w-25" src="https://searcheducation.com/img/visaguidence-icon.png" alt="Card image cap" />
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title services-heading">Getting Visa Guidance</h5>
                        <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card card-services">
                    <div className="service-image">
                        <img className="card-img-top w-25" src="https://searcheducation.com/img/helploan-icon.png" alt="Card image cap" />
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title services-heading">Help in Loan</h5>
                        <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card card-services">
                    <div className="service-image">
                        <img className="card-img-top w-25" src="https://searcheducation.com/img/internationalbank-icon.png" alt="Card image cap" />
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title services-heading">International Bank Account</h5>
                        <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="card card-services">
                    <div className="service-image">
                        <img className="card-img-top w-25" src="https://searcheducation.com/img/forex-icon.png" alt="Card image cap" />
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title services-heading">Forex</h5>
                        <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="row avatar-section">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 d-flex justify-content-between avatar-content">
                <div className="d-inline-flex">
                    <img className="avatar" src="https://searcheducation.com/img/uservectorone.png" alt="Card image cap" />
                    <p className="avatar-heading">IELTS Coaching</p>
                </div>
                <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 d-flex justify-content-between avatar-content">
                <div className="d-inline-flex">
                    <img className="avatar" src="https://searcheducation.com/img/uservectortwo.png" alt="Card image cap" />
                    <p className="avatar-heading">PTE Coaching</p>
                </div>
                <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 d-flex justify-content-between avatar-content">
                <div className="d-inline-flex">
                    <img className="avatar" src="https://searcheducation.com/img/uservectorthree.png" alt="Card image cap" />
                    <p className="avatar-heading">Accommodation</p>
                </div>
                <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
</div>

    );
}

export default Services;