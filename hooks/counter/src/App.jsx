import React, {useState} from 'react'
import "./global.css"

const App = () => {

  let [count, setCount]=useState(0)

  let handleIncrement=()=>{
    setCount(count+1)

  }
  if (count>=0) {
    if (count>0) {
      document.body.style.color="green"
      document.body.style.backgroundColor="darkkhaki"
    }
    else{
    document.body.style.backgroundColor="bisque"
    document.body.style.color="blue"
    }
  } else {
    document.body.style.backgroundColor="darkgray"
    document.body.style.color="red"
  }
  let handledecrement=()=>{
    setCount(count-1)
  }

  let handleReset=()=>{
    setCount(0)
  }
  return (
    <div className='mainBlock'>
      <h2>
        Counter
      </h2>
      <h1 id='cnt'>
        {count}
      </h1>
      <div className='buttonDiv'>
        <button className='handleIncrement' onClick={handleIncrement}>
          + Increment
        </button>
        <button className='handleDecrement' onClick={handledecrement}>
          - Decrement
        </button>
        <button className='handleReset' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App