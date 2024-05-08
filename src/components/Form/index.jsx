import styles from "./style.module.scss";
import { Input } from "../forms/Input";
import { Select } from "../forms/Select";
import { useState } from "react";
import { v4 } from "uuid";

export const Form = ({ addBalance }) => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("1");
  const [type, setType] = useState("Entrada");

  const submitForm = (event) => {
    event.preventDefault();

    addBalance({
      id: v4(),
      message: message,
      value: parseFloat(value),
      type: type,
    });

    setMessage("");
    setValue(1);
    setType("Entrada");
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <div>
        <div className={styles.form__input}>
          <Input
            text="Descrição"
            id="message"
            type="text"
            value={message}
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setMessage(event.target.value)}
            required={true}
          />
          <p className="text2">Ex: Compra de roupas</p>
        </div>
        <Input
          text="Valor (R$)"
          id="value"
          type="number"
          value={value}
          placeholder="Digite um valor"
          onChange={(event) => setValue(event.target.value)}
          required={true}
        />
        <Select
          text="Tipo de valor"
          id="type"
          type={type}
          onChange={(event) => setType(event.target.value)}
        />
      </div>
      <button type="submit" className="btn__primary text1">
        Inserir valor
      </button>
    </form>
  );
};
