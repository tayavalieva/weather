import styles from "./AutocompleteInput.css";
import { useState, useEffect, useCallback } from "react";
import { apiCitySearch } from "../../utils/api-city";
//     import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

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
      className={styles.input}
      value={value}
      placeholder='City'
      onChange={handleInputChange}
    />

    // const Input = ({ cities }) => {
    //   return (
    //     <Autocomplete
    //       disablePortal
    //       id='input'
    //       options={cities}
    //       sx={{ width: 300 }}
    //       renderInput={(params) => <TextField {...params} label='City' />}
    //     ></Autocomplete>
    //   );
    // };
  );
};

export default AutocompleteInput;
