import { FC } from 'react'
import styles from '../../css/footer.module.css'
import { NavLink, Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { TfiTwitter } from 'react-icons/tfi'
import logo from '../../images/logo.svg'
import visa from '../../images/visa.png'

type TProps = {}
const Footer: FC<TProps> = (props) => {
        const navLinks: string[] = ['/', '/shop', '/about', '/contacts']
        const navItems: string[] = ['Главная', 'Магазин', 'О бренде', 'Контакты']
        const copyFunction = (e: any) => {
                navigator.clipboard.writeText(e.target.innerText)
        }

        return (
                <footer className={`${styles.footer} mainMarginTop`}>
                        <div className={`container ${styles.footerContainer}`}>
                                <div className={styles.logo}>
                                        <Link to={'/womazing'}>
                                                <img src={logo} alt='logo' />
                                        </Link>
                                </div>
                                <nav className={styles.footerNav}>
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
                                                <span className={styles.pre} onClick={copyFunction}>
                                                        +7 (495) 823-54-12
                                                </span>
                                        </p>
                                </div>
                        </div>
                        <div className={`container ${styles.emailContainer}`} style={{ padding: '10px 0 30px' }}>
                                <p onClick={copyFunction} className={styles.email}>
                                        hello@womazing.com
                                </p>
                        </div>
                        <div className={`container ${styles.footerNavContainer}`}>
                                <ul className={styles.footer__copyright}>
                                        <li>© Все права защищены</li>
                                        <li>Политика конфиденциальности</li>
                                        <li>Публичная оферта</li>
                                </ul>
                                <nav className={styles.footer__shopNav}>
                                        <ul>
                                                <li>
                                                        <a href='#'>Пальто</a>
                                                </li>
                                                <li>
                                                        <a href='#'>Свитшоты</a>
                                                </li>
                                                <li>
                                                        <a href='#'>Кардиганы</a>
                                                </li>
                                                <li>
                                                        <a href='#'>Толстовки</a>
                                                </li>
                                        </ul>
                                </nav>
                                <div className={styles.footer__img}>
                                        <a href='https://instagram.com' target='_blank'>
                                                <FaInstagram />
                                        </a>
                                        <a href='https://facebook.com' target='_blank'>
                                                <RiFacebookBoxLine />
                                        </a>
                                        <a href='https://twitter.com' target='_blank'>
                                                <TfiTwitter />
                                        </a>
                                        <div className={styles.footer__paymentDetails}>
                                                <img src={visa} alt='visa' />
                                        </div>
                                </div>
                        </div>
                </footer>
        )
}
export default Footer
