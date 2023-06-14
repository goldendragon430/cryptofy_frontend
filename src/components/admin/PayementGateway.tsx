import React,{useState,useEffect} from "react";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import {toast} from 'react-toastify'

const PaymentGateway: React.FC = () => {

  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [publicKey,setPublicKey] = useState('')
  const [privateKey,setPrivateKey] = useState('')
  const [minDeposit,setMindeposit] = useState('')
  const [minWithdrawl,setminWithdrawl] = useState('')
  const [maxWithdrawl,setMaxWithdrawl] = useState('')

  const refresh = async() =>{
  const response = await doPost('admin/get_gateway', {
    token: token
  })
  if (response.error || response.result == 'failed') {
    toast.error('Server Error')
  }
  else {
    // console.log(response['data'])
    setPublicKey(response['data'][0]['public_key'])
    setPrivateKey(response['data'][0]['private_key'])
    setMindeposit(response['data'][0]['min_deposit'])
    setminWithdrawl(response['data'][0]['min_withdrawl'])
    setMaxWithdrawl(response['data'][0]['max_withdrawl'])
  }
}  
const upgrade = async() =>{
  const response = await doPost('admin/set_gateway', {
    token: token,
    pk:publicKey,
    sk:privateKey,
    min_d:minDeposit,
    min_w:minWithdrawl,
    max_w:maxWithdrawl
  })
  if (response.error || response.result == 'failed') {
    toast.error('Server Error')
  }
  else {
    toast.success('Success')
  }
}
  useEffect(() => {
    if (token) {
      refresh()
    }
  }, [token])
  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <span className="self-start text-base font-bold uppercase">
          Payment Gateway
        </span>
        <div className="w-full rounded-lg bg-white p-4">
          <form action="#" className="flex flex-col justify-start gap-2">
            <div className="w-full rounded-lg bg-blue-500 bg-opacity-40 p-4 text-lg text-blue-950">
              <h1>
                This system uses the `<strong>Coin payment</strong>` gateway for
                both deposit and withdrawal
              </h1>
            </div>
            <div className="flex w-full flex-col justify-center gap-2">
              <label className="self-start">Public key</label>
              <input
                type="password"
            
                value={publicKey}
                onChange={e=>setPublicKey(e.target.value)}
                className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-2">
              <label className="self-start">Private key</label>
              <input
                type="password"
                value={privateKey}
                onChange={e=>setPrivateKey(e.target.value)}
                placeholder="Send us a message"
                className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">Minimum deposit limit</label>
                <div className="flex items-center justify-center gap-1 rounded-md border-[1px] border-gray-600 p-1">
                  <input
                    type="text"
                    value={minDeposit}
                    onChange={e=>setMindeposit(e.target.value)}
                    placeholder="Send us a message"
                    className="w-[80%] outline-none px-3"
                  />
                  <span className="bg-slate-500 p-1 font-bold text-2xl w-[20%] flex justify-center items-center">TRX</span>
                </div>
              </div>
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">Minimum withdrawal limit</label>
                <div className="flex items-center justify-center gap-1 rounded-md border-[1px] border-gray-600 p-1">
                  <input
                    type="text"                
                    value={minWithdrawl}
                    onChange={e=>setminWithdrawl(e.target.value)}                    
                    placeholder="Send us a message"
                    className="w-[80%] outline-none px-3"
                  />
                  <span className="bg-slate-500 p-1 font-bold text-2xl w-[20%] flex justify-center items-center">TRX</span>
                </div>
              </div>
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">Maximum withdrawal limit</label>
                <div className="flex items-center justify-center gap-1 rounded-md border-[1px] border-gray-600 p-1">
                  <input
                    type="text"
                    value={maxWithdrawl}
                    onChange={e=>setMaxWithdrawl(e.target.value)}                    
                    placeholder="Send us a message"
                    className="w-[80%] outline-none px-3"
                  />
                  <span className="bg-slate-500 p-1 font-bold text-2xl w-[20%] flex justify-center items-center">TRX</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md"
              onClick = {upgrade}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
