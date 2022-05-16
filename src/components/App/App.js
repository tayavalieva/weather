import styles from "./App.module.css";
import cn from "classnames";
import { useEffect, useState, useCallback } from "react";
import { apiWeather } from "../../utils/api-weather";
import { apiCitySearch } from "../../utils/api-city";
import { getPageTheme } from "../../utils/get-page-theme";
import { defaultLocation } from "../../constants/constants";
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

  //sets page theme depending on the forecast temperature at the chosen location, default: cold
  const pageClassName = cn(styles.page, getPageTheme(styles, forecast));

  useEffect(() => {
    setIsLoading(true);
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
  }, [location]);

  const handleLocationSelect = (location) => {
    setLocation(location);
    localStorage.setItem("currentLocation", JSON.stringify(location));
  };

  const getLocations = useCallback((searchTerm) => {
    return apiCitySearch.getCity(searchTerm);
  }, []);

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
