import React from "react";
import {useState, useEffect} from 'react'
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import {toast} from 'react-toastify'
import { useParams } from "react-router-dom";

const WithdrawDetails: React.FC = () => {
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const id = useParams()
  const [transInfo,setTransInfo] = useState({
     amount : 0,
     hash : '',
     id : 16,
     other:null,
     state : 1,
     time : '',
     type : 'withdrawl',
     user_id : 0
  })
  const getTransactionInfo = async(transaction_id) =>{
    const response = await doPost('admin/get_transaction_info', {
      token: token,
      transaction_id : transaction_id
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setTransInfo(response['data'])
    }
  }

  const refresh = () =>{
    getTransactionInfo(id['id'])
  }
  useEffect(()=>{
    if(token){
      refresh()
    }
  },[token])
  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <span className="self-start text-base font-bold uppercase">
          donald Withdraw Requested 8.00 USD
        </span>
        <div className="flex flex-col lg:grid lg:grid-cols-3 w-full gap-2">
          <div className="flex w-[30rem] flex-col justify-start rounded-md bg-white py-1 shadow-md">
            <div className="flex-start flex w-full border-b border-b-gray-200 py-2 pl-4 text-xl">
              <h1>
                Withdraw from - <strong>LTC Wallet</strong>
              </h1>
            </div>
            <div className="mx-4 mt-2 rounded-t-lg border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Date</h1>
                <p className="text-xl font-semibold">{transInfo['time']}</p>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Trx Number</h1>
                <p className="text-sm font-semibold" >{transInfo['hash'].substring(0,35)}</p>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">User Name</h1>
                <h1 className="font-semibold text-cblack">{transInfo['username']}</h1>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Payable Amount</h1>
                <p className="text-xl font-semibold">{transInfo['amount']}</p>
              </div>
            </div>
            <div className="mx-4 mb-2 rounded-b-lg border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">status</h1>
                {transInfo['state'] == 1 ?
                <span className="flex items-center justify-center rounded-2xl border-[1px] border-green-500 px-2 py-1 text-xs text-green-500">
                success
                </span>:
                <span className="flex items-center justify-center rounded-2xl border-[1px] border-red-500 px-2 py-1 text-xs text-red-500">
                failed
                </span>}
              </div>
            </div>
          </div>
          <div className="flex w-full h-min flex-col justify-start bg-white p-4 rounded-lg gap-3">
            <div className="border-b border-gray-200">
              <h1 className="mb-2 text-xl font-medium">
                User Withdraw Information
              </h1>
            </div>
              <h1 className="font-semibold">Wallet Address:</h1>
              <p>{transInfo['wallet']}</p>
              <div className="flex justify-start items-center gap-2 text-red-500">
                {transInfo['other']}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDetails;
