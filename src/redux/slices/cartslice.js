import { createSlice } from '@reduxjs/toolkit'

function calculateTotalAmount(arr) {
    return arr.reduce((acc, curr) => {
        acc = +acc + (+curr.price) * (+curr.quantity)
        return acc
    }, 0)

}

const cartSliceMaker = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        itemAdder: (state, action) => {

            if (state.items.some(x => x.id == action.payload.id)) {

                const index = state.items.findIndex(x => x.id == action.payload.id)
                if (index !== -1) {
                    const oldQuantity = state.items[index].quantity
                    state.items.splice(index, 1)
                    state.items.push({ ...action.payload, quantity: oldQuantity + 1 })
                }

            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            state.totalAmount = calculateTotalAmount(state.items)
        },

        itemRemover: (state, action) => {
            const newArr = state.items.filter(x => Number(x.id) !== Number(action.payload))
            state.items.length = 0
            for (let item of newArr) {
                state.items.push(item)
            }
            state.totalAmount = calculateTotalAmount(state.items)
        },

        quantityChanger: (state, action) => {
            const quantityArr = Object.entries(action.payload)
    
            for (let key in state.items) {
                if (Number(quantityArr[0][0]) == Number(state.items[key].id)) {
                    state.items[key] = { ...state.items[key], quantity: Number(quantityArr[0][1]) }
                }
            }
            state.totalAmount = calculateTotalAmount(state.items)
        }
    }
})

export const { itemAdder, itemRemover, calculateTotal, quantityChanger } = cartSliceMaker.actions
export default cartSliceMaker.reducer