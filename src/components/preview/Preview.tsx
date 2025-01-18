import { FC, useEffect, useState } from 'react'
import styles from '../../css/preview.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCardInformation } from '../../selector'
import { useLocation } from 'react-router-dom'
import CollectionCard from '../main/CollectionCard'

type TProps = {}

const Preview: FC<TProps> = (props) => {
        const main = 'Главная'
        const current = 'Свитшот Sweet Shot'
        const cargoName = 'Свитшоты'

        const dispatch = useDispatch()

        const cardInformation = useSelector(getCardInformation)
        const cargo = cardInformation[+useLocation().pathname.slice(9) - 1]

        const [activeColor, setColor] = useState<string>('')
        const [activeSize, setSize] = useState<string>('')
        const [orderReady, setOrderReady] = useState<boolean>(false)

        const rgb = ['#927876', '#D4D4D4', '#FD9696', '#FDC796']
        const sizes = ['s', 'm', 'l', 'xl']

        const order = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                e.preventDefault()

                if (activeColor === '' || activeSize === '') {
                        setOrderReady(true)
                } else {
                        dispatch({ type: '' })
                }
        }
        useEffect(() => {
                if (activeColor !== '' && activeSize !== '') {
                        setOrderReady(false)
                }
        }, [activeColor, activeSize])
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
                                <div className={`${styles.previewPage} mainMarginBottom`}>
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
                                                <p className={styles.associatedError}>{orderReady ? 'ПОЖАЛУЙСТА ВЫБЕРИТЕ ЦВЕТ И РАЗМЕР' : ''}</p>
                                                <div className={styles.previewCart}>
                                                        <a href='' className='primaryButton' onClick={(e) => order(e)}>
                                                                Добавить в корзину
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                                <div className={styles.associated}>
                                        <h1>Связанные товары</h1>
                                        <div className={`${styles.associatedRow} mainMarginBottom`}>
                                                {cardInformation.slice(0, 2).map((card, key) => {
                                                        return <CollectionCard dataName={card.dataName} img={card.img} link={'/preview/' + (key + 1)} name={card.name} price={card.price} key={key} />
                                                })}
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Preview
