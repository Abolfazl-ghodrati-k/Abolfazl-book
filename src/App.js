import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Desktop from "./pages/Desktop";
import MobilePortfolio from "./pages/MobilePortfolio";
import useOs from "./Hooks/useOs";

function App() {
  // const [Os, setOs] = useState();
  const Os = useOs();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="w-full h-screen  absolute -z-20">
          {Os ? (
            (Os == "Android" || Os.includes('iPhone') || Os.includes('iPad')) ? (
              <MobilePortfolio />
            ) : (
              <Desktop />
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
