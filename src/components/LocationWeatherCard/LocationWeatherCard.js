import "./LocationWeatherCard.css";
import { Paper, Card, Stack } from "@mui/material";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";

const LocationWeatherCard = ({ location, forecast }) => {
  const currentWeather = forecast.current;
  const currentWeatherConditions = currentWeather.weather[0]["main"];
  const dailyWeather = forecast.daily;

  return (
    <>
      <Paper>
        <h1>{location.name}</h1>
        {forecast && (
          <>
            <Card>
              <p className='current-weather__temp'>{`${currentWeather.temp.toFixed()} °C`}</p>
              <p className='current-weather__feels-like'>{`Feels like: ${currentWeather.feels_like.toFixed()} °C`}</p>
              <p className='current-weather__desc'>
                {currentWeatherConditions}
              </p>
            </Card>
            <Card>
              <Stack spacing={1}>
                {dailyWeather.slice(0, 7).map((item) => (
                  <DayWeatherCard dayWeather={item} />
                ))}
              </Stack>
            </Card>
          </>
        )}
      </Paper>
    </>
  );
};

export default LocationWeatherCard;
