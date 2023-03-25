import React from 'react'
import STYLE from "./content.module.css"
import { useState } from 'react'

const Content = () => {
  const[inputText, setInputText]=useState('')
  const [list, setList]=useState([])
  
let handleChange=((e)=>{
  setList([...list,inputText])
  console.log("list",list.map((x)=>{
    return <li>{x}</li>
  }));
})
  let handleRemoveItem=((index)=>{
    let listCopy=[...list]
    listCopy.splice(index,1)
    setList(listCopy)
  })

  return (
    <div className={STYLE.mainBlock}>
        <div className={STYLE.subBlock}>
            <input type="text"  className={STYLE.inputfield} onChange={(e)=>{setInputText(e.target.value)}} />
            <button className={STYLE.addBtn} onClick={handleChange}>
                ADD TODOD
            </button>
        </div>
        <div className={STYLE.buttonBlock}>
            <button className={STYLE.allBtn}>ALL</button>
            <button className={STYLE.activeBtn}>ACTIVE</button>
            <button className={STYLE.inactiveBtn}>INACTIVE</button>
        </div>
        <div className={STYLE.itemlist}>
          {list.map((listitem,index)=>{
            return <ol key={index} start={index}>
              <li >
                <div className={STYLE.checkboxdiv}>
                <input type="checkbox" name="" id="" />{listitem}
                </div>
              <img src="https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg" height="30px" width="30px" alt="delete" style={{borderRadius:"50%"}} onClick={()=>handleRemoveItem(index)}/>
              </li>
            </ol>
          })}
        </div>
    </div>
  )
}

export default Content