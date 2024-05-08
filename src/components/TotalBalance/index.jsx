import styles from "./style.module.scss";

export const TotalBalance = ({ balanceList }) => {
  const totalSum = balanceList.reduce((sum, item) => {
    return item.type === "Entrada" ? sum + item.value : sum - item.value;
  }, 0);

  return (
    <div className={styles.container}>
      <div>
        <h2 className="title3">Valor total:</h2>
        <h2 className={`title3 ${styles.totalValue}`}>
          {totalSum.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
      <p className="text2">O valor se refere ao saldo</p>
    </div>
  );
};
