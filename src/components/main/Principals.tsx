import { FC } from 'react'
import styles from '../../css/principals.module.css'
import Principal from './Prinicipal'
import check from '../../images/check.svg'
import gear from '../../images/gear.svg'
import highfive from '../../images/highfive.svg'

type TProps = {}

const Principals: FC<TProps> = (props) => {
        const principal = ['Качество', 'Скорость', 'Ответственность']
        const definition = [
                'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества',
                'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах',
                'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing',
        ]
        const images = [check, gear, highfive]
        return (
                <section className={`${styles.principals} mainMarginTop`}>
                        <div className={`${styles.principalsContainer} container`}>
                                <h1 className={`pageHeading`}>Что для нас важно</h1>
                                <div className={styles.principalsRow}>
                                        {principal.map((e, id) => {
                                                return <Principal img={images[id]} call={e} def={definition[id]} key={id} />
                                        })}
                                </div>
                        </div>
                </section>
        )
}
export default Principals
