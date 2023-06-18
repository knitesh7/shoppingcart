import { createSlice } from '@reduxjs/toolkit'

const balanceSlicer = createSlice({
    name: 'balance',
    initialState: {
        amount: 0
    },
    reducers: {
        incrementer: (state, action) => {
            state.amount += Number(action.payload)
        },
        decrementer: (state, action) => {
            state.amount -= Number(action.payload)
        }
    }
})

export const { incrementer, decrementer } = balanceSlicer.actions
export default balanceSlicer.reducer
