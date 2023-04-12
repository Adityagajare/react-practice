import React from 'react'
import { order, restock } from '../Cake Slice/CakeSlice'
import {useSelector, useDispatch} from 'react-redux'

const CakeView = () => {
    let NumberOfCakes=useSelector((state)=>state.cake.numOfCake)
    let dispatch= useDispatch()
  return (
    <div>
        <h1>{NumberOfCakes}</h1>
        <button onClick={()=>dispatch(order())}>order</button>
        <button onClick={()=>dispatch(restock(10))}>restock</button>
    </div>
  )
}

export default CakeView