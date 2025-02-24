import React from "react";
import './Hero.css'
import profileimg from '../../../public/profileimg.svg'
import Resume from '../../../public/Jayanth_Vunnam_Resume.pdf'

function Hero(){
    return (
        <div id="home" className="profile" data-aos="fade-down">
            <div className="profile-data">
                <div className="profile-left">
                    <h1><span>Hi, I'm Jayanth Vunnam</span></h1>
                    <h3>I am a Master's student in Computer Science at the University of Colorado, Boulder, with 2+ years of software development experience. I am passionate about integrating Machine Learning into software applications to build impactful, scalable solutions.</h3>
                </div>
                <div className="profile-right" data-aos="zoom-out-down">
                    <img  src={profileimg} alt="Profile-img" width="200px" />
                </div>
            </div>
            
            <div className="profile-action">
                <div className="profile-resume" onClick={() => window.open(Resume, "_blank")}>
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero;