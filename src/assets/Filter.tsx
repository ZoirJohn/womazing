import React, { useState } from 'react'
import styles from '../css/assets.module.css'
import { useSelector } from 'react-redux'
import { getCurrentFilter } from '../selector'
interface PaginationProps {
        filterNames: Array<string>
        onPageChange: (filter: string) => void
}

const Filter: React.FC<PaginationProps> = ({ filterNames, onPageChange }) => {
        const currentFilter = useSelector(getCurrentFilter)
        const changePage = (newPage: string) => {
                onPageChange(newPage)
        }
        return (
                <div className={`${styles.filterBox} mainMarginBottom`}>
                        {filterNames.map((page) => {
                                return (
                                        <button
                                                style={{ textTransform: 'capitalize' }}
                                                key={page}
                                                className={`${styles.filter} ${page === currentFilter ? styles.activeFilter : {}}`}
                                                onClick={() => changePage(page)}
                                        >
                                                {page}
                                        </button>
                                )
                        })}
                </div>
        )
}

export default Filter
