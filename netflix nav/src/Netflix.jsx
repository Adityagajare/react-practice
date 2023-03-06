import React from 'react'
import STYLE from "./netflix.module.css"

const Netflix = () => {
  return (
    <div id={STYLE.netflixMain}>
        <div id={STYLE.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>
        <div id={STYLE.content}>
            <div className={STYLE.menuList}>
                <ul>
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li>
                        <a href="series">Series</a>
                    </li>
                    <li>
                        <a href="films">Films</a>
                    </li>
                    <li>
                        <a href="latest">Latest</a>
                    </li>
                    <li>
                        <a href="mylist">My List</a>
                    </li>
                </ul>
            </div>
            <div className={STYLE.menuImages}>
                <ul>
                    <li>
                        <a href="search">
                            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-512.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="gift">
                            <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-and-shopping-13/64/ecommerce_Gift-256.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="notification">
                            <img src="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/notification_bell_ring-256.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Netflix;
