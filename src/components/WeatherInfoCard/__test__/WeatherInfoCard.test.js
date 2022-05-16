import { render, screen } from "@testing-library/react";
import WeatherInfoCard from "../WeatherInfoCard";
import { defaultLocation } from "../../../constants/constants";
import { mockForecast } from "../../../assets/__mocks__/mockedForecastData";

describe("WeatherInfoCard", () => {
  it("renders location name", () => {
    render(
      <WeatherInfoCard location={defaultLocation} forecast={mockForecast} />
    );
    const locationNameElement = screen.getByText(/manchester/i);
    expect(locationNameElement).toBeInTheDocument();
  });

  it("renders Feels like temperature", () => {
    render(
      <WeatherInfoCard location={defaultLocation} forecast={mockForecast} />
    );
    const currentFeelsLikeElement = screen.getByText("Feels like: 283 °C");
    expect(currentFeelsLikeElement).toBeInTheDocument();
  });
});
