import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SlScreenDesktop } from "react-icons/sl";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 180 },
  {
    field: "transaction_number",
    headerName: "Transaction Number	",
    width: 270,
    editable: false,
  },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <h1 className="font-semibold text-cblack">{params.value}</h1>;
    },
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 450,
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 250,
    editable: false,
  },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    sortable: false,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link
          to={"details"}
          className="flex items-center justify-center gap-1 rounded-md border-[1px] border-cblack p-2 text-cblack hover:bg-cblack hover:text-white"
        >
          <SlScreenDesktop /> Details
        </Link>
      );
    },
  },
];

const rows = [
  [
    {
      id: 1,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 2,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 3,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 4,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 5,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 6,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 7,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 8,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 9,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 10,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
  ],
  [
    {
      id: 1,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 2,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 3,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 4,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 5,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 6,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 7,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 8,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 9,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 10,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
  ],
  [
    {
      id: 1,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 2,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 3,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 4,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 5,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 6,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 7,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 8,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 9,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 10,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
  ],
  [
    {
      id: 1,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 2,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 3,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 4,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 5,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 6,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 7,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 8,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 9,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
    {
      id: 10,
      date: "2023-06-03 08:08 AM",
      transaction_number: "8UDMPYTXCFSH",
      username: "donald",
      wallet: "ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu",
      amount: "8 LTC",
      action: true,
    },
  ],
];

const withdrawalsData = [
  "All Withdrawals",
  "Pending Withdrawals",
  "Approved Withdrawals",
  "Rejected Withdrawals",
];
const Withdrawal = () => {
  const [n, setN] = useState(0);
  const [label, setLabel] = useState(withdrawalsData[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setN(parseInt(event.target.value));
    setLabel(withdrawalsData[n]);
  };

  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-start justify-center gap-8 bg-[#f3f3f9] p-4">
      <div className="mt-4 flex w-full flex-col items-center justify-between text-2xl font-medium text-cblack lg:flex-row">
        <div className="flex items-center justify-center gap-2">
          <h1>{withdrawalsData[n]}</h1>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={label}
            label="withdraw"
            onChange={handleChange}
          >
            {withdrawalsData.map((data, i) => (
              <MenuItem key={i} value={i}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start date" defaultValue={dayjs("2022-04-17")} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="End date" defaultValue={dayjs("2022-04-17")} />
          </LocalizationProvider>
          {/* <div className="flex h-[4rem] items-stretch justify-center rounded-md bg-white">
            <input
              type="text"
              className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 placeholder:font-normal focus:outline-none"
              placeholder="Start Date - End Date"
            />
            <button className="flex h-full w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white">
              <RxMagnifyingGlass />
            </button>
          </div> */}
        </div>
      </div>

      <DataGrid
        rows={rows[n]}
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

export default Withdrawal;
