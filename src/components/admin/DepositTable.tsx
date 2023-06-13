
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { useState, useEffect } from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import { toast } from 'react-toastify'
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const columns: GridColDef[] = [
  { field: "time", headerName: "Date", width: 180, align: 'center', headerAlign: 'center' },
  {
    field: "hash",
    headerName: "TRX Number",
    flex: 1,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: "user_id",
    headerName: "Account",
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
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
    width: 100,
    align: 'center',
    headerAlign: 'center'

  },
  {
    field: "state",
    headerName: "Status",
    width: 180,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="w-full  flex flex-col items-center gap-1 ">
          {params.value === 1 ? (<span className="text-xs border-[1px] rounded-2xl px-2 py-1 border-green-500 text-green-500 flex justify-center items-center">success</span>) : (<span className="text-xs border-[1px] border-red-500 text-red-500 px-2 py-1 rounded-2xl flex justify-center items-center">failed</span>)}

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



const DepositTable = () => {
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [startDate, setStartDate] = useState(dayjs('2000-1-1'))
  const [endDate, setEndDate] = useState(dayjs('2023-12-1'))

  const fetchData = async () => {
    const response = await doPost('admin/get_transaction', {
      token: token,
      start_date: startDate.format('YYYY-MM-DD'),
      end_date: endDate.format('YYYY-MM-DD'),
      type: 'deposite',
      key_str: query
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setData(response['data'])
    }

  }

  const refresh = () => {
    fetchData()
  }
  const onKeyEvent = (e) => {
    if (e.key == 'Enter') {
      refresh()
    }
  }

  useEffect(() => {
    if (token) {
      refresh()
    }
  }, [token, startDate, endDate])
  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] p-4">
      <div className="mt-4 flex flex-col lg:flex-row w-full items-center justify-between text-2xl font-medium text-cblack">
        <h1>Deposits</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
          <div className="flex h-[56px] items-stretch justify-center rounded-md bg-white" style={{ width: 250, fontSize: 16 }}>
            <input
              type="text"
              className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 focus:outline-none"
              placeholder="Account ID / Wallet"
              onChange={e => setQuery(e.target.value)}
              onKeyUp={onKeyEvent}
            />
            <button className="flex h-[95%] w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white" onClick={refresh}>
              <RxMagnifyingGlass />
            </button>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="End date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </LocalizationProvider>
        </div>
      </div>

      <DataGrid
        rows={data}
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
        disableRowSelectionOnClick
        sx={{ width: "100%" }}
      />
      {/* <div className="grid w-full grid-cols-1 lg:grid-cols-2">
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
      </div> */}
    </div>
  );
};

export default DepositTable;
