import s from "./ShiftPlan.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import OperationImg from "../../../../src/assets/img/MainSwiperImg/OperationImg.jpg";
import Applications from "../../Applications/ui/Applications";

const ShiftPlan = () => {
  return (
    <div className={s.ShiftPlan}>
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
