import "./DayWeatherCard.css";
import convertUnixTime from "../../utils/date-convertor";
import { ICONS_URL } from "../../configs/urls";

const DayWeatherCard = ({ dayWeather }) => {
  const date = convertUnixTime(dayWeather["dt"]);
  const weatherConditions = dayWeather.weather[0];

  return (
    <div className='daily-weather'>
      <p>{date}</p>
      <img
        src={`${ICONS_URL}${weatherConditions.icon}.png`}
        alt={weatherConditions.main}
      />
      <p>{`${dayWeather["temp"]["min"].toFixed()} °C`}</p>
      <span>-</span>
      <p>{`${dayWeather["temp"]["max"].toFixed()} °C`}</p>
    </div>
  );
};

export default DayWeatherCard;
