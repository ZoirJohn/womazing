import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TItem } from '../types'
import img1 from '../images/card-1.png'

const initialState = {
        cart: [] as Array<TItem>,
        price: 0,
}

const previewSlice = createSlice({
        name: 'preview',
        initialState,
        reducers: {
                setCartItems(state, action: PayloadAction<TItem>) {
                        state.cart = [...state.cart, action.payload]
                },
                deleteCartItems(state, action: PayloadAction<TItem>) {
                        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
                },
                changeCartItemsAmount(state, action: PayloadAction<{ item: TItem; amount: number }>) {
                        state.cart.map((item) => {
                                if (item.id === action.payload.item.id) {
                                        item.amount = action.payload.amount
                                }
                        })
                },
                clearCart(state, action: PayloadAction) {
                        state.cart = []
                },
        },
})

export const { setCartItems, deleteCartItems, changeCartItemsAmount, clearCart } = previewSlice.actions
export default previewSlice.reducer
