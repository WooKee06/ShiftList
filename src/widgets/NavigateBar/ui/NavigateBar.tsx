import s from "./NavigateBar.module.scss";
import Home from "../../../../src/assets/img/BarSvg/Home.svg";
import Search from "../../../../src/assets/img/BarSvg/search.svg";
import List from "../../../../src/assets/img/BarSvg/list.svg";
import Profile from "../../../../src/assets/img/BarSvg/profile.svg";

const NavigateBar = () => {
  return (
    <div className={s.NavigateBar}>
      <div className={s.NavigateBarLinks}>
        <ul>
          <li className={s.active}>
            <img src={Home} alt="" />
          </li>
          <li>
            <img src={Search} alt="" />
          </li>
          <li>
            <img src={List} alt="" />
          </li>
          <li>
            <img src={Profile} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigateBar;
