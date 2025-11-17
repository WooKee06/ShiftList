import s from "./Request.module.scss";

const Request = () => {
  return (
    <div className={s.request}>
      <ul className={s.requestList}>
        <li className={s.requestitem}>
          <div className={s.user}>
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div>
              <span>Мамедов Асад</span>
              <small>Записался на смену 40 мин назад</small>
            </div>
          </div>
          <button className={s.btn}>Назначить на смену</button>
        </li>
        <li className={s.requestitem}>
          <div className={s.user}>
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div>
              <span>Мамедов Асад</span>
              <small>Записался на смену 40 мин назад</small>
            </div>
          </div>
          <button className={s.btn}>Назначить на смену</button>
        </li>
        <li className={s.requestitem}>
          <div className={s.user}>
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div>
              <span>Мамедов Асад</span>
              <small>Записался на смену 40 мин назад</small>
            </div>
          </div>
          <button className={s.btn}>Назначить на смену</button>
        </li>
      </ul>
    </div>
  );
};

export default Request;
