import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useOrder from "../../Hooks/useOrder";

const MacNav = ({ type, Page }) => {
  const dispatch = useDispatch()
  const [BackGround, setBackGround] = useState("");
  useEffect(() => {
    if (type === "MINIMIZE") {
      setBackGround("#FFC700");
    } else if (type === "MAXIMIZE") {
      setBackGround("#A07913");
    } else if (type === "CLOSE") {
      setBackGround("#840000");
    }
  },[type]);

  const ClickHandler = (type,Page) => {
    switch (type) {
      case "MINIMIZE":
        dispatch({type:`MINIMIZE_${Page}`})
        break;
      case "MAXIMIZE":
        dispatch({type:`MAXIMIZED_${Page}`})
        break;
      case "CLOSE":
        dispatch({type:`CLOSE_${Page}`})
        dispatch({type:`ORDER_${Page}`, payload: null})
        break;
      default:
        break;
    }
  };
  return (
    <div
      style={{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: BackGround,
        marginLeft: 5,
      }}
      className='hover:opacity-50'
      onClick={() => {
        ClickHandler(type,Page);
      }}
    ></div>
  );
};

export default MacNav;
