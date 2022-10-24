import logo from "./logo.svg";
import "./App.css";
import { MacNav } from "./Assets/Icons/index";
import BottomNav from "./BottomNav";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import Desktop from "./pages/Desktop";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="w-full h-screen bg-fill absolute -z-20">
          <Desktop />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
