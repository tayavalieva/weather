import "./LocationWeatherCard.css";
import { Paper, Card, Stack } from "@mui/material";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";

const LocationWeatherCard = ({ location, forecast }) => {
  const currentWeather = forecast.current;
  const currentWeatherConditions = currentWeather.weather[0]["main"];
  const dailyWeather = forecast.daily;

  return (
    <>
      <Paper className='location-card'>
        <h1>{location.name}</h1>
        {forecast && (
          <>
            <Card className='current-weather__card'>
              <p>{`${currentWeather.temp.toFixed()} °C`}</p>
              <p>{`Feels like: ${currentWeather.feels_like.toFixed()} °C`}</p>
              <p>{currentWeatherConditions}</p>
            </Card>
            <Card className='weekly-weather__card'>
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
