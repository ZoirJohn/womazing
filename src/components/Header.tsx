import { FC, useState } from 'react'
import styles from '../css/header.module.css'
import { NavLink, Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { IoBagHandleOutline } from 'react-icons/io5'
import logo from '../photos/logo.svg'

type TProps = {
        setBurgerState: (b:boolean) => void
        burgerState: boolean
}
const Header: FC<TProps> = (props) => {
        const navLinks: string[] = ['/', '/shop', '/about', '/contacts']
        const navItems: string[] = ['Главная', 'Магазин', 'О бренде', 'Контакты']

        return (
                <header className={styles.header}>
                        <div className={`container ${styles.headerContainer}`}>
                                <div className={styles.logo}>
                                        <Link to={'/home'}>
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
