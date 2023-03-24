import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WEATHER_ACTION } from "../../../redux/sagas";
import { TiWeatherCloudy } from "react-icons/ti";

function Weather() {
  const [City, changeCity] = useState("tehran");
  const dispatch = useDispatch();
  const { city, data, error } = useSelector((store) => store.weather);
  return (
    <div>
      <TiWeatherCloudy size={150} color="purple"/>
      <p>where are you? ↓</p>
      <input
        type="text"
        value={City}
        onChange={(e) => changeCity(e.target.value)}
      />
    </div>
  );
}

export default Weather;
