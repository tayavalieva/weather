import "./AutocompleteInput.css";
import { useState, useEffect, useCallback } from "react";
import { apiCitySearch } from "../../utils/api-city";
import DropdownList from "../DropdownList/DropdownList";
import ClearInputButton from "../ClearInputButton/ClearInputButton";

const AutocompleteInput = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
          console.log(suggestions);
        })
        .catch((e) => console.error(e));
    }
  }, [inputValue]);

  const handleClearInputClick = () => {
    setInputValue("");
  };

  return (
    <div className='input-autocomplete'>
      <div className='input-wrapper'>
        <input
          type='text'
          name='autocomplete'
          className='input'
          value={inputValue}
          placeholder='City'
          onChange={handleInputChange}
          autocomplete='off'
        />
        <ClearInputButton onClick={handleClearInputClick} />
      </div>
      {inputValue.length > 0 && showSuggestions && (
        <DropdownList
          suggestions={suggestions}
          inputValue={inputValue}
          onSelectSuggestion={handleSelectSuggestion}
        />
      )}
    </div>
  );
};

export default AutocompleteInput;
