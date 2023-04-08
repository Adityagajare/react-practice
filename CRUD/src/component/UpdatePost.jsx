import React from 'react'
import axiosInstance from './help/axiosinstance'
import { useState, useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'

const UpdatePost = () => {
    let [coursename, setCourseName]=useState("")
    let [authorname, setAuthorName]=useState("")
    let navigate=useNavigate()
    let {id}= useParams()

    let updatePosts=async(e)=>{
        e.preventDefault()
        let payload={coursename, authorname}
        await axiosInstance.put(`/posts/${id}`, payload)
        navigate("/viewposts")
    }

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setCourseName(data.coursename)
            setAuthorName(data.authorname)
        }
        fetchData()
    },[])
  return (
    <div>
        <form action="" onSubmit={updatePosts}>
        <fieldset>
          <legend>CREATE POST</legend>
          <label htmlFor="CourseName">CourseName</label>
          <input type="text" id='CourseName' onChange={(e)=>{
            setCourseName(e.target.value)
          }} /><br />
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

export default UpdatePost