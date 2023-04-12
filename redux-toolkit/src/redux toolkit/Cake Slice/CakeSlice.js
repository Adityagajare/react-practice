import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfCake : 20
}

let CakeSlice=createSlice({
    name : "cake",
    initialState,
    reducers : {
        order : (state)=>{
            state.numOfCake--
        },
        restock : (state, action)=>{
            state.numOfCake += action.payload
        }
    }
})
export default CakeSlice.reducer;
export let {order, restock}=CakeSlice.actions;