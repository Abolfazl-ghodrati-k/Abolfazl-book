import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import SetTransform from "./transforms";
import rootSaga from "./saga/rootSaga";
//reducers
import BrowserReducer from "./reducers/browserReducer";
import FileManagerReducer from "./reducers/FileManagerReducer";
import ContactMeReducer from "./reducers/contactme";
import PortfolioReducer from "./reducers/portfolio";
import SettingReducer from "./reducers/setting";
import ShutDownReducer from "./reducers/shutDownReducer";
import CMDReducer from "./reducers/cmdReducer";
import TodoReducer from "./reducers/TodoReducer";
import OrderReducer from "./reducers/order";

const rootReducer = combineReducers({
    browser: BrowserReducer,
    fileManager: FileManagerReducer,
    contactme: ContactMeReducer,
    portfolio: PortfolioReducer,
    setting: SettingReducer,
    shutdown: ShutDownReducer,
    cmd:CMDReducer,
    todo:TodoReducer,
    order: OrderReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [SetTransform],
};

const sagaMiddleware = createSagaMiddleware();

const persistreducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistreducer,
  applyMiddleware(sagaMiddleware, createLogger())
);
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);
export { store, persistor };
