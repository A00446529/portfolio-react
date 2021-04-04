import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Website Devolopment and Cloud Computing</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Deisgn", "Web Development", "Cloud Computing", "Database Design"]}
                    />
            </div>
        </div>
    )
}

export default Header;
