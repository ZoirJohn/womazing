import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../../css/team.module.css'
import fam from '../../images/fam.png'
import { Link } from 'react-router-dom'

type TProps = {}

const Team: FC<TProps> = (props) => {
        return (
                <section className={`${styles.team} mainMarginTop`}>
                        <div className={`${styles.teamContainer} container`}>
                                <h1 className={`pageHeading ${styles.team__heading}`}>Команда мечты Womazing</h1>
                                <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        autoplay={true}
                                        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                                        className={styles.swiper}
                                >
                                        <SwiperSlide className={styles.swiperSlide}>
                                                <img src={fam} alt='family' />
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.swiperSlide}>
                                                <img src={fam} alt='family' />
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.swiperSlide}>
                                                <img src={fam} alt='family' />
                                        </SwiperSlide>
                                </Swiper>
                                <div className={styles.teamText}>
                                        <div className={styles.teamText__heading}>
                                                <h3>Для каждой</h3>
                                        </div>
                                        <div className={styles.teamText__description}>
                                                <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                                                <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                                        </div>
                                        <div className={styles.teamText__button}>
                                                <Link to={'/about'} className='linkButton'>Подробнее о бренде</Link>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Team
