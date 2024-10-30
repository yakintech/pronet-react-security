import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'
import { useProducts } from './hooks/useProducts'

function List() {

  const { products, loading, error } = useProducts()
  
  return <>
    <ul>
      {
        products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>
        })
      }
    </ul>
  </>
}

export default List