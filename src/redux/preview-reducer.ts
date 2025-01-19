let initialState = {
        cart: [] as Array<{}>,
}

const previewReducer = (_state = initialState, action: any): typeof initialState => {
        switch (action.type) {
                case 'woma/SET-CART-ITEM':
                        return { ..._state, cart: [..._state.cart, { ...action.payload }] }

                default:
                        return _state
        }
}
export const setCartItems = (item: any) => {
        return { type: 'woma/SET-CART-ITEM', payload: item }
}
export default previewReducer
