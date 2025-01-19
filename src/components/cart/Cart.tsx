import { FC } from 'react'

type TProps = {}

const Cart: FC<TProps> = (props) => {
        const main = 'Главная'
        const current = 'Корзина'
        return (
                <section>
                        <div className='container'>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Корзина</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Cart
