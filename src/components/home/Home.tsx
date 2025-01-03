import { FC } from 'react'
import styles from '../../css/home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import woman1 from '../../photos/woman1.png'
import woman2 from '../../photos/woman2.png'
import woman3 from '../../photos/woman3.png'
import { Keyboard, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getHomeHeader, getHomeParagraph } from '../../selector'

type TProps = {}

const Home: FC<TProps> = (props) => {
        const homeHeader = useSelector(getHomeHeader)
        const homeParagraph = useSelector(getHomeParagraph)
        return (
                <section className={styles.home}>
                        <div className={`container ${styles.homeContainer}`}>
                                <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        keyboard={{
                                                enabled: true,
                                        }}
                                        pagination={{
                                                clickable: true,
                                        }}
                                        autoplay
                                        modules={[Keyboard, Pagination, Navigation]}
                                        style={{ zIndex: 0 }}
                                        className={styles.swiper}
                                >
                                        <SwiperSlide>
                                                <div className={styles.homeText}>
                                                        <h1>{homeHeader}</h1>
                                                        <p>{homeParagraph}</p>
                                                        <Link to={'/shop'} className={styles.homeText__button}>
                                                                <p>Открыть магазин</p>
                                                        </Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>Hoya</SwiperSlide>
                                        <SwiperSlide>Shiya</SwiperSlide>
                                </Swiper>
                                <div className={styles.homePhotos}>
                                        <img src={woman1} alt='woman' />
                                        <img src={woman2} alt='woman' id={styles.womanOne} />
                                        <img src={woman3} alt='woman' id={styles.womanTwo} />
                                </div>
                        </div>
                </section>
        )
}
export default Home
