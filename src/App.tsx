import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductRoutes from './pages/product'
import NotFound from './pages/other/NotFound'
import Home from './pages/home'
import CategoryRoutes from './pages/category'

function App() {
  return <>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/products'}>Products</Link></li>
      <li><Link to={'/categories'}>Categories</Link></li>
      
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/*' element={<ProductRoutes />} />
      <Route path='/categories/*' element={<CategoryRoutes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <footer>Footer</footer>
  </>
}

export default App

