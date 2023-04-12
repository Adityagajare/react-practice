import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Cake Slice/CakeSlice"

let Store=configureStore({
    reducer :{
        cake : cakeReducer
    }
})
export default Store;