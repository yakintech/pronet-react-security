import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface CustomDataGridProps extends React.ComponentProps<typeof DataGrid> {
    rows: GridRowsProp;
    columns: GridColDef[];
    onDelete?: (id: any) => void;
}

const PDataGrid: React.FC<CustomDataGridProps> = ({ rows, columns, onDelete }) => {
    const handleDelete = (id: any) => {
        if (onDelete) {
            onDelete(id);
        }
    };

    const actionColumn: GridColDef = {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <button onClick={() => handleDelete(params.id)}>Delete</button>
        ),
    };

    return (
        <DataGrid
            rows={rows}
            columns={[...columns, actionColumn]}
        />
    );
};

export default PDataGrid;