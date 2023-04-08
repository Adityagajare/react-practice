import React from 'react'
import { useState } from 'react';
import axiosInstance from './help/axiosinstance';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  let [coursename, setCourseName]= useState("")
  let [authorname, setAuthorName] = useState("")
  let navigate=useNavigate()

let handleChange= async(e)=>{
  e.preventDefault()
  try{
    let payload={
      coursename,
      authorname
    }
    let data = await axiosInstance.post("/posts", payload)
    navigate('/viewposts')
  }
  catch{
    console.log("unable to connect server");
  }
}
  return (
    <div>
      <form action="" onSubmit={handleChange}>
        <fieldset>
          <legend>CREATE POST</legend>
          <label htmlFor="CourseName">CourseName</label>
          <input type="text" id='CourseName' onChange={(e)=>{
            setCourseName(e.target.value)
          }} /><br />
          <br />
          <label htmlFor="AuthorName">AuthorName</label>
          <input type="text" id='AuthorName' onChange={(e)=>{
            setAuthorName(e.target.value)
          }}/><br />
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default CreatePost