import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './pages/Products.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "PRODUCTS",
    element: <Products/>
  },
 
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}  />
  </React.StrictMode>,
)
