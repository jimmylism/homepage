import React from 'react';
import ExperienceCard from './subcomponents/ExperienceCard.js'
import '../assets/css/Style.css';

export default function Experience() {
    const workData = [
        {
            name: "Adobe",
            title: "Product Manager",
            description: "Working with the collaboration technology team, using data to enhance employee productivity.",
            link: "https://www.adobe.com/",
        },
        {
            name: "Splunk",
            title: "Product Manager",
            description: "Drove the Dashboard Framework product, growing adoption across Splunk and supporting Dashboard Studio.",
            link: "https://www.splunk.com/",
        },
        {
            name: "Agnostiq (acquired by DataRobot)",
            title: "Product & Product Marketing Manager",
            description: "Led go-to-market for the public beta of a developer orchestration platform for high-performance computing.",
            link: "https://www.covalent.xyz/",
        },
        {
            name: "Lucid Software",
            title: "Product Manager",
            description: "Managed enterprise readiness initiatives including audit logs, identity management, and document governance.",
            link: "https://lucid.co/",
        },
        {
            name: "Hewlett-Packard",
            title: "Software Engineer",
            description: "Built responsive UI and APIs for user enrollment experiences across multiple regions.",
            link: "https://www.hp.com/",
        },
    ]

    return (
        <div className="section" id="experience">
            <h2 className="sectionHeader">Where I've worked:</h2>
            <div className="experienceContainer container">
                {workData.map((data, key) => (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} link={data.link}/>
                ))}
            </div>
        </div>
    )
}
