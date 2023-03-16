import React, {useState} from 'react'
import "./global.css"

const App = () => {
  let [username, setUsername]=useState("Aditya")
  let [count, setCount]=useState(0)

  let handleChange=()=>{
    setUsername("Aditya Gajare")
  }

  let handleCountChange=()=>{
    setCount(1)
  }
  return (
    <div className='mainBlock'>
      <h1>
        {username}
      </h1>
      <h2>
        {count}
      </h2>
      <button onClick={handleChange}>
        Name Change
      </button>
      <button onClick={handleCountChange}>
        Change Number
      </button>
    </div>
  )
}

export default App;