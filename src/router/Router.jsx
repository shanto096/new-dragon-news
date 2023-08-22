import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Category from '../pages/Home/Category/Category';
import News from '../pages/News/News/News';
import NewsLayout from '../layout/NewsLayout';
import LoginLayout from '../layout/LoginLayout';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import PrivateRouteProvider from '../PrivateRoute/PrivateRouteProvider';
import Condition from '../Term/Condition';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
       path:'/',
       element:<Navigate to='category/0'></Navigate>
       },
       {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/term',
        element:<Condition></Condition>
      }


    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        
        {
          path:':id',
          element:<Category></Category>,
          loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        }

      ]
    },


    {
      path: "news/",
      element: <NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<PrivateRouteProvider><News></News></PrivateRouteProvider>,
          loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

export default router;