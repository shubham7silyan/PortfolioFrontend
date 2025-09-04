import React from "react";
import '../index.css'
import { FaBuffer } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

function Footer() {

    return (<>

        <div className="layout-full lastcont">
            <div className="layout-row Foot">
                <div className="layout-col-3 F1 text-white">
                    <h2><span><FaBuffer /></span>ShubhamSilyan</h2>
                    <p>Living, learning, & leveling up one day at a time.</p>
                    <h6>
                        <a href="https://x.com/shubham_silyan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <AiFillTwitterCircle className="icon" />
                        </a>
                        <a href="https://www.facebook.com/shubh7silyan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://www.instagram.com/shubh7silyan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="icon" />
                        </a>
                    </h6>
                </div>
                <div className="layout-col-2 text-white div1 F2">
                    <h2>EXPLORE</h2>
                    <h5 onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>About</h5>
                    <h5 onClick={() => document.getElementById('skill-section')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Skills</h5>
                    <h5 onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Contact Us</h5>
                </div>
                <div className="layout-col-3 text-white div1 F2">
                    <h2>QUICK LINKS</h2>
                    <h5 onClick={() => window.location.href = '/terms'} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Terms & Conditions</h5>
                    <h5 onClick={() => window.location.href = '/privacy'} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Privacy</h5>
                    <h5 onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Feedbacks</h5>
                </div>

                <div className="layout-col-3 text-white div1 F2">
                    <h2>HAVE A QUESTION?</h2>
                    <h5 onClick={() => window.open('mailto:shubham7silyan@gmail.com')} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>shubham7silyan@gmail.com</h5>
                    <h5 onClick={() => window.open('https://wa.me/7814448027')} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>Whatsapp - 7814448027</h5>
                    <h5 onClick={() => window.open('https://www.linkedin.com/in/shubhamsilyan/', '_blank')} style={{cursor: 'pointer'}}><span><FaGreaterThan /></span>LinkedIn - ShubhamSilyan</h5>
                </div>
            </div>
        </div>
    </>);
};
export default Footer;