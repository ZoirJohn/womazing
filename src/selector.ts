import { RootState } from './store'

export const getHomeHeader = (state: RootState) => {
        return state.home.homeHeader
}
export const getHomeParagraph = (state: RootState) => {
        return state.home.homeParagraph
}
