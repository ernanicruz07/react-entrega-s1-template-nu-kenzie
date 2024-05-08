import styles from "./style.module.scss";

export const Input = ({
  text,
  id,
  type,
  value,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className="text1">
        {text}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
