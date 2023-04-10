import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Root from "./routes/root";
import ItemRoot from "./routes/item";
import Cart from "./routes/cart";
import CustomProvider from "./context";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5OcWAMCY5FQEi2SQ1-cqZ1DsuqD8TQIU",
  authDomain: "ecommerce-viajar.firebaseapp.com",
  projectId: "ecommerce-viajar",
  storageBucket: "ecommerce-viajar.appspot.com",
  messagingSenderId: "55576524645",
  appId: "1:55576524645:web:e76c2430c785cb6508d38c",
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
