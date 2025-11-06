import React from "react";
import s from "./Title.module.scss";
import { useNavigate } from "react-router-dom";

interface TitleProp {
  title: string;
  totalSlots: number;
}

const Title: React.FC<TitleProp> = ({ title, totalSlots }) => {
  const navigate = useNavigate();

  const HandleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className={s.head}>
      <button onClick={() => HandleBackButton()}>
        <svg
          width="33"
          height="8"
          viewBox="0 0 33 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 4.18198C32.7761 4.18198 33 3.95813 33 3.68198C33 3.40584 32.7761 3.18198 32.5 3.18198L32.5 3.68198L32.5 4.18198ZM0.146447 3.32843C-0.0488155 3.52369 -0.0488156 3.84027 0.146447 4.03553L3.32843 7.21752C3.52369 7.41278 3.84027 7.41278 4.03553 7.21752C4.2308 7.02225 4.2308 6.70567 4.03553 6.51041L1.20711 3.68198L4.03553 0.853554C4.2308 0.658292 4.2308 0.34171 4.03553 0.146448C3.84027 -0.0488146 3.52369 -0.0488146 3.32843 0.146447L0.146447 3.32843ZM32.5 3.68198L32.5 3.18198L0.5 3.18198L0.5 3.68198L0.5 4.18198L32.5 4.18198L32.5 3.68198Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
        Назад
      </button>
      <span className={s.title}>Операция: {title}</span>
      <small className={s.totalSlots}>
        Свободных мест : <strong>{totalSlots}</strong>
      </small>
    </div>
  );
};

export default Title;
