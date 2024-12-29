import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './redux/home-reduces'

const store = configureStore({
        reducer: {
                home: homeReducer,
        },
})
export type RootState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch

export default store
