import { configureStore } from "@reduxjs/toolkit";
import productPreviewReducer from './features/ProductPreviewSlice'

export const Store = configureStore({
    reducer:{
        productPreview: productPreviewReducer
    }
})