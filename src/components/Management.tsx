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
  const [dailyEarning, setDailyEarning] = useState(0.5)
  const [regisetraionBonus, setRegisterationBonus] = useState(180)

  const [lev1,setLev1] = useState(1)
  const [lev2,setLev2] = useState(1)
  const [lev3,setLev3] = useState(1)

  const [amount1,setAmount1] = useState(0)
  const [amount2,setAmount2] = useState(0)
  const [amount3,setAmount3] = useState(0)
  const [period1,setPeriod1] = useState(0)
  const [period2,setPeriod2] = useState(0)
  const [period3,setPeriod3] = useState(0)
  const [bonus1,setBonus1] = useState(0)
  const [bonus2,setBonus2] = useState(0)
  const [bonus3,setBonus3] = useState(0)
  const [depositBonus,setDepositBonus] = useState(0)
  const [depositTime, setDepositTime] = useState(0)

  useEffect(()=>{
    if(token){
      get_config()
      get_plan_config()
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
      setDailyEarning(data['daily_earning'])
      setRegisterationBonus(data['registeration_bonus'])
      setLev1(data['level_1'] * 100)
      setLev2(data['level_2']* 100)
      setLev3(data['level_3']* 100)
      setDepositTime(data['limited_time'])
      setDepositBonus(data['limited_bonus'])
    }
  }


  const get_plan_config = async()=>{
    const result = await doPost('mining/get_plan_config',{
      'token' : token
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      const data = result['data']
      setAmount1(data[0]['amount'])
      setAmount2(data[1]['amount'])
      setAmount3(data[2]['amount'])
      setPeriod1(data[0]['period'])
      setPeriod2(data[1]['period'])
      setPeriod3(data[2]['period'])
      setBonus1(data[0]['bonus'])
      setBonus2(data[1]['bonus'])
      setBonus3(data[2]['bonus'])
    }
  }
  const update_config = async()=>{
    const result = await doPost('mining/update_configuration',{
      'token' : token,
      'bonus_rate' : mind,
      'min_r' : minr,
      'registeration_bonus' :regisetraionBonus ,
      'daily_earning' : dailyEarning,
      'lev_1' : lev1/100,
      'lev_2' : lev2/100,
      'lev_3' : lev3/100,
      'limited_time' : depositTime,
      'limited_bonus' : depositBonus
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      toast.success("Success")
    }
  }

  const update_plan_config = async()=>{
    
    const result = await doPost('mining/update_plan_config',{
      'token' : token,
      'data' : [
        {
          'level' : 1,
          'amount' : amount1,
          'period' : period1,
          'bonus' : bonus1
        },
        {
          'level' : 2,
          'amount' : amount2,
          'period' : period2,
          'bonus' : bonus2
        },
        {
          'level' : 3,
          'amount' : amount3,
          'period' : period3,
          'bonus' : bonus3
        }
      ]
    })

    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      toast.success("Success")
    }
  }

  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-3">
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-center text-2xl font-medium text-cblack">
            Mining management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className=" px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Deposit rate</p>
              <input
                type="text"
                value = {mind}
                onChange = {e=>setMind(parseFloat(e.target.value))}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
         

              <p className="mb-1 text-white">Min investment amount</p>
              <input
                type="text"
                value = {minr}
                onChange = {e=>setMinr(parseFloat(e.target.value))}
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
            Limited Time Deposit Management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className="px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Time(mins) </p>
              <input
                type="text"
                value = {depositTime}
                onChange = {e=>setDepositTime(parseFloat(e.target.value))}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
              <p className="mb-1 text-white">Bonus(%)</p>
              <input
                type="text"
                value = {depositBonus}
                onChange = {e=>setDepositBonus(parseFloat(e.target.value))}
                className="mb-2 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />

             
            </div>

            <div className="mt-2 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button 
               onClick={update_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-center text-2xl font-medium text-cblack">
            Mining Speed Management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className="px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Daily Earning per GH/s </p>
              <input
                type="text"
                value = {dailyEarning}
                onChange = {e=>setDailyEarning(parseFloat(e.target.value))}
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
              <p className="mb-1 text-white">Registration Bonus(Gh/s)</p>
              <input
                type="text"
                value = {regisetraionBonus}
                onChange = {e=>setRegisterationBonus(parseFloat(e.target.value))}
                className="mb-2 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />

             
            </div>

            <div className="mt-2 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
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
          <div className="flex flex-col justify-start gap-6 px-3 py-5 ">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 1
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount(TRX):</p>
              <input
                type="text"
                value = {amount1}
                onChange = {e=>setAmount1(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period(day):</p>
              <input
                type="text"
                value = {period1}
                onChange = {e=>setPeriod1(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                value = {bonus1}
                onChange = {e=>setBonus1(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>
          <div className="flex w-[90%] justify-end p-2   pb-5">
              <button 
              onClick = {update_plan_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
          </div>
          
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 2
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount(TRX):</p>
              <input
                type="text"
                value = {amount2}
                onChange = {e=>setAmount2(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period(day):</p>
              <input
                type="text"
                value = {period2}
                onChange = {e=>setPeriod2(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                value = {bonus2}
                onChange = {e=>setBonus2(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>
          <div className="flex w-[90%] justify-end p-2   pb-5">
              <button 
              onClick = {update_plan_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
          </div>
          
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5">
            <h1 className=" w-full text-center text-2xl font-medium text-white">
              Plan 3
            </h1>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount(TRX):</p>
              <input
                type="text"
                value = {amount3}
                onChange = {e=>setAmount3(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period(day):</p>
              <input
                type="text"
                value = {period3}
                onChange = {e=>setPeriod3(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
            <div className=" lg:w-[100%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <input
                type="text"
                value = {bonus3}
                onChange = {e=>setBonus3(parseFloat(e.target.value))}
                className=" w-[90%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none text-white"
              />
            </div>
          </div>
          <div className="flex w-[90%] justify-end p-2  pb-5">
              <button 
              onClick = {update_plan_config}
              className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Management;
