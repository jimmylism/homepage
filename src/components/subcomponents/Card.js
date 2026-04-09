import React from 'react';

export default function Card({ title, description }) {
    return (
        <div className="card consultingCard">
            <h3 className="consultingTitle">{title}</h3>
            <p className="consultingDescription">{description}</p>
        </div>
    );
}
