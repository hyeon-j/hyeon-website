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
            <li className="featuredprojects__list__li">
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
                        {item.tags.map((item) => {
                            return projectTag(item);
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

    function projectTag(item) {
        return <div className="featuredprojects__tags">{item}</div>;
    }

    // Menu Item HTML Rendering
    function projectsItemsHTML(item, index) {
        return <li key={index} className="projects__list__li"></li>;
    }

    function noninteractiveLinkHTML(item, index) {
        return (
            <li key={index} className="projects__list__li">
                <div className="projects__title">— {item.title}</div>
                <a href={item.github_link} className="projects__githublink">
                    Github
                </a>
                <p className="projects__description">{item.description}</p>
            </li>
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
