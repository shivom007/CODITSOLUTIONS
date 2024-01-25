/* eslint-disable react/prop-types */
const CurrentWeather = ({data,loading}) => {
    if(!loading) return <></>
  return (
    <div className="flex flex-col justify-evenly md:justify-around md:p-[1.5rem] p-[0.5rem] bg-[#04080a] border-gray-400 md:h-[18rem] h-[40vh] border-1 md:w-full w-[95vw]  max-w-[45rem] rounded-[1.5rem]">
      <h1 className="md:text-2xl text-xl text-[#ffffed]">Current Weather</h1>
      <div className="flex items-center box-border md:flex-wrap flex-row">
        <div className="flex flex-col md:w-[25rem] w-[10rem]">
          <h4 className="md:text-3xl text-xl font-semibold text-[#92FFFF]">{data.name}</h4>
          <div className="flex items-center   justify-start">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              className="rounded-full md:h-28 h-14 overflow-hidden "
              alt=""
            />
            <h1 className="md:text-8xl text-3xl  text-[#92FFFF]">
              {Math.round(data.main.temp)}°C
            </h1>
          </div>
          <h6 className="md:text-2xl text-xl text-[#FFFFFF] font-bold">{data.weather[0].description}</h6>
        </div>
        <div className="flex flex-col text-[#DEFFFF] w-auto md:gap-5">
          <p className="md:text-2xl text-base">
            Feels like <span className='text-[#92FFFF] font-semibold'>

            {Math.round(data.main.feels_like)}°C
            </span>
          </p>
          <div className="flex items-center justify-start">
            <div className="flex  w-[8rem] items-center md:text-[1rem] text-base text-[#DEFFFF]">
              <svg width="12" height="18" viewBox="0 0 12 18">
                <path
                  d="M12,1a.667.667,0,0,0-.536.272l-.02.026C9.87,3.324,6,9.682,6,13a6,6,0,1,0,12,0c0-3.314-3.861-9.66-5.439-11.693,0,0,0,0,0,0l-.025-.034A.667.667,0,0,0,12,1Zm2.333,13.333a1,1,0,1,1-1,1A1,1,0,0,1,14.333,14.333Z"
                  transform="translate(-6 -1)"
                  fill="#7b98b2"
                ></path>
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Humidity
            </div>

            <span className='font-semibold md:text-[1rem] text-[0.8rem] text-[#92FFFF]'>{data.main.humidity}%</span>
          </div>
          <div className="flex items-center justify-start">
            <div className="flex w-[8rem] items-center md:text-[1rem] text-base text-[#DEFFFF]">
              <svg width="17" height="16.346" viewBox="0 0 17 16.346">
                <path
                  d="M12.135,3A4.244,4.244,0,0,0,8.462,5.117a2.89,2.89,0,0,0-3.816,2.49A2.932,2.932,0,0,0,2,10.519a2.992,2.992,0,0,0,.033.327h4a1.984,1.984,0,0,1-.111-.654A1.961,1.961,0,0,1,7.885,8.231h.654A3.273,3.273,0,0,1,11.808,11.5a3.235,3.235,0,0,1-.67,1.962h4.92a2.934,2.934,0,0,0,.309-5.853c.01-.118.018-.238.018-.359A4.25,4.25,0,0,0,12.135,3ZM7.885,9.538a.654.654,0,1,0,0,1.308h.654a.654.654,0,1,1,0,1.308H2.654a.654.654,0,1,0,0,1.308H8.538a1.962,1.962,0,0,0,0-3.923ZM3.961,14.769a.654.654,0,1,0,.654.654A.654.654,0,0,0,3.961,14.769Zm2.615,0a.654.654,0,1,0,0,1.308h6.865a.981.981,0,1,1,0,1.962h-.981a.654.654,0,1,0,0,1.308h.981a2.288,2.288,0,0,0,0-4.577Z"
                  transform="translate(-2 -3)"
                  fill="#7b98b2"
                ></path>
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wind
            </div>
            <span className='font-semibold md:text-[1rem] text-[0.8rem] text-[#92FFFF]'>{data.wind.speed} m/s</span>
          </div>
          <div className="flex items-center justify-start">
            <div className='flex w-[8rem] items-center md:text-[1rem] text-base text-[#DEFFFF]'>
              <svg width="16.889" height="16.92" viewBox="0 0 16.889 16.92">
                <path
                  d="M12.444,4A8.46,8.46,0,1,1,4,12.46,8.463,8.463,0,0,1,12.444,4ZM13.5,7.173l1.352,1.355-1.88,1.884a2.008,2.008,0,0,0-.528-.066,2.112,2.112,0,0,0-2.111,2.115,2.019,2.019,0,0,0,.066.529L8.948,14.476a2.652,2.652,0,0,0-2.837.595L7.6,16.558a.537.537,0,0,1,.759.76l1.484,1.487a2.663,2.663,0,0,0,.594-2.842l1.484-1.454a2.008,2.008,0,0,0,.528.066,2.112,2.112,0,0,0,2.111-2.115,2.019,2.019,0,0,0-.066-.529l1.88-1.884L17.722,11.4V7.173Z"
                  transform="translate(-4 -4)"
                  fill="#7b98b2"
                ></path>
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure
            </div>

            <span className='font-semibold md:text-[1rem] text-[0.8rem] text-[#92FFFF]'>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
