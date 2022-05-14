import "./AutocompleteInput.css";
import { useState, useEffect, useCallback } from "react";
import { apiCitySearch } from "../../utils/api-city";
import DropdownList from "../DropdownList/DropdownList";

const AutocompleteInput = ({ onSelect }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getInputSuggestions = (value) => {
    return apiCitySearch.getCity(value);
  };

  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
      setShowSuggestions(true);
    },
    [setValue, setShowSuggestions]
  );

  const handleSelectSuggestion = (suggestion) => {
    const location = suggestion["name"];
    const country = suggestion["country"];
    setValue(`${location}, ${country}`);
    setShowSuggestions(false);
    onSelect(suggestion);
  };

  useEffect(() => {
    if (value) {
      getInputSuggestions(value)
        .then((suggestions) => {
          setSuggestions(suggestions);
          console.log(suggestions);
        })
        .catch((e) => console.error(e));
    }
  }, [value]);

  return (
    <div className='input-autocomplete'>
      <div className='input-wrapper'>
        <input
          type='text'
          name='autocomplete'
          className='input'
          value={value}
          placeholder='City'
          onChange={handleInputChange}
        />
      </div>
      {suggestions.length > 0 && value.length > 0 && showSuggestions && (
        <DropdownList
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
        />
      )}
    </div>
  );
};

export default AutocompleteInput;
