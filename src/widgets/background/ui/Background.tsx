import s from "./Background.module.scss";
import MainBgImg from "../../../../src/assets/img/BackgroundImg/mainBgImg.png";

const Background = () => {
  return (
    <>
      <div className={s.Background}>
        <img src={MainBgImg} alt="MainBgImg" />
      </div>
    </>
  );
};

export default Background;
