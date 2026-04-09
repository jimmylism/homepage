import React from 'react';
import '../assets/css/Style.css';

export default function About() {
    return (
        <div className="section" id="about">
            <h2 className="sectionHeader">About me:</h2>
            <div className="aboutText container">
                <p>I'm a product manager with a Computer Science degree from Indiana University and a background in software engineering. I've led products across enterprise software, developer tools, and data analytics — most recently at <b>Adobe</b>. I'm drawn to teams building ambitious things at the intersection of technical depth and user experience.</p>
            </div>
            <h2 className="sectionHeader" style={{marginTop: '4 rem'}}>Outside of work:</h2>
            <div className="aboutText container">
                <li className="hobbies">Practicing Spanish</li>
                <p className="miniDescription">The goal is to backpack through Latin America one day.</p>
                <li className="hobbies">Learning Go</li>
                <p className="miniDescription">Inspired by AlphaGo and Hikaru no Go, it is fascinating to see the development of machine learning and the sharpness of human intuition.</p>
                <li className="hobbies">Playing pickleball</li>
                <p className="miniDescription">Losing is improving!</p>
            </div>
        </div>
    )
}
