export const getPageTheme = (styles, forecast) => {
  if (forecast) {
    return forecast.current.temp > 20 ? styles.theme_warm : styles.theme_cold;
  }
  return styles.theme_cold;
};
