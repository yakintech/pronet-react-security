import React, { useEffect, useState } from 'react'
import { getTokenStorage } from '../../../util/tokenStorage'
import axios from 'axios'

function List() {

    const [employees, setemployees] = useState([])

    useEffect(() => {

        let token = getTokenStorage()
        axios.get('http://localhost:3002/api/employees', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setemployees(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return <>
        <ul>
            {employees.map((employee: any) => {
                return <li key={employee._id}>{employee.name}</li>
            })}
        </ul>

    </>
}

export default List