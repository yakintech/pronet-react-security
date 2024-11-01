import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductRoutes from './pages/product'
import NotFound from './pages/other/NotFound'
import Home from './pages/home'
import CategoryRoutes from './pages/category'
import OrderRoutes from './pages/order'
import List2 from './pages/product/list/List2'
import PButton from './components/core-components/button'
import EmployeeRoutes from './pages/employee'
import { useDispatch, useSelector } from 'react-redux'

import Login from './pages/auth/Login'
import { checkLogin } from './store/authSlice'
import { AppDispatch } from './store'
import XSSSample, { Unsafecomponent, UserProfileImage } from './pages/other/XSSSample'

function App() {


  // return <UserProfileImage profileImage="javascript:alert('test')" />
  // return <Unsafecomponent content="<img src=x onerror=alert('XSS')>"/>


  const state = useSelector((state: any) => state)
  let dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLogin())
  }, [])


  const logout = () => {
    localStorage.removeItem('token')
    dispatch({ type: 'auth/logout' })
  }

  return <>
    {
      state.auth.isLoading ? <h1>loading...</h1> :
      state.auth.isLogin ? <>
        <PButton category="primary">Click</PButton>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/categories'}>Categories</Link></li>
          <li><Link to={'/orders'}>Orders</Link></li>
          <li><Link to={'/products/list2'}>List2</Link></li>
          <li><Link to={'/employees'}>Employees</Link></li>
          <li><button onClick={() => logout()}>Logout</button></li>

        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/*' element={<ProductRoutes />} />
          <Route path='/categories/*' element={<CategoryRoutes />} />
          <Route path='/orders' element={<OrderRoutes />} />
          <Route path='/employees/*' element={<EmployeeRoutes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>Footer</footer>
      </> : <Login />
    }
  </>
}

export default App

