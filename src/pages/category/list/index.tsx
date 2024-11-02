import React from 'react'
import useSWR from 'swr'
import { baseService } from '../../../config/api'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import RoleWrapper from '../../../components/auth/RoleWrapper'
import { ROLES } from '../../../config/roleList'

function List() {

    const { data, isLoading } = useSWR("categories", async () => {
        return baseService.getAll('categories')
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Category Name',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 450,
            editable: true,
        },
        {
            field:"delete",
            headerName:"Delete",
            width:150,
            renderCell: (params: any) => {
                return <RoleWrapper roleNumber={ROLES.CATEGORY.DELETE}><Button variant="contained" color="error">Delete</Button> </RoleWrapper> 
            }
        }
    ]

    return <>
        {
            isLoading ? <h1>Loading...</h1> : (
                <DataGrid
                    rows={data}
                    columns={columns}
                />
            )
        }
    </>
}

export default List