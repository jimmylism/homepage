import React from 'react';
import '../assets/css/Style.css';

export default function Introduction() {
    return (
        <div className="section" id="intro">
            <div className="introText">
                <p className="introEyebrow">Hi, I'm</p>
                <h1 className="attentionGrabber">Jimmy Huang</h1>
                <p className="myName">Product manager with an engineering background.<br/>I build things people actually want to use.</p>
            </div>
        </div>
    )
}
