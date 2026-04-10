import React from 'react';
import '../assets/css/Style.css';
import purrductivity from '../assets/img/purrductivity.png';

export default function Projects() {
    return (
        <div className="section" id="projects">
            <h2 className="sectionHeader">What I've built:</h2>
            <div className="projectsContainer container">
                <a className="projectCard" href="https://purrductivity.com/" target="_blank" rel="noreferrer">
                    <img className="projectImage" src={purrductivity} alt="Purrductivity screenshot" />
                    <div className="projectCardBody">
                        <div className="projectCardHeader">
                            <div>
                                <h3 className="projectName">Purrductivity</h3>
                            </div>
                        </div>
                        <p className="projectDescription">
                            The productivity dashboard that gets out of your way.
                        </p>
                        <span className="projectLink">Visit site &rarr;</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
