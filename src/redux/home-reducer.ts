import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        homeHeader: 'Новые поступления в этом сезоне',
        homeParagraph: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
}

const homeSlice = createSlice({
        name: 'home',
        initialState,
        reducers: {},
})

export default homeSlice.reducer
