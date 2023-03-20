import React, { useState } from "react"
import { useRef } from "react"
import IMG from "./photo.jpg"

const App=()=>{

  let [photo, setPhoto] = useState(IMG)
  let [loading, setLoading] = useState(true)
  let imgRef = useRef()
  let btnRef = useRef()

  let handleChange = ()=>{
    if(loading===true)
    {
      setLoading(!true)
      imgRef.current.style.borderRadius="50%"
      btnRef.current.style.height="40px"
      btnRef.current.style.width="100px"
      btnRef.current.style.backgroundColor="yellow"
      btnRef.current.style.color="red"
      btnRef.current.style.border="none"
      btnRef.current.style.borderRadius="30px"
      btnRef.current.style.fontSize="20px"
      btnRef.current.style.alignItem="center"
    }
    else
    {
      setLoading(!false)
      imgRef.current.style.borderRadius="20%"
      btnRef.current.style.color="green"
    }
  }
  return (
    <div>
      <img src={photo} alt="" ref={imgRef} height="300px" width="300px"/>
      <button onClick={handleChange} ref={btnRef}>
        {loading ? "ON" : "OFF"}
      </button>
    </div>
  )
}
export default App;