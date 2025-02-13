import { FC, useState } from 'react'
import styles from '../../css/cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../selector'
import { TItem } from '../../types'
import { changeCartItemsAmount, deleteCartItems } from '../../redux/preview-reducer'
import { Link } from 'react-router-dom'
import { clearCart } from '../../redux/preview-reducer'
import PageNav from '../../assets/PageNav'

type TProps = {}

const Cart: FC<TProps> = (props) => {
        const dispatch = useDispatch()
        const cartItems = useSelector(getCartItems)
        const cancelOrder = (item: TItem) => {
                dispatch(deleteCartItems(item))
        }
        let overallPrice = cartItems.reduce((total, item) => total + item.price * item.amount, 0)
        return (
                <section className={styles.cart}>
                        <div className={`${styles.cartContainer} container`}>
                                <PageNav header='Корзина' current='Корзина' key={''} />
                                <div className={styles.cartItemBox}>
                                        <div className={styles.cartItemFeatures}>
                                                <h5 className={styles.cartCargo}>Товар</h5>
                                                <h5 className={styles.cartPrice}>Цена</h5>
                                                <h5 className={styles.cartAmount}>Количество</h5>
                                                <h5 className={styles.cartOverall}>Всего</h5>
                                        </div>
                                        <div className={styles.cartOrder}>
                                                {cartItems.map((item, key) => {
                                                        return (
                                                                <div className={styles.orderItself} key={key}>
                                                                        <div className={styles.orderPreview} key={key}>
                                                                                <div className={styles.orderCancel} onClick={() => cancelOrder(item)}></div>
                                                                                <img src={item.img} alt='' />
                                                                                <h6 className={styles.cartOrder__name}>{item.name}</h6>
                                                                        </div>
                                                                        <h6 className={styles.cartOrder__price}>${item.price}</h6>
                                                                        <input
                                                                                className={styles.cartOrder__amount}
                                                                                type='number'
                                                                                value={item.amount}
                                                                                onChange={(e) => dispatch(changeCartItemsAmount({ item, amount: +e.target.value }))}
                                                                        />
                                                                        <h6 className={styles.cartOrder__overall}>${item.price * item.amount}</h6>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                        <div className={styles.cartItemCoupon}>
                                                <input type='text' className={styles.cartCoupon} placeholder='Введите купон' />
                                                <a href='' className={`${styles.useCoupon} secondaryButton`} onClick={(e) => e.preventDefault()}>
                                                        Применить купон
                                                </a>
                                                <a href='' className={`${styles.refreshCart} secondaryButton`} onClick={(e) => e.preventDefault()}>
                                                        Обновить корзину
                                                </a>
                                        </div>
                                </div>
                                <div className={styles.cartItemOverall}>
                                        <p>
                                                <span>Итого:</span> ${overallPrice}
                                        </p>
                                        {cartItems[0] && (
                                                <Link to={'/checkout'} className={`primaryButton`} onClick={() => dispatch(clearCart())}>
                                                        Оформить заказ
                                                </Link>
                                        )}
                                </div>
                        </div>
                </section>
        )
}
export default Cart
