import React, { useEffect, useState } from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { FiLink, FiUsers } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import Example from "./DepTabs";
import { BiWallet } from "react-icons/bi";
import {DOMAIN_URL} from '../config'
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import {toast} from 'react-toastify'
const AffiliteProgram: React.FC = () => {

  const [user,] = useAuth()
  const user_id = user?.id
  const [userid,setUserID] = useState(0)
  const [{doPost}] = useApi()
  const token = user?.token
  const [commissions,setCommissions] = useState([0,0,0,0])  
  const [transactions,setTransactions] = useState([[],[],[]])
  useEffect(()=>{
    if(user_id){
        setUserID(user_id)
    }
  },[user_id])

  const getAffiliate = async()=>{
    const response = await doPost('reward/get_affiliate',{
      token : token,
    })
    if(response.error || response.result == 'failed') {

    }
    else{
      const result = response['data']
      setCommissions(result)
    }
  }
  const getAffiliateTransaction = async()=>{
    const response = await doPost('reward/get_aff_transactions',{
      token : token,
    })
    if(response.error || response.result == 'failed') {

    }
    else{
     const result = response['data']
     setTransactions(result)
    }
  }

  useEffect(()=>{
    if(token)
    {
      getAffiliate()
      getAffiliateTransaction()
    }
  },[token])





  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE STATISTICS
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4">
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-white">
                  Level I affiliates
                </span>
                <h1 className="text-lg font-bold text-white">{commissions[0]}</h1>
                <span className="text-sm font-light text-white">
                  10% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1c812e5f] p-3 text-3xl text-[#15ca20]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-white">
                  Level II affiliates
                </span>
                <h1 className="text-lg font-bold text-white">{commissions[1]}</h1>
                <span className="text-sm font-light text-white">
                  5% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#198ded5a] p-3 text-3xl text-[#0dcaf0]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-white">
                  Level III affiliates
                </span>
                <h1 className="text-lg font-bold text-white">{commissions[2]}</h1>
                <span className="text-sm font-light text-white">
                  1% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#f4112858] p-3 text-3xl text-[#fd3550]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-white">
                  Total Commisions
                </span>
                <h1 className="text-lg font-bold text-white"> {commissions[3]} TRX</h1>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#ffc10769] p-3 text-3xl text-[#ffc107]">
                <BiWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE BONUSES
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-full lg:w-[10%] items-center justify-center rounded-l-lg bg-red-500 px-1 py-20 text-4xl text-gray-300 text-opacity-30">
              <BsFillGiftFill />
            </div>
            <div className="flex w-[80%] flex-col justify-center gap-2 pl-4 text-white">
              <h1 className="text-lg font-bold">Affiliate bonuses</h1>
              <p className="text-sm">
                10% 
                for each new deposit of referrals of the first levels, 5%
                for each new deposit of referrals of the second level and 1%
                for each new deposit of referrals of the third level
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE LINK
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-full lg:w-[10%] items-center justify-center rounded-l-lg px-1 py-20 text-4xl text-gray-300 text-opacity-30">
              <FiLink />
            </div>
            <div className="flex w-[80%] flex-col justify-center gap-2 pl-4 text-white">
              <h1 className="text-lg font-bold">Your unique affiliate link</h1>
              <p className="text-sm">
                Use this link to invite new members and earn cryptocurrency.
              </p>
              <div className="flex items-center justify-start">
                <input
                  type="text"
                  value = {DOMAIN_URL +'ref/'+userid}
                  placeholder="0.00"
                  readOnly
                  className="w-[95%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                />
                <button className="flex h-full w-[5%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-2 hover:bg-gray-300 hover:bg-opacity-25"
                 onClick = {()=>{navigator.clipboard.writeText(DOMAIN_URL +'ref/'+userid);toast.success('Copied')}}
                >
                  <LuCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        {/* TODO: add tabs */}
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE DEPOSITS
        </span>
        <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
          <Example data = {transactions} />
        </div>
      </div>
    </div>
  );
};

export default AffiliteProgram;
