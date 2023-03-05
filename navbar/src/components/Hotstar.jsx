import React from "react";
import STYLE from "./hotstar.module.css";

const Hotstar = ()=>{
    return(
        <div id={STYLE.container}>
            <div id={STYLE.firstDiv}>
                <nav id={STYLE.navbar}>
                    <div className={STYLE.imageDiv}>
                        <a href="image">
                            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                        </a>
                        <ul>
                            <li>
                                <a href="tv">Tv</a>
                            </li>
                            <li>
                                <a href="movies">Movies</a>
                            </li>
                            <li>
                                <a href="sports">Sports</a>
                            </li>
                            <li>
                                <a href="disney">Disney+</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id={STYLE.secDiv}>
                <div className={STYLE.secsub}>
                    <input type="text" name="" id="" placeholder="Search"/>
                    <img className={STYLE.searchLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png" alt="" />
                </div>
                <div className={STYLE.secsub2}>
                    <button className={STYLE.subscribe}>SUBSCRIBE</button>
                    <a className={STYLE.login} href="login">LOGIN</a>
                </div>
            </div>
        </div>
    )
}
export default Hotstar;