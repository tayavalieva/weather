import "./App.css";
import Input from "../Input/Input";

function App() {
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
