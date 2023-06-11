import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { HiOutlineCode } from "react-icons/hi"
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from "react-icons/ri"
import {ImBlocked } from "react-icons/im"

export const Translate:React.FC = () => (<button className='border-[1px] border-green-600 text-green-600 p-2 rounded-md flex justify-center items-center gap-1'><HiOutlineCode /> Translate</button>)
export const Approve:React.FC = () => (<button className='border-[1px] border-green-600 text-green-600 p-2 rounded-md flex justify-center items-center gap-1'><AiOutlineCheck /> Approve</button>)
export const Edit:React.FC = () => (<button className='border-[1px] border-blue-600 text-blue-600 p-2 rounded-md flex justify-center items-center gap-1'><MdEdit /> Edit</button>)
export const Remove:React.FC = () => (<button className='border-[1px] border-red-600 text-red-600 p-2 rounded-md flex justify-center items-center gap-1'><RiDeleteBinLine /> Remove</button>)
export const Reject:React.FC = () => (<button className='border-[1px] border-red-600 text-red-600 p-2 rounded-md flex justify-center items-center gap-1'><ImBlocked /> Remove</button>)