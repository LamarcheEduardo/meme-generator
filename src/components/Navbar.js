import React from "react";

export default function Navbar() {
    return (
        <div className="container">
            <div className="left--side">
                <img src="./resources/trollface.png" alt="meme-logo" srcset="" className="navbar--image-logo"/>
                <h1 className="navbar--title">Meme Generator</h1>
                
            </div>
            <div className="right--side">
            <p className="navbar--text">React Course - Project 3</p>
            </div>
        </div>
    )
}