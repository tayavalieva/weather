import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Input = ({ cities }) => {
  return (
    <Autocomplete
      disablePortal
      id='input'
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='City' />}
    ></Autocomplete>
  );
};

export default Input;
