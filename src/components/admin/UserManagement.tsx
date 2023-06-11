import React,{useState,useEffect} from "react";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Switch } from "@headlessui/react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { SlScreenDesktop } from "react-icons/sl";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";


const columns: GridColDef[] = [

    {
    field: "id",
    headerName: "Account ID",
    width: 100,
    editable: false,
    headerAlign:'center',
    align : 'center'
  },
  {
    field: "wallet",
    headerName: "Wallet",
    flex : 1,
    editable: false,
    headerAlign:'center',

    align : 'center'

  },
  {
    field: "power",
    headerName: "Track Speed",
    width: 150,
    editable: false,
    headerAlign:'center',

    align : 'center'

  },
  {
    field: "referral",
    headerName: "Referred By",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    headerAlign:'center',
    width: 150,
    align : 'center'
    
  },
  {
    field: "state",
    headerName: "Status",
    width: 100,
    align : 'center',
    headerAlign:'center',
    editable: true,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="w-full text-right flex justify-center">
          {params.value === true ? (<span className="text-xs border-[1px] rounded-2xl px-2 py-1 border-green-500 text-green-500 flex justify-center items-center">success</span>):  (<span className="text-xs border-[1px] border-red-500 text-red-500 px-2 py-1 rounded-2xl flex justify-center items-center">failed</span>)}
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
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    align : 'center',
    headerAlign:'center',

    sortable: false,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link
          to={"details/" + params.id}
          className="flex items-center justify-center gap-1 rounded-md border-[1px] border-cblack p-2 text-cblack hover:bg-cblack hover:text-white"
        >
          <SlScreenDesktop /> Details
        </Link>
      );
    },
  }
];

 
const UserManagement: React.FC = () => {
  const [rows,setRows] = useState([])
  const [user,] = useAuth()
  const [{doPost}] = useApi()
  const token = user?.token
  const [query, setQuery] = useState('')
  const fecthData = async() =>{
    const response = await doPost('admin/get_user_list',{
      token : token,
      search_str : query
    })
    if(response.error || response.result == 'failed') {
      toast.error('Server Error')
    } 
    else{
      setRows(response['data'])
       
    }
  }
  useEffect(()=>{
    if(token)
    {
      fecthData()
    }
  },[token])

const onKeyEvent = (e) =>{
  if(e.key == 'Enter'){
    fecthData()
  }
}
  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <span className="self-start text-base font-bold uppercase">
          user management
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6 text-sm">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex w-full items-center justify-between text-2xl font-medium text-cblack">
              <h1>All Accounts</h1>
              <div className="flex h-[2.5rem] items-stretch justify-center rounded-md bg-white" style = {{width:250,fontSize:16}}>
                <input
                  type="text"
                  className="text-md h-full w-[80%] rounded-l-md border-[2px] border-gray-200 bg-transparent px-4 py-3 text-gray-900 focus:outline-none"
                  placeholder="Account ID / Wallet"
                  onChange = {e=>setQuery(e.target.value)}
                  onKeyUp={onKeyEvent}
                />
                <button className="flex h-[95%] w-[20%] items-center justify-center rounded-e-md bg-cblack p-[0.70rem] text-3xl text-white" onClick = {fecthData}>
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
            
              disableRowSelectionOnClick
              sx={{ width: "100%" }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
