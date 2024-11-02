import { Outlet } from 'react-router-dom'
import List from './list'
import { Profiler } from 'react'
import { onRenderCallback } from '../../components/ProfilerCallBack'

export const employeeRoutes = [
  {
    path: '/employees',
    element:<Outlet />,
    children: [
      { path: '', element: <Profiler id='employeeList' onRender={onRenderCallback}><List /></Profiler> },
    ]
  }
]
