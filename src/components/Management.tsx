import React, {useState, useEffect} from "react";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import {toast} from 'react-toastify'
const Management: React.FC = () => {
  const [{doPost}] = useApi();
  const [user,] = useAuth()
  const token = user?.token
  const [mind,setMind] = useState(5)
  const [minr,setMinr] = useState(7.5)
  const [minw,setMinw] = useState(72)
  const [lev1,setLev1] = useState(1)
  const [lev2,setLev2] = useState(1)
  const [lev3,setLev3] = useState(1)

  useEffect(()=>{
    if(token){
      get_config()
    }
  },[token])

  const get_config = async()=>{
    const result = await doPost('mining/get_configuration',{
      'token' : token
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      const data = result['data']
      setMind(data['bonus_rate'])
      setMinr(data['min_reinvest'])
      setMinw(data['min_withdrawl'])
      setLev1(data['level_1'] * 100)
      setLev2(data['level_2']* 100)
      setLev3(data['level_3']* 100)
    }
  }

  const update_config = async()=>{
    const result = await doPost('mining/update_configuration',{
      'token' : token,
      'bonus_rate' : mind,
      'min_w' : minw,
      'min_r' : minr,
      'lev_1' : lev1/100,
      'lev_2' : lev2/100,
      'lev_3' : lev3/100,
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      toast.success("Success")
    }
  }

  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-center text-2xl font-medium text-cblack">
            Mining management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className=" px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Bonus rate</p>
              <input
                type="text"
                value = {mind}
                onChange = {e=>setMind(e.target.value)}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
              <p className="mb-1 text-white">Min withdrawal amount</p>
              <input
                type="text"
                value = {minw}
                onChange = {e=>setMinw(e.target.value)}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />

              <p className="mb-1 text-white">Min investment amount</p>
              <input
                type="text"
                value = {minr}
                onChange = {e=>setMinr(e.target.value)}
                className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>

            <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button 
              onClick = {update_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-center text-2xl font-medium text-cblack">
            Affiliate management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className="px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Level 1 %</p>
              <input
                type="text"
                value = {lev1}
                onChange = {e=>setLev1(e.target.value)}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
              <p className="mb-1 text-white">Level 2 %</p>
              <input
                type="text"
                value = {lev2}
                onChange = {e=>setLev2(e.target.value)}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />

              <p className="mb-1 text-white">Level 3 %</p>
              <input
                type="text"
                value = {lev3}
                onChange = {e=>setLev3(e.target.value)}
                className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>

            <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button 
               onClick={update_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid w-full lg:grid-cols-3 gap-2">
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 1
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>

          
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 2
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>

          
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 3
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Management;
