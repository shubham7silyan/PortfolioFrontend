import React from "react";
import '../index.css'
import pic1 from '../images/divider.png'
import { Outlet, Link } from "react-router-dom";

function LayoutList() {


    return (<>

        <div id="portfolio-section" className="container-fluid project-div">
            <div class="section-heading-wrap text-center projdiv">
                <h2 class="heading-h2 text-center divider">My Projects</h2>
                <span class="curlypic mb-5"><img src={pic1} alt="divider" width="120" /></span>
            </div>
            <div className="row pro-row">
                <div className="col-12">
                    <nav>
                    <ul className="section-proj">
                        <li><Link to="/"> html</Link></li>
                        <li><Link to="boot"> bootstrap</Link></li>
                    </ul>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        </div>


    </>)
};


export default LayoutList;
