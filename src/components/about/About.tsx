import { FC } from 'react'
import styles from '../../css/about.module.css'
import about1 from '../../images/aboutFirst.png'
import about2 from '../../images/aboutTwo.png'
import { Link } from 'react-router-dom'
import PageNav from '../../assets/PageNav'

type TProps = {}

const About: FC<TProps> = (props) => {
        return (
                <section className={styles.about}>
                        <div className={`${styles.shopContainer} container`}>
                                <PageNav header='О бренде' current='О бренде' key={''} />
                                <div className={styles.aboutRow}>
                                        <div className={styles.aboutPrincipals}>
                                                <img src={about1} alt='' />
                                                <div className={styles.principalsText}>
                                                        <h4>Идея и женщина</h4>
                                                        <p>
                                                                Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing
                                                                остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
                                                        </p>
                                                        <p>
                                                                Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком
                                                                моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
                                                        </p>
                                                </div>
                                        </div>
                                        <div className={styles.aboutPrincipals}>
                                                <img src={about2} alt='' />
                                                <div className={styles.principalsText}>
                                                        <h4>Магия в деталях</h4>
                                                        <p>
                                                                Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и
                                                                костюма, которые были копиями парижских моделей.
                                                        </p>
                                                        <p>
                                                                Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы
                                                                шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе
                                                                большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не
                                                                существовало.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <Link to={'/shop'} className={`${styles.shopButton} primaryButton`}>
                                        Перейти в магазин
                                </Link>
                        </div>
                </section>
        )
}
export default About
