import React from "react";
import '../index.css'
import proj1 from '../images/project1.png'
import proj2 from '../images/project4.png'

function HtmlCss() {
    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 mt-5 card-container">
                    <div class="card m-auto">
                        <img src={proj1} class="card-img-top" alt="..." width="100%" height="150" />
                        <div class="card-body">
                            <h5 class="card-title text-light">Consultant Website Template</h5>
                            <p class="card-text text-light">Language Used - HTML5, CSS3</p>
                            <a href="#" class="buttonn">OPEN</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-5 card-container">
                    <div class="card m-auto">
                        <img src={proj2} class="card-img-top" alt="..." width="100%" height="150" />
                        <div class="card-body">
                            <h5 class="card-title text-light">W3School Website Clone</h5>
                            <p class="card-text text-light">Language Used - HTML5, CSS3 </p>
                            <a href="#" class="buttonn">OPEN</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </>)
};

export default HtmlCss;