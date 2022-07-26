import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FormControlLabel, IconButton } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

const MatEdit = ({ index }) => {
    const handleEditClick = () => {
      // some action
    };
  
    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}
          >
            <EditIcon style={{ color: blue[500] }} />
            <DeleteIcon style={{ color: red[900] }} />
          </IconButton>
          
        }
      />
    );
  };

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  {
    field: 'Email', width: 250
  },
  {
    field: 'Apt No', width: 100
  },
  {
    field: 'Created At', width: 200
  },
  {
    field: "Actions",
      headerName: "Actions",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <MatEdit index={params.row.id} />
          </div>
        );
      }
    }
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
