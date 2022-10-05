import React from 'react'

import { Background, Skills, Experiences, Education } from './AboutMeItems'

import './About.css'

export default function AboutMe() {

    // Skill Item HTML Rendering
    function skillItemsHTML(item, index) {
        return (
            <li key={index}> {item.skill} </li>
        )
    }
    //  Experience HTML Rendering
    function experienceItemsHTML(item, index) {
        return (
            <li key={index}> 
                {item.role} <br></br>
                {item.company} <br></br>
                {item.time} <br></br>
                {item.description} 
            </li>
        )
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
        )
    }

    return (
        <>
            <div className='about__container'>
                <div className='about__contents'>
                    <div className='about__horizontal'>
                        <div className='about__horizontal__background'> 
                            <h1 className='about__header'>MY BACKGROUND</h1>
                            <p>{Background[0].text}</p>
                        </div>
                        <div className='about__horizontal__skills'>
                            <h1 className='about__header'>SKILLS</h1>
                            <ul>
                                {Skills.map((item, index) => {
                                    return skillItemsHTML(item, index)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='about__vertical'>
                        <div className='about__vertical__experiences'>
                            <h1 className='about__header'>EXPERIENCES</h1>
                            <ul>
                                {Experiences.map((item, index) => {
                                    return experienceItemsHTML(item, index)
                                })}
                            </ul>
                        </div>
                        <div className='about__vertical__education'>
                            <h1 className='about__header'>EDUCATION</h1>
                            <ul>
                                {Education.map((item, index) => {
                                    return educationItemsHTML(item, index)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
