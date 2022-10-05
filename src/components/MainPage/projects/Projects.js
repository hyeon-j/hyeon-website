import React from 'react'
import { Link } from 'react-router-dom'

import './Projects.css'
import { ProjectsList } from './projectItems'

export default function Projects() {
    // Menu Item HTML Rendering
    function projectsItemsHTML(item, index) {
        if (item.interactive) { return interactiveLinkHTML(item, index); }
        else { return noninteractiveLinkHTML(item, index); }
    }

    function interactiveLinkHTML (item, index) {
        return (
            <li key={index} className='projects__list__li'>
                <Link to={item.interactive_link} className='projects__title'>{item.title}</Link> <br></br>
                <a href={item.github_link} className='projects__githublink'>Github</a>
                <p className='projects__description'>{item.description}</p>
            </li>
        )
    }

    function noninteractiveLinkHTML (item, index) {
        return (
            <li key={index} className='projects__list__li'>
                <h1 className='projects__title'>{item.title}</h1>
                <a href={item.github_link} className='projects__githublink'>Github</a>
                <p className='projects__description'>{item.description}</p>
            </li>
        )
    }

    return (
        <>
            <div className='projects__container'>
                <div className='projects__contents'>
                    <h1 className='projects__banner'>My Projects:</h1>
                    <ul className='projects__list'>
                        {ProjectsList.map((item, index) => {
                            return projectsItemsHTML(item, index)
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
