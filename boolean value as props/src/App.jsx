import React from 'react'
import Course from './Course';

const App = () => {
  return (
    <div>
        <Course 
        courseDetais={{courseName : "Engineering",
        deartment : "Mechanical",
        courseAvailable : true,
        courseDuration : "4 Years"}}/>
    </div>
  )
}

export default App;