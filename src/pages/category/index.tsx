import React from 'react'
import { Outlet } from 'react-router-dom'
import List from './list'

export const categoryRoutes = [
    {
        path: '/',
        element: <>
            <h1>Category Layout</h1>
            <Outlet />
            <h3>Category Footer</h3>
        </>,
        children: [
            { path: '', element: <List /> },
        ]
    }
]