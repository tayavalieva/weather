import "./App.css";
import { apiCitySearch } from "../../utils/api-city";
import Input from "../Input/Input";

function App() {
  apiCitySearch.getCity("London").then((data) => console.log(data));

  const cities = [{ label: "Berlin" }, { label: "London" }, { label: "Berd" }];
  return (
    <div className='App'>
      <header className='App-header'>header</header>
      <div>
        <Input cities={cities} />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
