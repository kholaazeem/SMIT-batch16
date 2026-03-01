import { createSlice } from "@reduxjs/toolkit";




const ConterSlice = createSlice({
    name:'counter',
    initialState:{
        value: 0 
    },
    reducers:{
    increment:(state)=> {
        state.value += 1
    },
    decrement:(state)=>{
  state.value -= 1
    }
    }
    
})


export const  { increment,decrement } = ConterSlice.actions
export default ConterSlice.reducer


