import { FC, useState } from 'react'
import styles from '../../css/preview.module.css'
import { useSelector } from 'react-redux'
import { getCardInformation } from '../../selector'
import { useLocation } from 'react-router-dom'

type TProps = {}

const Preview: FC<TProps> = (props) => {
        const main = 'Главная'
        const current = 'Свитшот Sweet Shot'
        const cargoName = 'Свитшоты'
        const cardInformation = useSelector(getCardInformation)
        const cargo = cardInformation[+useLocation().pathname.slice(9) - 1]
        // const [active,setActive]=useState()
        const setActive = (e: any) => {
                console.log(e.target)
        }
        return (
                <section className={styles.preview}>
                        <div className={`${styles.previewContainer} container`}>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Свитшот Sweet Shot</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCargo'}>{cargoName}</span>
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                                <div className={styles.previewPage}>
                                        <div className={styles.previewImage}>
                                                <img src={cargo.img} alt='image' />
                                        </div>
                                        <div className={styles.previewDesciption}>
                                                <div className={styles.previewPrice}>
                                                        <h2>${cargo.price}</h2>
                                                </div>
                                                <div className={styles.previewSize}>
                                                        <h5>Выберите размер</h5>
                                                        <div>
                                                                <span onClick={setActive} className={styles.active}>S</span>
                                                                <span onClick={setActive}>M</span>
                                                                <span onClick={setActive}>L</span>
                                                                <span onClick={setActive}>XL</span>
                                                        </div>
                                                </div>
                                                <div className={styles.previewColor}>
                                                        <h5>Выберите цвет</h5>
                                                        <div>
                                                                <span id={styles.brown}></span>
                                                                <span id={styles.grey}></span>
                                                                <span id={styles.red}></span>
                                                                <span id={styles.orange}></span>
                                                        </div>
                                                </div>
                                                <div className={styles.previewCart}>
                                                        <a href='' className='primaryButton'>
                                                                Добавить в корзину
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Preview
