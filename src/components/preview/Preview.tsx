import { FC, useState } from 'react'
import styles from '../../css/preview.module.css'
import { useSelector } from 'react-redux'
import { getCardInformation } from '../../selector'
import { useLocation } from 'react-router-dom'
import CollectionCard from '../main/CollectionCard'

type TProps = {}

const Preview: FC<TProps> = (props) => {
        const main = 'Главная'
        const current = 'Свитшот Sweet Shot'
        const cargoName = 'Свитшоты'
        const cardInformation = useSelector(getCardInformation)
        const cargo = cardInformation[+useLocation().pathname.slice(9) - 1]
        const [activeColor, setColor] = useState<string>('')
        const [activeSize, setSize] = useState<string>('')
        const rgb = ['#927876', '#D4D4D4', '#FD9696', '#FDC796']
        const sizes = ['s', 'm', 'l', 'xl']
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
                                                                {sizes.map((size) => {
                                                                        return (
                                                                                <span
                                                                                        className={`${size === activeSize ? styles.activeSize : ''}`}
                                                                                        style={{ textTransform: 'uppercase' }}
                                                                                        onClick={() => setSize(size)}
                                                                                        key={size}
                                                                                >
                                                                                        {size}
                                                                                </span>
                                                                        )
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={styles.previewColor}>
                                                        <h5>Выберите цвет</h5>
                                                        <div>
                                                                {rgb.map((color) => {
                                                                        return (
                                                                                <span
                                                                                        className={`${styles.colors} ${color === activeColor && styles.activeColor}`}
                                                                                        style={{ background: color }}
                                                                                        onClick={() => setColor(color)}
                                                                                        key={color}
                                                                                ></span>
                                                                        )
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={styles.previewCart}>
                                                        <a href='' className='primaryButton'>
                                                                Добавить в корзину
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                                <div className={styles.associatedRow}>
                                        {/* <div>Связанные товары</div> */}
                                        <CollectionCard dataName={cardInformation[0].dataName} img={cardInformation[0].img} link='/about' name='Solo' price={234} key='key' />
                                </div>
                        </div>
                </section>
        )
}
export default Preview
