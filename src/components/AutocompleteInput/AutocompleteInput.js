import styles from "./AutocompleteInput.module.css";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import DropdownList from "../DropdownList/DropdownList";
import ClearInputButton from "../ClearInputButton/ClearInputButton";
import { noSuggestionMessage } from "../../constants/constants";

//AutocompleteInput component.
//Props expected:
//onSelect - function handling click on a suggested location and setting selected location to the local storage
//suggestionsProvider - function making API calls to get filtered locations matching user's input

const AutocompleteInput = ({ onSelect, suggestionsProvider }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchTerm] = useDebounce(inputValue, 250);

  const handleInputChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
      setShowSuggestions(true);
    },
    [setInputValue, setShowSuggestions]
  );

  const handleSelectSuggestion = (suggestion) => {
    const location = suggestion["name"];
    const country = suggestion["country"];
    setInputValue(`${location}, ${country}`);
    setShowSuggestions(false);
    onSelect(suggestion);
  };

  useEffect(() => {
    if (searchTerm) {
      suggestionsProvider(searchTerm)
        .then((suggestions) => {
          setSuggestions(suggestions);
          setErrorMessage(null);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(error.message);
        });
    }
  }, [searchTerm, suggestionsProvider]);

  const handleClearInputClick = () => {
    setInputValue("");
  };

  const errorMessageToShow = () => {
    if (errorMessage) {
      return errorMessage;
    }
    if (inputValue.length > 0 && suggestions.length === 0) {
      return noSuggestionMessage;
    }
    return null;
  };

  return (
    <div className={styles["input-autocomplete"]}>
      <div className={styles["input-wrapper"]}>
        <input
          type='text'
          name='autoComplete'
          className={styles.input}
          value={inputValue}
          placeholder='City'
          onChange={handleInputChange}
          autoComplete='off'
        />
        <ClearInputButton onClick={handleClearInputClick} />
      </div>
      {inputValue.length > 0 && showSuggestions && (
        <DropdownList
          suggestions={suggestions}
          errorMessage={errorMessageToShow()}
          onSelectSuggestion={handleSelectSuggestion}
          data-testid='dropdown'
        />
      )}
    </div>
  );
};

export default AutocompleteInput;
