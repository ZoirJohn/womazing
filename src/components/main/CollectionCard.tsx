import { FC } from 'react'
import styles from '../../css/collection.module.css'

type TProps = {
        name: string
        price: number
        img: string
        dataName:string
}

const CollectionCard: FC<TProps> = ({ name, price, img,dataName }) => {
        return (
                <div className={styles.collectionCard} data-name={dataName}>
                        <div className={styles.cardImg}>
                                <img src={img} alt='cardImage' />
                        </div>
                        <div className={styles.cardInfo}>
                                <div className={styles.cardInfo__name}>
                                        <p>{name}</p>
                                </div>
                                <div className={styles.cardInfo__price}>
                                        <p>${price}</p>
                                </div>
                        </div>
                </div>
        )
}
export default CollectionCard
