import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../assests/ProductData";

const initialState = {
    productItem : ProductData[0],
    isOpen: false
}

const productPreviewSlice = createSlice({
    name:"productPreview",
    initialState,
    reducers:{
        previewItem:(state,{payload})=>{
            state.productItem=ProductData[payload-1]
        }
    }
})

export default productPreviewSlice.reducer
export const {previewItem} = productPreviewSlice.actions