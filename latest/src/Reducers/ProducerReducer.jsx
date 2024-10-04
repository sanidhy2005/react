import {createSlice} from '@reduxjs/toolkit'
import getProducts from '../Actions/productAction'
const initialState ={
    value:[],
    loading:false,
    error:null
}

const productReducer =  createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.value = action.payload
        })  
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading= false;
            state.error= action.message.error
        })
    }
})

export default productReducer.reducer