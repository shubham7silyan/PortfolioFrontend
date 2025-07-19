import React, { useEffect } from "react";
import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav(props) {
    useEffect(() => {
        AOS.init({ duration: "2000" });
    }, [])
    return (<>
        <div>
            <nav id="home-section" class="Nav1">
                <div className="container-fluid">
                    <div className="row ">
                        <ul className="list1 d-flex justify-content-center align-items-center ps-0">
                            <li data-aos={props.ani}><a href="#portfolio-section" class="nav-link" data-bs-toggle="dropdown">Projects</a></li>
                            <li data-aos={props.ani}><a href="#skill-section" class="nav-link" data-bs-toggle="dropdown">Skills</a></li>
                            <li data-aos={props.ani}><a href="index.html" class="logo1 text-align-center">Shubham Silyan<span>.</span></a></li>
                            <li data-aos={props.ani}><a href="#about-section" class="nav-link" data-bs-toggle="dropdown">About</a></li>
                            <li data-aos={props.ani}><a href="#contact-section" class="nav-link" data-bs-toggle="dropdown">Contact</a></li>
                        </ul>
                        <div className="icons">
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>



    </>);
};

export default Nav;