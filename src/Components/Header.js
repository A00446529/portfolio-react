import React from "react";
import Typed from "react-typed";
import View1 from './View1';

const Header = () => {
    return (
        <div className= "header-wraper" id="1">
            <section1>
            <div className="main-info">
            
                <h1>Dipesh Timilsina</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Cloud Computing", "Database Design"]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop 
                    />
        
        <div className= "about-me">
            <p>
            Hello, I am Dipesh and I am a developer. I come from Nepal and I am an extrovert. I am a techie from heart
            and I love trying out new gears and gadgets. Oh! And did I mean that I am a huge auto-enthusiast too?
            I am also a big fan of blockchain technology.
        </p>
        <p>
            I joined the 16-month MSc CDA program to get hands-on experience on programming and data analytics. Also, I wanted to have an 
            international learning experience. 
        </p>
        </div>
         <a href= "/#2" className="btn-main-contact">Get to know about my town!</a>
            </div>
        </section1>
        </div>
    )
}

export default Header;
