import React from "react";

import { Background, Skills, Experiences, Education } from "./AboutMeItems";

import "./About.css";

export default function AboutMe() {
    // Skill Item HTML Rendering
    function skillItemsHTML(item, index) {
        return (
            <li key={index} className="about__skill">
                {item.skill}
            </li>
        );
    }
    //  Experience HTML Rendering
    function experienceItemsHTML(item, index) {
        return (
            <li key={index}>
                <p className="about__experience__role">{item.role}</p>
                <p className="about__experience__company">{item.company}</p>
                <p className="about__experience__time">{item.time}</p>
                {item.description.map((item, index) => {
                    return experienceDescription(item, index);
                })}
            </li>
        );
    }

    function experienceDescription(item, index) {
        return <p className="about__experience__desc">{item}</p>;
    }

    // Education Item HTML Rendering
    function educationItemsHTML(item, index) {
        return (
            <li key={index}>
                {item.school} <br></br>
                {item.level} <br></br>
                {item.major} <br></br>
                {item.time}
            </li>
        );
    }

    return (
        <>
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
            ></button>
            <div className="about__container" id="about">
                <div className="about__contents">
                    <h1 className="about__banner">About Me:</h1>
                    <div className="about__background">
                        <div className="about__header">— MY BACKGROUND</div>
                        <p>{Background[0].text}</p>
                    </div>
                    <div className="about__skills">
                        <div className="about__header">— SKILLS</div>
                        <ul>
                            {Skills.map((item, index) => {
                                return skillItemsHTML(item, index);
                            })}
                        </ul>
                    </div>
                    <div className="about__experiences">
                        <div className="about__header">— EXPERIENCES</div>
                        <ul>
                            {Experiences.map((item, index) => {
                                return experienceItemsHTML(item, index);
                            })}
                        </ul>
                    </div>
                    <div className="about__education">
                        <div className="about__header">— EDUCATION</div>
                        <ul>
                            {Education.map((item, index) => {
                                return educationItemsHTML(item, index);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
