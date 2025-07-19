import React from "react";
import '../index.css'
import bg from '../images/cover_bg_2.jpg'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter } from "react-simple-typewriter";



function Fpage(props) {
    useEffect(() => {
        AOS.init();
    }, [])

    const [paragraph1] = useTypewriter({
        words: ["As an entry-level front-end developer, I specialize in web development with a focus on HTML, CSS, and JavaScript. I am an enthusiastic newcomer, a self-starter with a passion for leveraging technical skills to contribute to organizational success. My Bachelor of Computer Applications has honed my ability to create web applications, and I am eager to work in an environment that allows me to further expand my knowledge within the industry."],
        loop: {},
        typeSpeed: 25,
        deleteSpeed: 150,
    });
    return (<>
        <div class="cover-v1" style={{ backgroundImage: `url(${bg})` }} id="home-section">
            <div className="he" style={{height:'100%',width:'100%',background:'black', opacity: '.5'}}>
            <div data-aos={props.ani} class="container">
                <div class="row align-items-center bio"><p>{paragraph1}</p></div>
            </div>

            

            <a href="#about-section" class="mouse-wrap smoothscroll">
                <span class="mouse">
                    <span class="scroll"></span>
                </span>
                <span class="mouse-label"> Scroll</span>
            </a>
            </div>
        </div>

    </>);
};

export default Fpage; 