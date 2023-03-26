import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherIcons } from "../pages/Widgets/Weather/Weather";
import { HANDLE_SHOW_WEATHER } from "../redux/actionTypes";
import { WEATHER_ACTION } from "../redux/sagas";

function Weather() {
  const { data, show, city } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  function handleShowWidget() {
    dispatch({ type: HANDLE_SHOW_WEATHER, payload: !show });
  }

  React.useEffect(() => {
    if (!data) {
      dispatch({ type: WEATHER_ACTION, payload: "tehran" });
    }
  }, []);

  return (
    <div
      onClick={handleShowWidget}
      className="flex transition-all z-[1] cursor-pointer hover:bg-[#4d4c4c] hover:p-1 rounded-md mr-auto justify-start items-center"
    >
      <div className="flex flex-col capitalize text-[10px] mr-5 text-white">
        <span className="text-[15px]">
          {`${Math.floor(data?.main?.temp - 273)}°C`} <span className="text-[10px]">{data?.name}</span>
        </span>
        {` ${data?.weather[0]?.description}`}
      </div>
      <img
        className="w-[30px] h-[30px] my-[5px] mx-auto hidden lg:block"
        src={WeatherIcons[data?.weather[0].icon]}
      />
    </div>
  );
}

export default Weather;
