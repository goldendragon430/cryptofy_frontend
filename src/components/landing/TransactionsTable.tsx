import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  //   GridValueGetterParams,
} from "@mui/x-data-grid";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import { BiLinkExternal } from "react-icons/bi";
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import { useTranslation } from "react-i18next";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 80 },
  {
    field: "amount",
    headerName: "Amount",
    width : 300,
    editable: false,
    renderCell: (params: GridRenderCellParams) => {

      return (
        <div className="flex w-full items-center justify-center gap-4 text-center text-base font-medium text-white">
          <img
            src="https://www.svgrepo.com/show/428646/tron-crypto.svg"
            className="h-8 w-8"
            alt=""
          />
          <span className="text-base font-medium text-cblack">
            {params.row.amount.substring(0,12)}
          </span>
        </div>
      );
    },
    renderHeader: () => {
      return (
        <div className="w-full px-32 text-center font-bold text-cblack">
          <span className="">Amount</span>
        </div>
      );
    },
  },
  {
    field: "time",
    width : 300,
    headerName: "Time",
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="flex w-full items-center justify-center gap-4 text-center text-base font-medium text-white">
          <span className="text-base font-medium text-cblack">
            {params.row.time}
          </span>
        </div>
      );
    },
    renderHeader: () => {
      return (
        <div className="w-full px-32 text-center font-bold text-cblack">
          <span className="">Time</span>
        </div>
      );
    },
  },
  {
    field: "hash",
    width : 500,
    headerName: "TXID",
    editable: false,
    flex : 1,
    headerAlign:'center',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="flex w-full items-center justify-center gap-4 text-center text-base font-medium text-cblack">
          <a href="https://tronscan.org/#/transaction/e6ea3d50e0d4af512c5b5b96e3e90c8cea1c96117ebafd681e0ad9ad7cb11a83">
            {params.row.hash}
          </a>
          <a href={"https://tronscan.org/#/transaction/"+params.row.hash}>
          <BiLinkExternal className="text-lg text-cblack" />
          </a>
        </div>
      );
    },
    renderHeader: () => {
      return (
        <div className="w-full px-32 text-center font-bold text-cblack">
          <span className="">TXID</span>
        </div>
      );
    },
  },
  {
    field: "type",
    width : 250,
    headerName: "Type",
    editable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="flex w-full items-center justify-center gap-4 text-center text-base font-medium text-white">
          <span className="text-base font-medium text-cblack">
            {params.row.type}
          </span>
        </div>
      );
    },
    renderHeader: () => {
      return (
        <div className="w-full px-24 text-center font-bold text-cblack">
          <span className="">Type</span>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 2,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 3,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 4,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 5,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 6,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 7,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 8,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 9,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 10,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 11,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 12,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
  {
    id: 13,
    amount: 30.0,
    time: "Fri Jun 02 2023 18:52:00",
    txid: "asd...dfhfajsdjflhjadsfklasdkjfanfahfvkavfh6...89hla",
    type: "Deposit",
  },
];

const TransactionsTable = () => {
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [data,setData] = useState([])
  const fetchData = async() =>{
    const result = await doPost('transaction/all', {
      'token': token
    })
    if (result.error || result['result'] == "failed") {
      toast.error("Error")
    } else {
      const response_data = result['data']
      setData(response_data)
    }
  }

  useEffect(() => {
   
      fetchData()
  
  }, [])
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 ">
      <DataGrid
        rows={data}
        columns={columns}
       
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
        sx={{ width: "100%" }}
      />
    </div>
  );
};

export default TransactionsTable;
