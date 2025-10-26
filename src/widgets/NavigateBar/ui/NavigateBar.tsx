import s from "./NavigateBar.module.scss";
import Home from "../../../../src/assets/img/BarSvg/Home.svg";
import Search from "../../../../src/assets/img/BarSvg/search.svg";
import List from "../../../../src/assets/img/BarSvg/list.svg";
import Profile from "../../../../src/assets/img/BarSvg/profile.svg";

import { useLocation } from "react-router-dom";
import { NavLink } from "../lib/NavLink";

const links = [
  { to: "/", icon: Home },
  { to: "/search", icon: Search },
  { to: "/shifts", icon: List },
  { to: "/profile", icon: Profile },
];

const NavigateBar = () => {
  const pathname = useLocation().pathname;
  const activeIndex = links.findIndex((link) => link.to === pathname);

  return (
    <div className={s.NavigateBar}>
      <div className={s.NavigateBarLinks}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to}>
                <img src={link.icon} alt="" />
              </NavLink>
            </li>
          ))}

          <div
            className={s.activeIndicator}
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default NavigateBar;
