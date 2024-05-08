import styles from "./style.module.scss";
import { ListCard } from "../ListCard";

export const ListSection = ({ balanceList, deleteBalance }) => {
  return (
    <section className={styles.container}>
      <h2 className="title3">Resumo financeiro</h2>
      <ul>
        <div hidden={balanceList.length < 1 ? false : true}>
          <h3 className="title2">Você ainda não possui nenhum lançamento</h3>
        </div>
        {balanceList.map((balance) => {
          return (
            <ListCard
              key={balance.id}
              card={balance}
              deleteBalance={deleteBalance}
            />
          );
        })}
      </ul>
    </section>
  );
};
