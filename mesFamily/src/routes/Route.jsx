import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Member from "../pages/Member/Member";
import About from "../pages/About/About";
import Login from "../provider/Login";
import Registation from "../provider/Registation";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
        ,
        {
          path:'/membar',
          element:<Member/>
        }
        ,
        {
          path:'/about',
          element:<About/>
        }
        ,
        {
          path:'/login',
          element:<Login/>
        }
        ,
        {
          path:'/registation',
          element:<Registation/>
        }
      ]
    },
  ]);

  export default router