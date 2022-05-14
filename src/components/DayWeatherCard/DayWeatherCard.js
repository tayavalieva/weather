import "./DayWeatherCard.css";
import convertUnixTime from "../../utils/date-convertor";
import { ICONS_URL } from "../../configs/urls";

const DayWeatherCard = ({ dayWeather }) => {
  const date = convertUnixTime(dayWeather["dt"]);
  const weatherConditions = dayWeather.weather[0];

  return (
    <div className='daily-weather'>
      <p className='daily-weather__content'>{date}</p>
      <img
        src={`${ICONS_URL}${weatherConditions.icon}.png`}
        alt={weatherConditions.main}
      />
      <p className='daily-weather__content'>{`${dayWeather["temp"][
        "min"
      ].toFixed()} °C`}</p>
      <span className='daily-weather__content'>-</span>
      <p className='daily-weather__content'>{`${dayWeather["temp"][
        "max"
      ].toFixed()} °C`}</p>
    </div>
  );
};

export default DayWeatherCard;
