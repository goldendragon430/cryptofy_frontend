import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useApi } from '../contexts/ApiContext';
import { useAuth } from '../contexts/SessionContext';
import { TextField } from "@mui/material";
import { toast } from 'react-toastify';

export default function WithdrawModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { balance, onHide } = props
  const [amount, setAmount] = useState(0)
  const [address, setAddress] = useState('')
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [min_withdrawl, setMinWithdrawl] = useState(1)
  const [stage, setStage] = useState(0)
  const [code, setCode] = useState('000000')
  function closeModal() {
    setIsOpen(false);
  }
  const get_config = async () => {
    const result = await doPost('mining/get_configuration', {
      'token': token
    })
    if (result.error || result['result'] == "failed") {
      toast.error("Error")
    } else {
      const data = result['data']
      setMinWithdrawl(data['min_withdrawl'])

    }
  }
  useEffect(() => {
    if (token) {
      get_config()
    }
  }, [token])
  function openModal() {
    if (balance > min_withdrawl) {
          setStage(0)

      setIsOpen(true);
    }
    else {
      toast.info('Low Balance.')
    }
  }

  const onSendCode = () => {
    if(user?.verified == 0)
      { 
        doPost('user/send_code', {
          'token': token
        })
        setStage(1)
      }
    else{
      withdrawal()
    }
  }

  const withdrawal = async () => {
    if(user?.verified == 0) {

      const result = await doPost('user/confirm_code', {
        'token': token,
        'code': code
      })
      if (result.error || result['result'] == "failed") {
        toast.error(result['msg'])
        return
      } 
  
    }
      toast.success('Withdrawaling...')
    

    if (amount > balance) {
      toast.error("You set amount that is bigger than current balance.")
      return
    }
    if (min_withdrawl > amount) {
      toast.error("You set amount that is bigger than minimum withdrawal amount.")
      return
    }
     
      const response = await doPost('mining/withdrawal', {
        token: token,
        amount: amount,
        address: address
      })
      if (response.error || response.result == 'failed') {
        toast.error('Confirm withdrawal Address or Network State again.')
      }
      else {
        toast.success("Success")
        onHide && onHide()
      }
     
  }
  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          onClick={openModal}
          className="rounded-md border-[0.01rem] border-gray-400 px-3 py-[0.4rem] font-medium text-white hover:bg-slate-500 hover:bg-opacity-20">
          Withdraw
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-end lg:justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-10 w-[85%] lg:w-full max-w-lg transform overflow-hidden rounded-md bg-white text-left align-middle text-cblack shadow-xl transition-all">
                  {stage == 0 ? <div className="bg-white">
                    <div className="border-grey-500 flex items-center justify-between border-b-[2px] p-3 px-8">
                      <h1 className="text-xl font-bold">Withdrawal</h1>
                      <button
                        onClick={closeModal}
                        className="absolute right-4 top-3 text-white"
                      >
                        <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                      </button>
                    </div>
                    <div className="p-3 px-8 font-semibold leading-5">
                      <h1 style={{ marginBottom: 10 }}>Withdrawal amount:</h1>
                      <TextField
                        placeholder="Amount"
                        InputProps={{
                          sx: {
                            "& input": {
                              color: "black",
                            },
                            "& label": { color: "black" },
                          }
                        }}
                        required
                        fullWidth
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(parseInt(e.target.value))}
                        helperText=""
                        error={false}
                        autoComplete="off"
                        size="small"
                        type="number"

                      />
                      <h1 style={{ marginBottom: 10, marginTop: 20 }}>Receiver Address:</h1>
                      <TextField
                        placeholder="Address"
                        InputProps={{
                          sx: {
                            "& input": {
                              color: "black",
                            },
                            "& label": { color: "black" },
                          }
                        }}
                        required
                        fullWidth
                        name="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        helperText=""
                        error={false}
                        autoComplete="off"
                        size="small"
                        type="text"

                      />

                      <h1 style={{ marginTop: 20 }}>Minimum withdrawal amount:</h1>
                      <p>{min_withdrawl} TRX</p>
                    </div>
                    <div className="border-grey-500 flex items-center justify-end gap-2 border-t-[2px] p-3 px-8">
                      <button
                        onClick={closeModal}
                        className="bg-gray-600 rounded-md px-3 py-[0.4rem] font-medium text-white"
                      >
                        Close
                      </button>
                      <button
                        onClick={onSendCode}
                        className="bg-gradient-ohhappiness rounded-md border-[0.01rem] border-gray-400 px-3 py-[0.4rem] font-medium text-white hover:bg-slate-500 hover:bg-opacity-20">
                        Withdraw
                      </button>
                    </div>
                  </div> :
                    <div className="bg-white">
                      <div className="border-grey-500 flex items-center justify-between border-b-[2px] p-3 px-8">
                        <h1 className="text-xl font-bold">Send Verification Code</h1>
                        <button
                          onClick={closeModal}
                          className="absolute right-4 top-3 text-white"
                        >
                          <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                        </button>
                      </div>
                      {user?.verified == 0 && <div className="p-3 px-8 font-semibold leading-5">
                        <h1 style={{ marginBottom: 10 }}>We sent {user?.email} 6 digits code.</h1>
                        <TextField
                          placeholder="Amount"
                          InputProps={{
                            sx: {
                              "& input": {
                                color: "black",
                              },
                              "& label": { color: "black" },
                            }
                          }}
                          required
                          fullWidth
                          name="amount"
                          value={code}
                          onChange={e => setCode(e.target.value)}
                          helperText=""
                          error={false}
                          autoComplete="off"
                          size="small"
                          type="number"

                        />

                      </div>}
                      <div className="border-grey-500 flex items-center justify-end gap-2 border-t-[2px] p-3 px-8">
                        <button
                          onClick={closeModal}
                          className="bg-gray-600 rounded-md px-3 py-[0.4rem] font-medium text-white"
                        >
                          Close
                        </button>
                        <button
                          onClick={withdrawal}
                          className="bg-gradient-ohhappiness rounded-md border-[0.01rem] border-gray-400 px-3 py-[0.4rem] font-medium text-white hover:bg-slate-500 hover:bg-opacity-20">
                          Withdrawl
                        </button>
                      </div>
                    </div>
                  }

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
