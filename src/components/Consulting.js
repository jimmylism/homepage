import React from 'react';
import '../assets/css/Style.css';
import Card from './subcomponents/Card.js';

const services = [
    {
        title: 'Fractional Product Manager',
        description: 'Embedded PM leadership for teams that need strategic product thinking without a full-time hire.',
    },
    {
        title: 'Fractional Product Marketing',
        description: 'Go-to-market strategy, messaging, and launch execution for early-stage and growth-stage products.',
    },
    {
        title: 'Product Advisor',
        description: 'Ongoing advisory on roadmap prioritization, customer discovery, and product-market fit.',
    },
    {
        title: 'Consulting',
        description: 'Scoped engagements on product strategy, developer experience, or enterprise readiness.',
    },
];

export default function Consulting() {
    return (
        <div className="section" id="consulting">
            <h2 className="sectionHeader">Open to:</h2>
            <div className="consultingIntro container">
                <p>I'm available for flexible engagements with founders, startups, and growing teams. If you need product leadership or go-to-market support, let's talk.</p>
            </div>
            <div className="consultingGrid container">
                {services.map((s, i) => (
                    <Card key={i} title={s.title} description={s.description} />
                ))}
            </div>
        </div>
    );
}
