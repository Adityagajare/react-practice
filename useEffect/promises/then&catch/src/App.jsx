import React, {useState, useEffect} from "react"

const App = ()=>{
  let [userData, setUserData] = useState([])

  useEffect(()=>{
    window.fetch("http://api.github.com/users")
    .then((x)=>x.json())
    .then((data)=>setUserData(data))
    .catch((err)=>err)
  },[])
  return(
    <div>
      {userData.map((x)=>{
        
        return(
          <div>
            <li key={x.id}>{x.login}</li>
          <li key={x.id}>{x.html_url}</li>
          <img src={x.avatar_url} alt="" height="300px" width="300px"/>
          </div>
        )
      })}
    </div>
  )
}
export default App;