import { TItem } from '../types'

let initialState = {
        cart: [{ amount: 2, color: '#FD9696', dataName: 'купальники', img: '/womazing/static/media/card-2.5b4ddbd414f09b723485.png', name: 'Купальник Glow', price: 129, size: 's' }] as Array<TItem>,
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
