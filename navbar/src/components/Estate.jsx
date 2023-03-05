import React from 'react'
import STYLE from "./Estate.module.css"

const Estate = () => {
  return (
    <div id={STYLE.estate}>
        <div className={STYLE.logo}>
            <a href="estateAgency">
                <p className={STYLE.firstWord}>Estate</p>
                <p className={STYLE.secWord}>Agency</p>
            </a>
        </div>
        <div className={STYLE.menu}>
            <ul>
                <li>
                    <a href="home">Home</a>
                </li>
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="property">Property</a>
                </li>
                <li>
                    <a href="blog">Blog</a>
                </li>
                <li>
                    <a href="pages">Pages</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className={STYLE.search}>
            <button>
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="" />
            </button>
        </div>
    </div>
  )
}
export default Estate;
