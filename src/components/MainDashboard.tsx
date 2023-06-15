import React, { useState, useEffect } from "react";
import Card from "./dashboard/Card";
import ReinvestModal from "./ReInvest";
import WithdrawModal from "./Withdraw";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import { toast } from "react-toastify";
import Imgsrc2 from '../assets/tron.png'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { PriceCard } from './Pricing'
import { BsSpeedometer, BsFillSafe2Fill } from "react-icons/bs";
import { IoMdWallet } from 'react-icons/io'

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  // console.log(value)
  value == value
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
  const [total, setTotal] = useState(180)
  const [time, setTime] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [mineInfo, setMineInfo] = useState({
    'bonus_rate': 2.67,
    'min_deposit': 50,
    'daily_earning': 0.5,
    'speed': 0,
  })
  const [earned, setEarned] = useState(0)
  const [stakedCount, setStakedCount] = useState(0)
  const [limitedBonus, setLimitedBonus] = useState(300)
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const username = user?.username
  const userid = user?.id
  const token = user?.token
  const [stakingData, setStakingData] = useState([])
  const [plan, setPlan] = useState([
    {
      "level": 1,
      "amount": 100,
      "period": 1,
      "bonus": 1.2
    },
    {
      "level": 2,
      "amount": 100,
      "period": 30,
      "bonus": 1.5
    },
    {
      "level": 3,
      "amount": 100,
      "period": 60,
      "bonus": 2
    }
  ])

  const getPlanConfig = async () => {

    const result = await doPost('mining/get_plan_config', {
      'token': token
    })
    if (result.error || result['result'] == "failed") {
      toast.error("Error")
    } else {
      const data = result['data']
      setPlan(data)
    }
  }
  const getStakingPlan = async () => {
    const response = await doPost('admin/get_staking_plan', {
      token: token,
      user_id: userid
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setStakingData(response['data'])
    }
  }
  const getPower = async () => {
    const response = await doPost('mining/get_power', {
      token: token
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {

      setPower(response.power)
      setTotal(response.total_power)
      setBalance(response.balance)
      forceUpdate()
    }
  }

  const updatePower = async (value) => {
    setPower(value)
    const response = await doPost('mining/set_power', {
      token: token,
      power: value
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      // setPower(response.power)      
      // setTotal(response.total_power)      
      // setBalance(response.balance)
    }
  }
  const getTransaction = async () => {
    const response = await doPost('transaction/get', {
      token: token,
      type: 'withdrawl'
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      setTransactions(response.data)
    }
  }
  const getMiningInfo = async () => {
    const response = await doPost('mining/get_mining', {
      token: token
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      setMineInfo(response.data)
    }
  }
  const getStakingInfo = async () => {
    const response = await doPost('user/details', {
      token: token
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      setEarned(response['earned'])
      setStakedCount(response['staked'])
    }
  }
  const getRemainsTime = async () => {
    const response = await doPost('user/get_remains_limit', {
      token: token
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      const result = response['data']
      if (result['result'] == true) {
        if (!localStorage.getItem('showed')) {
          localStorage.setItem('showed', '1')
          setIsOpen(true)
        }
        setLimitedBonus(result['bonus_rate'])
        return result['remains']
      }
    }
  }
  const refresh = () => {
    getPower()
    getPlanConfig()
    getTransaction()
    getMiningInfo()
    getStakingInfo()
    startTimer()
    getStakingPlan()
  }
  const startTimer = async () => {
    let seconds = await getRemainsTime()
      
    const timeout = setInterval(() => {
      if(seconds > 0)
          seconds--
      setTime(seconds)
    }, 1000);

    return () => clearInterval(timeout);
  }
  const onInvest = async (level, amount) => {
    if (balance > amount) {
      console.log(plan, level)
      const result = await doPost('mining/invest_plan', {
        token: token,
        amount: amount,
        bonus: plan[level - 1]['bonus'] * amount,
        period: plan[level - 1]['period'],
        level: level
      })
      if (result['result'] == 'success') {
        toast.success("Success")
        refresh()
      } else {
        toast.error(result['msg'])
      }
    }
    else {
      toast.error(`Your balance is low( current - ${Math.floor(balance)}Trx )`)
    }
  }
  useEffect(() => {
    if (token) {
      refresh()
      // if (user.remain < 1 && !localStorage.getItem('showed')) {
      //   localStorage.setItem('showed', '1')
      //   setIsOpen(true)
      // }
    }
  }, [token])

  useEffect(() => {
    const timeout = setInterval(() => {
      setBalance(balance + power * (mineInfo['speed'] / 10))
    }, 100);

    return () => clearInterval(timeout);
  }, [power, balance, mineInfo]);

  const closeModal = () => {
    setIsOpen(false)
  }


  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4">
        <span className="text-2xl font-semibold text-cblack lg:text-4xl">
          Hi, {username} 👋
        </span>
        {/* <span className="w-full rounded-md border border-cblack bg-gray-200 p-4 text-start text-base font-semibold text-cblack">
          Only today the bonus +5% to the deposit when replenishing from $25
        </span> */}
      </div>
      <div className="flex h-fit w-[100%] flex-col  items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          power distribution
        </span>
        <div className="grid h-fit grid-cols-1 w-full items-center justify-items-center gap-4  border-t-gray-200 py-4 lg:grid-cols-2">
          {<>
            <Card
              coinType="Tron"
              amount={balance}
              power={power}
              total={total}
              update={updatePower}
              imgSrc={Imgsrc2}
              color={"linear-gradient(to right, #2c5364, #203a43, #0f2027)"}
            />
            <div className="w-full rounded-lg px-8 py-4 text-white text-center h-170 max-w-500 grid place-items-center bg-gradient-to-r from-blue-900 via-teal-800 to-blue-800">
              <h1 style={{ fontSize: 20 }}>Minimum Deposit Limit: {mineInfo['min_deposit']} TRX</h1>
              <h1 style={{ fontSize: 20 }}>Deposit Rate : 1 GH/s = {String(1 / mineInfo['bonus_rate']).substring(0, 4)} TRX</h1>
              <h1 style={{ fontSize: 20 }}>Daily {mineInfo['daily_earning']} TRX Per GH/s</h1>

              <p className="text-base">TRX will credit your balance every second, our mining experts will keep your miner online 24/7</p>
            </div>
          </>
          }
        </div>

      </div>
      <div className="flex w-full grid-cols-3 flex-col items-center justify-center gap-4 border-t border-t-gray-200 py-4 lg:grid lg:grid-cols-3 lg:gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-white">
              TOTAL POWER
            </span>
            <h1 className="text-lg font-bold text-white">{total}GH/s</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#1c812e5f] p-3 text-3xl text-[#15ca20]">
            <BsSpeedometer />
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-white">
              TOTAL EARNINGS
            </span>
            <h1 className="text-lg font-bold text-white">{(earned + balance).toFixed(10)}</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#198ded5a] p-3 text-3xl text-[#0dcaf0]">
            <IoMdWallet />
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-white">
              STACKED PLAN
            </span>
            <h1 className="text-lg font-bold text-white">{stakedCount}</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#f4112858] p-3 text-3xl text-[#fd3550]">
            <BsFillSafe2Fill />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          Coin Balance
        </span>
      </div>
      <div className="flex w-full grid-cols-2 flex-col items-center justify-center gap-4 border-t border-t-gray-200 py-4 lg:grid lg:grid-cols-1 lg:gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md flex-col gap-5 lg:flex-row">
          <div className="flex">
            <img
              src={Imgsrc2}
              alt="logo"
              className="h-14 w-14 rounded-md p-1"
            />
            <div style={{ marginLeft: 20 }} >
              <h1 className="text-lg font-bold text-white">
                {balance.toFixed(10)}
              </h1>
              <span className="text-sm font-light text-gray-500">{power} GH/s</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ReinvestModal balance={balance} onHide={refresh} />
            <WithdrawModal balance={balance} onHide={refresh} />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col justify-center gap-4">
        <span className="text-2xl font-semibold text-cblack lg:text-4xl">
          Staking Plan
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 w-full">
        <PriceCard days={plan[0]['period']} min={plan[0]['amount']} perc={plan[0]['bonus'] * 100} plan={1} handler={onInvest} />
        <PriceCard days={plan[1]['period']} min={plan[1]['amount']} perc={plan[1]['bonus'] * 100} plan={2} handler={onInvest} />
        <PriceCard days={plan[2]['period']} min={plan[2]['amount']} perc={plan[2]['bonus'] * 100} plan={3} handler={onInvest} />
      </div>

      <div className="mt-6 flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <span className="self-start text-base font-bold uppercase text-cblack">
          Staking History
        </span>
        <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
          <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">

              <table>
                <thead style={{ height: 50 }}>
                  <th>Plan</th>
                  <th>Amount Staked</th>
                  <th>Active Date</th>
                  <th>End Date</th>
                  <th>Profit</th>
                  <th>status</th>
                </thead>
                <tbody style={{ textAlign: 'center' }}>

                  {stakingData.map((item, i) => (
                    <tr
                      style={{ height: 40 }}
                      key={i}
                    >
                      <td>{item.level}</td>
                      <td>{item.amount}</td>
                      <td>{item.start_time}</td>
                      <td>{item.end_time}</td>
                      <td>{item.bonus}</td>
                      <td style={{ color: (item.active ? '#00ff45' : 'red') }}>{item.active ? 'Active' : 'End'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {stakingData.length == 0 && <p style={{ margin: 30, textAlign: 'center' }} >No Transactions yet.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL TRANSACTIONS
        </span>
        <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
          <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
            <table>
              <thead style={{ height: 50 }}>
                <th>No</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
                <th>Type</th>
              </thead>
              <tbody style={{ textAlign: 'center' }}>

                {transactions.map((item, i) => (
                  <tr
                    style={{ height: 40 }}
                    key={i}
                  >
                    <td>{i + 1}</td>
                    <td>{item.time}</td>
                    <td>{item.amount}</td>
                    <td>{item.hash.substring(0, 10)}...</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {transactions.length == 0 && <p style={{ margin: 30, textAlign: 'center' }} >No Transactions yet.</p>}
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
                      {limitedBonus}% Bonus
                    </h1>
                    <h2 className="text-white">Available for</h2>
                    <div className="flex items-center justify-center gap-3 ">
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Minute</p>
                        <h1 className="text-6xl">{Math.floor(time % 3600 / 60)}</h1>
                      </div>
                      <p className="text-4xl font-bold text-white">:</p>
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Second</p>
                        <h1 className="text-6xl">{time % 60}</h1>
                      </div>
                    </div>
                    <button className="rounded-sm bg-yellow-400 p-4 text-xl font-semibold text-gray-900" onClick={() => {
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
