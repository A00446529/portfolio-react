import React from "react";
import Typed from "react-typed";
import Header from './Header';
import mytown from "../town.png";

const View1 = () => {
    return (
        <div className= "header-wraper" id="2">
            <section2>
            <div className="main-info">
                <h1>About My Town</h1>
                <img src= {mytown} alt="Nepal" width="600" height="400" />
                <div className= "about-town">
                    <p>My town name is Kathmandu and it is the capital of my country. My town is famous for 
                       culture heritage sites. While it may look busy when you look at it surfacely, it is filled
                       with places that amazes everyone who comes and explores it.
                    </p>
                </div>
            </div>
            </section2>
        </div>
    )
}

export default View1;