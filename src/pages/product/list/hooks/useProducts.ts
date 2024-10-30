import { useEffect, useState } from "react";
import { axiosInstance } from "../../../../config/axiosInstance";
import { baseService } from "../../../../config/api";

export function useProducts() {
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        baseService.getAll('products').then((data) => {
            setproducts(data)
            throw new Error('Error')
        })

    }, [])

    return { products, loading, error }
}