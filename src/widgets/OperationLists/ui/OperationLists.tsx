import { useState } from "react";
import { motion } from "framer-motion";
import s from "./OperationLists.module.scss";
import Request from "../../../features/Operation/ui/Request/Request";
import Lists from "../../../features/Operation/ui/Lists/Lists";

const OperationLists = () => {
  const [activeTab, setActiveTab] = useState<"requests" | "lists">("requests");

  return (
    <div className={s.OperationLists}>
      <div className={s.tabs}>
        {["requests", "lists"].map((tab) => (
          <button
            key={tab}
            className={`${s.tabButton} ${activeTab === tab ? s.active : ""}`}
            onClick={() => setActiveTab(tab as "requests" | "lists")}
          >
            {tab === "requests" ? "Заявки" : "Списки"}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className={s.activeIndicator}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className={s.content}>
        {activeTab === "requests" ? (
          <motion.div
            key="requests"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Request />
          </motion.div>
        ) : (
          <motion.div
            key="lists"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Lists />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OperationLists;
