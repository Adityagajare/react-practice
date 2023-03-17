import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import "./global.css"

const App = () => {
  let handleSubmit=()=>{
    toast("welcome", {
      position : toast.POSITION.TOP_LEFT
    })
    toast.success("logged in sucessfully" , {
      position : toast.POSITION.TOP_RIGHT
    })
    toast.warning("warning", {
      position : toast.POSITION.BOTTOM_LEFT
    })
    toast.error("Error", {
      position : toast.POSITION.BOTTOM_RIGHT
    })
  }

  return (
    <div className='mainBlock'>
      <ToastContainer/>
      <button className='btn' onClick={handleSubmit}>
        Click for Message
      </button>
    </div>
  )
}

export default App