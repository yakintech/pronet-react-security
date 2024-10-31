import React, { useEffect, useState } from 'react'
import { getTokenStorage } from '../../../util/tokenStorage'
import axios from 'axios'
import { baseServiceWithToken } from '../../../config/api'
import { useQuery } from '@tanstack/react-query'

function List() {

    const { data } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            return baseServiceWithToken.getAll<EmployeeModel>('employees')
        }
    })


    return <>
        <ul>
            {data?.map((employee, key) => {
                return <li key={key}>{employee.name}</li>
            })}
        </ul>

    </>
}

export default List



interface EmployeeModel {
    name: string
    lastname: string
    birthDate: string
}