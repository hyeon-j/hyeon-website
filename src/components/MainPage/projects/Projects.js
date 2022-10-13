import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";

import "./Projects.css";
import { ProjectsList, featuredProjectsList } from "./projectItems";

import sortImage from "./images/sorting.jpg";

export default function Projects() {
    function featuredProjectsItemsHTML(item, index) {
        return (
            <li className="featuredprojects__list__li" key={index}>
                <img
                    src={sortImage}
                    alt="Sorting Algorithm Image"
                    className="featureprojects__image"
                />
                <div className="featuredprojects__list__li__info">
                    <p className="featuredprojects__featured">
                        Featured Project
                    </p>
                    <Link
                        to={item.interactive_link}
                        className="featuredprojects__title"
                    >
                        {item.title}
                    </Link>
                    <div className="featuredprojects__description">
                        {item.description}
                    </div>
                    <div className="featuredprojects__tags__container">
                        {item.tags.map((item, index) => {
                            return featuredProjectTag(item, index);
                        })}
                    </div>

                    <div className="featuredprojects__icons">
                        <a
                            href={item.github_link}
                            className="featuredprojects__icon__link"
                        >
                            <AiFillGithub className="featuredprojects__icon" />
                        </a>
                        <Link
                            to={item.interactive_link}
                            className="featuredprojects__icon__link"
                        >
                            <GoLinkExternal className="featuredprojects__icon" />
                        </Link>
                    </div>
                </div>
            </li>
        );
    }

    function featuredProjectTag(item, index) {
        return (
            <div className="featuredprojects__tags" key={index}>
                {item}
            </div>
        );
    }

    // Menu Item HTML Rendering
    function projectsItemsHTML(item, index) {
        return (
            <li key={index} className="projects__list__li">
                <div className="projects__list__li__header">
                    <header className="projects__list__li__title">
                        {item.title}
                    </header>
                    <a
                        href={item.github_link}
                        className="projects__list__li__link"
                    >
                        <AiFillGithub className="projects__list__li__icon" />
                    </a>
                </div>
                <p className="projects__list__li__description">
                    {item.description}
                </p>
                <div className="projects__list__li__tags">
                    {item.tags.map((item, index) => {
                        return projectTag(item, index);
                    })}
                </div>
            </li>
        );
    }

    function projectTag(item, index) {
        return (
            <div className="projects__tags" key={index}>
                {item}
            </div>
        );
    }

    return (
        <>
            <div className="projects__container" id="projects">
                <div className="projects__contents">
                    <h1 className="projects__banner">My Projects</h1>
                    <ul className="featuredprojects__list">
                        {featuredProjectsList.map((item, index) => {
                            return featuredProjectsItemsHTML(item, index);
                        })}
                    </ul>
                    <ul className="projects__list">
                        {ProjectsList.map((item, index) => {
                            return projectsItemsHTML(item, index);
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
