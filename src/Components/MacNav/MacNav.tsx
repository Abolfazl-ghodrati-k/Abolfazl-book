// @ts-expect-error TS(2595): 'React' can only be imported by using a default im... Remove this comment to see the full error message
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_MAXIMIZED } from "../../redux/actionTypes";

const MacNav = ({ type, name, isMaximized }) => {
  const dispatch = useDispatch();
  // @ts-expect-error TS(2339): Property 'order' does not exist on type 'unknown'.
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

  // @ts-expect-error TS(2339): Property 'desktop' does not exist on type 'unknown... Remove this comment to see the full error message
  const maximizedApp = useSelector((state) => state.desktop.Maximized);

  const ClickHandler = (type, name) => {
    // console.log(maximizedApp);
    switch (type) {
      case "MINIMIZE":
        dispatch({
          type: `RESIZE_${name}`,
          payload: {
            maximized: false,
            minimized: true,
          },
        });
        if (isMaximized) {
          dispatch({ type: APP_MAXIMIZED, payload: maximizedApp - 1 });
        }
        break;
      case "MAXIMIZE":
        if (isMaximized) {
          dispatch({
            type: `RESIZE_${name}`,
            payload: {
              maximized: false,
              minimized: false,
            },
          });
          dispatch({ type: APP_MAXIMIZED, payload: maximizedApp - 1 });
        } else {
          dispatch({ type: `MAXIMIZE_${name}` });
          dispatch({ type: APP_MAXIMIZED, payload: maximizedApp + 1 });
        }
        break;
      case "CLOSE":
        if (name) {
          if (name === "CONTACTME") {
            dispatch({ type: `CLOSE_${name}` });
            return;
          }
          dispatch({ type: `CLOSE_${name}` });
          dispatch({ type: "CHANGE_ORDER", payload: CurrentOrder + 1 });
          dispatch({ type: `ORDER_${name}`, payload: null });
          if (isMaximized) {
            dispatch({ type: APP_MAXIMIZED, payload: maximizedApp - 1 });
          }
          dispatch({
            type: `RESIZE_${name}`,
            payload: {
              maximized: false,
              minimized: false,
            },
          });
        } else {
          return;
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
        ClickHandler(type, name);
      }}
    ></div>
  );
};

export default MacNav;
