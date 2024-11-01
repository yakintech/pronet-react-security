import { Outlet, useRoutes } from 'react-router-dom'
import Dashboard from '../components/layouts/Dashboard'
import { productRoutes } from './product'
import { orderRoutes } from './order'
import { categoryRoutes } from './category'
import { employeeRoutes } from './employee'

function Router() {

    return useRoutes([
        {
            path: '/',
            element: (
                <Dashboard>
                    <Outlet />
                </Dashboard>
            ),
            children: [...productRoutes, ...orderRoutes, ...categoryRoutes, ...employeeRoutes]
        }
    ])

    return <>

    </>
}

export default Router