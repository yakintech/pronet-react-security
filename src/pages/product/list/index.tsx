import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'

function List() {

  const [products, setproducts] = useState([])


  useEffect(() => {

    let interval = setInterval(() => {
      console.log('products')
    }, 1000);

    axiosInstance.get('products')
      .then(response => {

        setproducts(response.data)
      })
      .catch(error => {
        console.error(error)
      })

    return () => {
      clearInterval(interval)
    }

  }, [])

  return <>

  </>
}

export default List