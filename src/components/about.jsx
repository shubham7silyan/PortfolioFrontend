import React, { useState, useCallback } from "react";
import '../index.css'
import pi1 from '../images/divider.png'
import pi2 from '../images/about_me_pic2.jpg'
import resume from '../resume/ss.pdf'

function Aboutt(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    return (
        <section className="layout-full about-main bg-black" id="about-section" aria-labelledby="about-heading">
            <div className="layout-container bg-black">
                <div className="layout-row">
                    <div className="layout-col-12">
                        <header className="section-heading-wrap text-center mb-5">
                            <h2 id="about-heading" className="head1 text-center divider">About Me</h2>
                            <span className="curly-line">
                                <img 
                                    src={pi1} 
                                    alt="Decorative divider line for About Me section" 
                                    width="150" 
                                    height="auto"
                                    loading="lazy" 
                                    decoding="async"
                                />
                            </span>
                        </header>
                    </div>
                </div>
                <div className="layout-row ab1 flex-center">
                    <div className="layout-col-6 imag">
                        <div className="mb-5 mb-lg-0 aboutpic">
                            <img src={pi2} alt="Shubham Silyan - Full Stack Developer from Amritsar, Punjab" width="100%" height="auto" loading="lazy" />
                        </div>
                    </div>
                    <div className="layout-col-6 para1">
                        <h3 className="mb-4 heading-h3">Introduction</h3>
                        <p>Name : Shubham Silyan</p>
                        <p>Age : 25</p>
                        <p>Place : Amritsar, Punjab</p>
                        <p>Email : shubham7silyan@gmail.com</p>
                        <p>Enthusiastic and dedicated web developer with a passion for creating elegant, responsive, and user-friendly websites. Proficient in front-end technologies such as HTML5, CSS3, and JavaScript. Experienced in using modern frameworks like React.js and Vue.js for building dynamic and interactive user interfaces.</p>
                        <a href={resume} download="Shubham_Silyan_Resume.pdf" rel="noopener noreferrer">    
                            <button className="button1" aria-label="Download Shubham Silyan's CV"> Download My CV</button>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes loading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </section>
    )
};

export default React.memo(Aboutt);
