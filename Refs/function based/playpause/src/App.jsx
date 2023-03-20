import React, {useState, useRef} from "react"
import VIDEO from "./video.mp4"

const App = ()=>{

 let [video, setVideo] = useState(VIDEO)
 let [loading, setLoading] = useState(false)
 let videoRef=useRef()

 let playOrPause=()=>{
  if(!loading){
    setLoading(true)
    videoRef.current.play()
    console.log(loading);
  }
  else
  {
    setLoading(false)
    videoRef.current.pause()
    console.log(loading);
  }
 }


  return(
    <div>
    <video src={video} ref={videoRef} onClick={playOrPause} height="500px" width="700px"></video>
    </div>
  )
}
export default App;