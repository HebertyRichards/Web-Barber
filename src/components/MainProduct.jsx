import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MainProduct = () => {
  return (
    <>
        <div className="services">
          <h2>Serviços</h2>
          <p>Corte / Química / Barba / Sobrancelha / Penteado </p>
        </div>
      <Swiper
        id="main-swiper"
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="slide2">
            <h2>Corte</h2>
            <p>R$ 30,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <h2>Barba</h2>
            <p>R$ 10,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <h2>Sobrancelha</h2>
            <p>R$ 5,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <h2>Penteado</h2>
            <p>R$ 20,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <h2>Platinado</h2>
            <p>R$ 100,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <h2>Progressiva</h2>
            <p>R$ 70,00</p>
            <button className='redirect'>Agendar</button>
          </div>
        </SwiperSlide>
        <div className="custom-navigation2">
          <button className="btn-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default MainProduct;
