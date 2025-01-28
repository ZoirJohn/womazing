import { FC, useState } from 'react'
import styles from '../../css/header.module.css'
import { NavLink, Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { IoBagHandleOutline } from 'react-icons/io5'
import logo from '../../images/logo.svg'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../selector'
import { ErrorMessage, Field, Formik } from 'formik'

type TProps = {
        setBurgerState: (b: boolean) => void
        burgerState: boolean
        callPopup: (b: boolean) => void
        popup: boolean
}
const Header: FC<TProps> = (props) => {
        const navLinks: string[] = ['/', '/shop', '/about', '/contacts']
        const navItems: string[] = ['Главная', 'Магазин', 'О бренде', 'Контакты']
        const cartItems = useSelector(getCartItems)
        const [bg, setBg] = useState(false)
        const [sent, setSent] = useState(false)
        if (window.scrollY < 50 && !bg) {
                setBg(true)
        }
        window.addEventListener('scroll', () => {
                if (window.scrollY < 50) {
                        setBg(true)
                } else {
                        setBg(false)
                }
        })
        return (
                <header className={styles.header} id={!bg ? styles.white : undefined}>
                        <div className={`container ${styles.headerContainer}`}>
                                <div className={styles.logo}>
                                        <Link to={'/'}>
                                                <img src={logo} alt='logo' />
                                        </Link>
                                </div>
                                <nav className={`${styles.nav} ${props.burgerState ? styles.active : ''}`}>
                                        <ul className={styles.nav__list}>
                                                {navItems.map((i, id) => (
                                                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : undefined)} to={navLinks[id]} key={id}>
                                                                {navItems[id]}
                                                        </NavLink>
                                                ))}
                                        </ul>
                                </nav>
                                <div className={styles.info}>
                                        <p className={styles.phoneNumber}>
                                                <span>
                                                        <FiPhoneCall style={{ cursor: 'pointer' }} className={styles.phoneNumber__logo} onClick={() => props.callPopup(!props.popup)} />
                                                        <span className={styles.pre}>+7 (495) 823-54-12</span>
                                                </span>
                                                <Link to='/cart' className={styles.cartLink}>
                                                        <IoBagHandleOutline />
                                                        <i className={styles.cartNumber}> {cartItems.length || ''}</i>
                                                </Link>
                                        </p>
                                        <a
                                                className={`${styles.burgerMenu} ${props.burgerState ? styles.active : ''}`}
                                                onClick={() => {
                                                        props.setBurgerState(!props.burgerState)
                                                }}
                                        >
                                                <span></span>
                                        </a>
                                </div>
                        </div>
                        {props.popup && (
                                <div className={styles.contactPopup}>
                                        {!sent ? (
                                                <div className={styles.contactPopupSuccess} >
                                                        <h1>Отлично! Мы скоро вам перезвоним.</h1>
                                                        <button className='secondaryButton' onClick={()=>{props.callPopup(false)}}>Закрыть</button>
                                                </div>
                                        ) : (
                                                <Formik
                                                        initialValues={{ name: '', email: '', phone: '' }}
                                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                                                setSubmitting(true)
                                                                resetForm()
                                                                setSent(true)
                                                        }}
                                                        validate={(values) => {
                                                                const errors = {} as { phone: string; email: string }
                                                                if (values.phone === '') {
                                                                        errors.phone = 'Обязательно'
                                                                }
                                                                if (values.email === '') {
                                                                        errors.email = 'Обязательно'
                                                                }
                                                                return errors
                                                        }}
                                                >
                                                        {({ isSubmitting, handleSubmit }) => {
                                                                return (
                                                                        <form onSubmit={handleSubmit}>
                                                                                <h1>Заказать обратный звонок</h1>
                                                                                <Field type='text' name='name' placeholder='Имя' />

                                                                                <Field type='email' name='email' placeholder='E-mail' />
                                                                                <ErrorMessage name='email' component='div' />

                                                                                <Field type='tel' name='phone' placeholder='Телефон' />
                                                                                <ErrorMessage name='phone' component='div' />

                                                                                <button type='submit' className='primaryButton' disabled={isSubmitting}>
                                                                                        Заказать звонок
                                                                                </button>
                                                                                <span
                                                                                        onClick={() => {
                                                                                                props.callPopup(!props.popup)
                                                                                        }}
                                                                                ></span>
                                                                        </form>
                                                                )
                                                        }}
                                                </Formik>
                                        )}
                                </div>
                        )}
                </header>
        )
}
export default Header
