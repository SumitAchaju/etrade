import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../assests/ProductData";

const initialState = {
    productItem : ProductData[0],
    itemAmount:1,
    isOpen: false
}

const productPreviewSlice = createSlice({
    name:"productPreview",
    initialState,
    reducers:{
        previewItem:(state,{payload})=>{
            state.productItem=ProductData[payload-1]
            state.itemAmount = 1
        },
        increaseCount:(state)=>{
            state.itemAmount += 1
        },
        decreaseCount:(state)=>{
            state.itemAmount -= 1
        }
    }
})

export default productPreviewSlice.reducer
export const {previewItem,increaseCount,decreaseCount} = productPreviewSlice.actions