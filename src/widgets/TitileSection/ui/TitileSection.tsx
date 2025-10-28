import s from "./TitileSection.module.scss";

const TitileSection = () => {
  return (
    <div className={s.TitileSection}>
      <span>Добро пожаловать, Вячеслав!</span>
      <small>
        Ежедневное собрание в 22:30{" "}
        <button>
          Напомнить
          <svg
            width="15"
            height="15"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9.16666C7.07107 9.16666 8.75 7.48772 8.75 5.41666C8.75 3.34559 7.07107 1.66666 5 1.66666C2.92893 1.66666 1.25 3.34559 1.25 5.41666C1.25 7.48772 2.92893 9.16666 5 9.16666Z"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M5.00001 3.74999V5.41666L6.04168 6.45833M1.45834 1.87499L3.12501 0.833328M8.54168 1.87499L6.87501 0.833328"
              stroke="white"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </small>

      <hr />
    </div>
  );
};

export default TitileSection;
