import React, { useEffect } from "react";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Desktop from "./pages/Desktop";
import MobilePortfolio from "./pages/MobilePortfolio";
import useOs from "./Hooks/useOs";
import { useState } from "react";

function App() {
  const [isvalidSize, IsValidSize] = useState(true);
  const Os = useOs();

  useEffect(() => {
    if (window.innerWidth < 850) {
      IsValidSize(false);
    }
    function handleResize() {
      if (window.innerWidth < 850) {
        IsValidSize(false);
      } else {
        IsValidSize(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="w-full h-screen absolute -z-20">
          {Os ? (
            (!isvalidSize && Os == "Android") ||
            Os.includes("iPhone") ||
            Os.includes("iPad") ? (
              <MobilePortfolio />
            ) : isvalidSize ? (
              <Desktop />
            ) : (
              <MobilePortfolio />
            )
          ) : (
            "refresh the page or if it doesnt work contact me on +989020257735 phone number"
          )}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
