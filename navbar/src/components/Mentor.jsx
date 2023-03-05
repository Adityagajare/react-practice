import React from 'react'
import STYLE from "./mentor.module.css"

const Mentor = () => {
  return (
    <div id={STYLE.mentor}>
        <h1>
            <a href="mentor">MENTOR</a>
        </h1>
        <ul>
            <li>
                <a href="home">Home</a>
            </li>
            <li>
                <a href="about">About</a>
            </li>
            <li>
                <a href="courses">courses</a>
            </li>
            <li>
                <a href="trainers">Trainers</a>
            </li>
            <li>
                <a href="events">Events</a>
            </li>
            <li>
                <a href="pricing">Pricing</a>
            </li>
            <li>
                <a href="contact">Contact</a>
            </li>
            <li>
                <a href="started">
                    <button>Get started</button>
                </a>
            </li>
        </ul>
    </div>
  )
}
export default Mentor;
