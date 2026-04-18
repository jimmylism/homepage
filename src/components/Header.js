import React from 'react';
import logo from '../assets/img/logo.png'
import '../assets/css/Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="brand">
                <img className="logo" src={logo} alt="My logo!" />
                <h2>Jimmy Huang</h2>
            </div>
            <div className="headerList">
                <a className="headerLink" href="#companies">Portfolio</a>
                <a className="headerLink" href="#experience">Experience</a>
                <a className="headerLink" href="#consulting">Work with me</a>
                <a className="headerLink" href="#about">About</a>
                <a className="headerLink" href="#contact">Contact</a>
            </div>
        </div>
    )
}
