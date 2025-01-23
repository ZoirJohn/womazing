import { FC, useEffect } from 'react'
import styles from '../../css/contacts.module.css'
type TProps = {}

const Contacts: FC = (props) => {
        const main = 'Главная'
        const current = 'Контакты'

        return (
                <section className={styles.contacts}>
                        <div className='container'>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Контакты</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                                <iframe className={styles.contacts__map} src='https://api.maptiler.com/maps/basic-v2/?key=TwGsHnCIEoq1cQrfNuP4#-0.2/0.60986/7.51010'></iframe>
                                <div className={styles.contacts__info}>
                                        <div className={styles.contactPhone}>
                                                <h6>Телефон</h6>
                                                <p>+7 (495) 823-54-12</p>
                                        </div>
                                        <div className={styles.contactEmail}>
                                                <h6>E-mail</h6>
                                                <p>info@sitename.com</p>
                                        </div>
                                        <div className={styles.contactAddress}>
                                                <h6>Адрес</h6>
                                                <p>г. Москва, 3-я улица Строителей, 25</p>
                                        </div>
                                </div>
                                <form action='#' className={styles.contactsForm}>
                                        <caption>Напишите нам</caption>
                                        <input type='text' name='' id='' placeholder='Имя' />
                                        <input type='email' name='' id='' placeholder='E-mail' />
                                        <input type='number' name='' id='' placeholder='Телефон' />
                                        <textarea name='' id='' placeholder='Сообщение'></textarea>
                                        <button className='primaryButton'>Отправить</button>
                                </form>
                        </div>
                </section>
        )
}

export default Contacts
