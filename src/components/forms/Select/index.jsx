import styles from "./style.module.scss";

export const Select = ({ text, id, type, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className="text1">
        {text}
      </label>
      <select id={id} value={type} onChange={onChange}>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
    </div>
  );
};
