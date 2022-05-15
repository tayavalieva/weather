import styles from "./App.module.css";
import cn from "classnames";
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

  const pageClassName = cn(
    styles.page,
    forecast && forecast.current.temp > 20
      ? styles.theme_warm
      : styles.theme_cold
  );

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
      <div className={styles.page__container}>
        <div className={styles.App}>
          <section className='search'>
            <AutocompleteInput onSelect={handleLocationSelect} />
          </section>
          <section className={styles.forecast}>
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
