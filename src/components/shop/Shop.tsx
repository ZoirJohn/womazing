import { FC } from 'react'
import Paginator from '../../assets/Paginator'
import styles from '../../css/shop.module.css'
import CollectionCard from '../main/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCardInformation } from '../../selector'
import { setCurrentPage } from '../../redux/shop-reducer'
import { getCurrentPage } from '../../selector'

type TProps = {}
const Shop: FC<TProps> = (props) => {
        const dispatch = useDispatch()
        const currentPage = useSelector(getCurrentPage)
        const handlePageChange = (page: number) => {
                dispatch(setCurrentPage(page))
        }
        const cardInformation = useSelector(getCardInformation)
        return (
                <section className={styles.shop}>
                        <div className={`${styles.shopContainer} container`}>
                                <div className={styles.shopCardRow}>
                                        {currentPage !== 1
                                                ? cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                  })
                                                : cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                  })}
                                </div>
                        </div>
                        <Paginator totalItems={cardInformation.length} onPageChange={handlePageChange} key={1} />
                </section>
        )
}
export default Shop
