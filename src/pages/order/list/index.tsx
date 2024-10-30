import { useQuery } from '@tanstack/react-query'
import { baseService } from '../../../config/api'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { trTR } from '@mui/x-data-grid/locales';
import { Button } from '@mui/material';
import PDataGrid from '../../../components/core-components/data-grid';


function List() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            return baseService.getAll('orders')
        },
        staleTime: 1000 * 60 * 5 // 5 minutes
    })


    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1
        },
        {
            field: "customerId",
            headerName: "Customer ID",
            flex: 1
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            flex: 1
        },
       
    ]

    return <>
        <div style={{ height: 400, width: '100%' }}>
            <PDataGrid
                rows={data ?? []}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>

    </>
}

export default List