import React from "react";


const PlanManagement: React.FC = () => {
  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-start gap-4">
          <h1 className="text-center text-2xl font-medium text-cblack">
            Mining management
          </h1>
          <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
            <div className=" px-3 py-5">
              {/* <h1 className="mb-4 text-2xl font-medium text-white">Plan 1</h1> */}

              <p className="mb-1 text-white">Min reinvest amount</p>
              <input
                type="text"
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />
              <p className="mb-1 text-white">Daily earning per GH/s</p>
              <input
                type="text"
                className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />

              <p className="mb-1 text-white">Registration Bonus (GH/s)</p>
              <input
                type="text"
                className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
              />
            </div>

            <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
              <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                update
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="flex flex-col lg:grid w-full lg:grid-cols-3 gap-2">
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className="mb-4 w-full text-center text-2xl font-medium text-white">
              Plan 1
            </h1>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <p className="text-white">100</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <p className="text-white">1 day</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <p className="text-white">10%</p>
            </div>
          </div>

          
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className="mb-4 w-full text-center text-2xl font-medium text-white">
              Plan 2
            </h1>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <p className="text-white">100</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <p className="text-white">1 day</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <p className="text-white">10%</p>
            </div>
          </div>

         
        </div>
        <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
          <div className="flex flex-col justify-start gap-6 px-3 py-5 pb-20">
            <h1 className="mb-4 w-full text-center text-2xl font-medium text-white">
              Plan 3
            </h1>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Amount:</p>
              <p className="text-white">100</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Period:</p>
              <p className="text-white">1 day</p>
            </div>
            <div className="flex lg:w-[70%] w-full items-center justify-between gap-20 self-start pl-1 lg:pl-5 text-lg">
              <p className="font-medium text-white">Bonus rate:</p>
              <p className="text-white">10%</p>
            </div>
          </div>

          
        </div>
        
      </div>
      <div className="mt-6 flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
            <span className="self-start text-base font-bold uppercase">
              Staking plan History
            </span>
            <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
              <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
                <div className="flex justify-between border-b-[2px] border-b-gray-500 px-10 py-5 text-xl font-bold">
                  <h1>Plan</h1>
                  <h1>Amount stacked</h1>
                  <h1>Active date</h1>
                  <h1>End Date</h1>
                  <h1>Profit</h1>
                  <h1>status</h1>
                </div>
                <div className="flex w-full items-center justify-center p-5">
                  <p>You have no transactions yet</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default PlanManagement;
