import React from "react";
import s from "./OperationModal.module.scss";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

interface CreateOperationModalProps {
  isOpen: boolean;
  onCLose: () => void;
}

const OperationModal: React.FC<CreateOperationModalProps> = ({
  isOpen,
  onCLose,
}) => {
  const AddUserOnOperation = () => {
    toast.success("Пользователь добавлен на приемку 02");
    onCLose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className={s.modalBg}>
            <div className={s.modal}>
              <button className={s.modalclose} onClick={() => onCLose()}>
                <svg
                  width="23"
                  height="8"
                  viewBox="0 0 33 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5 4.18198C32.7761 4.18198 33 3.95813 33 3.68198C33 3.40584 32.7761 3.18198 32.5 3.18198L32.5 3.68198L32.5 4.18198ZM0.146446 3.32843C-0.0488167 3.52369 -0.0488167 3.84027 0.146446 4.03553L3.32843 7.21752C3.52369 7.41278 3.84027 7.41278 4.03553 7.21752C4.2308 7.02225 4.2308 6.70567 4.03553 6.51041L1.20711 3.68198L4.03553 0.853554C4.2308 0.658292 4.2308 0.34171 4.03553 0.146448C3.84027 -0.0488147 3.52369 -0.0488147 3.32843 0.146447L0.146446 3.32843ZM32.5 3.68198L32.5 3.18198L0.5 3.18198L0.5 3.68198L0.5 4.18198L32.5 4.18198L32.5 3.68198Z"
                    fill="white"
                    fill-opacity="1"
                  />
                </svg>
                Назад
              </button>
              <div className={s.input}>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.625 16.625L13.8542 13.8542M13.4583 7.91667C13.4583 8.64441 13.315 9.36503 13.0365 10.0374C12.758 10.7097 12.3498 11.3206 11.8352 11.8352C11.3206 12.3498 10.7097 12.758 10.0374 13.0365C9.36503 13.315 8.64441 13.4583 7.91667 13.4583C7.18892 13.4583 6.46831 13.315 5.79596 13.0365C5.12362 12.758 4.51271 12.3498 3.99812 11.8352C3.48353 11.3206 3.07533 10.7097 2.79683 10.0374C2.51834 9.36503 2.375 8.64441 2.375 7.91667C2.375 6.44693 2.95885 5.03738 3.99812 3.99812C5.03738 2.95885 6.44693 2.375 7.91667 2.375C9.38641 2.375 10.796 2.95885 11.8352 3.99812C12.8745 5.03738 13.4583 6.44693 13.4583 7.91667Z"
                    stroke="white"
                    strokeOpacity="0.34"
                    strokeLinecap="round"
                  />
                </svg>

                <input type="text" placeholder="Имя..." />
              </div>

              <ul className={s.userList}>
                <section className={s.activeUsers}>
                  <span>Пользователи на операции</span>
                  <li className={s.userInfo}>
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <span>Сулейманов Камиль</span>
                      <small>Записался: 10 мин назад</small>
                    </div>

                    <button onClick={() => AddUserOnOperation()}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75C9.19891 15.75 9.38968 15.671 9.53033 15.5303C9.67098 15.3897 9.75 15.1989 9.75 15V9.75H15C15.1989 9.75 15.3897 9.67098 15.5303 9.53033C15.671 9.38968 15.75 9.19891 15.75 9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V8.25H3C2.80109 8.25 2.61032 8.32902 2.46967 8.46967C2.32902 8.61032 2.25 8.80109 2.25 9C2.25 9.19891 2.32902 9.38968 2.46967 9.53033C2.61032 9.67098 2.80109 9.75 3 9.75H8.25V15Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                </section>

                <section className={s.userRecords}>
                  <span>Записались на аллею: А2</span>
                  <li className={s.userInfo}>
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <span>Сулейманов Камиль</span>
                      <small>Записался: 10 мин назад</small>
                    </div>

                    <button onClick={() => AddUserOnOperation()}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75C9.19891 15.75 9.38968 15.671 9.53033 15.5303C9.67098 15.3897 9.75 15.1989 9.75 15V9.75H15C15.1989 9.75 15.3897 9.67098 15.5303 9.53033C15.671 9.38968 15.75 9.19891 15.75 9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V8.25H3C2.80109 8.25 2.61032 8.32902 2.46967 8.46967C2.32902 8.61032 2.25 8.80109 2.25 9C2.25 9.19891 2.32902 9.38968 2.46967 9.53033C2.61032 9.67098 2.80109 9.75 3 9.75H8.25V15Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                </section>

                <section className={s.userRecords}>
                  <span>Все записи на Аллеи</span>
                  <li className={s.userInfo}>
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <span>Сулейманов Камиль</span>
                      <small>Записался: 10 мин назад</small>
                    </div>

                    <button onClick={() => AddUserOnOperation()}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75C9.19891 15.75 9.38968 15.671 9.53033 15.5303C9.67098 15.3897 9.75 15.1989 9.75 15V9.75H15C15.1989 9.75 15.3897 9.67098 15.5303 9.53033C15.671 9.38968 15.75 9.19891 15.75 9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V8.25H3C2.80109 8.25 2.61032 8.32902 2.46967 8.46967C2.32902 8.61032 2.25 8.80109 2.25 9C2.25 9.19891 2.32902 9.38968 2.46967 9.53033C2.61032 9.67098 2.80109 9.75 3 9.75H8.25V15Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className={s.userInfo}>
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <span>Сулейманов Камиль</span>
                      <small>Записался: 10 мин назад</small>
                    </div>

                    <button onClick={() => AddUserOnOperation()}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75C9.19891 15.75 9.38968 15.671 9.53033 15.5303C9.67098 15.3897 9.75 15.1989 9.75 15V9.75H15C15.1989 9.75 15.3897 9.67098 15.5303 9.53033C15.671 9.38968 15.75 9.19891 15.75 9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V8.25H3C2.80109 8.25 2.61032 8.32902 2.46967 8.46967C2.32902 8.61032 2.25 8.80109 2.25 9C2.25 9.19891 2.32902 9.38968 2.46967 9.53033C2.61032 9.67098 2.80109 9.75 3 9.75H8.25V15Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className={s.userInfo}>
                    <img
                      src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                    <div>
                      <span>Сулейманов Камиль</span>
                      <small>Записался: 10 мин назад</small>
                    </div>

                    <button onClick={() => AddUserOnOperation()}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75C9.19891 15.75 9.38968 15.671 9.53033 15.5303C9.67098 15.3897 9.75 15.1989 9.75 15V9.75H15C15.1989 9.75 15.3897 9.67098 15.5303 9.53033C15.671 9.38968 15.75 9.19891 15.75 9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V8.25H3C2.80109 8.25 2.61032 8.32902 2.46967 8.46967C2.32902 8.61032 2.25 8.80109 2.25 9C2.25 9.19891 2.32902 9.38968 2.46967 9.53033C2.61032 9.67098 2.80109 9.75 3 9.75H8.25V15Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                </section>
              </ul>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OperationModal;
