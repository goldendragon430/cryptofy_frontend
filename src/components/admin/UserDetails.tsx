import React from "react";

import { Link } from "react-router-dom";
import { FaMoneyBillWaveAlt, FaWallet } from "react-icons/fa";

import { BiLogInCircle, BiWallet } from "react-icons/bi";
import { TbArrowsLeftRight } from "react-icons/tb";
import BalancePlusModal from "../BalancePlusModal";
import BalanceMinusModal from "../BalanceMinusModal";
import BanUserModal from "../BanUserModal";
import { BsListCheck } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";

const UserDetails: React.FC = () => {
  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
        <span className="self-start text-base font-bold uppercase">
          User Detail - shawon666
        </span>
        <div className="flex w-full flex-col gap-1 lg:grid lg:grid-cols-4">
          <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
            <button className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md">
              view all
            </button>
            <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
              <FaMoneyBillWaveAlt />
            </div>
            <div>
              <h1 className="font-sm">$0.00</h1>
              <p className="font-medium">Balance</p>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white shadow-lg">
            <Link
              to={"/admin/deposit"}
              className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md"
            >
              view all
            </Link>
            <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
              <BiWallet />
            </div>
            <div>
              <h1 className="font-sm">$0.00</h1>
              <p className="font-medium">Total payments</p>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white shadow-lg">
            <Link
              to={"/admin/withdrawals"}
              className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md"
            >
              view all
            </Link>
            <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
              <FaWallet />
            </div>
            <div>
              <h1 className="font-sm">$0.00</h1>
              <p className="font-medium">withdrawals</p>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-cblack p-3 text-white text-white shadow-lg">
            <button className="absolute right-[4px] rounded-md border-none bg-gray-200 bg-opacity-20 p-[1px] text-xs text-white  shadow-md">
              view all
            </button>
            <div className="rounded-md bg-gray-200 bg-opacity-20 p-2 text-3xl text-white">
              <TbArrowsLeftRight />
            </div>
            <div>
              <h1 className="font-sm">0</h1>
              <p className="font-medium">Transactions</p>
            </div>
          </div>
        </div>
        <div className="my-4 flex w-full flex-col gap-2 lg:grid lg:grid-cols-6">
          <BalancePlusModal />
          <BalanceMinusModal />
          <button
            className="flex items-center justify-center gap-1 rounded-md border-[1px] bg-cblack p-2 text-white"
          >
            <BsListCheck /> Logins
          </button>
          <button
            className="flex items-center justify-center gap-1 rounded-md border-[1px] bg-gray-500 p-2 text-white"
          >
            <AiOutlineBell /> Notifications
          </button>
          <button
            className="flex items-center justify-center gap-1 rounded-md border-[1px] bg-cblack p-2 text-white"
          >
            <BiLogInCircle /> Login as User
          </button>
          <BanUserModal />
        </div>
        <div className="flex w-full transform flex-col gap-2 overflow-hidden rounded-lg bg-white align-middle shadow-xl transition-all">
          <div className="flex w-full items-center justify-between border-[1px] border-gray-200 px-4 py-3">
            <h1>Information of bh hh</h1>
          </div>
          <div className="flex flex-col justify-start gap-2 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center gap-2">
                <div className="flex w-full flex-col justify-center gap-2">
                  <label className="self-start">First Name</label>
                  <input
                    type="text"
                    className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                  />
                </div>
                <div className="flex w-full flex-col justify-center gap-2">
                  <label className="self-start">Email</label>
                  <input
                    type="text"
                    className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex w-full flex-col justify-center gap-2">
                  <label className="self-start">Last Name</label>
                  <input
                    type="text"
                    className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                  />
                </div>
                <div className="flex w-full flex-col justify-center gap-2">
                  <label className="self-start">Mobile Number</label>
                  <input
                    type="tel"
                    className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-2">
              <label className="self-start">Address</label>
              <input
                type="number"
                className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">City</label>
                <input
                  type="text"
                  className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">State</label>
                <input
                  type="text"
                  className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">Zip/Postal</label>
                <input
                  type="text"
                  className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                />
              </div>
              <div className="flex w-full flex-col justify-center gap-2">
                <label className="self-start">Country</label>
                <input
                  type="text"
                  className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4"></div>
            <button className="flex items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
