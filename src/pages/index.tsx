import { Outlet, useRoutes } from 'react-router-dom'
import Dashboard from '../components/layouts/Dashboard'
import { productRoutes } from './product'

function Router() {

    return useRoutes([
        {
            path: '/',
            element: (
                <Dashboard>
                    <Outlet />
                </Dashboard>
            ),
            children: [...productRoutes]
        }
    ])

    return <>

    </>
}

export default Router