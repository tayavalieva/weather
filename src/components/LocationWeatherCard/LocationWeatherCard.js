import { Paper } from "@mui/material";

const LocationWeatherCard = ({ location }) => {
  return (
    <>
      <Paper>
        <h1>{location}</h1>
        <div></div>
      </Paper>
    </>
  );
};

export default LocationWeatherCard;
