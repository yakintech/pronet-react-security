import React, { useEffect, useState } from 'react'
import { getTokenStorage } from '../../../util/tokenStorage'
import axios from 'axios'
import { baseServiceWithToken } from '../../../config/api'

function List() {

    const [employees, setemployees] = useState([])

    useEffect(() => {

        baseServiceWithToken.getAll('employees')
            .then((res: any) => {
                setemployees(res)
            })

    }, [])


    return <>
        <ul>
            {employees.map((employee: any, key) => {
                return <li key={key}>{employee.name}</li>
            })}
        </ul>

    </>
}

export default List