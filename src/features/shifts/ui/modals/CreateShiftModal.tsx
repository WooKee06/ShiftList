import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./CreateShiftModal.module.scss";
import { toast } from "react-toastify";
import { UserListApi } from "../../../../widgets/Search/api/UserListApi";

interface CreateShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  currentOperation: string;
  user: any;
  onSave: (operation: string, alley?: string) => void;
}

const operations = ["Примека мелочи", "Сгт размещение", "Аллея"];
const alleys = [
  "A1",
  "A-2KC",
  "A-3KC",
  "B1",
  "B-2KC",
  "B-3KC",
  "C1",
  "C-2KC",
  "C-3KC",
  "D1",
  "D-2KC",
  "D-3KC",
  "E1",
  "E-2KC",
  "E-3KC",
  "F1",
  "F-2KC",
  "F-3KC",
  "G1",
  "G-2KC",
  "G-3KC",
  "H1",
];

const CreateShiftModal: React.FC<CreateShiftModalProps> = ({
  isOpen,
  onClose,
  userName,
  user,
  currentOperation,
  onSave,
}) => {
  const [selectedOperation, setSelectedOperation] = useState(currentOperation);
  const [selectedAlley, setSelectedAlley] = useState(alleys[0]);

  useEffect(() => {
    if (selectedOperation !== "Аллея") {
      setSelectedAlley("");
    }
  }, [selectedOperation]);

  const handleSave = async () => {
    try {
      await UserListApi.addShift(user.id, {
        operation: selectedOperation,
        date: new Date().toISOString(),
        status: "active",
      });

      toast.success(
        `${userName} теперь стоит на операции: ${selectedOperation}${
          selectedOperation === "Аллея" ? ` (${selectedAlley})` : ""
        }`
      );

      onSave(
        selectedOperation,
        selectedOperation === "Аллея" ? selectedAlley : undefined
      );
      onClose();
    } catch (err) {
      toast.error("Не удалось добавить на операцию");
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={s.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              className={s.modal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_k-fcOB9HCy2pqHpDyRMfxlKdp0dQNS_WHMjqH9MvGcdfs=s900-c-k-c0x00ffffff-no-rj"
                alt=""
                className={s.img}
              />
              <span>Пользователь:</span>
              <h3> {userName}</h3>
              <span>На какую операцию записан(а):</span>
              <h3> {currentOperation || "Нет операции"}</h3>

              <div className={s.selectWrapper}>
                <label htmlFor="operationSelect">Выберите операцию:</label>
                <select
                  id="operationSelect"
                  value={selectedOperation}
                  onChange={(e) => setSelectedOperation(e.target.value)}
                >
                  {operations.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>

              {selectedOperation === "Аллея" && (
                <div className={s.selectWrapper}>
                  <label htmlFor="alleySelect">Выберите аллею:</label>
                  <select
                    id="alleySelect"
                    value={selectedAlley}
                    onChange={(e) => setSelectedAlley(e.target.value)}
                  >
                    {alleys.map((alley) => (
                      <option key={alley} value={alley}>
                        {alley}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className={s.buttons}>
                <button onClick={onClose} className={s.cancel}>
                  Отмена
                </button>
                <button onClick={handleSave} className={s.save}>
                  Добавить на операцию
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreateShiftModal;
