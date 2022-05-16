# Weather App

A responsive Weather Forecast application built with API: https://openweathermap.org/

## Table of Contents

- Setup the Application
- Run the Application
- Run Tests
- Technologies used
- Data sources
- Features
- Testing
- Further plans

### Setup the Application

```console
git clone git@github.com:tayavalieva/weather.git

npm install
```

### Run the Application

Dev mode:

```console
npm run start
```

Production mode:

```console
npm run build
```

### Run Tests

```console
npm run test
```

### Technology used

- ReactJS, HTML5, CSS modules, Material UI, useDebounce hook.
- React Testing Library

### Data sources

- For the city name search:
  https://openweathermap.org/api/geocoding-api

- For the 7-day forecast:
  https://openweathermap.org/api/one-call-api

OpenWeather limits the number of requests at 1000 per day, so I used useDebounce hook to throttle auto suggestions requests. I set 250ms as debounce time to keep smooth user experience.

### Features

- The user specifies a place in the world from by typing in a city name into a text field.
- The field provides autosuggest functionality and shows a list of cities which match the user’s input.
- The autosuggest dropdown menu shows the city name and country.
- The user submits a request by selecting a known city from the autosuggest dropdown menu.
- The application makes live calls to the API and retrieves the relevant weather
  information for the selected city (7-day forecast).
- Selected location is stored at the browser's local storage.
- The results from the API are displayed in a user-friendly way, with relevant icons for the
  forecast.

### Error handling:

- improper user input
- error responses from the API

### Testing

React components are covered with unit tests.
@testing-library/jest-dom & @testing-library/react have been used to test components' functionality.
Mocked cities and forecast data are used to not call real API

### Further plans

- Close dropdown menu and clear the input field on click outside the element
- Select dropdown menu element with keyboard and send a request on click Enter
- Validate user input
- Refactor AutoCompleteInput: move Input to a separate component
- Add routing to open daily weather in new tab
- Show default weather forecast by geolocation
- Show recent search queries in a separate dropdown menu section
- Switch between Celsius and Fahrenheit temperature scales
- Show more weather details: humidity, wind direction, wind speed, sunrise, sunset, etc.
- Switch between metric and imperial units
- Complete test coverage
- Migrate to TypeScript
