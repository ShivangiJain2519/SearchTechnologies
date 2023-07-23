import React from "react";

const Footer = () =>{
    return(
        <div className="footer section col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-white">Subscribe Our Newsletter</h1>
                    <p>Subscribe to our newsletter for the latest news, contests, and course information in your mail.</p>
                </div>
            </div>
    
        <hr />

            <div className="row px-3">
                <div className="col-md-3">
                    <img className="pb-3" src="https://searcheducation.com/img/logo.png" />
                    <p className="pb-1">Facilitating students to acquire perfect-fit education placements that ultimately change their lives!</p>
                    <p>
                        <i className="fa-brands fa-instagram text-white"></i>
                        <i className="fa-brands fa-square-facebook text-white"></i>
                        <i className="fa-brands fa-whatsapp text-white"></i>
                        <i className="fa-brands fa-linkedin text-white"></i>
                    </p>
                </div>
                <div className="col-md-3 footer-list pl-5">
                    <h3 className="pb-3 footer-list-heading">Company</h3>
                    <ul>
                        <li>Find A Course</li>
                        <li>Consult A Counselor</li>
                        <li>Career</li>
                        <li>Our Services</li>
                    </ul>
                </div>
                <div className="col-md-3 footer-list pl-3">
                    <h3 className="pb-3 footer-list-heading">Services</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Event</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-md-3 footer-list pl-3">
                    <h3 className="pb-3 footer-list-heading">Support</h3>
                    <ul>
                        <li>Find A Course</li>
                        <li>Consult A Counselor</li>
                        <li>Career</li>
                    </ul>
                </div>
            </div>
    
        <hr className="mb-4" />
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className="copyright">© SearchEducation.com All Rights Reserved.</p>
                </div>
            </div>
    </div>
    );
}

export default Footer;