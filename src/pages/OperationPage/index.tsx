import Title from "../../features/Operation/ui/title/Title";
import OperationLists from "../../widgets/OperationLists/ui/OperationLists";

const OperationPage = () => {
  return (
    <>
      <Title title="Приемка мелочи " totalSlots={9} />
      <OperationLists />
    </>
  );
};

export default OperationPage;
