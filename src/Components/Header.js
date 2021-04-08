import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className= "header-wraper">
            <div className="main-info">
                <h1>Web Development and Cloud Computing</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Cloud Computing", "Database Design"]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop 
                    />
         <a href= "#" className="btn-main-contact">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header;
