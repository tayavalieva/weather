import "./App.css";
import { useState } from "react";
import { apiCitySearch } from "../../utils/api-city";
import LocationWeatherCard from "../LocationWeatherCard/LocationWeatherCard";
import Input from "../Input/Input";

function App() {
  // apiCitySearch.getCity("London").then((data) => console.log(data));
  const [location, setLocation] = useState("London");
  console.log(location);

  const cities = [{ label: "Berlin" }, { label: "London" }, { label: "Berd" }];
  return (
    <div className='app'>
      <div>
        <Input cities={cities} />
        <LocationWeatherCard location={location} />
      </div>
    </div>
  );
}

export default App;
