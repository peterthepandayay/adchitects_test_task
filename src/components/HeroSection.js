import React from 'react';

function HeroSection({ text, img }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="heroTxt">{text}</h1>
                <img src={img} alt="Hero" className="heroImg"/>
            </div>
        </section>
    );
}

export default HeroSection;
