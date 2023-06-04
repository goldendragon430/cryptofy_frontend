import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { GrFormClose } from "react-icons/gr";

import QRCode from 'qrcode'
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import { toast } from "react-toastify";


export default function PaymentModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount,setAmount] = useState(0)
  const {address} = props
  const [{doPost}] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [bonus_rate,setBonusRate] = useState(1)
   
  const [qr, setQr] = useState('')
  const GenerateQRCode = (val) => {
     QRCode.toDataURL(val, {
         width: 300,
         margin: 2,
         color: {
             // dark: '#335383FF',
             // light: '#EEEEEEFF'
         }
     }, (err, url) => {
         if (err) return console.error(err)
            setQr(url)
     })
 }
  function closeModal() {
    setIsOpen(false);
  }
  function copyClipboard(){
    navigator.clipboard.writeText(address);
    toast.info("Copied address to Clipboard.")
  }
  function openModal() {
    setIsOpen(true);
  }
  const get_config = async()=>{
    const result = await doPost('mining/get_configuration',{
      'token' : token
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      const data = result['data']
       setBonusRate(data['bonus_rate'])    
    }  
  }

  useEffect(()=>{
    if(address)
        GenerateQRCode(address)
  },[address])
  
  useEffect(()=>{
    if(token){
      get_config()
    }
  },[token])
  return (
    <>
      <button className="bg-gradient-ibiza w-full rounded-md px-7 py-1 text-lg font-bold lg:w-auto" onClick={openModal}>
        Make Deposit
      </button> 

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
                <Dialog.Panel className="mt-10 w-full max-w-lg transform overflow-hidden rounded-md bg-white text-left align-middle text-cblack shadow-xl transition-all">
                  <div className="border-grey-500 flex items-center justify-between border-b-[2px] p-3 px-8">
                    <h1 className="text-xl font-bold">Deposit</h1>
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-3 text-white"
                    >
                      <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                    </button>
                  </div>
                  <div className="px-8 py-3 font-semibold">

                    <p>get power (with the current exchange rate):</p>
                    <p className="mb-4">{Math.floor(bonus_rate*amount)} GH/z</p>

                    <p>Payment coin amount</p>
                    <div className="mb-4 flex w-full items-center justify-start">
                      <input
                        type="text"
                   
                        placeholder="0.00"
                        
                        className="w-[90%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                        value={amount}
                        onChange = {e=>setAmount(parseInt(e.target.value))}
                      />
                      <button className="flex h-full w-[10%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-3 hover:bg-gray-300 hover:bg-opacity-30">
                        <LuCopy />
                      </button>
                    </div>

                    <p>Payment address</p>
                    <div className="mb-4 flex w-full items-center justify-start">
                      <input
                        type="text"
                       
                        className="w-[90%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                        value={address}
                       
                      />
                      <button className="flex h-full w-[10%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-3 hover:bg-gray-300 hover:bg-opacity-30" onClick = {copyClipboard}>
                        <LuCopy />
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <img src={qr} />
                    </div>
                    <div>
                      <p className="text-center">
                        Blockchain transaction need time. Please wait until transaction would complete.
                      </p>
                    </div>
                  </div>
                  {/* <div className="border-grey-500 flex items-center justify-between border-t-[2px] p-3 px-8">
                    <button className="bg-gradient-ibiza w-full rounded-md px-7 py-1 text-lg font-bold lg:w-auto" onClick = {e=>setIsOpen(false)}>
                      O K
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
