import styles from "./AutocompleteInput.module.css";
import { useState, useEffect, useCallback } from "react";
import { apiCitySearch } from "../../utils/api-city";
import DropdownList from "../DropdownList/DropdownList";
import ClearInputButton from "../ClearInputButton/ClearInputButton";
import { noSuggestionMessage } from "../../constants/constants";

const AutocompleteInput = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getInputSuggestions = (value) => {
    return apiCitySearch.getCity(value);
  };

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
    if (inputValue) {
      getInputSuggestions(inputValue)
        .then((suggestions) => {
          setSuggestions(suggestions);
          setErrorMessage(null);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(error.message);
        });
    }
  }, [inputValue]);

  const handleClearInputClick = () => {
    setInputValue("");
  };

  const errorMessageToShow = () => {
    if (errorMessage) {
      return errorMessage;
    }
    if (inputValue.length > 0 && suggestions.length == 0) {
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
        />
      )}
    </div>
  );
};

export default AutocompleteInput;
