import React,{useEffect, useState} from "react";
import {GiPositionMarker} from 'react-icons/gi'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsPhone} from 'react-icons/bs'
import {TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import {toast} from 'react-toastify'
const Contacts: React.FC = () => {

  const [{doPost}] = useApi();
  const [data,setData] = useState(
    {
      "id": '',
      "title": "Send Us Message",
      "phone1": "1983743732",
      "phone2": "6595559208",
      "email1": "support@gmail.com",
      "email2": "welcome@gmail.com",
      "address": "Rose, Canada "
  } )
 const [title,setTitle] = useState('')
 const [name,setName] = useState('')
 const [msg,setMsg] = useState('')
 const [email,setEmail] = useState('')
 

  const get_data = async() =>{
    const response = await doPost('admin/get_contact', {
    })
    if (response.error || response.result == 'failed') {
       
    }
    else {
      const result = response['data'][0]
      setData(result)
    }
  }
  const onSend = async() =>{
    const response = await doPost('user/send_contact', {
      title : title,
      msg :msg,
      email : email,
      name : name
    })
    if (response.error || response.result == 'failed') {
       toast.error('Failed')
    }
    else {
      toast.success("Success")
    }
  }

  const fetchData = () =>{
    get_data()
  }
  
  useEffect(()=>{
   
   fetchData()
    
  },[])
 
  return (
    <div className="px-3 pt-20 lg:px-10 lg:pt-0">
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-10  text-cblack ">
        <h1 className="text-5xl font-bold">Contacts</h1>
        <p>Answers to all your questions.</p>
        <div className="flex w-full grid-cols-3 flex-col items-center justify-center gap-4 border-t border-t-gray-200 py-4 lg:grid lg:grid-cols-3 lg:gap-2">
          <div className="flex w-full items-center justify-start rounded-lg bg-white p-3 shadow-xl">
            <div className="flex items-center justify-center rounded-md bg-[#dc2626] p-3 text-3xl text-white" style = {{borderRadius:30}}>
              <GiPositionMarker />
            </div>
            <div style = {{marginLeft:20}}>
              <h1 className="text-lg font-bold text-black">
              Address
              </h1>
              <span className="text-sm font-light text-black" style = {{fontSize:16}}>
                {data['address']}
              </span>
              
            </div>
            
          </div>
          <div className="flex w-full items-center justify-start rounded-lg bg-white p-3 shadow-xl">
            <div className="flex items-center justify-center rounded-md bg-[#dc2626] p-3 text-3xl text-white" style = {{borderRadius:30}}>
              <HiOutlineMailOpen />
            </div>
            <div style = {{marginLeft:20}}>

              <h1 className="text-lg font-bold text-black">Email Address</h1>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
              {data['email1']}

              </p>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
              {data['email2']}

              </p>
              
          </div>
            
          </div>
          <div className="flex w-full items-center justify-start rounded-lg bg-white p-3 shadow-xl">
            <div className="flex items-center justify-center rounded-md bg-[#dc2626] p-3 text-3xl text-white" style = {{borderRadius:30}}>
              <BsPhone />
            </div>
            <div style = {{marginLeft:20}}>
            <h1 className="text-lg font-bold text-black">Phone</h1>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
              {data['phone1']}

              </p>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
              {data['phone2']}

              </p>
            </div>
            
          </div>
      </div>
      <h1 className="text-5xl font-bold mt-20">{data['title']}</h1>
      <div className=" w-full items-center justify-start rounded-lg bg-white p-3 shadow-xl mb-10">
        <div className="flex w-full items-center">
          <div className="w-full">
            <p>
              Name
            </p>
            <TextField
            autoComplete="off"
            size="small"
            className="w-[100%]"
            value = {name}
            onChange = {e=>setName(e.target.value)}
            />
          </div>
          <div className="w-full" style = {{marginLeft:30}}>
            <p>
              Email
            </p>
            <TextField
            autoComplete="off"
            size="small"
            className="w-[100%]"
            value = {email}
            onChange = {e=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-full" style = {{marginTop:30}}>
            <p>
              Subject
            </p>
            <TextField
            autoComplete="off"
            size="small"
            className="w-[100%]"
            value = {title}
            onChange = {e=>setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full" style = {{marginTop:30}}>
            <p>
              Message
            </p>
            <TextField
            autoComplete="off"
            size="small"
            className="w-[100%]"
            multiline = {true}
            style = {{maxHeight:500}}
            rows={10}
            value = {msg}
            onChange = {e=>setMsg(e.target.value)}
            />
        </div>
        <Button variant="contained" endIcon={<SendIcon />} style = {{width:'100%',marginTop:20}} onClick = {onSend}>
        Send
      </Button>
      </div>
       
        
       
      </div>
    </div>
  );
};

export default Contacts;
