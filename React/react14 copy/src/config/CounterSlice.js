import { createSlice } from "@reduxjs/toolkit";




const ConterSlice = createSlice({
    name:'counterr',
    initialState:{
        value: 0 
    },
    reducers:{
    increment:(state)=> {
        state.value += 1
    },
    decrement:(state,action)=>{
        console.log(action);
        
  state.value -= action.payload
    }
    }
    
})


export const  { increment,decrement } = ConterSlice.actions
export default ConterSlice.reducer


