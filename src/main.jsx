import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './utils/const.js'
import LoginPages from './pages/loginPages.jsx';
import Home from './pages/Home.jsx';
import SignUpPages from './pages/signUpPages.jsx';
import Payment from './pages/Payment.jsx';
import ProfilePages from './pages/profilePages.jsx';
import DetailTransaksiPages from './pages/detailTransaksi.jsx';

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailDonasi from './pages/DetailDonasi.jsx';
import MyDonation from './pages/MyDonation.jsx';

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
      path:"/detail/:id",
      element: <DetailDonasi/>,
  },
  {
    path:'/signUp',
    element:<SignUpPages/>,
  },
  {
    path:'/profile',
    element: <ProfilePages/>,
  },
  {
    path:'/detailTransaksi',
    element: <DetailTransaksiPages/>,
  }
  ,
  {
    path:'/payment',
    element: <Payment/>,
  }
  ,
  {
    path:'/donation/',
    element: <MyDonation/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);