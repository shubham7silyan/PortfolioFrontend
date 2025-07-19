import React from "react";
import '../index.css'
import pic1 from '../images/divider.png'
import { useState } from "react";
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Skil() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div id="skill-section" className="container-fluid maindiv">
                    <h1>Skills</h1>
                    <div class="curl-line">
                        <img src={pic1} alt="divider" width="150" />
                    </div>
                    <div className="row rowdiv">
                        <div className="col col-sm-3 mb-5 mb-lg-0 col-md-3 col-lg-3 w-sm-100 headingg" data-aos="fade-up" data-aos-delay="0">
                            <h1>
                                {counterOn && <CountUp start={0} end={90} duration={2} delay={0} />}<span className="text-danger">%</span>
                            </h1>
                            <p>HTML5/CSS3</p>
                            
                        </div>
                        <div className="col col-sm-3 mb-5 mb-lg-0 col-md-3 col-lg-3 w-sm-100 headingg" data-aos="fade-up" data-aos-delay="0">
                            <h1>
                                {counterOn && <CountUp start={0} end={75} duration={2} delay={0} />}<span className="text-danger">%</span>
                            </h1>
                            <p>JavaScript</p>
                        </div>
                        <div className="col col-sm-3 mb-5 mb-lg-0 col-md-3 col-lg-3 w-sm-100 headingg" data-aos="fade-up" data-aos-delay="0">
                            <h1>
                                {counterOn && <CountUp start={0} end={90} duration={2} delay={0} />}<span className="text-danger">%</span>
                            </h1>
                            <p>Bootstrap</p>
                        </div>
                        <div className="col col-sm-3 mb-5 mb-lg-0 col-md-3 col-lg-3 w-sm-100 headingg" data-aos="fade-up" data-aos-delay="0">
                            <h1>
                                {counterOn && <CountUp start={0} end={80} duration={2} delay={0} />}<span className="text-danger">%</span>
                            </h1>
                            <p>ReactJs/NodeJs</p>
                        </div>

                    </div>
                </div>

            </ScrollTrigger >
        </>
    )
};

export default Skil;
