import React from "react";
import '../index.css'
import { FaBuffer } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

function Footer() {
    return (<>

        <div className="container-fluid lastcont">
            <div className="row Foot">
                <div className="col-sm-3 F1 text-white">
                    <h2><span><FaBuffer /></span>ShubhamSilyan</h2>
                    <p>Living, learning, & leveling up one day at a time.</p>
                    <h6><AiFillTwitterCircle class="icon" /><FaFacebook class="icon" /><FaInstagram class="icon" /></h6>
                </div>
                <div className="col-sm-2 text-white div1 F2">
                    <h2>EXPLORE</h2>
                    <h5 id="#abt-section"><span><FaGreaterThan /></span>About</h5>
                    <h5><span><FaGreaterThan /></span>Skills</h5>
                    <h5><span><FaGreaterThan /></span>Contact Us</h5>
                </div>
                <div className="col-sm-2 text-white div1 F2">
                    <h2>QUICK LINKS</h2>
                    <h5><span><FaGreaterThan /></span>Terms & Conditions</h5>
                    <h5><span><FaGreaterThan /></span>Privacy</h5>
                    <h5><span><FaGreaterThan /></span>Feedbacks</h5>
                </div>

                <div className="col-sm-3 text-white div1 F2">
                    <h2>HAVE A QUESTION?</h2>
                    <h5><span><FaGreaterThan /></span>shubham7silyan@gmail.com</h5>
                    <h5><span><FaGreaterThan /></span>Whatsapp - 7814448027</h5>
                    <h5><span><FaGreaterThan /></span>LinkedIn - ShubhamSilyan</h5>
                </div>
            </div>
        </div>
    </>);
};
export default Footer;