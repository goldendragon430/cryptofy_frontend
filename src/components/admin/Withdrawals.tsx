import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SlScreenDesktop } from "react-icons/sl";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import {toast} from 'react-toastify'

const columns: GridColDef[] = [
  { field: "time", headerName: "Date", width: 180, align:'center',headerAlign:'center' },
  {
    field: "hash",
    headerName: "TRX Number",
    flex : 1,
    editable: false, 
     align:'center',
     headerAlign:'center'
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 250,
    editable: false,
    align:'center',
    headerAlign:'center'
 },
  {
    field: "user_id",
    headerName: "Account",
    width: 100,
    editable: false,
    align:'center',
    headerAlign:'center',
   renderCell: (params: GridRenderCellParams) => {
      return <h1 className="text-cblack font-semibold">{params.value}</h1>
    }
  },
  
  {
    field: "action",
    headerName: "Action",
    width: 150,
    sortable: false,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {

      return (
        <Link
          to={"details/" + params.row.id}
          className="flex items-center justify-center gap-1 rounded-md border-[1px] border-cblack p-2 text-cblack hover:bg-cblack hover:text-white"
        >
          <SlScreenDesktop /> Details
        </Link>
      );
    },
  }
  
];


const Withdrawal = () => {



  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [data,setData] = useState([])
  const [query,setQuery] = useState('')
  const [startDate, setStartDate] = useState(dayjs('2000-1-1'))
  const [endDate, setEndDate] = useState(dayjs('2023-12-1'))
  const [type, setType] = useState('0')
  const fetchData = async() =>{
    const response = await doPost('admin/get_transaction', {
      token: token,
      start_date : startDate.format('YYYY-MM-DD'),
      end_date : endDate.format('YYYY-MM-DD'),
      type : 'withdrawl',
      key_str : query,
      status : type
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      // console.log(response['data'])
      setData(response['data'])
    }

  }

const refresh = () =>{
  
  fetchData()
}
const onKeyEvent = (e) =>{
  if(e.key == 'Enter'){
    refresh()
  }
}

  useEffect(() => {
    if (token) {
      refresh()
    }
  }, [token,startDate,endDate,type])

  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-start justify-center gap-8 bg-[#f3f3f9] p-4">
      <div className="mt-4 flex w-full flex-col items-center justify-between text-2xl font-medium text-cblack lg:flex-row">
          <h1>Withdrawls</h1>
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2">
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-select-small"
                  value={type}
                  label="Type"
                  onChange={e=>setType(e.target.value)}
                >
                  <MenuItem value={'0'}>
                    All
                  </MenuItem>
                  <MenuItem value={'2'}>Pending</MenuItem>
                  <MenuItem value={'3'}>Approved</MenuItem>
                  <MenuItem value={'4'}>Rejected</MenuItem>
                </Select>
            </FormControl> 
            <div className="flex h-[56px] items-stretch justify-center rounded-md bg-white" style = {{width:250,fontSize:16}}>
                    <input
                      type="text"
                      className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 focus:outline-none"
                      placeholder="Account ID / Wallet"
                      onChange = {e=>setQuery(e.target.value)}
                      onKeyUp={onKeyEvent}
                    />
                    <button className="flex h-[95%] w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white" onClick = {refresh}>
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
    </div>
  );
};

export default Withdrawal;
