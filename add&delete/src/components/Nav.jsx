import React from 'react'
import STYLE from "./nav.module.css"


const Nav = () => {
  return (
    <div>
      <div id={STYLE.navbar}>
        <div className={STYLE.logo}>
          <a href="logo">
            <h1>RK TODO</h1>
          </a>
        </div>
        <div className={STYLE.menuList}>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="trash">Trash</a>
            </li>
          </ul>
        </div>
        <div className={STYLE.arrowsLogo}>
          <a href="rightarrow">
            <img src="https://cdn-icons-png.flaticon.com/512/6711/6711581.png" alt="" height="40px" width="40px"/>
          </a>
          <a href="leftarrow">
            <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-logout-icon-png-image_958608.jpg" alt="" height="40px" width="40px"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav;