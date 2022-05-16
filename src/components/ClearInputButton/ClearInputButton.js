import styles from "./ClearInputButton.module.css";

//ClearInputButton component - clears input value on click
//Props expected: onClick: function that clears input value on button click

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
