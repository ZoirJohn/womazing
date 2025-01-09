import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './redux/home-reduces'
import shopReducer from './redux/shop-reducer'

const store = configureStore({
        reducer: {
                home: homeReducer,
                shop: shopReducer,
        },
})
export type RootState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch

export default store
