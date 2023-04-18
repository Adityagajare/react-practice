import React from 'react'
import style from "./_navbar.module.css"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <section id={style.menulist}>
        <article>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </article>
    </section>
  )
}

export default Menu