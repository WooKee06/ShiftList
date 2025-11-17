import { useParams } from "react-router-dom";
import Title from "../../features/Operation/ui/title/Title";
import OperationLists from "../../widgets/OperationLists/ui/OperationLists";

const OperationPage = () => {
  const { operation } = useParams();

  const titles: Record<string, string> = {
    accepting: "Приемка мелочи",
    priemka: "Сгт приёмка",
    alley: "Аллея / КС",
    placement: "СГТ размещение",
  };

  const pageTitle = titles[operation ?? ""] || "Неизвестная операция";

  return (
    <>
      <Title title={pageTitle} totalSlots={9} />
      <OperationLists />
    </>
  );
};

export default OperationPage;
