import { FC } from 'react'
import styles from '../../css/principals.module.css'
type TProps = {
        img: string
        call: string
        def: string
}
const Principal: FC<TProps> = ({ img, call, def }) => {
        return (
                <div className={styles.principalCol}>
                        <div className={styles.principal}>
                                <div className={styles.principalImg}>
                                        <img src={img} alt='' />
                                </div>
                                <div className={styles.principalName}>
                                        <h3>{call}</h3>
                                </div>
                                <div className={styles.principalDef}>
                                        <p>{def}</p>
                                </div>
                        </div>
                </div>
        )
}
export default Principal
