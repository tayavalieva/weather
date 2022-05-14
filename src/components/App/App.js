import "./App.css";
import { useEffect, useState } from "react";
import { apiWeather } from "../../utils/api-weather";
import { defaultLocation } from "../../constants/constants";
import LocationWeatherCard from "../LocationWeatherCard/LocationWeatherCard";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

function App() {
  const [location, setLocation] = useState(() => {
    const location = localStorage.getItem("currentLocation");
    return location == null ? defaultLocation : JSON.parse(location);
  });
  const [forecast, setForecast] = useState(null);

  const pageClassName = `page ${
    forecast && forecast.current.temp > 20 ? "theme_warm" : "theme_cold"
  }`;

  useEffect(() => {
    apiWeather
      .getWeather(location.lat, location.lon)
      .then((data) => setForecast(data));
  }, []);

  const handleLocationSelect = (location) => {
    setLocation(location);
    localStorage.setItem("currentLocation", JSON.stringify(location));
    apiWeather
      .getWeather(location.lat, location.lon)
      .then((data) => setForecast(data));
  };

  return (
    <div className={pageClassName}>
      <div className='page__container'>
        <div className='App'>
          <section className='search'>
            <AutocompleteInput onSelect={handleLocationSelect} />
          </section>
          <section className='forecast'>
            {forecast && (
              <LocationWeatherCard location={location} forecast={forecast} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
