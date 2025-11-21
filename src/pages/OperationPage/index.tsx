import { useParams } from "react-router-dom";
import Title from "../../features/Operation/ui/title/Title";
import OperationLists from "../../widgets/OperationLists/ui/OperationLists";

const OperationPage = () => {
  const { operation } = useParams();

  const operationConfig: Record<
    string,
    { title: string; totalSlots: number; pageType: string }
  > = {
    accepting: {
      title: "Приемка мелочи",
      totalSlots: 9,
      pageType: "accepting",
    },
    priemka: { title: "СГТ приёмка", totalSlots: 9, pageType: "priemka" },
    alley: { title: "Аллея / КС", totalSlots: 9, pageType: "alley" },
    placement: {
      title: "СГТ размещение",
      totalSlots: 9,
      pageType: "placement",
    },
  };

  const config = operationConfig[operation ?? ""] || {
    title: "Неизвестная операция",
    totalSlots: 0,
    pageType: "unknown",
  };

  return (
    <>
      <Title title={config.title} totalSlots={config.totalSlots} />
      <OperationLists pageType={config.pageType} />
    </>
  );
};

export default OperationPage;
