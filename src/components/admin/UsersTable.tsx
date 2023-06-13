import { Switch } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { RxMagnifyingGlass } from "react-icons/rx";

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
    editable: false,
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
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <div className="flex items-center justify-between text-2xl font-medium text-cblack w-full">
        <h1>Manage your users easily</h1>
        <div className="flex items-stretch justify-center bg-white h-[4rem] rounded-md">
          <input
            type="text"
            className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 placeholder:font-normal focus:outline-none"
            placeholder="Account ID / Wallet"
          />
          <button className="flex h-full w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white">
            <RxMagnifyingGlass />
          </button>
        </div>
      </div>
      <DataGrid
        rows={rows}
        className="bg-white"
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
