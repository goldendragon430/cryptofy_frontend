import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="px-3 pt-20 lg:px-10 lg:pt-0">
      <div className="flex w-full flex-col items-center justify-center gap-2 pt-10  text-cblack ">
        <h1 className="text-5xl font-bold">Contacts</h1>
        <p>Answers to all your questions.</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 mb-10 gap-5">
          <div className="flex items-center justify-center rounded-xl p-3 shadow-lg bg-cblack text-white">
            <div className="flex flex-col items-center justify-center gap-3 border-[1px] border-gray-300 p-5 rounded-lg">
              <img
                src="https://cryptofy.ca/assets/images/avatars/avatar-1.png"
                className="h-24 w-24 rounded-full mb-10"
                alt=""
              />
              <h1 className="text-xl font-semibold">Support chat</h1>
              <p>Bounty and technical support</p>
              <button className="btn-outline-warning rounded-3xl border-[1px] p-2 w-[18rem] lg:w-[25rem] self-stretch">
                Support chat
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl p-3 shadow-lg bg-cblack text-white">
            <div className="flex flex-col items-center justify-center gap-3 border-[1px] border-gray-300 p-5 rounded-lg">
              <img
                src="https://cryptofy.ca/assets/images/avatars/avatar-4.png"
                className="h-24 w-24 rounded-full mb-10"
                alt=""
              />
              <h1 className="text-xl font-semibold">Telegram Agent</h1>
              <p>Only for cooperation issues</p>
              <button className="btn-outline-warning rounded-3xl border-[1px] p-2 w-[18rem] lg:w-[25rem] self-stretch">
              Telegram Agent
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl p-3 shadow-lg bg-cblack text-white">
            <div className="flex flex-col items-center justify-center gap-3 border-[1px] border-gray-300 p-5 rounded-lg">
              <img
                src="https://cryptofy.ca/assets/images/avatars/avatar-4.png"
                className="h-24 w-24 rounded-full mb-10"
                alt=""
              />
              <h1 className="text-xl font-semibold">Email</h1>
              <p>Only for cooperation issues</p>
              <p className="w-[18rem] lg:w-[25rem] text-center text-sm">support@cryptofy.ca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
