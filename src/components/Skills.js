import React from 'react';
import '../assets/css/Style.css';

const skills = [
    { label: 'Roadmapping' },
    { label: 'Go-to-Market' },
    { label: 'User Research' },
    { label: 'A/B Testing' },
    { label: 'Analytics' },
    { label: 'Stakeholder Management' },
    { label: 'Figma' },
    { label: 'SQL' },
    { label: 'React' },
    { label: 'Jira' },
];

export default function Skills() {
    return (
        <div className="section" id="skills">
            <h2 className="sectionHeader">What I work with:</h2>
            <div className="skillsContainer">
                {skills.map((skill, i) => (
                    <span className="skillPill" key={i}>{skill.label}</span>
                ))}
            </div>
        </div>
    );
}
