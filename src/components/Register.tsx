import { Dialog, Transition } from "@headlessui/react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Fragment } from "react";
import type { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useApi } from "../contexts/ApiContext";
import {toast} from 'react-toastify'
import { useAuth } from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import validator from 'validator'

const Modal: FC<Modal> = ({ isOpen, handleClose }) => {
  const navigate = useNavigate()
  const [showPassword, setShowpassword] = useState(false);
  const [showPassword2, setShowpassword2] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [{doPost}] = useApi()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [user,{login,logout}] = useAuth()

  const handleRegister = async (e) => {
    try {

      if(confirm != password) {
        toast.error("Doesn't match password")
        return
      }
      const isValid = validator.isEmail(email);
      if(!isValid){
        toast.error("Invalid email!")
        return
      }

      const response = await doPost('user/signup',{
        'email' : email,
        'password' : password,
        'referral' : 0
      })
      if(response.error || response.result != 'success'){
        toast.error(response.msg)
      }
      else{
        
        toast.success('Success.')
        const user_data = response.user_info
        user_data['token'] = response.token
        login(user_data)
        navigate('/dashboard')
      }

    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                <div className="flex h-fit w-full items-center justify-between border-b border-gray-200 px-8 py-4">
                  <span className="text-xl font-bold text-cblack">
                    Register
                  </span>
                  <IconButton onClick={handleClose}>
                    <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                  </IconButton>
                </div>
                <div className="flex h-fit w-full flex-col items-center justify-center gap-2 px-8 py-4">
                  <div className="w-full">
                    <span className="text-sm text-cblack">Email Address</span>
                    <TextField
                      placeholder="Enter Email"
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "black",
                          },
                          "& label": { color: "black" },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdOutlineMailOutline className="text-cblack" />
                          </InputAdornment>
                        ),
                      }}
                      required
                      fullWidth
                      name="username"
                      value = {email} 
                      onChange = {e=>setEmail(e.target.value)}
                      helperText=""
                      error={false}
                      autoComplete="off"
                      size="small"
                    />
                  </div>
                  <div className="w-full">
                    <span className="text-sm text-cblack">Enter Password</span>
                    <TextField
                      placeholder="Enter Password"
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "black",
                          },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <RiLockPasswordFill className="text-cblack" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            className="cursor-pointer"
                          >
                            <AiFillEye className="text-cblack" onClick = {e=>setShowpassword(!showPassword)} />
                          </InputAdornment>
                        ),
                      }}
                      required
                      fullWidth
                      name="password"
                      value = {password} 
                      onChange = {e=>setPassword(e.target.value)}
                      helperText=""
                      error={false}
                      type={showPassword==false?"password":"text"}
                      autoComplete="off"
                      size="small"
                    />
                  </div>
                  <div className="w-full">
                    <span className="text-sm text-cblack">
                      Confirm Password
                    </span>
                    <TextField
                      placeholder="Confirm Password"
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "black",
                          },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <RiLockPasswordFill className="text-cblack" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            className="cursor-pointer"
                          >
                            <AiFillEye className="text-cblack" onClick = {e=>setShowpassword2(!showPassword2)} />
                          </InputAdornment>
                        ),
                      }}
                      required
                      fullWidth
                      name="confirmPassword"
                      value = {confirm}
                      onChange = {e=>setConfirm(e.target.value)}
                      helperText=""
                      error={false}
                      type={showPassword2==false?"password":"text"}
                      autoComplete="off"
                      size="small"
                    />
                  </div>
                  <button className="btn hover:cornered-border m-3 w-full px-6 py-3 text-white hover:bg-left" onClick={handleRegister}>
                    Sign up
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
