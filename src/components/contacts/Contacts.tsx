import { FC, useEffect, useState } from 'react'
import styles from '../../css/contacts.module.css'
import PageNav from '../../assets/PageNav'
import { Formik, Form, Field, ErrorMessage } from 'formik'

type TProps = {}

const Contacts: FC = (props) => {
        const [success, setSuccess] = useState<boolean>()
        useEffect(() => {
                setTimeout(() => {
                        setSuccess(false)
                }, 1000)
        }, [success])
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
                                <Formik
                                        initialValues={{ name: '', email: '', telephone: '', text: '' }}
                                        onSubmit={(values) => {
                                                setSuccess(true)
                                        }}
                                        validate={(values) => {
                                                const errors = {} as { name: string; email: string; telephone: string }
                                                if (values.name === '') {
                                                        errors.name = 'Обязательно'
                                                }
                                                if (values.email === '') {
                                                        errors.email = 'Обязательно'
                                                }
                                                if (values.telephone === '') {
                                                        errors.telephone = 'Обязательно'
                                                }

                                                return errors
                                        }}
                                >
                                        {({ isSubmitting }) => (
                                                <Form className={styles.contactsForm}>
                                                        <p>Напишите нам</p>
                                                        <Field type='text' name='name' placeholder='Имя' />
                                                        <ErrorMessage className={styles.contactsError} name='name' component='div' />

                                                        <Field type='email' name='email' placeholder='E-mail' />
                                                        <ErrorMessage className={styles.contactsError} name='email' component='div' />

                                                        <Field type='tel' name='telephone' placeholder='Телефон' />
                                                        <ErrorMessage className={styles.contactsError} name='telephone' component='div' />

                                                        <Field component={'textarea'} type='text' name='textarea' placeholder='Сообщение' className={styles.textarea} required />

                                                        <button className='primaryButton' type='submit' disabled={isSubmitting}>
                                                                Отправить
                                                        </button>
                                                        {success && 'OOOPS'}
                                                </Form>
                                        )}
                                </Formik>
                        </div>
                </section>
        )
}

export default Contacts
