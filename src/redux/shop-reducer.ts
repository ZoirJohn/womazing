import img1 from '../images/card-1.png'
import img2 from '../images/card-2.png'
import img3 from '../images/card-3.png'

let initialState = {
        cardInformation: [
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'shirt' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'swimwear' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'sweetshot' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'shirt' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'swimwear' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'sweetshot' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'shirt' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'swimwear' },
                { name: 'Свитшот Sweet Shot', price: 129, img: img3, dataName: 'sweetshot' },
                { name: 'Футболка USA', price: 129, img: img1, dataName: 'shirt' },
                { name: 'Купальник Glow', price: 129, img: img2, dataName: 'swimwear' },
        ],
        currentPage: 1 as number | null,
}

const shopReducer = (_state = initialState, action: any) => {
        switch (action.type) {
                case 'woma/SET-CURRENT-PAGE':
                        console.log(action.type)

                        return { ..._state, currentPage: action.payload }

                default:
                        return _state
        }
}
export const setCurrentPage = (pageNumber: number) => {
        return { type: 'woma/SET-CURRENT-PAGE', payload: pageNumber }
}
export default shopReducer
