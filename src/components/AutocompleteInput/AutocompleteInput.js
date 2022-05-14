import "./AutocompleteInput.css";
import { useState, useEffect, useCallback } from "react";
import { apiCitySearch } from "../../utils/api-city";

const AutocompleteInput = ({ onSelect }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getInputSuggestions = (value) => {
    return apiCitySearch.getCity(value);
  };

  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

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
    <input
      type='text'
      name='autocomplete'
      className='input'
      value={value}
      placeholder='City'
      onChange={handleInputChange}
    />
  );
};

export default AutocompleteInput;
