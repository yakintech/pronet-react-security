import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductRoutes from './pages/product'
import NotFound from './pages/other/NotFound'
import Home from './pages/home'
import CategoryRoutes from './pages/category'
import OrderRoutes from './pages/order'
import List2 from './pages/product/list/List2'
import PButton from './components/core-components/button'

function App() {


  return <>
  <PButton category="primary">Click</PButton>
    <ul style={{display:'flex', justifyContent:'space-between'}}>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/products'}>Products</Link></li>
      <li><Link to={'/categories'}>Categories</Link></li>
      <li><Link to={'/orders'}>Orders</Link></li>
      <li><Link to={'/products/list2'}>List2</Link></li>
      
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/*' element={<ProductRoutes />} />
      <Route path='/categories/*' element={<CategoryRoutes />} />
      <Route path='/orders' element={<OrderRoutes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <footer>Footer</footer>
  </>
}

export default App

