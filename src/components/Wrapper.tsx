import React from "react";
import { BiHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import NavBar2 from "./global/Navbar2";

const OthersWrapper: React.FC = () => {
  return (
    <>
      <main className="main font-roboto">
        <NavBar2 />
        <header className="hidden items-center justify-start gap-4 border-b border-b-gray-200  px-5 py-8 text-cblack lg:flex">
          <h1 className="text-xl font-bold">TX MINING</h1>
          <a href="/" className="flex items-center gap-1 text-lg font-bold">
            <BiHome /> Home
          </a>
          <a href="" className="flex items-center gap-1 text-lg font-bold">
            <IoAnalyticsSharp /> Analytics
          </a>
          <a href="" className="flex items-center gap-1 text-lg font-bold">
            <FiUsers /> Affiliate Program
          </a>
          <a href="" className="flex items-center gap-1 text-lg font-bold">
            Help
          </a>
          <a
            href="/dashboard"
            className="bg-gradient-ibiza ml-auto rounded-md px-7 py-1 text-lg font-bold text-white"
          >
            Dashboard
          </a>
        </header>
        <Outlet />
        {/* <footer className="flex w-full flex-col gap-10 border-t border-t-gray-200 px-10 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex flex-col justify-start gap-2 lg:w-[20%]">
          <h1 className="text-xl font-bold">TX MINING</h1>
          <img
            src="https://cryptofy.ca/assets/images/govuk.png"
            className="h-32 w-32"
            alt=""
          />
          <p>60 Mordaunt St, London, United Kingdom, SW9 9RB</p>
          <p>Copyright © 2023. All right reserved.</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Parteners</h1>
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/coinpayments.png"
              alt=""
            />
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/binance.svg"
              alt=""
            />
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/trustpilot.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Pages</h1>

            <a href="#">Home</a>
            <a href="#">Statistics</a>
            <a href="#">Affiliate program</a>
            <a href="#">FAQ</a>
            <a href="#">About us</a>
            <a href="#">Terms</a>
            <a href="#">Plans</a>
            <a href="#">Contacts</a>
          </div>
        </div>
      </footer> */}
      </main>
      <footer className="bg-footer-bg bg-cover px-4 py-20 pb-14 lg:pt-32">
        <div className="flex grid-cols-4 grid-rows-1 flex-col gap-10 lg:mb-32 lg:grid lg:px-20">
          <div className="flex flex-col gap-5">
            <img
              src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
              alt=""
            />
            <h1 className="font-medium text-[#7d767d]">
              Receive updates and latest news direct from Simply enter.
            </h1>
            <h1 className="text-3xl text-white">
              +156<span className="text-secondred">4585 3569</span>
            </h1>
            <p className="font-medium text-[#736e73]">youremail@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-white">OUR SUPPORT</h1>
            <p className="font-medium text-[#736e73]">
              Telegram: @Trxmininghelp
            </p>
            <p className="font-medium text-[#736e73]">
              Gmail: Trxmining.Com@Gmail.Com
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-white">QUICK LINK</h1>
            <p className="font-medium text-[#736e73]">Account</p>
            <p className="font-medium text-[#736e73]">Status</p>
            <p className="font-medium text-[#736e73]">Faq</p>
            <p className="font-medium text-[#736e73]">Contact</p>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-xl font-medium text-white">NEWSLATTER</h1>
            <p className="font-medium text-[#736e73]">
              Subscribe now to get daily updates
            </p>
            <div className="flex h-10 w-[20rem] items-center justify-center bg-[#101720] text-sm">
              <input
                type="text"
                placeholder="Email Address"
                className="w-[75%] bg-transparent pl-3 text-[#736e73] outline-none"
              />
              <button className="h-full w-[25%] bg-[#0a0f17] text-primred">
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="text-[#0e141f]" />
        <div className="flex h-full items-center pt-10 lg:pl-16">
          <p className="text-[#736e73]">
            Copyright ©2023 All rights reserved by{" "}
            <p className="text-secondred">Trxmining</p>
          </p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default OthersWrapper;
