import path from "path";
import { Outlet } from "react-router-dom";
import List from "./list";
import Add from "./add";
import Detail from "./detail";



export const productRoutes = [
    {
        path: '/products',
        element: <>
            <h1>Product Layout</h1>
            <Outlet />
            <h3>Product Footer</h3>
        </>,
        children: [
            { path: '', element: <List /> },
            { path: 'add', element: <Add /> },
            { path: ':id', element: <Detail /> }
        ]
    }
]