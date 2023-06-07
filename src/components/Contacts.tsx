import React from "react";
import {GiPositionMarker} from 'react-icons/gi'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsPhone} from 'react-icons/bs'
import {TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const Contacts: React.FC = () => {
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
                518 Dolphin Road CS8D
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
              support@test.com
              </p>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
              test@test.com
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
                +854 5848495484948
              </p>
              <p className="text-sm font-light text-black" style = {{fontSize:16}}>
                +854 5848495484948
              </p>
            </div>
            
          </div>
      </div>
      <h1 className="text-5xl font-bold mt-20">Send us a Message</h1>
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
            />
        </div>
        <Button variant="contained" endIcon={<SendIcon />} style = {{width:'100%',marginTop:20}}>
        Send
      </Button>
      </div>
       
        
       
      </div>
    </div>
  );
};

export default Contacts;
