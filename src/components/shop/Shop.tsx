import { FC } from 'react'
import Paginator from '../../assets/Paginator'
import styles from '../../css/shop.module.css'
import CollectionCard from '../main/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCardInformation, getFilterNames, getCurrentFilter } from '../../selector'
import { setCurrentFilter, setCurrentPage } from '../../redux/shop-reducer'
import { getCurrentPage } from '../../selector'
import Filter from '../../assets/Filter'
import { useNavigate } from 'react-router-dom'

type TProps = {}
const Shop: FC<TProps> = (props) => {
        const nav = useNavigate()
        const dispatch = useDispatch()
        const currentPage = useSelector(getCurrentPage)
        const filterNames = useSelector(getFilterNames)
        const currentFilter = useSelector(getCurrentFilter)
        const cardInformation = useSelector(getCardInformation)
        const handlePageChange = (page: number) => {
                dispatch(setCurrentPage(page))
        }
        const handleFilter = (filter: string) => {
                dispatch(setCurrentFilter(filter))
        }
        const main = 'Главная'
        const current = 'Магазин'
        return (
                <section className={styles.shop}>
                        <div className={`${styles.shopContainer} container`}>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Магазин</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                                <Filter filterNames={filterNames} onPageChange={handleFilter} />
                                <p className={styles.cardDetails}>
                                        Показано:{' '}
                                        {cardInformation.length < 10
                                                ? cardInformation.length
                                                : cardInformation.length > 9 && Math.ceil(cardInformation.length / 9) !== currentPage
                                                ? 9
                                                : cardInformation.length - (currentPage - 1) * 9}{' '}
                                        из {cardInformation.length} товаров
                                </p>
                                <div className={styles.shopCardRow}>
                                        {currentPage !== 1
                                                ? cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          const Card = (
                                                                  <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} link={'/preview/' + (key + 1)} />
                                                          )
                                                          if (obj.dataName === currentFilter) {
                                                                  return Card
                                                          } else if (currentFilter === 'все') {
                                                                  return Card
                                                          } else {
                                                                  return
                                                          }
                                                  })
                                                : cardInformation.slice(9 * (currentPage - 1), 9 * currentPage).map((obj, key) => {
                                                          const Card = (
                                                                  <CollectionCard img={obj.img} dataName={obj.dataName} name={obj.name} price={obj.price} key={key} link={'/preview/' + (key + 1)} />
                                                          )
                                                          if (obj.dataName === currentFilter) {
                                                                  return Card
                                                          } else if (currentFilter === 'все') {
                                                                  return Card
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
