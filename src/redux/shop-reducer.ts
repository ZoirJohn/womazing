import img1 from '../images/card-1.png'
import img2 from '../images/card-2.png'
import img3 from '../images/card-3.png'

let initialState = {
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

const shopReducer = (_state = initialState, action: any): typeof initialState => {
        switch (action.type) {
                case 'woma/SET-CURRENT-PAGE':
                        return { ..._state, currentPage: action.payload }
                case 'woma/SET-CURRENT-FILTER':
                        return { ..._state, currentFilter: action.payload }

                default:
                        return _state
        }
}
export const setCurrentPage = (pageNumber: number) => {
        return { type: 'woma/SET-CURRENT-PAGE', payload: pageNumber } as const
}
export const setCurrentFilter = (filter: string) => {
        return { type: 'woma/SET-CURRENT-FILTER', payload: filter } as const
}
export default shopReducer
