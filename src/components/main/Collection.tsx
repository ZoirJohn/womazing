import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/collection.module.css'
import CollectionCard from './CollectionCard'
import img1 from '../../images/card-3.png'
import img2 from '../../images/card-2.png'
import img3 from '../../images/card-1.png'

type TProps = {}

const Collection: FC<TProps> = (props) => {
        const names = ['Футболка USA', 'Купальник Glow', 'Свитшот Sweet Shot']
        const prices = [129, 129, 129]
        const images = [img1, img2, img3]
        const dataNames = ['shirt', 'swimwear', 'sweetshot']
        return (
                <section className={`${styles.collection} mainMarginTop`}>
                        <div className={`container ${styles.collectionContainer}`}>
                                <h1 className='pageHeading'>Новая коллекция</h1>
                                <div className={styles.collectionCardRow}>
                                        {names.map((e, id) => {
                                                return <CollectionCard name={e} price={prices[id]} img={images[id]} key={id} dataName={dataNames[id]} link={'/shop'} />
                                        })}
                                </div>
                                <Link to={'/shop'} className={`${styles.collectionBtn} secondaryButton`}>
                                        Открыть магазин
                                </Link>
                        </div>
                </section>
        )
}
export default Collection
