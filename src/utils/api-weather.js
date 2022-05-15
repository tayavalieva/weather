import { API_ROOT_URL } from "../configs/urls";
import { TOKEN } from "../configs/token";
import { fetchWeatherErrorMessage } from "../constants/constants";

class ApiWeather {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getWeather(lat, lon) {
    return fetch(
      `${this._url}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${this._token}`
    ).then(this._checkResult);
  }

  _checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error(fetchWeatherErrorMessage);
    }
  };
}

export const apiWeather = new ApiWeather(`${API_ROOT_URL}/data/2.5`, TOKEN);
