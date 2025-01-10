import { FC } from 'react'
import Paginator from '../../assets/Paginator'
import styles from '../../css/shop.module.css'
import CollectionCard from '../main/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCardInformation, getFilterNames, getCurrentFilter } from '../../selector'
import { setCurrentFilter, setCurrentPage } from '../../redux/shop-reducer'
import { getCurrentPage } from '../../selector'
import Filter from '../../assets/Filter'

type TProps = {}
const Shop: FC<TProps> = (props) => {
        const dispatch = useDispatch()
        const currentPage = useSelector(getCurrentPage)
        const filterNames = useSelector(getFilterNames)
        const currentFilter = useSelector(getCurrentFilter)
        const handlePageChange = (page: number) => {
                dispatch(setCurrentPage(page))
        }
        const handleFilter = (filter: string) => {
                dispatch(setCurrentFilter(filter))
        }
        const cardInformation = useSelector(getCardInformation)
        return (
                <section className={styles.shop}>
                        <div className={`${styles.shopContainer} container`}>
                                <Filter filterNames={filterNames} onPageChange={handleFilter} />
                                <div className={styles.shopCardRow}>
                                        {currentPage !== 1
                                                ? cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          if (obj.dataName === currentFilter) {
                                                                  return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                          } else if (currentFilter === 'все') {
                                                                  return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                          } else {
                                                                  return
                                                          }
                                                  })
                                                : cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          if (obj.dataName === currentFilter) {
                                                                  return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                          } else if (currentFilter === 'все') {
                                                                  return <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} />
                                                          } else {
                                                                  return
                                                          }
                                                  })}
                                </div>
                                <Paginator totalItems={cardInformation.length} onPageChange={handlePageChange} key={1} />
                        </div>
                </section>
        )
}
export default Shop
