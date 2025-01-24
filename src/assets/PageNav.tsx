import { FC } from 'react'
type TProps = {
        header: string
        current: string
}
const PageNav: FC<TProps> = (props) => {
        return (
                <div className={'pageNavigation'}>
                        <h1 className={'pageHeader'}>{props.header}</h1>
                        <div className={'breadcrumb'}>
                                Главная
                                <span className={'breadcrumbCurrent'}>{props.current}</span>
                        </div>
                </div>
        )
}
export default PageNav
