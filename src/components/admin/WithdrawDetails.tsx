import React from "react";
import ApproveModal from "../ApproveModal";
import RejectModal from "../RejectModal";

const WithdrawDetails: React.FC = () => {
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
                <p className="text-xl font-semibold">2023-06-03 08:08 AM</p>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Trx Number</h1>
                <p className="text-xl font-semibold">8UDMPYTXCFSH</p>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Username</h1>
                <h1 className="font-semibold text-cblack">donald</h1>
              </div>
            </div>
            <div className="mx-4 my-0 border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">Payable Amount</h1>
                <p className="text-xl font-semibold">63 LTC</p>
              </div>
            </div>
            <div className="mx-4 mb-2 rounded-b-lg border border-gray-200">
              <div className="flex items-center justify-between border-b border-b-gray-200 p-3 px-3">
                <h1 className="font-light">status</h1>
                <span className="flex items-center justify-center rounded-2xl border-[1px] border-green-500 px-2 py-1 text-xs text-green-500">
                  success
                </span>
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
              <p>ltc1qtmvyqfy2ty6prnczp0p40qdmv8mt7cnw03y7zu</p>
              <div className="flex justify-start items-center gap-2">
                <ApproveModal />
                <RejectModal />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDetails;
