import React from "react";

const EventBanner: React.FC = () => {
  return (
    <>
      <div className="fixed left-[30%] top-0 shadow-xl rounded-lg z-[999999999999999999999999999999999999] w-[60rem] bg-orange-500 py-4 px-10 text-white flex justify-between">
        <div className="flex flex-col">
          <h1 className="flex justify-between gap-4 text-xl font-semibold text-black">
            Celebrate World Television Day, reacharge to get 300% bonus
          </h1>
          <h3>2021 - 21 NOVEMBER</h3>
          <p className="font-thin mt-3">SPECIAL</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-black bg-slate-200 px-4 py-1 rounded-2xl">Deposit Now</button>
        </div>
      </div>
      <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
          <span className="self-start text-base font-bold uppercase">
            Event Banner
          </span>
          <div className="w-full rounded-lg bg-white p-4">
            <div className="grid w-full grid-cols-2">
              <div className="flex flex-col">
                <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
                  <div className="px-3 py-5">
                    <p className="mb-1 text-white">add image</p>
                    <input
                      type="file"
                      className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                    />

                    <p className="mb-1 text-white">add text</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBanner;
