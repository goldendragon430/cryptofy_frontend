import React, {useState, useEffect} from "react";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import {toast} from 'react-toastify'

const AffiliateManagement: React.FC = () => {
  const [{doPost}] = useApi();
  const [user,] = useAuth()
  const token = user?.token
  const [lev1,setLev1] = useState(1)
  const [lev2,setLev2] = useState(1)
  const [lev3,setLev3] = useState(1)
  const [data, setData] = useState({})

  const fetchData = async()=>{
    const result = await doPost('mining/get_configuration',{
      'token' : token
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      const data = result['data']
      setData(data)
      setLev1(data['level_1'] * 100)
      setLev2(data['level_2']* 100)
      setLev3(data['level_3']* 100)
    }
  }
  const update_config = async()=>{
    const result = await doPost('mining/update_configuration',{
      'token' : token,
      'bonus_rate' : data['bonus_rate'],
      'min_r' : data['min_reinvest'],
      'registeration_bonus' :data['registeration_bonus'] ,
      'daily_earning' : data['daily_earning'],
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
  useEffect(()=>{
    if(token){
      fetchData()
    }
  },[token])

  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex w-full flex-col gap-4 items-center">

        <div className="flex flex-col items-center justify-start items-center justify-center gap-4 w-[50%]" style = {{minWidth:300}}>
          <h1 className="text-center text-2xl fgvm-medium text-cblack">
            Affiliate management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className="px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Level 1 %</p>
              <input
                type="text"
                value = {lev1}
                onChange = {e=>setLev1(parseFloat(e.target.value))}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />
              <p className="mb-1 text-white">Level 2 %</p>
              <input
                type="text"
                value = {lev2}
                onChange = {e=>setLev2(parseFloat(e.target.value))}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />

              <p className="mb-1 text-white">Level 3 %</p>
              <input
                type="text"
                value = {lev3}
                onChange = {e=>setLev3(parseFloat(e.target.value))}
                className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />
            </div>

            <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white" onClick = {update_config}>
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateManagement;
