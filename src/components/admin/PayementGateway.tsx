import React from "react";

const PaymentGateway: React.FC = () => {
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
            
                value={"lorec sdcbds cvdsc"}
                className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-2">
              <label className="self-start">Private key</label>
              <input
                type="password"
                value={"lorec sdcbds cvdsc"}
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
                    value={"100000000.00"}
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
                    value={"100000000.00"}
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
                    value={"100000000.00"}
                    placeholder="Send us a message"
                    className="w-[80%] outline-none px-3"
                  />
                  <span className="bg-slate-500 p-1 font-bold text-2xl w-[20%] flex justify-center items-center">TRX</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md"
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
