import { TItem } from '../types'

let initialState = {
        cart: [] as Array<TItem>,
        price: 0,
}

const previewReducer = (_state = initialState, action: any): typeof initialState => {
        switch (action.type) {
                case 'woma/SET-CART-ITEM':
                        return { ..._state, cart: [..._state.cart, { ...action.payload }] }
                case 'woma/DELETE-CART-ITEM':
                        return { ..._state, cart: [..._state.cart.filter((item) => item !== action.payload)] }

                default:
                        return _state
        }
}
export const setCartItems = (item: any) => {
        return { type: 'woma/SET-CART-ITEM', payload: item }
}
export const deleteCartItems = (item: any) => {
        return { type: 'woma/DELETE-CART-ITEM', payload: item }
}

export default previewReducer
