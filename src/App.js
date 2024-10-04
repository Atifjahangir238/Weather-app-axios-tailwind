import { useState } from "react";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";

function App() {
  const [city, setCity] = useState('');
  const handleSeach = (enterCity) => {
    setCity(enterCity);
  }
  return (
    <>
      <div className="text-center bg-blue-50  min-h-screen flex flex-col">
        <div className=" m-auto p-7 rounded shadow-lg bg-slate-500">
        <h1 className="font-bold text-4xl text-blue-400">Weather App</h1>
        <SearchBar handleSeach={handleSeach} />
        <Weather city={city} />
        </div>
      </div>
    </>
  );
}

export default App;
