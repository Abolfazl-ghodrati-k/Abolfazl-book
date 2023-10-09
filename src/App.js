import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Desktop from "./pages/Desktop";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth < 850) {
      navigate("/portfolio", { state: { redirect: pathname } });
    }

    function handleResize() {
      if (window.innerWidth < 850) {
        navigate("/portfolio", { state: { redirect: pathname } });
      } else {
        navigate(state?.redirect ?? "/");
      }
    }
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate, pathname, state?.redirect]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="w-full h-screen overflow-hidden absolute -z-20">
          <Desktop />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
