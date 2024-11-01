import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard({ children }: any) {
    return <>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/categories'}>Categories</Link></li>
            <li><Link to={'/orders'}>Orders</Link></li>
            <li><Link to={'/products/list2'}>List2</Link></li>
            <li><Link to={'/employees'}>Employees</Link></li>
            <li><Link to={'/csrf'}>CSRF</Link></li>
            <li><button onClick={() => console.log("")}>Logout</button></li>

        </ul>
        {children}
        <footer>Footer</footer>
    </>
}

export default Dashboard