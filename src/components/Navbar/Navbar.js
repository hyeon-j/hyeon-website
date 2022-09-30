// React Components
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

// Styling
import './Navbar.css'
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {

    // Menu Item HTML Rendering
    function menuItemsHTML(item, index) {
        return (
            <li key={index}>
                <Link to={item.url} class={item.cName}>
                    {item.title}
                </Link>
            </li>
        )
    }

    // Handling Toggle Button for Small Screens
    const [clicked, setClicked] = useState(false)
    function handleClicked() {
        const menu = document.querySelector('.navbar__menu');
        menu.classList.toggle('active');
        setClicked(!clicked)
    }

    return (
        <>
            <div class='navbar__container'>
                <nav class='navbar'>
                    <div class='navbar__name'>
                        <Link to='/' class='navbar__name__link'>HYEON</Link>
                        <button class='navbar__toggleBtn' onClick={handleClicked}>
                            {clicked ? <FiX className='navbar__toggleBtn__icon'/> : <FiMenu className='navbar__toggleBtn__icon'/>}
                        </button>
                    </div>
                    <ul class={clicked ? 'navbar__menu active' : 'navbar__menu'}>
                        {MenuItems.map((item, index) => {
                            return menuItemsHTML(item, index)
                        })}
                    </ul>
                </nav>
            </div>
        </>

    )
}
