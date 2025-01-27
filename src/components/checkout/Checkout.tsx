import { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../../css/checkout.module.css'
import PageNav from '../../assets/PageNav'
import { countries } from '../../countries'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../selector'

type TProps = {}
const Checkout: FC<TProps> = (props) => {
        const cartItems = useSelector(getCartItems)
        let overallPrice = cartItems.reduce((total, item) => total + item.price * item.amount, 0)
        return (
                <section className={styles.checkout}>
                        <div className={`container ${styles.checkoutContainer}`}>
                                <PageNav header='Оформление заказа' current='Оформление заказа' key={''} />
                                <Formik
                                        initialValues={{ name: '', email: '', telephone: '', country: '', city: '', street: '', house: '', apartment: '', comment: '', cash: false }}
                                        onSubmit={(values) => console.log(values)}
                                        validate={(values) => {
                                                const errors = {} as {
                                                        name: string
                                                        email: string
                                                        telephone: string
                                                        country: string
                                                        city: string
                                                        street: string
                                                        house: string
                                                        apartment: string
                                                        comment: string
                                                }
                                                if (values.name === '') {
                                                        errors.name = 'Required'
                                                }
                                                if (values.email === '') {
                                                        errors.email = 'Required'
                                                }
                                                if (values.telephone === '') {
                                                        errors.telephone = 'Required'
                                                }
                                                if (values.country === '') {
                                                        errors.country = 'Required'
                                                }
                                                if (values.city === '') {
                                                        errors.city = 'Required'
                                                }
                                                if (values.street === '') {
                                                        errors.street = 'Required'
                                                }
                                                if (values.house === '') {
                                                        errors.house = 'Required'
                                                }
                                                if (values.apartment === '') {
                                                        errors.apartment = 'Required'
                                                }
                                                return errors
                                        }}
                                >
                                        {({ isSubmitting }) => {
                                                return (
                                                        <>
                                                                <Form className={styles.checkoutForm}>
                                                                        <div className={styles.checkoutFields}>
                                                                                <p>Данные покупателя</p>
                                                                                <Field type='text' name='name' placeholder='Имя' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='name' component='div' />

                                                                                <Field type='email' name='email' placeholder='E-mail' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='email' component='div' />

                                                                                <Field type='tel' name='telephone' placeholder='Телефон' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='telephone' component='div' />

                                                                                <p>Адрес получателя</p>
                                                                                <Field name='country' as='select' placeholder='Страна'>
                                                                                        <option value=''>Страна</option>
                                                                                        {countries.map((c, key) => (
                                                                                                <option value={c.value} key={key}>
                                                                                                        {c.text}
                                                                                                </option>
                                                                                        ))}
                                                                                </Field>
                                                                                <ErrorMessage className={styles.checkoutFormError} name='country' component='div' />

                                                                                <Field type='email' name='city' placeholder='Город' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='city' component='div' />

                                                                                <Field type='tel' name='street' placeholder='Улица' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='street' component='div' />

                                                                                <Field type='tel' name='house' placeholder='Дом' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='house' component='div' />

                                                                                <Field type='tel' name='apartment' placeholder='Квартира' />
                                                                                <ErrorMessage className={styles.checkoutFormError} name='apartment' component='div' />

                                                                                <p>Комментарии</p>
                                                                                <Field component={'textarea'} type='text' name='textarea' placeholder='Сообщение' className={styles.textarea} />

                                                                                <button className='primaryButton' type='submit' disabled={isSubmitting}>
                                                                                        Отправить
                                                                                </button>
                                                                        </div>
                                                                        <div className={styles.checkoutData}>
                                                                                <div className={styles.checkoutDataDetails}>
                                                                                        {' '}
                                                                                        <p>Ваш заказ</p>
                                                                                        <ul>
                                                                                                <span>Товар</span>
                                                                                                <li>{cartItems[0]?.name || 'Ничего'}</li>
                                                                                                <li>Итого</li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                                <span>Всего</span>
                                                                                                <li>${cartItems[0]?.price || 0}</li>
                                                                                                <li>${overallPrice}</li>
                                                                                        </ul>
                                                                                </div>

                                                                                <div className={styles.checkoutDataPayment}>
                                                                                        <p>Способ оплаты</p>
                                                                                        <label htmlFor='cash' className={styles.checkoutDataLabel}>
                                                                                                Оплата наличными
                                                                                                {/* <Field type='checkbox' name='cash' /> */}
                                                                                                <input type="checkbox" name="" id="" />
                                                                                        </label>
                                                                                        <span className={styles.checkmark}></span>
                                                                                        <button className='primaryButton'>Разместить заказ</button>
                                                                                </div>
                                                                        </div>
                                                                </Form>
                                                        </>
                                                )
                                        }}
                                </Formik>
                        </div>
                </section>
        )
}

export default Checkout
