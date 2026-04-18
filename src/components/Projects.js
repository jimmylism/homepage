import React from 'react';
import '../assets/css/Projects.css';
import purrductivity from '../assets/img/purrductivity.webp';
import zenba from '../assets/img/zenba.webp';

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
                <a className="projectCard" href="https://v0-zenba.vercel.app/" target="_blank" rel="noreferrer">
                    <img className="projectImage" src={zenba} alt="ZenBA screenshot" />
                    <div className="projectCardBody">
                        <div className="projectCardHeader">
                            <div>
                                <h3 className="projectName">ZenBA</h3>
                            </div>
                        </div>
                        <p className="projectDescription">
                            Breathing exercises for shareholder value maximizers.
                        </p>
                        <span className="projectLink">Visit site &rarr;</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
