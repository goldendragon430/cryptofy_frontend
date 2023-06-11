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
  { field: "date", headerName: "Date", width: 180 },
  {
    field: "trxNumber",
    headerName: "TRX Number",
    width: 270,
    editable: false,
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 450,
    editable: false,
  },
  {
    field: "account",
    headerName: "Account",
    width: 150,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <h1 className="text-cblack font-semibold">{params.value}</h1>
    }
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    renderCell: (params: GridRenderCellParams) => {
      return <h1 className="text-cblack font-semibold flex items-center gap-1">{params.value} <p className="p-1 bg-gray-400 text-gray-950 flex justify-center items-center">TRX</p></h1>
    }
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    editable: true,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="w-full text-right flex flex-col justify-center gap-1 items-baseline">
          {params.value === "succeed" ? (<span className="text-xs border-[1px] rounded-2xl px-2 py-1 border-green-500 text-green-500 flex justify-center items-center">{params.value}</span>):  (<span className="text-xs border-[1px] border-red-500 text-red-500 px-2 py-1 rounded-2xl flex justify-center items-center">{params.value}</span>)}
          <p className="text-xs">1 year ago</p>
        </div>
      );
    },
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <div className="w-full flex justify-end">
          <span className="font-medium">{params.field}</span>
        </div>
      );
    },
  }
];

const rows = [
  {
    id: 1,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 2,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 3,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 4,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 5,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 6,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 7,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
  {
    id: 8,
    date: '2021-05-32 20:32 PM',
    trxNumber: 'VGHSDGVCSD76473',
    wallet: 'vjhdsHVJDJdjcjHj78u943rhnNJc7dscdscdBBD56456N',
    account: "56623653256",
    amount: "800.000000000",
    status: 'succeed',
  },
];

const DepositTable = () => {
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

export default DepositTable;
