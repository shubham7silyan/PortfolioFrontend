import React from "react";
import '../index.css'
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5"
import { MdLocalPostOffice } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import pi1 from '../images/divider.png'

function Contact(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (<>

        <div id="contact-section" className="container-fluid dp">
            <h1>Contact Me</h1>
            <div class="curl-line">
                <img src={pi1} alt="divider" width="150" />
            </div>
            <div className="container">
                <div className="row abdiv">
                    <div className="col one">
                        <div className="div row divv1 d-flex justify-content-between">

                            <div className="col-md-6">   <form data-aos={props.animzz} className="cform ">
                                <label class="nam">First Name
                                    <br />
                                    <input name="FirstName" type="text" placeholder="First Name" />
                                </label>
                                <br />
                                <br />
                                <label class="namm">Last Name
                                    <br />
                                    <input name="LastName" type="text" placeholder="Last Name" />
                                </label>
                                <br />
                                <br />
                                <label class="form-label">Email
                                    <br />
                                    <input name="Email" type="email" placeholder="Email Address" />
                                </label>
                                <br />
                                <br />
                                <label class="msg">Message
                                    <br />
                                    <input name="Message" type="text" placeholder="Type Your Message" />
                                </label>
                                <br />
                                <br />
                                <button className="button1">SEND MESSAGE</button>
                            </form></div>
                         

                         <div className="col-md-6"> <div data-aos={props.animz} className="icons text-white">
                                <h5> Contact info</h5> <br />
                                <h5><span><IoLocationOutline /></span> Sector 34, 34A, Chandigarh</h5><br />
                                <h6><span><IoCall /></span>7814448027</h6><br />
                                <h6><span><MdLocalPostOffice /></span>shubham7silyan@gmail.com</h6> <br />
                                <h6><span><FaGlobeAmericas /></span>www.shubhamsilyan.com</h6>
                            </div></div>

                           
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </>);

};
export default Contact;