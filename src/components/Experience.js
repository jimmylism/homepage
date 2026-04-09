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
            time: "Apr 2024 – Sep 2025",
            description: "Drove the Dashboard Framework product, growing adoption across 20+ internal repositories and increasing dashboard views by 85%.",
            link: "https://www.splunk.com/",
        },
        {
            name: "Agnostiq (acquired by DataRobot)",
            title: "Product & Product Marketing Manager",
            time: "Nov 2023 – Apr 2024",
            description: "Led go-to-market for the public beta of a developer orchestration platform for high-performance computing.",
            link: "https://www.datarobot.com/",
        },
        {
            name: "Lucid Software",
            title: "Product Manager",
            time: "Jan 2022 – Apr 2023",
            description: "Managed enterprise readiness initiatives including audit logs, identity management, and document governance.",
            link: "https://lucid.co/",
        },
        {
            name: "Hewlett-Packard",
            title: "Software Engineer",
            time: "Jan 2021 – Jan 2022",
            description: "Built responsive UI and APIs for user enrollment experiences across multiple regions.",
            link: "https://www.hp.com/",
        },
    ]

    return (
        <div className="section" id="experience">
            <h2 className="sectionHeader">Where I've worked:</h2>
            <div className="experienceContainer">
                {workData.map((data, key) => (
                    <ExperienceCard key={key} name={data.name} title={data.title} time={data.time} description={data.description} link={data.link}/>
                ))}
            </div>
        </div>
    )
}
