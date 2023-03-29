import React, { useEffect } from "react";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Desktop from "./pages/Desktop";
import MobilePortfolio from "./pages/MobilePortfolio";
import useOs from "./Hooks/useOs";
import { useState } from "react";
import Portfolio from "./pages/Portfolio/Portfolio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className="w-full h-screen overflow-hidden absolute -z-20">
          {Os ? (
            (!isvalidSize && Os == "Android") ||
            Os.includes("iPhone") ||
            Os.includes("iPad") ? (
              <MobilePortfolio />
            ) : isvalidSize ? (
              <Desktop />
            ) : (
              <Portfolio />
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
