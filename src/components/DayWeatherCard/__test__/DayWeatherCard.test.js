import { render, screen } from "@testing-library/react";
import { mockDailyWeather } from "../../../assets/__mocks__/mockedDailyWeatherData";
import DayWeatherCard from "../DayWeatherCard";

describe("DayWeatherCard", () => {
  it("renders min temperature of the day", () => {
    render(<DayWeatherCard dayWeather={mockDailyWeather} />);
    const minTempElement = screen.getByText(/275 °C/i);
    expect(minTempElement).toBeInTheDocument();
  });

  it("renders daily weather icon alt text", () => {
    render(<DayWeatherCard dayWeather={mockDailyWeather} />);
    const dayWeatherCardIconElement = screen.getByAltText("Rain");
    expect(dayWeatherCardIconElement).toBeInTheDocument();
  });
});
