import styles from "./DropdownList.module.css";
import cn from "classnames";

const DropdownList = ({
  suggestions,
  onSelectSuggestion,
  inputValue,
  errorMessage,
}) => {
  return (
    <div className={styles.dropdown}>
      {suggestions.length < 1 && inputValue.length > 0 ? (
        <ul
          className={cn(styles.dropdown__list, styles.dropdown__list_inactive)}
        >
          <li className={styles.dropdown__item}>{errorMessage}</li>
        </ul>
      ) : (
        <ul className={styles.dropdown__list}>
          {suggestions.map((suggestion, index) => (
            <li
              className={cn(
                styles.dropdown__list,
                styles.dropdown__list_active
              )}
              key={`${index}${suggestion.name}`}
              id={index}
              onClick={() => {
                onSelectSuggestion(suggestion);
              }}
            >{`${suggestion.name},  ${suggestion.country}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
