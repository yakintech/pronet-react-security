import { useQuery } from '@tanstack/react-query'
import { baseService } from '../../../config/api'

function List() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            return baseService.getAll('orders')
        },
        staleTime: 1000 * 60 * 5 // 5 minutes
    })


    return <>
        <h1>Length: {data?.length}</h1>
        <ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && data.map((order: any) => (
                <li key={order.id}>{order.customerId}</li>
            ))}
        </ul>
    </>
}

export default List