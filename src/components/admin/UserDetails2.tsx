import React, { useState, useEffect } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDownload, GrUpload } from "react-icons/gr";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import Example from "../DepTabs";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import { toast } from 'react-toastify'

const UserDetails2: React.FC = () => {
  const { id } = useParams()
  const [user,] = useAuth()
  const [{ doPost }] = useApi()
  const navigate = useNavigate()
  const [data, setData] = useState({
    "balance": 0,
    "total_deposit": 0,
    "total_withdrawl": 0,
    "user_details": {
      "id": 0,
      "ip": "",
      "registered_time": "",
      "last_seen_time": "",
      "wallet": "",
      "referral": '',
      "verified": 0,
      "state": 1
    },
    "mining_speed": 0,
    "affiliate_earned": 0,
    "mining_earned": 0,
    "staking_earned": 0,
    "staking_amount": 0,
    "total_earned": 0
  })
  const [transactions, setTransactions] = useState([[], [], []])
  const [transactionData, setTransactionData] = useState({
    'deposite': [],
    'withdrawl': []
  })
  const [stakingData, setStakingData] = useState([])
  const token = user?.token
  const fetchData = async () => {
    const response = await doPost('admin/user_details', {
      token: token,
      user_id: id
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setData(response['data'])
    }
  }
  const getStakingPlan = async () => {
    const response = await doPost('admin/get_staking_plan', {
      token: token,
      user_id: id
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setStakingData(response['data'])
    }
  }
  const getTransactions = async () => {
    const response = await doPost('admin/get_user_transaction', {
      token: token,
      user_id: id
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setTransactionData(response['data'])
    }
  }
  const getAffiliateTransaction = async () => {
    const response = await doPost('admin/get_user_affilates', {
      token: token,
      user_id: id
    })
    if (response.error || response.result == 'failed') {

    }
    else {
      const result = response['data']
      setTransactions(result)
    }
  }
  const onFreeze = async () => {
    const response = await doPost('admin/set_user_state', {
      token: token,
      user: id,
      state: !data['user_details']['state']
    })
    if (response.error || response.result == 'failed') {
      toast.error("Error")
    }
    else {
      toast.success('Success')
      refresh()
    }
  }
  const refresh = () => {
    fetchData()
    getStakingPlan()
    getTransactions()
    getAffiliateTransaction()

  }
  useEffect(() => {
    if (token) {
      refresh()
    }
  }, [token])
  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <div className="flex w-full items-center justify-between">
          <span className="self-start text-base font-bold uppercase" style={{ marginTop: 3 }}>
            user management
          </span>
          <button className=" rounded-md bg-red-600 py-2 font-semibold text-white " style={{ width: 100 }} onClick={() => navigate('/admin/users')} >Back</button>
        </div>
        <div className="w-full border-t border-t-gray-200 pt-6 text-sm">
          <div className="flex w-full flex-col gap-1 lg:grid lg:grid-cols-4">
            <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
              {/* <button className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md">
                view all
              </button> */}
              <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
                <FaMoneyBillWaveAlt />
              </div>
              <div>
                <h1 className="font-sm">{data?.balance}TRX</h1>
                <p className="font-medium">Balance</p>
              </div>
            </div>
            <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
              <Link
                to={"/admin/deposit"}
                className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md"
              >
                view all
              </Link>
              <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
                <GrDownload />
              </div>
              <div>
                <h1 className="font-sm">{data?.total_deposit} TRX</h1>
                <p className="font-medium">Total deposit</p>
              </div>
            </div>
            <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
              <Link
                to={"/admin/withdrawals"}
                className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md"
              >
                view all
              </Link>
              <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
                <GrUpload />
              </div>
              <div>
                <h1 className="font-sm">{data?.total_withdrawl} TRX</h1>
                <p className="font-medium">Total withdrawal</p>
              </div>
            </div>
            <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
              {/* <button className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md">
                view all
              </button> */}
              <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
                <GiReceiveMoney />
              </div>
              <div>
                <h1 className="font-sm">{data?.total_earned} TRX</h1>
                <p className="font-medium">Total earn</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col gap-3 px-2 lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-start rounded-md bg-white py-1 shadow-md">
              <div className="flex-start flex w-full border-b border-b-gray-200 py-2 pl-4">
                <h1>Account details</h1>
              </div>
              <div className="mx-2 my-3 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Unique Id</h1>
                  <p className="text-gray-400">{data?.user_details?.id}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Wallet</h1>
                  <p className="text-gray-400">{data?.user_details?.wallet}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Refered by</h1>
                  <p className="text-gray-400">{data?.user_details?.referral}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Ip address</h1>
                  <p className="text-gray-400">{data?.user_details?.ip}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Created At</h1>
                  <p className="text-gray-400">{data?.user_details?.registered_time}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Last seen At</h1>
                  <p className="text-gray-400">{data?.user_details?.last_seen_time}</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">email verified</h1>
                  <p className="rounded-lg border-[1px] border-green-500 px-1 text-green-500">
                    {data?.user_details?.verified == 1 ? 'verified' : 'unverified'}
                  </p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">status</h1>
                  <p className="rounded-lg border-[1px] border-green-500 px-1 text-green-500">
                    {data?.user_details?.state == 1 ? 'verified' : 'unverified'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start rounded-md bg-white py-1 shadow-md">
              <div className="flex-start flex w-full border-b border-b-gray-200 py-2 pl-4">
                <h1>Track details</h1>
              </div>
              <div className="mx-2 my-3 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">speed</h1>
                  <p className=" font-semibold">{data?.mining_speed} GH/s</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Balance</h1>
                  <p className=" font-semibold">{data?.balance} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">withdrawal</h1>
                  <p className=" font-semibold">{data?.total_withdrawl} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Deposit</h1>
                  <p className=" font-semibold">{data?.total_deposit} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Total mined</h1>
                  <p className=" font-semibold">{data?.mining_earned} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Total staked earned</h1>
                  <p className=" font-semibold">{data?.staking_earned} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Amount staking</h1>
                  <p className=" font-semibold">{data?.staking_amount} TRX</p>
                </div>
                <div className="flex items-center justify-between border-b border-b-gray-200 p-1 px-2">
                  <h1 className="font-semibold">Affiliate total earn</h1>
                  <p className=" font-semibold">{data?.affiliate_earned} TRX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
            <span className="self-start text-base font-bold uppercase">
              Staking plan
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
          <div className="mt-6 flex w-full flex-col gap-3 px-2 lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-start rounded-md bg-white py-1 shadow-md">
              <div className="flex w-full items-center font-bold justify-between border-b border-b-gray-200 px-2 py-1">
                <h1 className="text-lg">Latest Deposits</h1>
                <button className="flex items-center justify-center rounded-md border-[1px] border-cblack p-2 text-cblack hover:bg-cblack hover:text-white" onClick={() => { navigate('/admin/deposit') }}>
                  View all
                </button>
              </div>
              <div className="grid w-full grid-cols-3 bg-cblack px-2 py-2 text-white">
                <h1 className="text-left">time</h1>
                <h1 className="text-center">TRX ID</h1>
                <h1 className="text-right">Amount</h1>
              </div>

              {transactionData['deposite'].map((item, i) => (
                <div className="grid w-full  grid-cols-3 px-2 py-2 text-gray-800" key={i}>
                  <h1 className="text-left">{item.time}</h1>
                  <h1 className="text-center">{item.hash.substring(0, 35)}...</h1>
                  <h1 className="text-right">{item.amount}</h1>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start rounded-md bg-white py-1 shadow-md">
              <div className="flex w-full items-center justify-between border-b border-b-gray-200 px-2 py-1">
                <h1 className="text-lg">Latest Withdrawals</h1>
                <button className="flex items-center justify-center rounded-md border-[1px] border-cblack p-2 text-cblack hover:bg-cblack hover:text-white" onClick={() => { navigate('/admin/withdrawals') }}>
                  View all
                </button>
              </div>
              <div className="grid w-full grid-cols-3 bg-cblack px-2 py-2 text-white">
                <h1 className="text-left">time</h1>
                <h1 className="text-center">TRX ID</h1>
                <h1 className="text-right">Amount</h1>
              </div>
              {transactionData['withdrawl'].map((item, i) => (
                <div className="grid w-full  grid-cols-3 px-2 py-2 text-gray-800" key={i}>
                  <h1 className="text-left">{item.time}</h1>
                  <h1 className="text-center">{item.hash.substring(0, 35)}...</h1>
                  <h1 className="text-right">{item.amount}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
            <span className="self-start text-base font-bold uppercase">
              Referal
            </span>
            <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
              <Example data={transactions} />
            </div>
          </div>
          {/* <div className="flex flex-col lg:grid lg:grid-cols-2">
            <div className="mx-2 my-4 flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
              <div className=" px-3 py-7">
                
                <p className="mb-1 text-white">rechearge limit</p>
                <input
                  type="text"
                  className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                />
                <p className="mb-1 text-white">withdrawal limit</p>
                <input
                  type="text"
                  className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                />
              </div>

              <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
                <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                  update
                </button>
              </div>
            </div>
          </div> */}
          <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
            <span className="self-start text-base font-bold uppercase">
              Action
            </span>
            <div className="w-full border-t border-t-gray-200 pt-6">
              <button

                className="mx-2 flex w-full items-center justify-center rounded-md bg-red-600 py-2 font-semibold text-white shadow-md"
                onClick={onFreeze}
              >
                {data['user_details']['state'] ? 'Freeze' : 'Activate'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails2;
