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


import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailDonasi from './pages/DetailDonasi.jsx';
import MyDonation from './pages/MyDonation.jsx';
import SuccessPayment from './pages/SuccessPayment.jsx'
import FailedPayment from './pages/FailedPayment.jsx'
import AllDonation from './pages/allDonation.jsx'
import NotFound from './pages/NotFound.jsx'
import ArticlePage from './pages/ArticlePage.jsx'

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
    path:'/payment',
    element: <Payment/>,
  }
  ,
  {
    path:'/mydonation/',
    element: <MyDonation/>,
  }
  ,
  {
    path:'/success-donation/',
    element: <SuccessPayment/>,
  },
  {
    path:'/failed-donation/',
    element: <FailedPayment/>,
  },
  {
    path:'/article/:id',
    element: <ArticlePage/>,
  }
  ,
  {
    path:'/alldonation',
    element: <AllDonation/>,
  },
  {
    path:'/profile',
    element: <ProfilePages/>,
  },
  {
    path:'*',
    element: <NotFound/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);