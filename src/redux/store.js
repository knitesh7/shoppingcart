import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slices/cartslice.js'
import FilterReducer from './slices/filterslice.js'

const store = configureStore({
    reducer:{
        cartInfo:CartReducer,
        filterInfo:FilterReducer
    }
})

export default store