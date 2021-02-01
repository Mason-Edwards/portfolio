import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function NavContactMe() {
    return (
        <div className="navBar">
            <span id="name">Mason Edwards</span>
            <Link to="/">
                <a className="navElement">home</a>
            </Link>
        </div>
    );
}

export default NavContactMe;
