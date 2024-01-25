/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

const Search = ({ setCurrentWeather, setLoading, setForecast }) => {
  const [city, setCity] = useState({});
  const [suggestion, setSuggestion] = useState(null);
  useEffect(() => {
    if (Object.keys(city).length > 0) {
      handleSubmit();
    }
  }, [city]);
  const handleClick = async (name) => {
    setCity(name);
    setSuggestion(null);
  };

  const handleSubmit = async () => {
    
    if (city !== "") {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=5691b3ccb007de1cd83239adf98c432f&units=metric`
        );
        const result = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=5691b3ccb007de1cd83239adf98c432f&units=metric`
        );
        const data = await response.json();
        const data1 = await result.json();
        setForecast(data1);
        setCurrentWeather(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      console.log("no input");
      setSuggestion(null);
    }
  };
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedChange = useRef(
    debounce(async (value) => {
      if (value !== "") {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=5691b3ccb007de1cd83239adf98c432f`
          );
          const data = await response.json();
          setSuggestion(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        console.log("no input");
        setSuggestion(null);
      }
    }, 600)
  );

  return (
    <div className="flex relative flex-col md:w-full w-[95vw] max-w-[70rem] items-center">
      <div className="relative flex w-full max-w-[45rem] items-center">
        <Input
          type="text"
          placeholder="Enter Your City"
          className="border-black rounded-full text-[#ffffff] text-xl h-12 pl-4 pr-12"
          onChange={(e) => {
            debouncedChange.current(e.target.value);
          }}
        />
        <i
          className="absolute text-[#92ffff] right-3 cursor-pointer md:text-[2.5rem] text-[2rem] bx bx-search-alt-2 bx-flip-horizontal"
          onClick={handleSubmit}
        ></i>
      </div>
      <div className="h-auto absolute mt-14 w-full max-w-[45rem] text-[#ffffff] bg-[#004141] rounded-xl  overflow-hidden">
        {suggestion &&
          suggestion.map((s, idx) => (
            <div
              key={idx}
              className="px-4 py-2 cursor-pointer hover:bg-gray-500"
              onClick={() => handleClick(s)}
            >
              {s.name}, {s.state}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
