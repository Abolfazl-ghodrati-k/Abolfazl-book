import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WEATHER_ACTION } from "../../../redux/sagas";
import { TiWeatherCloudy } from "react-icons/ti";
import { SET_CITY, SET_WEATHER_ERROR } from "../../../redux/actionTypes";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/50d.svg",
  "50n": "/icons/50d.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="flex my-[2px] mx-[10px] justify-center items-center">
      <img className="w-[36px] h-[36px]" src={process.env.REACT_APP_DOMAINNAME+WeatherInfoIcons[name]} />
      <div className="flex flex-col text-[14px] m-[8px] text-black-200">
        {value}
        <span className="text-[12px] capitalize">{name}</span>
      </div>
    </div>
  );
};

function Weather() {
  const dispatch = useDispatch();
  const { city, data, error } = useSelector((store) => store.weather);

  function handleLocation() {
    dispatch({ type: WEATHER_ACTION, payload: city });
  }

  const isDay = data?.weather[0].icon?.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  console.log(data);

  return (
    <div className="flex text-black-200 flex-col items-center ml-1 w-[380px] px-[10px] m-auto rounded-[4px] bg-[white] z-[1000000]">
      <span className="text-black my-[20px] mx-auto text-[18px] font-bold">
        Weather App
      </span>
      {/* <TiWeatherCloudy size={150} color="purple" /> */}
      <p className=" w-full pl-4 text-[16px] font-bold mb-3">
        where are you? ↓
      </p>
      <input
        type="text"
        className="bg-[black] text-[white] text-[16px] w-full p-4 rounded-md"
        placeholder="Your city..."
        value={city}
        onChange={(e) => {
          dispatch({ type: SET_CITY, payload: e.target.value });
          dispatch({ type: SET_WEATHER_ERROR, payload: null });
        }}
      />
      <button className="p-4 w-full bg-pink-200 mt-2" onClick={handleLocation}>
        see The weather
      </button>
      <span className="text-left mt-1 text-[orange] w-full">
        {error ? "Error! = "+error.message : null}
      </span>
      <div className="flex w-full mt-[10px] mb-[20px] mx-auto justify-between items-center">
        <div className="my-[20px] mx-auto capitalize text-[14px]">
          <span className="text-[20px]">{`${Math.floor(
            data?.main?.temp - 273
          )}°C`}</span>
          {`  |  ${data?.weather[0].description}`}
        </div>
        <img
          className="w-[80px] h-[80px] my-[5px] mx-auto"
          src={WeatherIcons[data?.weather[0].icon]}
        />
      </div>
      <p className="mt-[10px] mx-auto capitalize text-[22px] font-bold">{`${data?.name}, ${data?.sys?.country}`}</p>

      <p className="mt-[10px] mb-[10px] mx-[25px] capitalize text-[14px] font-bold text-start w-[90%] ">
        Weather Info
      </p>
      <div className="flex w-[90%] justify-evenly items-center flex-wrap">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(data?.sys[isDay ? "sunrise" : "sunset"])}`}
        />
        <WeatherInfoComponent name={"humidity"} value={data?.main?.humidity} />
        <WeatherInfoComponent name={"wind"} value={data?.wind?.speed} />
        <WeatherInfoComponent name={"pressure"} value={data?.main?.pressure} />
      </div>
    </div>
  );
}

export default Weather;
