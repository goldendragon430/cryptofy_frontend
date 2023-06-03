import { Switch } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "email",
    headerName: "Email",
    width: 270,
    editable: false,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
    editable: false,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 200,
    editable: true,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="w-full text-center text-xs font-medium text-white">
          <span
            className={`rounded-full ${
              !params.row.status ? "bg-[#ff6b6b]" : "bg-[#6bff84]"
            } p-2`}
          >
            {params.row.status ? "enabled" : "disabled"}
          </span>
        </div>
      );
    },
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <div className="w-full px-16 text-center font-bold">
          <span className="">{params.field}</span>
        </div>
      );
    },
  },
  {
    field: "created_at",
    headerName: "Active user since",
    width: 300,
    editable: false,
  },
  {
    field: "Enable/Disable",
    headerName: "enable",
    width: 150,
    editable: false,
    renderCell: () => {
      const label = { inputProps: { "aria-label": "switch active" } };
      return (
        <div className="w-full text-center font-bold">
          <Switch {...label} color="warning" />
        </div>
      );
    },
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <div className="w-full px-6 text-center font-bold">
          <span className="">{params.field}</span>
        </div>
      );
    },
    disableColumnMenu: true,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 40,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 11,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 12,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: false,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
  {
    id: 13,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: true,
    created_at: "Fri Jun 02 2023 18:52:00",
    email: "ishimweemmanuel2005@gmail.com",
  },
];

const UsersTable = () => {
  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-center justify-center gap-8 p-4">
      <span className="mt-4 text-2xl font-medium text-cblack">
        Manage your users easily
      </span>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ width: "100%" }}
      />
    </div>
  );
};

export default UsersTable;
