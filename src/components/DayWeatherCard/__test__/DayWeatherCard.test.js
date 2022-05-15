import { render, screen } from "@testing-library/react";
import DayWeatherCard from "../DayWeatherCard";

const dailyWeather = {
  dt: 1618308000,
  sunrise: 1618282134,
  sunset: 1618333901,
  moonrise: 1618284960,
  moonset: 1618339740,
  moon_phase: 0.04,
  temp: {
    day: 279.79,
    min: 275.09,
    max: 284.07,
    night: 275.09,
    eve: 279.21,
    morn: 278.49,
  },
  feels_like: {
    day: 277.59,
    night: 276.27,
    eve: 276.49,
    morn: 276.27,
  },
  pressure: 1020,
  humidity: 81,
  dew_point: 276.77,
  wind_speed: 3.06,
  wind_deg: 294,
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d",
    },
  ],
  clouds: 56,
  pop: 0.2,
  rain: 0.62,
  uvi: 1.93,
};

it("renders min temperature of the day", () => {
  render(<DayWeatherCard dayWeather={dailyWeather} />);
  const minTempElement = screen.getByText(/275 °C/i);
  expect(minTempElement).toBeInTheDocument();
});

it("renders weather icon alt text", () => {
  render(<DayWeatherCard dayWeather={dailyWeather} />);
  const dayWeatherCardIconElement = screen.getByAltText("Rain");
  expect(dayWeatherCardIconElement).toBeInTheDocument();
});
