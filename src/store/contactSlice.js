import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const conatctSlice=createSlice({
    name:"contact",
    initialState:[
        {
            id:uuidv4(),
            name:"SOUMAYA",
            age:27,
            email:'soumaya@gmail.com'
        },
        {
            id:uuidv4(),
            name:"ines",
            age:29,
            email:'ines@gmail.com'
        }
    ],
    reducers:{
        setContact:(state,action)=>{
   return action.payload
        }
    }
})

export const {setContact} = conatctSlice.actions
export default conatctSlice.reducer