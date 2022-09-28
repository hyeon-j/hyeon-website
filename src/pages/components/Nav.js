import React from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'

// const toggleBtn = document.querySelector('.navbar__toggleBtn');
// const menu = document.querySelector('.navbar__menu');
// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

export default function Nav() {
  return (
    <>
        <div class='navbar__container'>
            <nav class='navbar'>
                <div class='navbar__name'>
                    <a class='name' href='/'>HYEON</a>

                    <a href='#' class='navbar__toggleBtn'>
                        <FiMenu />
                    </a>
                </div>

                <ul class='navbar__menu'>
                    <li><a href='#'>ABOUT ME</a></li>
                    <li><a href='#'>PROJECTS</a></li>
                    <li><a href='#'>EXPERIENCE</a></li>
                    <li><a href='#'>CONTACT</a></li>
                </ul>
            </nav>
        </div>
    </>
    
  )
}
