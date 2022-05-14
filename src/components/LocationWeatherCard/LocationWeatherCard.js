import "./LocationWeatherCard.css";
import { Paper, Card, Stack } from "@mui/material";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { ICONS_URL } from "../../configs/urls";

const LocationWeatherCard = ({ location, forecast }) => {
  const currentWeather = forecast.current;
  const currentWeatherConditions = currentWeather.weather[0];
  const dailyWeather = forecast.daily;

  return (
    <>
      <Paper className='location-card'>
        <h1>{location.name}</h1>
        {forecast && (
          <>
            <div className='current-weather__card'>
              <p>{`${currentWeather.temp.toFixed()} °C`}</p>
              <p>{`Feels like: ${currentWeather.feels_like.toFixed()} °C`}</p>
              <img
                src={`${ICONS_URL}${currentWeatherConditions.icon}@2x.png`}
                alt={currentWeatherConditions.main}
              />
            </div>
            <Card className='weekly-weather__card'>
              <Stack spacing={1}>
                {dailyWeather.slice(0, 7).map((item, index) => (
                  <DayWeatherCard dayWeather={item} key={index} />
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
