import React from "react";
import STYLE from "./apple.module.css";

const Apple = ()=>{
    return(
        <div id={STYLE.apple}>
            <nav>
                <div className={STYLE.logo}>
                    <a href="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="" />
                    </a>
                </div>
                <div className={STYLE.menublock}>
                    <ul>
                        <li>
                            <a href="store">Store</a>
                        </li>
                        <li>
                            <a href="mac">Mac</a>
                        </li>
                        <li>
                            <a href="ipad">ipad</a>
                        </li>
                        <li>
                            <a href="iphone">iphone</a>
                        </li>
                        <li>
                            <a href="watch">watch</a>
                        </li>
                        <li>
                            <a href="airpods">AirPods</a>
                        </li>
                        <li>
                            <a href="tv&homw">Tv&Home</a>
                        </li>
                        <li>
                            <a href="entertainment">Entertainment</a>
                        </li>
                        <li>
                            <a href="accesories">Accesories</a>
                        </li>
                        <li>
                            <a href="support">Support</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Apple;