import { FC } from 'react'
import styles from '../../css/checkout.module.css'
import PageNav from '../../assets/PageNav'

type TProps = {}
const Checkout: FC<TProps> = (props) => {
        return (
                <section className={styles.checkout}>
                        <div className={`container ${styles.checkoutContainer}`}>
                                <PageNav header='Оформление заказа' current='Оформление заказа' key={''} />
                        </div>
                </section>
        )
}
export default Checkout
