import React from "react";

const About = ({ title, children }) => {
    return (
        <div className="about">
            <h3 className="about__title">{title}</h3>
            <p className="about__text">{children}</p>
        </div>
    );
};

export default About;
