import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import supabase from "./supabaseConfig";


export const fetchPro = createAsyncThunk('products/fetchProducts',async()=>{
   const { data, error } = await supabase
  .from('Product')
  .select('*')
  if(error){
    throw error
  }
  return  data
})



const ProductSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error:null
    },reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPro.pending,(state)=>{
      state.loading= true
        })
        builder.addCase(fetchPro.fulfilled ,(state,action)=>{
            console.log('action-->',action.payload);
            
        state.loading = false
        state.products = action.payload


        })
        builder.addCase(fetchPro.rejected ,(state,action)=>{
        state.loading = false
        state.error = action.error.message
        

        })
    }
})



export default ProductSlice.reducer

