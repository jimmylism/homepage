import React from 'react';

export default function ExperienceCard(props) {
    return (
        <div className="experienceCard">
            <h3><a href={props.link} target="_blank" rel="noreferrer">{props.name}</a></h3>
            <p className="experienceMeta">{props.title}</p>
            <p className="experienceDescription">{props.description}</p>
        </div>
    )
}
