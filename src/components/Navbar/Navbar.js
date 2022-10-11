// React Components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import { HashLink } from "react-router-hash-link";

// Styling
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
    // Menu Item HTML Rendering
    function menuItemsHTML(item, index) {
        return (
            <li key={index}>
                <HashLink smooth to={item.url} className={item.cName}>
                    {item.title}
                </HashLink>
            </li>
        );
    }

    // Handling Toggle Button for Small Screens
    const [clicked, setClicked] = useState(false);
    function handleClicked() {
        const menu = document.querySelector(".navbar__menu");
        menu.classList.toggle("active");
        setClicked(!clicked);
    }

    return (
        <>
            <div className="navbar__container">
                <nav className="navbar">
                    <div className="navbar__name">
                        <HashLink smooth to="#" className="navbar__name__link">
                            HYEON
                        </HashLink>
                        <button
                            className="navbar__toggleBtn"
                            onClick={handleClicked}
                        >
                            {clicked ? (
                                <FiX className="navbar__toggleBtn__icon" />
                            ) : (
                                <FiMenu className="navbar__toggleBtn__icon" />
                            )}
                        </button>
                    </div>
                    <ul
                        className={
                            clicked ? "navbar__menu active" : "navbar__menu"
                        }
                    >
                        {MenuItems.map((item, index) => {
                            return menuItemsHTML(item, index);
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
