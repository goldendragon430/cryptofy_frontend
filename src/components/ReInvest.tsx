import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import { TextField } from "@mui/material";
import { toast } from 'react-toastify';
import { useApi } from '../contexts/ApiContext';
import { useAuth } from '../contexts/SessionContext';


export default function ReinvestModal(props) {

  const { balance, onHide } = props
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0)
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [min_reinvest, setMinReinvest] = useState(0)
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    if (balance > min_reinvest)
      setIsOpen(true);
    else {
      toast.info('Low Balance.')
    }
  }
  const get_config = async () => {
    const result = await doPost('mining/get_configuration', {
      'token': token
    })
    if (result.error || result['result'] == "failed") {
      toast.error("Error")
    } else {
      const data = result['data']
      setMinReinvest(data['min_reinvest'])

    }
  }
  useEffect(() => {
    if (token) {
      get_config()
    }
  }, [token])
  async function onReinvest() {
    if (amount > balance) {
      toast.error("You set amount that is bigger than current balance.")
      return
    }
    if(min_reinvest > amount){
      toast.error("You set amount that is bigger than minimum balance.")
      return
    }
    
    const response = await doPost('mining/reinvest', {
      token: token,
      amount: amount
    })
    if (response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else {
      toast.success("Success")
      onHide && onHide()
      setIsOpen(false)
    }
    
  }
  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          onClick={openModal}
          className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white"
        >
          Reinvest
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
            <div className="flex min-h-full items-center justify-end lg:justify-center p-2 text-center">
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
                  <div className="bg-white">
                    <div className="border-grey-500 flex items-center justify-between border-b-[2px] p-3 px-8">
                      <h1 className="text-xl font-bold">Reinvest</h1>
                      <button
                        onClick={closeModal}
                        className="absolute right-4 top-3 text-white"
                      >
                        <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                      </button>
                    </div>
                    <div className="p-3 px-8 font-semibold leading-5">
                      <h1>Reinvest amount:</h1>
                      <TextField
                        placeholder="Enter Email"
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

                      <h1 style={{ marginTop: 20 }}>From coin balance:</h1>
                      <p className="mb-5">TRX</p>

                      <h1>Minimum reinvest amount:</h1>
                      <p>7.5267198554870 TRX</p>
                    </div>
                    <div className="border-grey-500 flex items-center justify-end gap-2 border-t-[2px] p-3 px-8">
                      <button
                        onClick={closeModal}
                        className="bg-gray-600 rounded-md px-3 py-[0.4rem] font-medium text-white"
                      >
                        Close
                      </button>
                      <button
                        onClick={onReinvest}
                        className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white"
                      >
                        Reinvest
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
