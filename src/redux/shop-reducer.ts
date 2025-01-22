import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import img1 from '../images/card-1.png'
import img2 from '../images/card-2.png'
import img3 from '../images/card-3.png'

const initialState = {
        cardInformation: [
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'футболки' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'купальники' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'свитшоты' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'футболки' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'купальники' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'свитшоты' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'футболки' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'купальники' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'свитшоты' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'футболки' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'купальники' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'свитшоты' },
        ] as Array<{ name: string; price: number; img: string; dataName: string }>,
        currentPage: 1 as number,
        currentFilter: 'все' as string,
        filterNames: ['все', 'свитшоты', 'футболки', 'купальники', 'кардиганы'],
}
const shopSlice = createSlice({
        name: 'shop',
        initialState,
        reducers: {
                setCurrentPage: (state, action: PayloadAction<number>) => {
                        state.currentPage = action.payload
                },
                setCurrentFilter: (state, action: PayloadAction<string>) => {
                        state.currentFilter = action.payload
                },
        },
})

export const { setCurrentPage, setCurrentFilter } = shopSlice.actions

export default shopSlice.reducer
