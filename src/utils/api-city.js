import { API_ROOT_URL } from "../configs/urls";
import { TOKEN } from "../configs/token";
import { fetchLocationErrorMessage } from "../constants/constants";

//API gets available locations matching the query
//OpenWeather API docs please refer to https://openweathermap.org/api/geocoding-api

//LIMIT param limits the number of locations with the same name in the OpenWeather API response (for instance, London in the UK and London in the US).
const LIMIT = "4";

class ApiCitySearch {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getCity(cityName) {
    return fetch(
      `${this._url}/direct?q=${cityName}&limit=${LIMIT}&appid=${this._token}`
    ).then(this._checkResult);
  }

  _checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(fetchLocationErrorMessage);
    }
  };
}

export const apiCitySearch = new ApiCitySearch(
  `${API_ROOT_URL}/geo/1.0`,
  TOKEN
);
