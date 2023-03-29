import React, {useState, useEffect} from "react"

const App = () =>{
  let [count, setCount] = useState(0)

 useEffect(()=>{
  document.title=`you clicked ${count} times`
 },[count])
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increment</button>
    </div>
  )
}
export default App