import React from "react";
import '../index.css'
import proj1 from '../images/project3.png'
import proj2 from '../images/project2.png'

function Boots5() {
    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5 card-container">
                    <div className="card m-auto">
                        <img src={proj2} class="card-img-top" alt="..." width="100%" height="150" />
                        <div class="card-body">
                            <h5 class="card-title text-light">Portfolio Template</h5>
                            <p class="card-text text-light">Language Used - Bootstrap </p>
                            <a href="#" class="buttonn">OPEN</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-5 card-container">
                  <a href="http://sanjayverma.netlify.app" target="_blank" rel="noopener noreferrer"> <div class="card m-auto" >
                        <img src={proj1} class="card-img-top" alt="..." width="100%" height="150" />
                        <div class="card-body">
                            <h5 class="card-title text-light">Institute Website Template</h5>
                            <p class="card-text text-light">Language Used - Bootstrap </p>
                            <a href="#" class="buttonn">OPEN</a>
                        </div>
                    </div>
                    </a> 
                </div>
            </div>
        </div>

    </>)
};

export default Boots5;