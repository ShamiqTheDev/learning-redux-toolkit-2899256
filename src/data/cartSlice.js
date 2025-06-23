import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductIds: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartProductIds = [ action.payload, ...state.cartProductIds ]
        },
        removeFromCart: (state, action) => {
            const indexOfProduct = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexOfProduct, 1);
        },
        clearAllItems: (state) => {
            state.cartProductIds = []
        },
    }
});