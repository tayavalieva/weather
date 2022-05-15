import styles from "./App.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { apiWeather } from "../../utils/api-weather";
import { apiCitySearch } from "../../utils/api-city";
import { defaultLocation, getPageTheme } from "../../constants/constants";
import { Alert, LinearProgress } from "@mui/material";
import WeatherInfoCard from "../WeatherInfoCard/WeatherInfoCard";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

function App() {
  const [location, setLocation] = useState(() => {
    const location = localStorage.getItem("currentLocation");
    return location == null ? defaultLocation : JSON.parse(location);
  });
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const pageClassName = cn(styles.page, getPageTheme(styles, forecast));

  useEffect(() => {
    apiWeather
      .getWeather(location.lat, location.lon)
      .then((data) => {
        setForecast(data);
        setError(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
      })
      .finally(setIsLoading(false));
  }, []);

  const handleLocationSelect = (location) => {
    setIsLoading(true);
    setLocation(location);
    localStorage.setItem("currentLocation", JSON.stringify(location));
    apiWeather
      .getWeather(location.lat, location.lon)
      .then((data) => {
        setForecast(data);
        setError(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
      })
      .finally(setIsLoading(false));
  };

  const getLocations = (searchTerm) => {
    return apiCitySearch.getCity(searchTerm);
  };

  return (
    <div className={pageClassName}>
      <div className={styles.page__container}>
        <div className={styles.App}>
          <section className='search'>
            <AutocompleteInput
              onSelect={handleLocationSelect}
              suggestionsProvider={getLocations}
            />
          </section>
          {isLoading ? (
            <LinearProgress className={styles.preloader} />
          ) : (
            <section className={styles.forecast}>
              {error ? (
                <Alert severity='error' className={styles.error}>
                  {errorMessage}
                </Alert>
              ) : (
                forecast && (
                  <WeatherInfoCard location={location} forecast={forecast} />
                )
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
