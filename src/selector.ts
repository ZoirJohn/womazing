import { RootState } from './store'

export const getHomeHeader = (state: RootState) => {
        return state.home.homeHeader
}
export const getHomeParagraph = (state: RootState) => {
        return state.home.homeParagraph
}
export const getCardInformation = (state: RootState) => {
        return state.shop.cardInformation
}
export const getCurrentPage = (state: RootState) => {
        return state.shop.currentPage
}
export const getCurrentFilter = (state: RootState) => {
        return state.shop.currentFilter
}
export const getFilterNames = (state: RootState) => {
        return state.shop.filterNames
}
