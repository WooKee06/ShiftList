import s from "./ShiftPlan.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import OperationImg from "../../../../src/assets/img/MainSwiperImg/OperationImg.jpg";
import UserImg from "../../../../src/assets/img/MainSwiperImg/UserImg.png";

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
              stroke-opacity="0.47"
              stroke-linecap="round"
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
      <div className={s.Applications}>
        <span className={s.shiftTitle}>Заявки</span>
        <ul className={s.userList}>
          <li className={s.userInfo}>
            <img src={UserImg} alt="" />
            <div>
              <span>Сулейманов Камиль</span>
              <small>Операция: Аллея/Кс ~ 10 минут назад</small>
            </div>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66669 4.66669H4.00002C3.6464 4.66669 3.30726 4.80716 3.05721 5.05721C2.80716 5.30726 2.66669 5.6464 2.66669 6.00002V12C2.66669 12.3536 2.80716 12.6928 3.05721 12.9428C3.30726 13.1929 3.6464 13.3334 4.00002 13.3334H10C10.3536 13.3334 10.6928 13.1929 10.9428 12.9428C11.1929 12.6928 11.3334 12.3536 11.3334 12V11.3334"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className={s.userInfo}>
            <img src={UserImg} alt="" />
            <div>
              <span>Сулейманов Камиль</span>
              <small>Операция: Аллея/Кс ~ 10 минут назад</small>
            </div>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66669 4.66669H4.00002C3.6464 4.66669 3.30726 4.80716 3.05721 5.05721C2.80716 5.30726 2.66669 5.6464 2.66669 6.00002V12C2.66669 12.3536 2.80716 12.6928 3.05721 12.9428C3.30726 13.1929 3.6464 13.3334 4.00002 13.3334H10C10.3536 13.3334 10.6928 13.1929 10.9428 12.9428C11.1929 12.6928 11.3334 12.3536 11.3334 12V11.3334"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className={s.userInfo}>
            <img src={UserImg} alt="" />
            <div>
              <span>Сулейманов Камиль</span>
              <small>Операция: Аллея/Кс ~ 10 минут назад</small>
            </div>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66669 4.66669H4.00002C3.6464 4.66669 3.30726 4.80716 3.05721 5.05721C2.80716 5.30726 2.66669 5.6464 2.66669 6.00002V12C2.66669 12.3536 2.80716 12.6928 3.05721 12.9428C3.30726 13.1929 3.6464 13.3334 4.00002 13.3334H10C10.3536 13.3334 10.6928 13.1929 10.9428 12.9428C11.1929 12.6928 11.3334 12.3536 11.3334 12V11.3334"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li className={s.userInfo}>
            <img src={UserImg} alt="" />
            <div>
              <span>Сулейманов Камиль</span>
              <small>Операция: Аллея/Кс ~ 10 минут назад</small>
            </div>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66669 4.66669H4.00002C3.6464 4.66669 3.30726 4.80716 3.05721 5.05721C2.80716 5.30726 2.66669 5.6464 2.66669 6.00002V12C2.66669 12.3536 2.80716 12.6928 3.05721 12.9428C3.30726 13.1929 3.6464 13.3334 4.00002 13.3334H10C10.3536 13.3334 10.6928 13.1929 10.9428 12.9428C11.1929 12.6928 11.3334 12.3536 11.3334 12V11.3334"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShiftPlan;
