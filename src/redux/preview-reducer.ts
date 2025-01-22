import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TItem } from '../types'

const initialState = { cart: [] as Array<TItem>, price: 0 }

const previewSlice = createSlice({
        name: 'preview',
        initialState,
        reducers: {
                setCartItems(state, action: PayloadAction<any>) {
                        state.cart = action.payload
                },
                deleteCartItems(state, action: PayloadAction<any>) {
                        state.cart = [...state.cart.filter((item) => item !== action.payload)]
                },
        },
})

export const { setCartItems, deleteCartItems } = previewSlice.actions
export default previewSlice.reducer
