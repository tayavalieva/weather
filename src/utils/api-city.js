import { API_ROOT_URL } from "../configs/urls";
import { TOKEN } from "../configs/token";

const LIMIT = "2";

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
      return Promise.reject(`Error: ${res.status}`);
    }
  };
}

export const apiCitySearch = new ApiCitySearch(
  `${API_ROOT_URL}/geo/1.0`,
  TOKEN
);
