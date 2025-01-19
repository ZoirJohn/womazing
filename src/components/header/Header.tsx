import { FC, useState } from 'react'
import styles from '../../css/header.module.css'
import { NavLink, Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { IoBagHandleOutline } from 'react-icons/io5'
import logo from '../../images/logo.svg'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../selector'

type TProps = {
        setBurgerState: (b: boolean) => void
        burgerState: boolean
}
const Header: FC<TProps> = (props) => {
        const navLinks: string[] = ['/womazing', '/shop', '/about', '/contacts']
        const navItems: string[] = ['Главная', 'Магазин', 'О бренде', 'Контакты']
        const cartItems = useSelector(getCartItems)
        const [bg, setBg] = useState(false)
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
                                        <Link to={'/womazing'}>
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
                                                        <FiPhoneCall className={styles.phoneNumber__logo} />
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
                </header>
        )
}
export default Header
