import { FC } from 'react'
import styles from '../../css/collection.module.css'
type TProps = {}

const Collection: FC<TProps> = (props) => {
        return (
                <section className={`${styles.collection} mainMarginTop`}>
                        <div className={`container ${styles.collectionContainer}`}>
                                <h1>Новая коллекция</h1>
                        </div>
                </section>
        )
}
export default Collection
