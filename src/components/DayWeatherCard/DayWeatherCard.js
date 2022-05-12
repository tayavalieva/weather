import "./DayWeatherCard.css";
import { Card } from "@mui/material";

const DayWeatherCard = ({ dayWeather }) => {
  return (
    <Card className='day-weather'>
      <p>{dayWeather["dt"]}</p>
      <p>{dayWeather["weather"][0]["main"]}</p>
      <p>{`${dayWeather["temp"]["min"].toFixed()} °C`}</p>
      <span>-</span>
      <p>{`${dayWeather["temp"]["max"].toFixed()} °C`}</p>
    </Card>
  );
};

export default DayWeatherCard;
