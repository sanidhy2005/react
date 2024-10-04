import { createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk('getProducts',async(data,{rejectWithValue})=>{
    console.log(data);
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result= await response.json();
        // console.log(result)
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})


export default getProducts
