import React from "react";
import {useState, useEffect} from "react";
import bannerImg from "../images/banner-img.jpg";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        window.scrollY >= 50 ? setNavbar(true) : setNavbar(false);
    }
    window.addEventListener('scroll', changeBackground);

    return (<header>
        <div className="banner-section">
        <img className="banner-img" src={bannerImg}></img>
        <nav className={`fixed-top navbar-expand-lg navbar ` + (navbar ? `nav-scrolled` : ``)} >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#"><img src="https://searcheducation.com/img/logo.png" width="140px"></img></a>
            <div className="collapse navbar-collapse mobile-nav" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mr-5 mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find a course</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Consult a counsellor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Our Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">About us</a>
                    </li>
                </ul>
                <div className="nav-button">
                <button type="button" className="btn rounded-left log-btn">LogIn</button>
                <button type="button" className="btn rounded-right log-btn">LogOut</button>
                </div>
            </div>
            
        </nav>
        <div className="banner-text w-50">
            <h1 className = "banner-heading">Expand your horizons with <span className = "banner-heading-span" style={{color: "#f36625"}}>Global Education</span></h1>
            <button type="button" className="explore mt-3">Explore</button>
        </div>
        </div>
    </header>
    );
}

export default Header;