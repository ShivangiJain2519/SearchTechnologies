import React from "react";
import Header from "../components/Header";
import University from "../components/University";
import Work from "../components/Work";
import Test from "../components/Tests";
import Advertisement  from "../components/Advertisement";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import More from "../components/More";

function Home(){
    return (<>
        <Header />
        <University />
        <Work />
        <Test />
        <Advertisement />
        <Services />
        <Courses />
        <More />
        <Footer />
    </>);
}

export default Home;