import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const AffilateProgram2: React.FC = () => {
  return (
    <div className="main flex flex-col items-center justify-center gap-8 px-10 py-20">
      <h1 className="text-4xl font-semibold">Affiliate program</h1>
      <p className="text-center">
        The profit received from the purchase of power by your referral will be
        credited to the balance of the coin in which the purchase of power was
        made. You can always use the "Reinvest" button and exchange coins to
        GH/s power.
      </p>
      <div className="flex flex-col items-center justify-start gap-20 lg:grid lg:grid-cols-3">
        <div className="flex flex-col justify-start rounded-lg bg-cblack shadow-lg">
          <div className="bg-gradient-blues  flex flex-col items-center justify-center gap-2 rounded-t-lg p-10 px-20">
            <h1 className="text-xl font-semibold">FIRST LEVEL</h1>
            <h1 className="text-5xl font-bold">10%</h1>
          </div>
          <div className="flex flex-col gap-2 p-6 px-20 text-white">
            <div className="flex items-center gap-1 text-lg font-semibold">
              <AiOutlineCheck /> +3 GH/s for each deposit
            </div>
            <div className="flex items-center gap-1 text-lg font-semibold">
              <AiOutlineCheck /> +3 GH/s for each deposit
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start rounded-lg bg-cblack shadow-lg">
          <div className="bg-gradient-blues  flex flex-col items-center justify-center gap-2 rounded-t-lg p-10 px-20">
            <h1 className="text-xl font-semibold">FIRST LEVEL</h1>
            <h1 className="text-5xl font-bold">10%</h1>
          </div>
          <div className="flex flex-col gap-2 p-6 px-20 text-white">
            <div className="flex items-center gap-1 text-lg font-semibold">
              <AiOutlineCheck /> +3 GH/s for each deposit
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start rounded-lg bg-cblack shadow-lg">
          <div className="bg-gradient-blues  flex flex-col items-center justify-center gap-2 rounded-t-lg p-10 px-20">
            <h1 className="text-xl font-semibold">FIRST LEVEL</h1>
            <h1 className="text-5xl font-bold">10%</h1>
          </div>
          <div className="flex flex-col gap-2 p-6 px-20 text-white">
            <div className="flex items-center gap-1 text-lg font-semibold">
              <AiOutlineCheck /> +3 GH/s for each deposit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffilateProgram2;
