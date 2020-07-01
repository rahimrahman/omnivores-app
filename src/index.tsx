import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import { reducers } from "./redux";
import { watchFetchData } from "./redux/saga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchData);

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default registerRootComponent(ConnectedApp);
