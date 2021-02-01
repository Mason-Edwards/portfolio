import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navBar">
            <span id="name">mason edwards</span>
            <a className="navElement" href="#aboutMe">about me</a>
            <a className="navElement">work</a>
            <Link to="/contactMe">
                <a className="navElement">contact me</a>
            </Link>
        </div>
    );
}

export default Nav;
