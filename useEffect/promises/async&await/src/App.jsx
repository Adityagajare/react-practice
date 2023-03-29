import React, {useState, useEffect} from "react"

const App = ()=>{
  let [userData, setUserData] = useState([])

  useEffect(()=>{
    let fetchData = async()=>{
      let data= await window.fetch("https://api.github.com/users")
      let finalData= await data.json()
      setUserData(finalData)
    }
    fetchData()
  },[])

  return(
    <>
    {userData.map((x, index)=>{
      return(
        <div>
          <li key={index}>
            <p>{x.login}</p>
            <img src={x.avatar_url} alt="" height="300px" width="300px"/>
          </li>

        </div>
      )
    })}
    </>
  )
}
export default App;