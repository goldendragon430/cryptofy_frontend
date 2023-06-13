import { Switch } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams
} from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useApi } from "../../contexts/ApiContext";
import { toast } from 'react-toastify'
import { useAuth } from "../../contexts/SessionContext";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  console.log(value)
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}


const UsersTable = () => {
  
  const forceUpdate = useForceUpdate();
  const [users,setUsers] = useState([])
  const [{doPost}] = useApi();
  const [user,] = useAuth()
  const token = user?.token 

  const onDataChange = (id,value) =>{
    const data = users
    updateUserState(id,value)
    data.forEach(ele => {
      if(ele.id == id){
        ele.state = value
      }
    });
    setUsers(data)
    forceUpdate()
  }
 const updateUserState = async(id,value) =>{
  const response = await doPost('admin/set_user_state',{
    token : token,
    user : id,
    state : value?1:0
  })
  if(response.error || response.result == 'failed') {
    toast.error('Error')
  }
  else{
  
  }
 }

  const columns: GridColDef[] = [
    { 
      field: "No", headerName: "No", minWidth: 80,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      editable: false,
      flex : 1,
    },
    {
      field: "username",
      headerName: "Username",
      minWidth: 200,
      editable: false,
      flex : 1,
    
    },
    {
      field: "ip",
      headerName: "IP Address",
      minWidth: 200,
      editable: false,
      flex : 1,
    },
    {
      field: "state",
      headerName: "Enable/Disable",
      minWidth: 100,
      editable: false,
      renderCell: (params) => {
        const handleChange = () => {

          if(params.field == 'state'){
            const id = params.id
            const value = !params.value  
            onDataChange(id,value)
          }

        };
  
        return (
          <div className="w-full text-center font-bold">
            <Switch
              checked={params.row.state}
              onChange={handleChange}
              color="warning"
              inputProps={{ "aria-label": "switch active" }}
            />
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



   
  const fetchData = async() =>{
    
    const response = await doPost('admin/get_user_list', {
      'token' : token
    })
    if(response.error || response.result != 'success'){
      toast.error('Failed.')
    }
    else{
        const result =  response['data']
        setUsers(result)
    }

  }
  useEffect(()=>{
    if (token)
       {
        fetchData()
       }
  },[token])

  return (
    <div className="mt-[5rem] flex h-full w-[85%] flex-col items-center justify-center gap-8 p-4">
      <span className="mt-4 text-2xl font-medium text-cblack">
        Manage your users easily
      </span>
      <DataGrid
        rows={users}
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

export default UsersTable;
