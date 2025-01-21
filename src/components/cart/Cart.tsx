import { FC, useState } from 'react'
import styles from '../../css/cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../selector'
import { TItem } from '../../types'
import { deleteCartItems } from '../../redux/preview-reducer'

type TProps = {}

const Cart: FC<TProps> = (props) => {
        const main = 'Главная'
        const current = 'Корзина'
        const [a, changeA] = useState()
        const dispatch = useDispatch()
        const cartItem = useSelector(getCartItems)
        const cancelOrder = (item: TItem) => {
                dispatch(deleteCartItems(item))
        }
        let overallPrice = cartItem.reduce((total, item) => total + item.price * item.amount, 0)
        return (
                <section className={styles.cart}>
                        <div className={`${styles.cartContainer} container`}>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Корзина</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                                <div className={styles.cartItemBox}>
                                        <div className={styles.cartItemFeatures}>
                                                <h5 className={styles.cartCargo}>Товар</h5>
                                                <h5 className={styles.cartPrice}>Цена</h5>
                                                <h5 className={styles.cartAmount}>Количество</h5>
                                                <h5 className={styles.cartOverall}>Всего</h5>
                                        </div>
                                        <div className={styles.cartOrder}>
                                                {cartItem.map((item, key) => {
                                                        return (
                                                                <div className={styles.orderItself} key={key}>
                                                                        <div className={styles.orderPreview} key={key}>
                                                                                <div className={styles.orderCancel} onClick={() => cancelOrder(item)}></div>
                                                                                <img src={item.img} alt='' />
                                                                                <h6 className={styles.cartOrder__name}>{item.name}</h6>
                                                                        </div>
                                                                        <h6 className={styles.cartOrder__price}>${item.price}</h6>
                                                                        <input className={styles.cartOrder__amount} type='number' value={item.amount} onChange={() => {}} />
                                                                        <h6 className={styles.cartOrder__overall}>${item.price * item.amount}</h6>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                        <div className={styles.cartItemCoupon}>
                                                <input type='text' className={styles.cartCoupon} placeholder='Введите купон' />
                                                <a href='' className={`${styles.useCoupon} secondaryButton`}>
                                                        Применить купон
                                                </a>
                                                <a href='' className={`${styles.refreshCart} secondaryButton`}>
                                                        Обновить корзину
                                                </a>
                                        </div>
                                </div>
                                <div className={styles.cartItemOverall}>
                                        <p>
                                                <span>Итого:</span> ${overallPrice}
                                        </p>{' '}
                                        <a className={`primaryButton`}>Оформить заказ</a>
                                </div>
                        </div>
                </section>
        )
}
export default Cart
