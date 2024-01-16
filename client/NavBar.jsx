import React from "react";
import { Link, Route } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navbar">
            <Link to='about'>About Me</Link>
            <Link to='experience'>Experience</Link>
            <Link to='tiktok'>TikTok Tutorials</Link>
            <Link to='signatures'>Signatures</Link>
            </div>
    )
}

export default NavBar;