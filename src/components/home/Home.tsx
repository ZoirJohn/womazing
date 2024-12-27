import { FC } from 'react'
import styles from '../../css/home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import arrow from '../../photos/arrow.svg'
import woman1 from '../../photos/woman1.png'
import woman2 from '../../photos/woman2.png'
import woman3 from '../../photos/woman3.png'
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
type TProps = {}
const Home: FC<TProps> = (props) => {
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
                                        modules={[Keyboard, Pagination, Navigation]}
                                >
                                        <SwiperSlide>
                                                <div className={styles.homeText}>
                                                        <h1>Новые поступления в этом сезоне</h1>
                                                        <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                                                        <Link to={'/shop'} className={styles.homeText__button}>
                                                                <p>Открыть магазин</p>
                                                        </Link>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>Slide 2</SwiperSlide>
                                        <SwiperSlide>Slide 3</SwiperSlide>
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
