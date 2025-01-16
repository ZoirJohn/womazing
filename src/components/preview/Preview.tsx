import { FC } from 'react'
import styles from '../../css/preview.module.css'

type TProps = {}

const Preview: FC<TProps> = (props) => {
        const main = ''
        const current = ''
        return (
                <section className={styles.preview}>
                        <div className={`${styles.previewContainer} container`}>
                                <div className={'pageNavigation'}>
                                        <h1 className={'pageHeader'}>Магазин</h1>
                                        <div className={'breadcrumb'}>
                                                {main}
                                                <span className={'breadcrumbCurrent'}>{current}</span>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Preview
