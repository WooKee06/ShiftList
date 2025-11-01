import { useEffect, useState } from "react";
import s from "./Search.module.scss";
import { UserListStore } from "../model/UserListStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // не забудь стили
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CreateShiftModal from "../../../features/shifts/ui/modals/CreateShiftModal";

const Search = () => {
  const { loading, users, fetchUsers } = UserListStore();
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  dayjs.extend(relativeTime);

  const openModal = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveOperation = (newOperation: string) => {
    console.log(
      "Сохраняем операцию для пользователя",
      selectedUser.id,
      newOperation
    );
  };

  return (
    <div className={s.search}>
      <div className={s.searchInput}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 15.75L13.125 13.125M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z"
            stroke="white"
            strokeOpacity="0.47"
            strokeLinecap="round"
          />
        </svg>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Поиск"
        />
      </div>

      <span>Найдено пользователей {users.count}</span>

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
          : filteredUsers.map((user, idx) => (
              <li key={idx} className={s.userInfo}>
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div>
                  <span>{user.firstName}</span>
                  <small>
                    Операция:{" "}
                    {user.shifts.length > 0
                      ? user.shifts.at(-1)?.operation
                      : "Нет операций"}{" "}
                    {user.shifts.length > 0
                      ? " ~ " + dayjs(user.shifts.at(-1)?.date).fromNow()
                      : ""}
                  </small>
                </div>

                <button onClick={() => openModal(user)}>
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

      <CreateShiftModal
        userName={selectedUser?.firstName || ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentOperation={selectedUser?.shifts.at(-1)?.operation || ""}
        onSave={handleSaveOperation}
      />
    </div>
  );
};

export default Search;
