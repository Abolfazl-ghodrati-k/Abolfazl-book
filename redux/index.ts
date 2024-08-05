// store.ts
import { combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { setTransform } from "./transforms";
import { persistReducer, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import rootSaga from "./saga/rootSaga";

// Define your rootReducer
const rootReducer = combineReducers({
  // Add your reducers here
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [setTransform], // Note the change from `transform` to `transforms`
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Use Redux DevTools Extension only on the client side
const isClient = typeof window !== "undefined";
const composeEnhancers = isClient
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }).concat(sagaMiddleware, createLogger()),
  devTools: composeEnhancers,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
