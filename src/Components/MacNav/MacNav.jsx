import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOrder from "../../Hooks/useOrder";
import { APP_MAXIMIZED } from "../../redux/actionTypes";

const MacNav = ({ type, Page, name }) => {
  const dispatch = useDispatch();
  const CurrentOrder = useSelector((state) => state.order.order);
  const [BackGround, setBackGround] = useState("");
  useEffect(() => {
    if (type === "MINIMIZE") {
      setBackGround("#FFC700");
    } else if (type === "MAXIMIZE") {
      setBackGround("#A07913");
    } else if (type === "CLOSE") {
      setBackGround("#840000");
    }
  }, [type]);

  // const PORTFOLIO = useSelector((state)=> state.portfolio)

  const maximizedApp = useSelector((state) => state.desktop.Maximized);

  const ClickHandler = (type, Page, name) => {
    // console.log(maximizedApp);
    switch (type) {
      case "MINIMIZE":
        dispatch({ type: `MINIMIZE_${name}` });
        break;
      case "MAXIMIZE":
        dispatch({ type: `MAXIMIZED_${name}` });
        break;
      case "CLOSE":
        dispatch({ type: `CLOSE_${name}` });
        dispatch({ type: "CHANGE_ORDER", payload: CurrentOrder + 1 });
        dispatch({ type: `ORDER_${name}`, payload: null });
        if (Page.isMaximized) {
          dispatch({ type: `MAXIMIZE_${name}`, payload: false });
        }
        if (maximizedApp>0) {
          dispatch({ type: APP_MAXIMIZED, payload: maximizedApp - 1 });
        }
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
      className="hover:opacity-50 cursor-pointer"
      onClick={() => {
        ClickHandler(type, Page, name);
      }}
    ></div>
  );
};

export default MacNav;
