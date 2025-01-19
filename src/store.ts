import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './redux/home-reducer'
import shopReducer from './redux/shop-reducer'
import previewReducer from './redux/preview-reducer'

const store = configureStore({
        reducer: {
                home: homeReducer,
                shop: shopReducer,
                preview: previewReducer,
        },
})
export type RootState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch

export default store
