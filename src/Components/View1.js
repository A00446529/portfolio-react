import React from "react";
import Typed from "react-typed";
import Header from './Header';
import mytown from "../my-town.png"

const View1 = () => {
    return (
        <div className= "header-wraper">
            <div className="main-info">
                <h1>About My Town</h1>
                <img src= "./my-town.png" alt="Nepal" width="500" height="600" />
            </div>
        </div>
    )
}

export default View1;