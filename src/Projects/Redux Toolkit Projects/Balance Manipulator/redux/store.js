import {configureStore} from '@reduxjs/toolkit'
import balanceReducer from './slices/balance'

const store = configureStore({
    reducer:{
        balanceState:balanceReducer
    }
})

export default store