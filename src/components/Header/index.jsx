import styles from "./style.module.scss";
import NuKenzie_dark from "../../assets/NuKenzie_black.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={NuKenzie_dark} alt="NuKenzie" />
      </div>
    </header>
  );
};
