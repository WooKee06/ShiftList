import s from "./Header.module.scss";
import Search from "../../../../src/assets/img/HeaderSvg/flowbite_search-outline.svg";
import List from "../../../../src/assets/img/HeaderSvg/icon-park-outline_list.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.userImg}></div>
      <div className={s.actions}>
        <button>
          <img src={Search} alt="" />
        </button>
        <button>
          <img src={List} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
