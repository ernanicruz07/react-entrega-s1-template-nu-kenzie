import styles from "./style.module.scss";

export const ListCard = ({ card, deleteBalance }) => {
  const { id, message, value, type } = card;

  return (
    <li
      className={`${styles.card} ${
        card.type === "Entrada" ? styles.borderGreen : styles.borderGrey
      }`}
    >
      <div className={styles.card__info}>
        <div className={styles.info__details}>
          <h2 className="title3">{message}</h2>
          <p className="text2">{type}</p>
        </div>
        <div className={styles.info__value}>
          <p className="text1">
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            onClick={() => deleteBalance(id)}
            className="btn__delete text2"
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
