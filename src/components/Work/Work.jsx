import React, { useState } from "react";
import './WorkExperience.css'
import work_exp from '../../assets/work_exp'
import arrow_icon from '../../../public/arrow_icon.svg'
import { FaLaptopCode } from "react-icons/fa";

function Work(){
    const [expand, setExpand] = useState(null)
    return (
        <div id="projects" className="services">
            <div className="services-title">
                <h1>Work Experience <FaLaptopCode /></h1>

            </div>
            <div className="services-container" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                {work_exp.map((work, index) => {
                    return <div key={index} className="services-format" onClick={() => setExpand(expand === index ? null : index)}>
                        <h2>{work.Company_Name}</h2>
                        <div className="services-role">
                            <h3>{work.Role}</h3>
                            <p>{work.duration}</p>
                        </div>
                        <p>{work.Responsibilities.map((res, ind) =>{
                            return <li key={ind}>{res}</li>
                        })}
                        {expand === index && <p className="services-more">{work.Responsibilities_More.map((res, ind) => {
                            return <li key={ind}>{res}</li>
                        })}</p>}</p>
                        <div className="services-readmore">
                            <p>{expand === index ? "Read Less" : "Read More..."}</p>
                            <img src={arrow_icon} alt="" className={expand === index ? "rotate-arrow" : ""}/>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Work;