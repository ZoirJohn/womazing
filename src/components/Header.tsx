import { FC } from 'react'
import styles from '../css/header.module.css'
import { NavLink, Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { IoBagHandleOutline } from 'react-icons/io5'
import logo from '../photos/logo.svg'

type TProps = {}
const Header: FC<TProps> = (props) => {
        const navLinks: string[] = ['/main', '/shop', '/about', '/contacts']
        const navItems: string[] = ['Главная', 'Магазин', 'О бренде', 'Контакты']
        return (
                <header className={styles.header}>
                        <div className={`container ${styles.headerContainer}`}>
                                <div className={styles.logo}>
                                        <img src={logo} alt='logo' />
                                </div>
                                <nav className={styles.nav}>
                                        <ul className={styles.nav__list}>
                                                {navItems.map((i, id) => (
                                                        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={navLinks[id]} key={id}>
                                                                {navItems[id]}
                                                        </NavLink>
                                                ))}
                                        </ul>
                                </nav>
                                <div className={styles.info}>
                                        <p className={styles.phoneNumber}>
                                                <span>
                                                        <FiPhoneCall className={styles.phoneNumber__logo} />
                                                        +7 (495) 823-54-12
                                                </span>
                                                <Link to='/cart'>
                                                        <IoBagHandleOutline />
                                                </Link>
                                        </p>
                                        <div className={styles.cart}></div>
                                </div>
                        </div>
                </header>
        )
}
export default Header
