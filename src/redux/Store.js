import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import SetTransform from "./transforms";
import rootSaga from "./sagas/rootSaga";
//reducers
import FileManagerReducer from "./reducers/FileManagerReducer";
import ContactMeReducer from "./reducers/contactme";
import PortfolioReducer from "./reducers/portfolio";
import SettingReducer from "./reducers/setting";
import ShutDownReducer from "./reducers/shutDownReducer";
import CMDReducer from "./reducers/cmdReducer";
import TodoReducer from "./reducers/TodoReducer";
import codeReducer from "./reducers/codeReducer";
import OrderReducer from "./reducers/order";
import DesktopReducer from "./reducers/desktop";
import CalculatorReducer from "./reducers/calculatorReducer";
import WeatherReducer from "./reducers/weather";
import loadingReducer from "./reducers/loading";

import userReducer from "./reducers/auth/userReducer";

const rootReducer = combineReducers({
  fileManager: FileManagerReducer,
  contactme: ContactMeReducer,
  portfolio: PortfolioReducer,
  setting: SettingReducer,
  shutdown: ShutDownReducer,
  cmd: CMDReducer,
  todo: TodoReducer,
  order: OrderReducer,
  desktop: DesktopReducer,
  calculator: CalculatorReducer,
  weather: WeatherReducer,
  loading: loadingReducer,
  code: codeReducer,
  user: userReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [SetTransform],
};

const sagaMiddleware = createSagaMiddleware();

const persistreducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistreducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, createLogger()))
);
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);
export { store, persistor };
