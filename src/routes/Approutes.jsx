import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
 const route=createBrowserRouter([
        {path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/Shop",
                element:<Home></Home>
            },

        ]
        }

    ])
export default function Approutes() {
   return <RouterProvider router={route}></RouterProvider>
}
