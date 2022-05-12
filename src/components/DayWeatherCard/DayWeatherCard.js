import "./DayWeatherCard.css";
import { Card } from "@mui/material";
import convertUnixTime from "../../utils/date-convertor";

const DayWeatherCard = ({ dayWeather }) => {
  const date = convertUnixTime(dayWeather["dt"]);
  return (
    <Card className='day-weather'>
      <p>{date}</p>
      <p>{dayWeather["weather"][0]["main"]}</p>
      <p>{`${dayWeather["temp"]["min"].toFixed()} °C`}</p>
      <span>-</span>
      <p>{`${dayWeather["temp"]["max"].toFixed()} °C`}</p>
    </Card>
  );
};

export default DayWeatherCard;
