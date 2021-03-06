import styles from "./DropdownList.module.css";
import cn from "classnames";

//DropdownList: dropdown menu that renders available suggestions matching current input value
//Props expected:
//suggestions: an array of available suggestions to render
//onSelectSuggestion: function handling click on a suggested location and setting selected location to the local storage
//errorMessage: a string with an error message or null

const DropdownList = ({ suggestions, onSelectSuggestion, errorMessage }) => {
  return (
    <div className={styles.dropdown} data-testid='dropdown'>
      <ul className={styles.dropdown__list}>
        {errorMessage ? (
          <li
            className={cn(styles.dropdown__item, styles.dropdown__error)}
            data-testid='error'
            key={"error"}
          >
            {errorMessage}
          </li>
        ) : (
          suggestions.map((suggestion, index) => (
            <li
              className={cn(
                styles.dropdown__list,
                styles.dropdown__item_active
              )}
              key={`${index}${suggestion.name}`}
              id={index}
              onClick={() => {
                onSelectSuggestion(suggestion);
              }}
            >{`${suggestion.name},  ${suggestion.country}`}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DropdownList;
