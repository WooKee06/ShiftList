import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./CreateShiftModal.module.scss";
import { toast } from "react-toastify";

interface CreateShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  currentOperation: string;
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

  const handleSave = () => {
    onSave(
      selectedOperation,
      selectedOperation === "Аллея" ? selectedAlley : undefined
    );
    onClose();

    toast.success(
      `${userName} теперь стоит на операции: ${selectedOperation}${
        selectedOperation === "Аллея" ? ` (${selectedAlley})` : ""
      }`
    );
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
              <h3>Пользователь: {userName}</h3>
              <p>Текущая операция: {currentOperation || "Нет операции"}</p>

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
