import  { useEffect, useState } from "react"
import NavBar from "../components/global/Navbar";
import Nav2 from "../components/global/Nav2";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import { toast } from "react-toastify";
import {FaUserCheck} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {GiPresent, GiMoneyStack} from 'react-icons/gi'
import {ImMobile} from 'react-icons/im'
import {GrMoney} from 'react-icons/gr'
import TRXImg from '../assets/tron2.png'
import TransactionsTable from "../components/landing/TransactionsTable";

function Landing() {
  const {id} = useParams()
  const [tron, setTron] = useState(0)

  const [{doPost}] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [bonus_rate,setBonusRate] = useState(1)

  const get_config = async()=>{
    const result = await doPost('mining/get_configuration',{
      'token' : token
    })
    if(result.error||result['result'] == "failed"){
      toast.error("Error")
    }else{
      const data = result['data']
       setBonusRate(data['bonus_rate'])
    }  
  }
useEffect(()=>{
  if(token){
    get_config()
  }
},[token])
  useEffect(()=>{
    if(id){
      localStorage.setItem('referral',id)
    }else{
      localStorage.setItem('referral','0')
    }
  },[id])
  return (
    <main className="px-3 font-muli text-custblack lg:px-0">
      {/* <div className="hidden justify-start gap-5 border-b-[.000000001px] border-[#535a7076] py-5 pl-10 lg:flex">
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
      </div> */}
      <NavBar />
      <Nav2 />
      <section className="bg-custom w-full bg-banner bg-no-repeat pb-32 pt-10 lg:bg-contain lg:bg-[100%]">
        <div className="flex w-[95%] flex-col items-baseline gap-1 lg:ml-10 lg:mt-20 lg:w-[40rem]">
          <h1 className="mb-10 w-[80%] text-4xl font-bold leading-[3rem] text-darkblue lg:w-full lg:text-7xl">
            Reliable online Investment for{" "}
            <strong className="text-6xl text-secondred">TRX</strong> Coin.
          </h1>
          <p className="text-md mb-10 w-[90%] text-left font-medium leading-8 text-[#535a70] lg:text-lg">
            It's very easy to earning after registration. Once you have set up
            your account, you can start earning your first coins from our
            TRXcoin Tron Time service!.
          </p>
          {/* <div className="w-full flex flex-col justify-start items-baseline"> */}
          {/* <input
            className="cornered-border lg:text-md w-full border-2 border-primred bg-transparent px-4 py-4 text-sm outline-none lg:w-[40rem] lg:px-8 lg:py-5"
            type="text"
            placeholder="Enter BTC or TRX Address"
          />
          <button className="btn cornered-border px-8 py-4 text-white hover:bg-left lg:mt-2">
            Start Mining
          </button> */}
          {/* </div> */}
        </div>
      </section>
      <section className="flex w-full items-center justify-center lg:mt-52">
        <div className="flex w-[95%] flex-col items-baseline gap-12 lg:flex-row lg:items-center">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/gallery/inv_team.jpg"
            alt=""
            className="cornered-border-r-b w-full lg:w-[30rem]"
          />
          <div className="flex flex-col items-baseline justify-center gap-12 lg:ml-10">
            <h1 className="text-[1.6rem] font-bold text-darkblue lg:text-4xl">
              Who We Are?
            </h1>
            <p className="text-md font-meduim w-full text-[#535a70] lg:text-lg">
              Trxmining is a best Investment platfrom for trx coin investing. We
              have very experiance team for investing platfrom. And make profit
              easily!
            </p>
            <a
              href="#"
              className="btn cornered-border m-3 px-7 py-5 text-white hover:bg-left"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-20 pt-14 lg:h-[30rem]">
        <h1 className="text-3xl font-bold text-darkblue lg:text-5xl">
          What Makes <span className="text-primred">Trx.uk</span> Special?
        </h1>
      </section>
      <section className="flex flex-col justify-center gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:px-10">
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <FaUserCheck style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
            Sign Up Bonus
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          Register an account and get 100GH/s Power for <b style = {{color : 'red',fontSize : 30}}>free</b>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <AiOutlineUsergroupAdd style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
          Three-level Affiliate
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          Get 10% for 1-level  each new Deposit, 5% for 2-level and 2% for 3-level partners.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <GiPresent style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
          Daily Bonus
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          A random bonus for all users every day and the system of rewards for cooperation.
          </p>
        </div>  
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <ImMobile style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
          Easy Payments
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          Top up your account with TRX
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <GrMoney style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
          Double income
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          Get double income not only from daily mining you can also stake trx to get even higher profit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <GiMoneyStack style = {{width:100,height:100}}/>
          <h3 className="text-2xl font-bold text-darkblue">
          Withdrawal without deposit
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
          The user who has not made a deposit and has collected the minimum amount for withdrawal is allowed to withdraw after ~ 60 days.
          </p>
        </div>         
      </section>
      <section className="flex items-center justify-center py-20 pt-14 lg:h-[30rem]">
        <h1 className="text-3xl font-bold text-darkblue lg:text-5xl">
          TRX MINING <span className="text-primred">PROFIT</span> CALCULATOR
        </h1>
      </section>
      <section className="flex flex-col items-center justify-center bg-[$fafafa] p-1">
        <div className="flex w-full flex-col gap-2 lg:grid lg:grid-cols-3" style={{ paddingTop: 10 }}>
          <div className="box-shadow flex flex-col items-center justify-center gap-2 p-3 lg:[w-90%] hidden lg:justify-self-end lg:flex">
            <img
              src={TRXImg}
              className="h-48 w-48 rounded-md bg-white p-1"
              alt=""
            />
            
          </div>
          <div className="text-white font-extrabold col-span-2 cornered-border-l flex w-full flex-col items-center justify-between gap-10 bg-img2 bg-cover bg-center px-10 py-16 lg:w-[70%] lg:py-20">
            <div>
              <p className="mb-1 text-sm">TRX Amount to invest</p>
              <div className="flex place-items-center">
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full text-darkblue rounded-md p-2 focus:outline focus:outline-1 focus:outline-gray-100"
                  value={tron}
                  onChange={e => setTron(parseInt(e.target.value))}
                />
                <span className="text-2xl ml-1"> TRX </span>
              </div>
            </div>
            <div className="flex place-items-center gap-10">
              <div className="text-center">
                <p className="text-sm">Power</p>
                <p className="text-2xl ml-1">{Math.floor(bonus_rate * tron)} GH/s </p>
              </div>
              <div className="text-center">
                <p className="text-sm">Profit</p>
                <p className="text-2xl ml-1">{Math.floor(bonus_rate * tron * 3)} TRX </p>
              </div>
              <select className="form-select text-darkblue form-select-sm bg-white mx-2" aria-label=".form-select-sm example">
                <option value="1">Per 1 day</option>
                <option value="10">Per 10 days</option>
                <option value="30">Per 30 days</option>
                <option value="60">Per 60 days</option>
                <option value="180">Per 180 days</option>
              </select>
            </div>
          </div>
          {/* <div className="box-shadow flex flex-col items-center justify-center gap-2 p-3 lg:px-5">

          </div> */}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-[#fafafa]  py-10">
        <div className="mb-4 lg:mb-20 lg:mt-32">
          <p className="text-md mb-5 mt-10 text-left font-medium text-[#535a70] lg:text-center lg:text-lg">
            Our Investment plan for you
          </p>
          <h1 className="mb-20 text-3xl font-bold text-darkblue lg:text-4xl">
            Choose Your Plan Easily!
          </h1>
        </div>
        <div className="flex  w-full grid-cols-3 flex-col items-center justify-center gap-10 lg:grid">
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              Single Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Basic</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$20.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              half Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Advanced</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$25.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              Full Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Premium</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$29.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
        </div>
      </section>
      <section className="mt-32 flex items-center justify-center px-1">
        <div className="cornered-border-l flex w-full flex-col items-center justify-between gap-10 bg-img1  bg-cover bg-center px-10 py-16 text-white lg:w-[90%] lg:flex-row lg:py-20">
          <h1 className="w-80 text-2xl font-bold lg:text-3xl">
            Get In Our Touch To Subscribe.
          </h1>
          <div className="cornered-border flex items-center justify-between bg-white px-1 py-1 lg:w-[30rem]">
            <input
              type="text"
              className="w[70%] lg:text-md bg-transparent px-4 py-4 text-sm text-custblack outline-none lg:px-8 lg:py-3"
              placeholder="Enter Email"
            />
            <button className="cornered-border bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className="mb-20 flex flex-col justify-center gap-4 bg-[#f8fcff] lg:pt-52">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-darkblue lg:text-5xl">
            How To Earn <span className="text-primred">TRX</span> ?
          </h1>
        </div>
        <div className="my-20 flex grid-cols-4 items-center justify-start gap-5 lg:grid">
          <div className="box-shadow flex flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue text-center h-full lg:px-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-xl font-bold rounded-full text-white">
              1
            </div>
            <h1 className="text-xl font-semibold">Registration</h1>
            <h2 className="text-lg font-medium">Create An Account, Verify Your Email And Receive A Welcome Bonus Of  xxxGH/s</h2>
          </div>
          <div className="box-shadow flex flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue text-center h-full lg:px-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-xl font-bold rounded-full text-white">
              2
            </div>
            <h1 className="text-xl font-semibold">Purchase Power</h1>
            <h2 className="text-lg font-medium">Use The Calculator To Calculate The Profit  And Make A Deposit. </h2>
          </div>
          <div className="box-shadow flex flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue text-center h-full lg:px-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-xl font-bold rounded-full text-white">
              3
            </div>
            <h1 className="text-xl font-semibold">Start Mining</h1>
            <h2 className="text-lg font-medium">After Deposit, You Will Recieve The Power (GH/s) , Use All The Power In TRX</h2>
          </div>
          <div className="box-shadow flex flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue text-center h-full lg:px-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-xl font-bold rounded-full text-white">
              4
            </div>
            <h1 className="text-xl font-semibold">Withdrawal Of TRX</h1>
            <h2 className="text-lg font-medium">Send earned TRX to any wallet, reinvest to increase power, or stake for more TRX.</h2>
          </div>
        </div>
      </section>
      <section className="mb-20 flex flex-col justify-center gap-4 bg-[#f8fcff] lg:pt-52" id = "statistics" >
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl font-bold text-secondred lg:text-xl">
            Trxmining Live Records.
          </h6>
          <h1 className="text-2xl font-bold text-darkblue lg:mb-20 lg:text-5xl" >
            CURRENT STATISTICS.
          </h1>
        </div>
        <div className="p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="box-shadow shadow-md bg-white rounded-lg p-4 flex items-center justify-between">
              <div className="font-black">
                <p className="text-2xl text-gray-500">Registered Users</p>
                <h3 className="text-4xl font-bold">1234</h3>
              </div>
              <svg
                fill="none"
                stroke="#e62335"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <div className="box-shadow bg-white rounded-lg p-4 flex items-center justify-between">
              <div className="font-black">
                <p className="text-2xl text-gray-500">Total Investments</p>
                <h3 className="text-4xl font-bold">100,000 TRX</h3>
              </div>
              <svg
                fill="none"
                stroke="#e62335"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>

            <div className="box-shadow bg-white rounded-lg p-4 flex items-center justify-between">
              <div className="font-black">
                <p className="text-2xl text-gray-500">All Withdrawals</p>
                <h3 className="text-4xl font-bold">50,000 TRX</h3>
              </div>
              <svg
                fill="none"
                stroke="#e62335"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>


            </div>

            <div className="box-shadow bg-white rounded-lg p-4 flex items-center justify-between">
              <div className="font-black">
                <p className="text-2xl text-gray-500">Days Online</p>
                <h3 className="text-4xl font-bold">365</h3>
              </div>
              <svg
                fill="none"
                stroke="#e62335"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>

            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 flex flex-col justify-center align-center items-center gap-4 bg-[#f8fcff] lg:pt-52">
        <div className="mb-4">
          <p className="text-2xl mb-5 mt-10 text-center font-black text-[#535a70] lg:text-center lg:text-4xl">
            Recent Transactions
          </p>
          <h1 className="mb-20 text-xl font-bold text-darkblue text-center lg:text-2xl">
            Start Earning Now
          </h1>
        </div>
        <div className="w-[90%] rounded-lg p-6 shadow-md">
          <TransactionsTable />
        </div>
      </section>
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
    </main>
  );
}

export default Landing;
