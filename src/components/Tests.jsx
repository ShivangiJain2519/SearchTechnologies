import React from "react";

const Test = () =>{
    return (
        <div className="section" id="work-section">
        <h5 className="heading-light-grey text-center">Enroll For</h5>
        <h2 className="heading-orange text-center">Search <span className="heading-dark-grey">Tests</span></h2>
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card test-card">
                        <img className="test-icon" src="https://searcheducation.com/img/ielitsicon.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title test-cards-title">IELTS</h5>
                            <p className="card-text test-cards-text mb-5">IELTS is the high-stakes English test for study, migration, or work</p>
                            <span className="arrow-icon ml-0"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card test-card">
                        <img className="test-icon" src="https://searcheducation.com/img/pteicon.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title test-cards-title">PTE</h5>
                            <p className="card-text test-cards-text mb-5">Unbiased English testing for study abroad and immigration</p>
                            <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card test-card">
                        <img className="test-icon" src="https://searcheducation.com/img/NAATIcon.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title test-cards-title">NAATI CCL</h5>
                            <p className="card-text test-cards-text mb-5">A way to Australian PR via a point-based visa application</p>
                            <span className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
    );
}

export default Test;