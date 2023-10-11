import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>K.S</h1>
            </div>
            <div className="desktopMenu">

                <NavLink
                    to='/home'
                    className='desktopMenuListItem'
                >
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    className='desktopMenuListItem'>
                    About
                </NavLink>
                <NavLink
                    to='/project'
                    className='desktopMenuListItem'>
                    Projects
                </NavLink>
                <NavLink
                    to='/courses'
                    className='desktopMenuListItem'>
                    Skills
                </NavLink>

            </div>
            <NavLink to='/contact'>
                <button className="desktopMenuBtn">
                    <i id='desktopMenuImage' className="fa-regular fa-message"></i>Contact Me
                </button>
            </NavLink>

        </div>
    )
}

export default Navbar
