import s from "./ShiftPlan.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import OperationImg from "../../../../src/assets/img/MainSwiperImg/OperationImg.jpg";
import Applications from "../../Applications/ui/Applications";

const ShiftPlan = () => {
  return (
    <div className={s.ShiftPlan}>
      <div className={s.search}>
        <span className={s.shiftTitle}>План на смену</span>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 15.75L13.125 13.125M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z"
              stroke="white"
              strokeOpacity="0.47"
              strokeLinecap="round"
            />
          </svg>

          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className={s.Operations}>
        <span className={s.shiftTitle}>Операции</span>
        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
          <SwiperSlide className={s.SwiperSlide}>
            <img src={OperationImg} alt="" />
            <div>
              <span>Сверхгабаритные товары</span>
              <ul>
                <li>Эффективность: 118%</li>
                <li>Ночная цель: 28 операций</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.SwiperSlide}>
            <img src={OperationImg} alt="" />
            <div>
              <span>Сверхгабаритные товары</span>
              <ul>
                <li>Эффективность: 118%</li>
                <li>Ночная цель: 28 операций</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.SwiperSlide}>
            <img src={OperationImg} alt="" />
            <div>
              <span>Сверхгабаритные товары</span>
              <ul>
                <li>Эффективность: 118%</li>
                <li>Ночная цель: 28 операций</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.SwiperSlide}>
            <img src={OperationImg} alt="" />
            <div>
              <span>Сверхгабаритные товары</span>
              <ul>
                <li>Эффективность: 118%</li>
                <li>Ночная цель: 28 операций</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Applications />
    </div>
  );
};

export default ShiftPlan;
