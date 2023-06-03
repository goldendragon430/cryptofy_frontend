import {
  GrFacebookOption,
  GrLinkedinOption,
  GrTwitter,
  GrGooglePlus,
} from "react-icons/gr";
import NavBar from "./global/Navbar";
import Nav2 from "./global/Nav2";
import { useState } from "react";

function Landing() {
  return (
    <main className="font-muli text-custblack lg:px-0">
      <div className="hidden justify-start gap-5 border-b-[.000000001px] border-[#535a7076] py-5 pl-10 lg:flex">
        <p className="text-[#535a70]">Call Us: (+84) 939 512 999</p>
        <p className="text-[#535a70]"> info@trxmining.com</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#">
            <GrFacebookOption className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrTwitter className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrLinkedinOption className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrGooglePlus className="text-[#535a70]" />
          </a>
        </div>
      </div>
      <NavBar />
      <Nav2 />
      <section className="w-full bg-tron bg-cover bg-[100%] bg-no-repeat">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000000b3] py-32 text-white">
          <h1 className="text-3xl font-semibold lg:text-6xl">
            OUR <span className="text-colord">PRICES</span>
          </h1>
          <span className="w-20 border-t-4 bg-gray-50"></span>
          <div className="text-xl lg:text-2xl">
            <span className="text-colord">HOME</span> / <span>PRICING</span>
          </div>
        </div>
      </section>
      <section className="px-2 lg:px-32">
        <div className="flex flex-col items-center justify-start gap-5 pt-20">
          <h1 className="text-4xl font-bold text-cblack">BUY BITCOINS</h1>
          <h2 className="text-2xl text-gray-400">
            Buy bitcoins with your credit card or cash here! Register to Bayya
            and get your bitcoins today.
          </h2>
          <div className="grid grid-cols-1 gap-5 py-20 lg:grid-cols-3">
            <PriceCard days="30" min={50} perc="400" plan="1" />
            <PriceCard days="60" min={100} perc="300" plan="2" />
            <PriceCard days="90" min={100} perc="400" plan="3" />
            <PriceCard days="30" min={100} perc="200" plan="4" />
            <PriceCard days="60" min={100} perc="300" plan="5" />
            <PriceCard days="90" min={100} perc="400" plan="6" />
          </div>
        </div>
      </section>
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
    </main>
  );
}

export default Landing;

function PriceCard({
  plan,
  perc,
  days,
  min,
}: {
  plan: string;
  perc: string;
  days: string;
  min: number;
}) {
  const [value, setValue] = useState(min);
  return (
    <div className="box-2 box-shadow-2 flex flex-col items-center justify-center gap-8 rounded-lg p-10 text-2xl font-bold">
      <h1 className="text-4xl text-primred">Plan {plan}</h1>
      <h1 className="text-5xl font-semibold text-primred">{perc}%</h1>
      <p className="text-[#877e78]">Payout {days} day(s)</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-[#877e78]">Minimum Invest</p>
        <p className="text-[#877e78]">{min}$</p>
      </div>
      <input
        type="range"
        className="w-full"
        value={value}
        min={min}
        max={5000}
        onChange={(e) => void setValue(parseInt(e.target.value, 10))}
      />
      <div className="flex w-full items-center justify-center gap-56 text-[#877e78]">
        <div>
          <p className="font-light">Invest</p>
          <input
            type="number"
            value={value}
            className="w-[80%] border-[1px] border-primred bg-gray-500 bg-opacity-50 text-black"
          />
        </div>
        <div className="flex flex-col items-end">
          <p className="font-light">get</p>
          <h1 className="w-[80%]">{value}</h1>
        </div>
      </div>
      <div>
        <button className="rounded-full bg-primred p-3 px-5 font-thin text-white">
          INVEST NOW
        </button>
      </div>
    </div>
  );
}
