
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
        <h1>Employee List</h1>
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





