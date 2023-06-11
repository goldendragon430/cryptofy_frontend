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
  { field: "date", headerName: "Date", width: 80 },
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
];

const PlanTable = () => {
  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] p-4">
      <div className="mt-4 flex flex-col lg:flex-row w-full items-center justify-between text-2xl font-medium text-cblack">
        <h1>Deposits</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
          <div className="flex h-[4rem] items-stretch justify-center rounded-md bg-white">
            <input
              type="text"
              className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 placeholder:font-normal focus:outline-none"
              placeholder="TRX / Wallet / Account"
            />
            <button className="flex h-full w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white">
              <RxMagnifyingGlass />
            </button>
          </div>
          <div className="flex h-[4rem] items-stretch justify-center rounded-md bg-white">
            <input
              type="text"
              className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 placeholder:font-normal focus:outline-none"
              placeholder="Start Date - End Date"
            />
            <button className="flex h-full w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white">
              <RxMagnifyingGlass />
            </button>
          </div>
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
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="my-4 text-2xl font-medium text-cblack text-center">
            Deposit Bonus Management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className="px-3 py-5">
              <p className="mb-1 text-white">Time (mins)</p>
              <input
                type="text"
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />

              <p className="mb-1 text-white">Bonus (%)</p>
              <input
                type="text"
                className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />
            </div>

            <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTable;
