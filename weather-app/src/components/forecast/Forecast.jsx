/* eslint-disable react/prop-types */
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data, loading }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  if (!loading || data.list.length === 0) return <></>;

  return (
    <div className="flex flex-col justify-evenly md:justify-around md:p-[1.5rem] p-[0.5rem] bg-[#04080a] border-gray-400 md:h-[16rem] h-[35vh] border-1 md:w-full w-[95vw]  max-w-[45rem] rounded-[1.5rem]">
      <h6 className='md:text-2xl text-[#ffffff] font-bold'>Extended Forecast</h6>
      <div className="flex justify-between overflow-x-auto ">
        {data &&
          data.list.splice(0, 7).map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:p-0 p-[0.5rem] justify-center items-center"
            >
              <h6 className="text-[#92ffff] md:font-semibold font-normal " >{forecastDays[idx]}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                className="rounded-full md:h-[4rem] md:w-[4rem] h-[2rem] w-[2rem] overflow-hidden "
                alt=""
              />
              <p className="text-[#b8ffff] md:font-bold font-normal">{item.weather[0].main}</p>
              <span className="text-[#b8ffff] md:font-bold font-normal">
                {Math.round(item.main.temp_max)}
                <sup>°</sup>
                <small>/</small>
                {Math.round(item.main.temp_min)}
                <sup>°</sup>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
