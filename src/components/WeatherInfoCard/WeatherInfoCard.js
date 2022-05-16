import styles from "./WeatherInfoCard.module.css";
import { Paper, Stack } from "@mui/material";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { ICONS_URL } from "../../configs/urls";

//LocationWeatherCard: renders current weather and 7 days forecast
//Props expected:
//location: an object with location name, country, latitude and longtitude provided by API
//forecast: an object with current and daily weather forecast data provided by API
//Please refer to API docs for data example: https://openweathermap.org/api/one-call-api

const LocationWeatherCard = ({ location, forecast }) => {
  const currentWeather = forecast.current;
  const currentWeatherConditions = currentWeather.weather[0];
  const dailyWeather = forecast.daily;

  return (
    <>
      <Paper className={styles["weather-info__card"]}>
        <h1 className={styles["weather-info__current-location"]}>
          {location.name}
        </h1>
        <div className={styles["weather-info__current"]}>
          <p>{`${currentWeather.temp.toFixed()} °C`}</p>
          <p>{`Feels like: ${currentWeather.feels_like.toFixed()} °C`}</p>
          <img
            src={`${ICONS_URL}${currentWeatherConditions.icon}@2x.png`}
            alt={currentWeatherConditions.main}
          />
        </div>
        <div className={styles["weekly-weather__card"]}>
          <Stack spacing={1}>
            {dailyWeather.slice(0, 7).map((item, index) => (
              <DayWeatherCard dayWeather={item} key={index} />
            ))}
          </Stack>
        </div>
      </Paper>
    </>
  );
};

export default LocationWeatherCard;
