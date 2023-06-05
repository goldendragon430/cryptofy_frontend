import React, { useState, useEffect } from "react";
import Card from "./dashboard/Card";
import ReinvestModal from "./ReInvest";
import WithdrawModal from "./Withdraw";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import { toast } from "react-toastify";
import Imgsrc from '../assets/tron.svg'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  console.log(value)
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

const MainDashboard: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const forceUpdate = useForceUpdate()
  const [balance, setBalance] = useState(0.00)
  const [power, setPower] = useState(0)
  const [total,setTotal] = useState(180)
  const [time,setTime] = useState(0)
  const [transactions,setTransactions] = useState([])
  const [{doPost}] = useApi()
  const [user,] = useAuth()
  const username = user?.username
  const token = user?.token

  const getPower = async()=>{
    const response = await doPost('mining/get_power',{
      token : token
    })
    if(response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else{
      
      setPower(response.power)      
      setTotal(response.total_power)      
      setBalance(response.balance)
      forceUpdate()
    }
  }

  const updatePower = async(value)=>{
    setPower(value)
    const response = await doPost('mining/set_power',{
      token : token,
      power : value
    })
    if(response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else{
      // setPower(response.power)      
      // setTotal(response.total_power)      
      // setBalance(response.balance)
    }    
  }
  const getTransaction = async()=>{
    const response = await doPost('transaction/get',{
      token : token,
      type : 'withdrawl'
    })
    if(response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else{
      setTransactions(response.data)
    }
  }
  const refresh = ()=>{
    getPower()
    getTransaction()
    startTimer()
  }
  const startTimer = ()=>{
    const timeout = setInterval(() => {
     var currentTime = new Date();
    // Time value to compare
    var timeValue = new Date(user?.registered_time);
    // Calculate the time difference in minutes
    var diff_time = currentTime.getTime() - timeValue.getTime()
    var timeDiffInMinutes = Math.floor((diff_time)/1000);
      setTime(1440 * 60 - timeDiffInMinutes)
    }, 1000);

    return () => clearInterval(timeout);
  }

  useEffect(()=>{
    if (token)
      {
        refresh()
        if(user.remain < 1  && !localStorage.getItem('showed'))
            {
              localStorage.setItem('showed','1')
              setIsOpen(true)
            }
      }
  },[token])

  useEffect(() => {
    const timeout = setInterval(() => {
      setBalance(balance + power * 1e-8)
    }, 100);

    return () => clearInterval(timeout);
  }, [power,balance]);
  
  const closeModal = ()=>{
    setIsOpen(false)
   }


  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4">
        <span className="text-2xl font-semibold text-cblack lg:text-4xl">
          Hi, {username} 👋
        </span>
        <span className="w-full rounded-md border border-cblack bg-gray-200 p-4 text-start text-base font-semibold text-cblack">
          Only today the bonus +5% to the deposit when replenishing from $25
        </span>
      </div>
      <div className="flex h-fit w-[40%] flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          power distribution
        </span>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-4 border-t border-t-gray-200 py-4 lg:flex-row">
        {   
          <Card
               coinType="Tron"
               amount={balance}
               power={power}
               total={total}
               update = {updatePower}
               imgSrc={Imgsrc}
               color={"linear-gradient(to right, #2c5364, #203a43, #0f2027)"}
             />
        
        }
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          Account summary
        </span>
      </div>
      <div className="flex w-full grid-cols-2 flex-col items-center justify-center gap-4 border-t border-t-gray-200 py-4 lg:grid lg:grid-cols-1 lg:gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-gray-500">
              total power
            </span>
            <h1 className="text-lg font-bold text-white">{total} GH/s</h1>
          </div>
          <div style = {{marginLeft:120}}>
            <span className="text-sm font-light text-gray-500">
              Unused power
            </span>
            <h1 className="text-lg font-bold text-white">{total - power} GH/s</h1>
          </div>
          <div className="flex items-center justify-center gap-1">
                <ReinvestModal balance = {balance} onHide = {refresh} />
                <WithdrawModal balance = {balance} onHide = {refresh}/>
          </div>           
        </div>
  
      </div>
     
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL TRANSACTIONS
        </span>
        <div className="flex w-full items-center justify-center border-t border-t-gray-200">
          <div className="w-full overflow-x-scroll">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
              
            <table>
              <thead style = {{height:50}}>
                <th>No</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
                <th>Type</th>
              </thead>
              <tbody style={{textAlign:'center'}}>

                {transactions.map((item, i) => (
                    <tr
                      style = {{height:40}}
                      key={i}
                    >
                      <td>{i+1}</td>
                      <td>{item.time}</td>
                      <td>{item.amount}</td>
                      <td>{item.hash.substring(0,10)}...</td>
                      <td>{item.type}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
           { transactions.length == 0 &&<p style = {{margin:30,textAlign:'center'}} >No Transactions yet.</p>}
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="popup-background w-full max-w-lg transform overflow-hidden p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-3 text-white"
                  >
                    <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                  </button>
                  <div className="flex flex-col items-center gap-5 p-10">
                    <h1 className="text-3xl font-bold text-white">
                      Limited Time Deposit Bonus
                    </h1>
                    <h1 className="text-6xl font-bold text-yellow-500">
                      300% Bonus
                    </h1>
                    <h2 className="text-white">Available for</h2>
                    <div className="flex items-center justify-center gap-3 ">
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Hour</p>
                        <h1 className="text-6xl">{Math.floor(time/3600)}</h1>
                      </div>
                      <p className="text-4xl font-bold text-white">:</p>
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Minute</p>
                        <h1 className="text-6xl">{Math.floor(time%3600/60)}</h1>
                      </div>
                      <p className="text-4xl font-bold text-white">:</p>
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Second</p>
                        <h1 className="text-6xl">{time%60}</h1>
                      </div>
                    </div>
                    <button className="rounded-sm bg-yellow-400 p-4 text-xl font-semibold text-gray-900" onClick = {()=>{
                      navigate('/dashboard/deposit')
                    }}>
                      Deposit Now
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MainDashboard;
