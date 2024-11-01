import { Outlet } from 'react-router-dom'
import List from './list'

export const employeeRoutes = [
  {
    path: '/employees',
    element: <>
      <h1>Employee Layout</h1>
      <Outlet />
      <h3>Employee Footer</h3>
    </>,
    children: [
      { path: '', element: <List /> },
    ]
  }
]
