import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./App";

const store = createStore(/*reducers*/ () => {}, applyMiddleware(thunk));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App color="orange" />
    </Provider>
  </StrictMode>
);
