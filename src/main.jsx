import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPages from './pages/loginPages.jsx';
import Home from './pages/Home.jsx';
import SignUpPages from './pages/signUpPages.jsx';

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path:"/",
      element: <Home/>,
  },
  {
      path:"/login",
      element: <LoginPages/>,
  },
  {
    path:'/signUp',
    element:<SignUpPages/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);