import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom'
import NewFoods from '../component/NewFoods';
import Home from '../pages/Home';
import App from '../App';
import RecommendedFood from '../component/RecommededFood';
import Login from '../auth/Login';
import Register from '../auth/Register';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [
        {
            path: "/",
            element:<Home/>,
          },

          {
            path:"/Login",
            element:<Login/>
          },
          {
            path:'/register',
            element:<Register/>

          },

          {
            path:'/RecommededFood',
            element:<RecommendedFood/>
          },

          {
            path:"/newfoods",
            element:<NewFoods/>
          }
      ]
    },
  ]);


  export default router