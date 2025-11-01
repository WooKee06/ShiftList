import s from "./Applications.module.scss";
import { useEffect } from "react";
import { useCarsStore } from "../model/useApplicationsStore";
import Skeleton from "react-loading-skeleton";

const Applications = () => {
  const { loading, shifts, fetchApplications } = useCarsStore();

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  console.log(shifts);

  return (
    <div className={s.Applications}>
      <span className={s.shiftTitle}>Заявки</span>
      <ul className={s.userList}>
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <li key={idx} className={s.userInfo}>
                <Skeleton circle width={50} height={50} />
                <div className={s.userInfoText}>
                  <Skeleton width={200} height={20} />
                  <Skeleton width={300} height={15} />
                </div>
              </li>
            ))
          : shifts.map((shift, index) => (
              <li key={index} className={s.userInfo}>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div>
                  <span>{shift.user.firstName}</span>
                  <small>Операция: {shift.operation} ~ 10 минут назад</small>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Applications;
