
import React from 'react'
import { Outlet } from 'react-router-dom'
import List from './list'

export const orderRoutes = [
    {
        path: '/orders',
        element: <>
            <h1>Order Layout</h1>
            <Outlet />
            <h3>Order Footer</h3>
        </>,
        children: [
            {path: '', element: <List />},
        ]
    }
]
