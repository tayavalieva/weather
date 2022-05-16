import styles from "./DayWeatherCard.module.css";
import convertUnixTime from "../../utils/date-convertor";
import { ICONS_URL } from "../../configs/urls";

//DayWeatherCard: renders daily weather info
//Props expected: an object with the weather data by date provided by API
//Please refer to API docs for data example: https://openweathermap.org/api/one-call-api

const DayWeatherCard = ({ dayWeather }) => {
  const date = convertUnixTime(dayWeather["dt"]);
  const weatherConditions = dayWeather.weather[0];

  return (
    <div className={styles["daily-weather"]}>
      <p className={styles["daily-weather__content"]}>{date}</p>
      <img
        src={`${ICONS_URL}${weatherConditions.icon}.png`}
        alt={weatherConditions.main}
      />
      <p className={styles["daily-weather__content"]}>{`${dayWeather["temp"][
        "min"
      ].toFixed()} °C`}</p>
      <span className={styles["daily-weather__content"]}>-</span>
      <p className={styles["daily-weather__content"]}>{`${dayWeather["temp"][
        "max"
      ].toFixed()} °C`}</p>
    </div>
  );
};

export default DayWeatherCard;
