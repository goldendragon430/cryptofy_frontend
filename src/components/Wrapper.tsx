import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./global/Navbar";
import Nav2 from "./global/Nav2";
const OthersWrapper: React.FC = () => {
  return (
    <>
      <NavBar />
      <Nav2 />
        <main className="main font-roboto">
        {/* <header className="hidden items-center justify-start gap-4 border-b border-b-gray-200  px-5 py-8 text-cblack lg:flex">
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
        </header> */}
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
      <footer className="lg:pt-15 w-full bg-footer-bg bg-cover py-10 pb-14">
        <div className="flex w-full flex-col justify-center gap-10 pb-4 lg:grid lg:grid-cols-[20%_12%_12%_12%_15%]">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-fit flex-col items-center justify-center gap-2">
              <img
                src="footermain.png"
                alt=""
                className="w-[70%] bg-[#80808060]"
              />
              <span className="text-sm font-bold text-white">
                company number <b className="underline">57687980</b>
              </span>
            </div>
            <span className="whitespace-pre-wrap text-sm font-bold text-white">
              228 holton Road, harry, wales, CF03 4HS
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <img src="tron.png" alt="" className="w-[60%]" />
            <img src="tronlink.png" alt="" className="w-[60%]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <img src="binance.png" alt="" className="w-[60%]" />
            <img src="trustwallet.png" alt="" className="w-[60%]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <img src="huobi.png" alt="" className="w-[60%]" />
            <img src="okex.png" alt="" className="w-[60%]" />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-3 pl-11">
            <span className="text-base font-bold uppercase text-white">
              quick link
            </span>
            <div className="gap flex w-full flex-col items-start text-sm font-medium">
              <span className="footerLink">Account</span>
              <span className="footerLink">Status</span>
              <span className="footerLink">FAQ</span>
              <span className="footerLink">Contact</span>
            </div>
          </div>
        </div>
        <hr className="text-[#0e141f]" />
        <div className="flex h-full items-center pt-2 font-bold lg:pl-16">
          <p className="text-[#736e73]">
            Copyright ©2023 All rights reserved by TRXM.UK
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
