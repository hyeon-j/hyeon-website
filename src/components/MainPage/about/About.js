import React from "react";

import { Background, Skills, Experiences, Education } from "./AboutMeItems";

import { MdOutlineSubdirectoryArrowRight as Arrow } from "react-icons/md";

import "./About.css";

export default function AboutMe() {
    // Skill Item HTML Rendering
    function skillItemsHTML(item, index) {
        return (
            <li key={index} className="about__skill__li">
                <div className="about__skill__header">{item.skill}</div>
                {item.subSkill[0] === ""
                    ? null
                    : item.subSkill.map((item, index) => {
                          return subSkillHTML(item, index);
                      })}
            </li>
        );
    }

    function subSkillHTML(item, index) {
        return (
            <div className="about__subskill__container" key={index}>
                <Arrow />
                {item}
            </div>
        );
    }
    //  Experience HTML Rendering
    function experienceItemsHTML(item, index) {
        return (
            <li className="about__experience__li" key={index}>
                <p className="about__experience__company">{item.company}</p>
                <p className="about__experience__role">{item.role}</p>
                <p className="about__experience__time">{item.time}</p>
                {item.description.map((item, index) => {
                    return experienceDescription(item, index);
                })}
            </li>
        );
    }

    function experienceDescription(item, index) {
        return (
            <p className="about__experience__description" key={index}>
                <Arrow />
                {item}
            </p>
        );
    }

    // Education Item HTML Rendering
    function educationItemsHTML(item, index) {
        return (
            <li className="about__education__li" key={index}>
                <p className="about__education__school">{item.school}</p>
                <div className="about__education__info">
                    <p className="about__education__desc">{item.major}</p>
                    <p className="about__education__desc">{item.level}</p>
                    <p className="about__education__desc">{item.time}</p>
                </div>
            </li>
        );
    }

    return (
        <>
            <div className="about__container" id="about">
                <div className="about__contents">
                    <h1 className="about__banner">About Me</h1>
                    <div className="about__background">
                        <div className="about__header">— MY BACKGROUND</div>
                        <p>{Background[0].text}</p>
                    </div>
                    <div className="about__skills__container">
                        <div className="about__header">— SKILLS</div>
                        <ul className="about__skills__list">
                            {Skills.map((item, index) => {
                                return skillItemsHTML(item, index);
                            })}
                        </ul>
                    </div>

                    <div className="about__experiences">
                        <div className="about__header">— EXPERIENCES</div>
                        <ul className="about__experience__list">
                            {Experiences.map((item, index) => {
                                return experienceItemsHTML(item, index);
                            })}
                        </ul>
                    </div>

                    <div className="about__education">
                        <div className="about__header">— EDUCATION</div>
                        <ul className="about__education__list">
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
