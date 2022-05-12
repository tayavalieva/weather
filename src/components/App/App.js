import "./App.css";
import { apiCitySearch } from "../../utils/api-city";
import Input from "../Input/Input";

function App() {
  // apiCitySearch.getCity("London").then((data) => console.log(data));

  const cities = [{ label: "Berlin" }, { label: "London" }, { label: "Berd" }];
  return (
    <div className='app'>
      <div>
        <Input cities={cities} />
      </div>
    </div>
  );
}

export default App;
