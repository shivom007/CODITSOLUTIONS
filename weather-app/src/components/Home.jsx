import Search from "./search/Search";
import CurrentWeather from "./current-weather/CurrentWeather";
import Forecast from "./forecast/Forecast";
import { useState } from "react";
const Home = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(suggestion)
  return (
    <div className="flex flex-col gap-3 items-center justify-center overflow-y-auto w-full h-screen">
      <h1 className='md:text-8xl text-2xl font-bold text-red-700'>WEATHER APP</h1>
      <Search
        setCurrentWeather={setCurrentWeather}
        setForecast={setForecast}
        setLoading={setLoading}
      />

      <CurrentWeather data={currentWeather} loading={loading} />
      <Forecast data={forecast} loading={loading} />
    </div>
  );
};

export default Home;
