import React from "react";
import '../index.css'
import pi1 from '../images/divider.png'
import pi2 from '../images/about_me_pic2.jpg'
import resume from '../images/shubham.pdf'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter } from "react-simple-typewriter";
function Aboutt(props) {

    const [paragraph1] = useTypewriter({
        words: ["Name : Shubham Silyan"],
        loop: {},
        typeSpeed: 150,
    });
    const [paragraph2] = useTypewriter({
        words: ["Age : 23"],
        loop: {},
        typeSpeed: 150,
    });
    const [paragraph3] = useTypewriter({
        words: ["Place : Amritsar, Punjab"],
        loop: {},
        typeSpeed: 150,
    });
    const [paragraph4] = useTypewriter({
        words: ["Email : shubham7silyan@gmail.com"],
        loop: {},
        typeSpeed: 150,
 
    });
    const [paragraph5] = useTypewriter({
        words: ["Experience : Fresher"],
        loop: {},
        typeSpeed: 150,
    });

    useEffect(() => {
        AOS.init();
    }, [])
    return (<>
        <div className="container-fluid about-main bg-black" id="about-section">

            <div className="container bg-black">
            <div className="row">
                <div className="col-12">
                    <div data-aos={props.anima} class="section-heading-wrap text-center mb-5">
                        <h2 class="head1 text-center divider">About Me</h2>
                        <span class="curly-line">
                            <img src={pi1} alt="divider" width="150" />
                        </span>
                    </div>
                </div>
            </div>
            <div data-aos={props.ani} className="row ab1">
                <div className="col-md-6 imag">
                    <div class="mb-5 mb-lg-0 aboutpic">
                        <img src={pi2} alt="Image" width="100%" height="auto" />
                    </div>
                </div>
                <div data-aos={props.anim} class="col-md-6 para1">
                    <h3 class="mb-4 heading-h3">Introduction</h3>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <p>{paragraph3}</p>
                    <p>{paragraph4}</p>
                    <p>Enthusiastic and dedicated<a class="link1" href="#"> web developer with a passion for creating elegant, responsive, and user-friendly websites.Proficient in front-end technologies such as HTML5, CSS3, and JavaScript. Experienced in using modern frameworks like React.js and Vue.js for building dynamic and interactive user interfaces.</a></p>
                    <a href={resume} download rel="noopener noreferrer">    <button className=" button1"> Download My CV</button></a>
                </div>

            </div>

        </div></div>

    </>)
};

export default Aboutt;
