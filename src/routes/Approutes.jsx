import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
 const route=createBrowserRouter([
        {path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/About",
                element:<About></About>
            },

        ]
        }
 ])
export default function Approutes() {
   return <RouterProvider router={route}></RouterProvider>
}
