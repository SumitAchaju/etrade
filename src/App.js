import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { Provider } from "react-redux";
import { Store } from "./store/Store";

function App() {
  return (
    <>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
