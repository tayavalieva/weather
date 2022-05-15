export const defaultLocation = {
  name: "Manchester",
  lat: 53.4794892,
  lon: -2.2451148,
  country: "GB",
  state: "England",
};

export const noSuggestionMessage = "No location found";
export const fetchWeatherErrorMessage =
  "Unable to fetch the weather data - please try again later";
export const fetchLocationErrorMessage =
  "Unable to fetch the location data - please try again later";

export const getPageTheme = (styles, forecast) => {
  if (forecast) {
    return forecast.current.temp > 20 ? styles.theme_warm : styles.theme_cold;
  }
  return styles.theme_cold;
};
