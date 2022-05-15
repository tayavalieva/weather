import styles from "./ClearInputButton.module.css";

const ClearInputButton = ({ onClick }) => {
  return (
    <button
      type='reset'
      className={styles["clear-input-button"]}
      onClick={onClick}
    />
  );
};

export default ClearInputButton;
