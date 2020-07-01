import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";
import {createStore} from "redux";

import App from "./App";
import { reducers } from "./redux";

const store = createStore(reducers);

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default registerRootComponent(ConnectedApp);
