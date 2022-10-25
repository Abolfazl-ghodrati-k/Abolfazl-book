import React from "react";
import { useDispatch } from "react-redux";
import { CLOSE_SHUT_DOWN } from "../../redux/actionTypes";

function ShutDown() {
  const dispatch = useDispatch();

  const shutDown = (command) => {
    if (command === "yes") {
      // close shutdown pannel
      dispatch({ type: CLOSE_SHUT_DOWN });
      // wait 0.5 seconds
      setTimeout(() => {
        window.open("https://www.google.com", "_self");
      }, [1000]);
      // link app to google
    } else if (command === "no") {
      // then close shutdown
      dispatch({ type: CLOSE_SHUT_DOWN });
    }
  };

  return (
    <div className="flex flex-col w-[300px] mx-auto h-full bg-gray-200 p-2 rounded">
      <div className="flex flex-col w-full text-left">
        <h1 className="text-xl font-semibold">SHUTDOWN</h1>
        <small className="ml-1 mt-1">are you sure ?🤦‍♂️</small>
      </div>
      <div className="buttons w-full flex justify-around items-center p-2 mt-3">
        <div
          onClick={() => shutDown("yes")}
          className="transition-all hover:scale-125 text-[red] bg-[black] rounded  p-1 w-[100px] text-center hover:bg-opacity-[60%] hover:text-[darkred]"
        >
          Si
        </div>
        <div
          onClick={() => shutDown("no")}
          className="text-[green] hover:scale-125 bg-[black] rounded  p-1 w-[100px] text-center hover:bg-opacity-[60%] hover:text-[darkgreen] cursor-pointer "
        >
          لا
        </div>
      </div>
    </div>
  );
}

export default ShutDown;
