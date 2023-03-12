import React from 'react'

const Course = (props) => {

   if(props.courseDetais.courseAvailable===true){
    return(
      <div style={{display :"flex",
                  flexDirection: "column",
                  alignItems : "center"}}>
        <h1 style={{color : "blue"}}>
          {props.courseDetais.courseName}
          </h1>
        <h2  style={{color : "brown"}}>
          {props.courseDetais.deartment}
        </h2>
        <h2 style={{color : "greenyellow"}}>
          {props.courseDetais.courseDuration}
        </h2>
        <button style={{height:"40px", width:"130px",
                fontSize:"20px",
                color:"green",
                backgroundColor : "orange",
                border : "none",
                borderRadius : "20px",
                fontWeight : "bold"}}>
        Available
        </button>
      </div>
    )
   }
   else{
    return(
      <div style={{display :"flex",
            flexDirection: "column",
            alignItems : "center"}}>
        <h1 style={{color : "blue"}}>
          {props.courseDetais.courseName}
        </h1>
        <h2 style={{color : "brown"}}>
          {props.courseDetais.deartment}
        </h2>
        <h2 style={{color : "greenyellow"}}>
          {props.courseDetais.courseDuration}
        </h2>
        <button style={{height:"40px", width:"200px",
                fontSize:"20px",
                color:"red",
                backgroundColor : "orange",
                border : "none",
                borderRadius : "20px",
                fontWeight : "bold"}}>Not Available</button>
      </div>
    )
   }
}

export default Course;