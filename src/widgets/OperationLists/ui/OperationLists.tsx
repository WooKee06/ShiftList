import { useState, type JSX } from "react";
import { motion } from "framer-motion";

import s from "./OperationLists.module.scss";
import Lists from "../../../features/Operation/ui/Lists/Lists";
import Request from "../../../features/Operation/ui/Request/Request";
import AlleyLists from "../../../features/Operation/ui/Lists/alley/AlleyLists";

interface OperationListsProps {
  pageType: string;
}

const OperationLists: React.FC<OperationListsProps> = ({ pageType }) => {
  const [activeTab, setActiveTab] = useState<"requests" | "lists">("requests");

  const listComponents: Record<string, JSX.Element> = {
    accepting: <Lists />,
    priemka: <Lists />,
    alley: <AlleyLists />,
    placement: <Lists />,
  };

  const ListComponent = listComponents[pageType] || <Lists />;

  return (
    <>
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

      {activeTab === "requests" ? (
        <motion.div
          key="requests"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Request title={pageType} />
        </motion.div>
      ) : (
        <motion.div
          key="lists"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {ListComponent}
        </motion.div>
      )}
    </>
  );
};

export default OperationLists;
