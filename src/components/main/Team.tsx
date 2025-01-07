import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../../css/team.module.css'
import fam from '../../images/fam.png'

type TProps = {}

const Team: FC<TProps> = (props) => {
        return (
                <section className={styles.team}>
                        <div className={`${styles.teamContainer} container`}>
                                <h1 className='pageHeading'>Команда мечты Womazing</h1>
                                <Swiper
                                        cssMode={true}
                                        navigation={true}
                                        pagination={true}
                                        mousewheel={true}
                                        keyboard={true}
                                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                        className={styles.swiper}
                                >
                                        <SwiperSlide className={styles.swiperSlide}>
                                                <img src={fam} alt='family' />
                                        </SwiperSlide>
                                        <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
                                        <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
                                </Swiper>
                                <div className={styles.teamText}>
                                        <div className='teamText__heading'>
                                                <h3>Для каждой</h3>
                                        </div>
                                        <div className='teamText__description'>
                                                <p>
                                                        Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей. Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают
                                                        достоинства каждой девушки.
                                                </p>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
export default Team
