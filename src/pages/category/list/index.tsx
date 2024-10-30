import React from 'react'
import useSWR from 'swr'
import { baseService } from '../../../config/api'

function List() {

    const { data, isLoading } = useSWR("categories", async () => {
        return baseService.getAll('categoriessss')
    })


    return <>
        {
            isLoading ? <h1>Loading...</h1> : (
                <ul>
                    {
                        data?.map((category: any) => {
                            return <li key={category.id}>{category.name}</li>
                        })
                    }
                </ul>
            )
        }
    </>
}

export default List