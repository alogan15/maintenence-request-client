import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100, headerAlign: 'center' },
  { field: 'firstName', headerName: 'First Name', width: 200, headerAlign: 'center' },
  { field: 'lastName', headerName: 'Last Name', width: 200, headerAlign: 'center' },
  { field: 'Email', width: 250, headerAlign: 'center' },
  { field: 'Apt No', width: 100, headerAlign: 'center' },
  { field: 'Created At', width: 200, headerAlign: 'center' },
  { field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];

const rows = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography component="h1" variant="h3" padding={5}>
            Code Differently Maintenance Request
          </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

