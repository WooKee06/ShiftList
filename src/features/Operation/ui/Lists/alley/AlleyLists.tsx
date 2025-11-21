import s from "./AlleyLists.module.scss";
import AlleyBox from "../../../../../assets/img/Operation/alleyBox.png";
import { useState } from "react";
import OperationModal from "../../modal/OperationModal";

const AlleyLists = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModalOpen = () => {
    setModalOpen(true);
  };
  const handleOpenModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={s.lists}>
        <ul>
          <li>
            <img src={AlleyBox} alt="" />
            <div>
              <section>
                <span>А1</span>
              </section>
            </div>
            <div className={s.btns}>
              <button>Ц.И</button>
              <button className={s.add} onClick={() => handleOpenModalOpen()}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.9166 15.5834H18.4166V7.08335C18.4166 6.70763 18.2674 6.3473 18.0017 6.08162C17.736 5.81594 17.3757 5.66669 17 5.66669C16.6242 5.66669 16.2639 5.81594 15.9982 6.08162C15.7325 6.3473 15.5833 6.70763 15.5833 7.08335V15.5834H7.08329C6.70757 15.5834 6.34723 15.7326 6.08156 15.9983C5.81588 16.264 5.66663 16.6243 5.66663 17C5.66663 17.3757 5.81588 17.7361 6.08156 18.0018C6.34723 18.2674 6.70757 18.4167 7.08329 18.4167H15.5833V26.9167C15.5833 27.2924 15.7325 27.6527 15.9982 27.9184C16.2639 28.1841 16.6242 28.3334 17 28.3334C17.3757 28.3334 17.736 28.1841 18.0017 27.9184C18.2674 27.6527 18.4166 27.2924 18.4166 26.9167V18.4167H26.9166C27.2923 18.4167 27.6527 18.2674 27.9184 18.0018C28.184 17.7361 28.3333 17.3757 28.3333 17C28.3333 16.6243 28.184 16.264 27.9184 15.9983C27.6527 15.7326 27.2923 15.5834 26.9166 15.5834Z"
                    fill="#333041"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li>
            <img src={AlleyBox} alt="" />
            <div>
              <section>
                <span>А2</span>
              </section>
            </div>
            <div className={s.btns}>
              <button className={s.add} onClick={() => handleOpenModalOpen()}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.9166 15.5834H18.4166V7.08335C18.4166 6.70763 18.2674 6.3473 18.0017 6.08162C17.736 5.81594 17.3757 5.66669 17 5.66669C16.6242 5.66669 16.2639 5.81594 15.9982 6.08162C15.7325 6.3473 15.5833 6.70763 15.5833 7.08335V15.5834H7.08329C6.70757 15.5834 6.34723 15.7326 6.08156 15.9983C5.81588 16.264 5.66663 16.6243 5.66663 17C5.66663 17.3757 5.81588 17.7361 6.08156 18.0018C6.34723 18.2674 6.70757 18.4167 7.08329 18.4167H15.5833V26.9167C15.5833 27.2924 15.7325 27.6527 15.9982 27.9184C16.2639 28.1841 16.6242 28.3334 17 28.3334C17.3757 28.3334 17.736 28.1841 18.0017 27.9184C18.2674 27.6527 18.4166 27.2924 18.4166 26.9167V18.4167H26.9166C27.2923 18.4167 27.6527 18.2674 27.9184 18.0018C28.184 17.7361 28.3333 17.3757 28.3333 17C28.3333 16.6243 28.184 16.264 27.9184 15.9983C27.6527 15.7326 27.2923 15.5834 26.9166 15.5834Z"
                    fill="#333041"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li>
            <img src={AlleyBox} alt="" />
            <div>
              <section>
                <span>Б1</span>
              </section>
            </div>
            <div className={s.btns}>
              <button>Г.М</button>
              <button>С.К</button>
            </div>
          </li>
        </ul>
      </div>

      <OperationModal isOpen={modalOpen} onCLose={handleOpenModalClose} />
    </>
  );
};

export default AlleyLists;
