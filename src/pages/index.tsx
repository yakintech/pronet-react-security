import { Outlet, useRoutes } from 'react-router-dom'
import Dashboard from '../components/layouts/Dashboard'
import { productRoutes } from './product'
import { orderRoutes } from './order'
import { categoryRoutes } from './category'
import { employeeRoutes } from './employee'
import { useSelector } from 'react-redux'

function Router() {

    return useRoutes([
        {
            path: '/',
            element: (
                <Dashboard>
                    <Outlet />
                </Dashboard>
            ),
            children: WrapRoutesRoleCheck([...productRoutes, ...orderRoutes, ...categoryRoutes, ...employeeRoutes])
        }
    ])
}

export default Router


const WrapRoutesRoleCheck = (routes: any) => {

    const { auth } = useSelector((state: any) => state)
    let pageRoles = auth.user.pageRoles

    if(!pageRoles) return routes

    routes.map((route: any) => {
        let path = route.path
        route.children.forEach((item: any) => {
            let childrenPath = path + item.path

            let role = pageRoles?.find((role: any) => childrenPath.includes(role))
            if (!role) {
                item.element = <h1>Not Authorized</h1>
            }
        })
    })

    return routes

}