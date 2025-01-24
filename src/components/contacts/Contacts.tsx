import { FC, useEffect } from 'react'
import styles from '../../css/contacts.module.css'
import PageNav from '../../assets/PageNav'
type TProps = {}

const Contacts: FC = (props) => {
        return (
                <section className={styles.contacts}>
                        <div className='container'>
                                <PageNav header='Контакты' current='Контакты' key={''} />
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
                                <form action='#' className={styles.contactsForm} onSubmit={(e) => e.preventDefault()}>
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
