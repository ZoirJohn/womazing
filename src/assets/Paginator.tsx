import React, { useState } from 'react'
import styles from '../css/assets.module.css'
import { useSelector } from 'react-redux'
import { getCurrentPage } from '../selector'
interface PaginationProps {
        totalItems: number
        onPageChange: (page: number) => void
}

const Paginator: React.FC<PaginationProps> = ({ totalItems, onPageChange }) => {
        const currentPage = useSelector(getCurrentPage)
        const totalPages = Math.ceil(totalItems / 9)
        const changePage = (newPage: number) => {
                if (newPage < 1 || newPage > totalPages) return
                onPageChange(newPage)
        }

        return (
                <div className={styles.pagination}>
                        <button className={styles.paginationButton} onClick={(e) => changePage(currentPage - 1)} disabled={currentPage === 1}>
                                &laquo;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                return (
                                        <button key={page} className={`${styles.button} ${page === currentPage ? styles.activeButton : {}}`} onClick={() => changePage(page)}>
                                                {page}
                                        </button>
                                )
                        })}

                        <button className={styles.paginationButton} onClick={(e) => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                                &raquo;
                        </button>
                </div>
        )
}

export default Paginator
