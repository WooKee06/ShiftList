import { Link } from "react-router-dom";
import { operations } from "../api/OperationsData";
import s from "./Operations.module.scss";

const Operations = () => {
  return (
    <div className={s.operations}>
      <div className={s.title}>Выберите операцию</div>
      <span className={s.operationsLength}>
        Всего операций: <strong>5</strong>
      </span>

      <ul className={s.operationList}>
        {operations.map((item) => (
          <Link to={item.path} key={item.id}>
            <li className={s.operationItem}>
              <img src={item.image} alt="" />
              <div className={s.operationItemContent}>
                <span>{item.name}</span>
                <section>
                  <small>
                    Свободных мест: <strong>{item.totalSlots}</strong>
                  </small>
                  <small>
                    Уже записались: <strong>{item.takenSlots}</strong>
                  </small>
                </section>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Operations;
