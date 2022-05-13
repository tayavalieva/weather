import "./App.css";
import { useEffect, useState } from "react";

import { apiWeather } from "../../utils/api-weather";
import LocationWeatherCard from "../LocationWeatherCard/LocationWeatherCard";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

function App() {
  // apiCitySearch.getCity("London").then((data) => console.log(data));

  const london = {
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
  };

  const [location, setLocation] = useState(london);
  const [forecast, setForecast] = useState(null);

  const appClassName = `app ${
    forecast && forecast.current.temp > 20 ? "theme_warm" : "theme_cold"
  }`;

  useEffect(() => {
    apiWeather
      .getWeather(location.lat, location.lon)
      .then((data) => setForecast(data));
  }, []);

  const handleCitySelect = () => {};

  return (
    <div className={appClassName}>
      <div>
        <AutocompleteInput onSelect={handleCitySelect} />
        {forecast && (
          <LocationWeatherCard location={location} forecast={forecast} />
        )}
      </div>
    </div>
  );
}

export default App;
