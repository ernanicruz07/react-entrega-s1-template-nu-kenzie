import styles from "./style.module.scss";
import { FormSection } from "../FormSection";
import { ListSection } from "../ListSection";
import { useState } from "react";

export const Main = () => {
  const [balanceList, setBalanceList] = useState([]);

  const addBalance = (balance) => {
    setBalanceList([...balanceList, balance]);
  };

  const deleteBalance = (itemId) => {
    const filteredBalance = balanceList.filter(
      (balance) => balance.id != itemId
    );
    setBalanceList(filteredBalance);
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <FormSection balanceList={balanceList} addBalance={addBalance} />
        <ListSection balanceList={balanceList} deleteBalance={deleteBalance} />
      </div>
    </main>
  );
};
