import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import { toast } from "react-toastify";

const MainAdminDashboard: React.FC = () => {
  const { t } = useTranslation()
  const [user,] = useAuth()
  const [{ doPost }] = useApi()
  const token = user?.token
  const [userAnalyticsInfo, setUserAnalyticsInfo] = useState({
    'total_users': 0,
    'today_users': 0,
    'country_users': []
  })
  const [miningAnalyticsInfo, setMiningAnalyticsInfo] = useState({
    'total_deposit': 0,
    'today_withdrawal': 0,
    'day_deposit': null,
    'day_number_deposit': 0,
    'number_deposit': 0,
    'number_withdrawal': 0
  })
  const [reigsterFilter, setRegisterFilter] = useState('month')
  const [depositFilter, setDepositFilter] = useState('month')
  const [withdrawalFilter, setWithdrawlFilter] = useState('month')

  const [users, setUsers] = useState({
    titles: [],
    values: []
  })
  const [deposites, setDeposites] = useState({
    titles: [],
    values: []
  })
  const [withdrawls, setWithdrawls] = useState({
    titles: [],
    values: []
  })


  const [country, setCountry] = useState([])
  const [totalUsers, setTotalUsers] = useState([])

  const getUserAnalytics = async () => {
    const response = await doPost('admin/user_analytics', {
      token: token,
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setUserAnalyticsInfo(response['data'])
      var countryList = []
      var totalList = []
      for (var i = 0; i < response['data']['country_users'].length; i++) {
        countryList.push(response['data']['country_users'][i]['country'])
        totalList.push(response['data']['country_users'][i]['total'])
      }

      setTotalUsers(totalList)
      setCountry(countryList)
    }
  }
  const onChangeUsers = (e) => {
    setRegisterFilter(e.target.value)
  }
  const onChangeDeposit = (e) => {
    setDepositFilter(e.target.value)
  }
  const onChangeWithdrawl = (e) => {
    setWithdrawlFilter(e.target.value)
  }

  const getMiningAnalytics = async () => {
    const response = await doPost('admin/mining_analytics', {
      token: token,
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      setMiningAnalyticsInfo(response['data'])

    }
  }

  const registeredUsers = async () => {
    const response = await doPost('admin/registered_users', {
      token: token,
      type: reigsterFilter
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      const result = response['data']

      if (reigsterFilter == 'month') {
        const p = getLastMonths(result, response['year'], response['month'])
        setUsers(p)
      }
      else if (reigsterFilter == 'day') {
        const p = getLastDays(result, response['year'], response['month'], response['day'])
        setUsers(p)
      }
      else {
        const p = getLastTime(result, response['month'], response['day'], response['hour'])
        console.log(p)
        setUsers(p)
      }

    }
  }

  const deposteFetch = async () => {
    const response = await doPost('admin/trans_analytics', {
      token: token,
      type: depositFilter,
      pay_type: 'deposite'
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      const result = response['data']

      if (depositFilter == 'month') {
        const p = getLastMonths(result, response['year'], response['month'])
        setDeposites(p)
      }
      else if (depositFilter == 'day') {
        const p = getLastDays(result, response['year'], response['month'], response['day'])
        setDeposites(p)
      }
      else {
        const p = getLastTime(result, response['month'], response['day'], response['hour'])
        console.log(p)
        setDeposites(p)
      }

    }
  }

  const withdrawlFetch = async () => {
    const response = await doPost('admin/trans_analytics', {
      token: token,
      type: withdrawalFilter,
      pay_type: 'withdrawl'
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      const result = response['data']

      if (withdrawalFilter == 'month') {
        const p = getLastMonths(result, response['year'], response['month'])
        setWithdrawls(p)
      }
      else if (withdrawalFilter == 'day') {
        const p = getLastDays(result, response['year'], response['month'], response['day'])
        setWithdrawls(p)
      }
      else {
        const p = getLastTime(result, response['month'], response['day'], response['hour'])
        console.log(p)
        setWithdrawls(p)
      }

    }
  }
  const getLastMonths = (data, year_v, month_v) => {
    // Get current date and time
    const now = new Date(`${year_v}-${month_v}-01`);
    const titles = data.map(item => item.title);
    const values = data.map(item => item.count);
    // Initialize an array to store the last 6 months' dates
    const lastSixMonths = [];
    const result = []
    // Loop through the last 6 months and add the dates to the array
    for (let i = 4; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      if (titles.indexOf(date.getMonth() + 1) >= 0) {
        result.push(values[titles.indexOf(date.getMonth() + 1)])
      } else {
        result.push(0)
      }
      lastSixMonths.push(`${year}-${month}`);
    }
    return {
      titles: lastSixMonths,
      values: result
    }

  }
  const getLastDays = (data, year_v, month_v, day_v) => {
    // Get current date and time
    const now = new Date(`${year_v}-${month_v}-${day_v}`);
    const titles = data.map(item => item.title);
    const values = data.map(item => item.count);
    // Initialize an array to store the last 6 months' dates
    const lastSixMonths = [];
    const result = []
    // Loop through the last 6 months and add the dates to the array
    for (let i = 4; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth(), day_v - i);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      if (titles.indexOf(date.getDate()) >= 0) {
        result.push(values[titles.indexOf(date.getDate())])
      } else {
        result.push(0)
      }
      lastSixMonths.push(`${year}-${month}-${day}`);
    }
    return {
      titles: lastSixMonths,
      values: result
    }
  }

  const getLastTime = (data, month_v, day_v, hour_v) => {
    // Get current date and time
    const now = new Date();
    now.setMonth(month_v)
    now.setDate(day_v)
    now.setHours(hour_v)

    const titles = data.map(item => item.title);
    const values = data.map(item => item.count);
    // Initialize an array to store the last 6 months' dates
    const result = []
    console.log(data)
    // Initialize an array to store the last 6 hours' times
    const lastSixHours = [];

    // Loop through the last 6 hours and add the times to the array
    for (let i = 4; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - i);
      const month = (date.getMonth()).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const time = date.toLocaleTimeString([], { hour: '2-digit', hour12: false });
      if (titles.indexOf(date.getHours()) >= 0) {
        result.push(values[titles.indexOf(date.getHours())])
      } else {
        result.push(0)
      }

      lastSixHours.push(`${month}-${day} ${time}`);
    }
    return {
      titles: lastSixHours,
      values: result
    }


  }

  useEffect(() => {
    if (token) {
      getUserAnalytics()
      getMiningAnalytics()
      registeredUsers()
      deposteFetch()
      withdrawlFetch()
    }
  }, [token])

  useEffect(() => {
    if (token) {
      registeredUsers()
    }
  }, [reigsterFilter])

  useEffect(() => {
    if (token) {
      deposteFetch()
    }
  }, [depositFilter])

  useEffect(() => {
    if (token) {
      withdrawlFetch()
    }
  }, [withdrawalFilter])

  return (
    <div className="flex h-full w-[95%] flex-col items-center justify-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[6rem]">
      {/* <div className="flex w-full flex-col items-center justify-center px-2 lg:flex-row lg:justify-between">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <button className="flex items-center gap-1 rounded-md bg-green-600 p-2 text-white hover:bg-green-700">
          <BsFillClockFill /> last Cron Run: 29 seconds ago
        </button >
      </div> */}
      <div className="flex w-full flex-col gap-3 px-2 lg:grid lg:grid-cols-3">
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'users'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-900 p-[1px] text-xs text-blue-900">
            {t("view all")}
          </Link>
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-900 opacity-20">
            <FaUsers />
          </div>
          <div className="rounded-md bg-blue-900 p-2 text-3xl text-white">
            <FaUsers />
          </div>
          <div>
            <h1 className="text-xl">{userAnalyticsInfo['total_users']}</h1>
            <p>{t("Total users")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'users'} className="text-greborder-green-600 absolute right-[4px] top-[4px] rounded-md border-[1px] border-green-600 p-[1px] text-xs">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 border-green-600 text-5xl text-green-600 opacity-20">
            <LuUserCheck />
          </div>
          <div className="rounded-md border-green-600 bg-green-600 p-2 text-3xl text-white">
            <LuUserCheck />
          </div>
          <div>
            <h1 className="text-xl">{userAnalyticsInfo['today_users']}</h1>
            <p>{t("New register")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'deposit'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['total_deposit']}</h1>
            <p>{t("Total deposit")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'withdrawals'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['today_withdrawal']}</h1>
            <p>{t("Total withdrawal")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'payment-gateway'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['day_deposit'] == null ? 0 : miningAnalyticsInfo['day_deposit']}</h1>
            <p>{t("First Charge Amount")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'payment-gateway'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['day_number_deposit']}</h1>
            <p>{t("First charge number")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'deposit'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['number_deposit']}</h1>
            <p>{t("Number of deposit")}</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-start gap-2 overflow-hidden rounded-md bg-white p-3 shadow-lg">
          <Link to={'withdrawals'} className="absolute right-[4px] top-[4px] rounded-md border-[1px] border-blue-950 p-[1px] text-xs text-blue-950">
            {t("view all")}
          </Link >
          <div className="absolute bottom-[-0.65rem] right-[-0.65rem] -rotate-45 text-5xl text-blue-950 opacity-20">
            <FaRegMoneyBillAlt />
          </div>
          <div className="rounded-md bg-blue-950 p-2 text-3xl text-white">
            <FaRegMoneyBillAlt />
          </div>
          <div>
            <h1 className="text-xl">{miningAnalyticsInfo['number_withdrawal']}</h1>
            <p>{t("Number of withdrawwals")}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 px-2 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl">{t("Total deposit")}</h1>
            <select
              name="time"
              className="rounded-md border-[1px] border-gray-900 p-2 text-lg" onChange={onChangeDeposit}
            >
              <option value="month" selected>{t("Month")}</option>
              <option value="day">{t("Day")}</option>
              <option value="hour">{t("Hour")}</option>
            </select>
          </div>
          <Chart
            height={300}
            width="100%"
            type="bar"
            options={{
              chart: {
                id: "basic-bar",
                animations: {
                  enabled: false,
                },

                toolbar: {
                  show: false,
                },
              },
              dataLabels: {
                enabled: false,
              },
              xaxis: {
                categories: deposites['titles'],
              },
              plotOptions: {
                bar: {
                  borderRadiusApplication: "end",
                  borderRadius: 20,
                },
              },
              grid: {
                show: false,
              },
              legend: {
                show: true,
              },
              colors: ["#072366"],
            }}
            series={[
              {
                name: "total returned",
                data: deposites['values'],
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl">{t("Total withdrawal")}</h1>
            <select
              name="time"
              className="rounded-md border-[1px] border-gray-900 p-2 text-lg"
              onChange={onChangeWithdrawl}
            >
              <option value="month" selected>{t("Month")}</option>
              <option value="day">{t("Day")}</option>
              <option value="hour">{t("Hour")}</option>
            </select>
          </div>
          <Chart
            height={300}
            width="100%"
            type="bar"
            options={{
              chart: {
                id: "basic-bar",
                animations: {
                  enabled: false,
                },

                toolbar: {
                  show: false,
                },
              },
              xaxis: {
                categories: withdrawls['titles'],
              },
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                bar: {
                  borderRadiusApplication: "end",
                  borderRadius: 20,
                },
              },
              colors: ["#072366"],
              grid: {
                show: false,
              },
              legend: {
                show: true,
              },
            }}
            series={[
              {
                name: "total returned",
                data: withdrawls['values'],
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl">{t("Number of Registrants")}</h1>
            <select
              name="time"
              className="rounded-md border-[1px] border-gray-900 p-2 text-lg" onChange={val => onChangeUsers(val)}
            >
              <option value="month" selected>{t("Month")}</option>
              <option value="day">{t("Day")}</option>
              <option value="hour">{t("Hour")}</option>
            </select>
          </div>
          <Chart
            height={300}
            width="100%"
            type="bar"
            options={{
              chart: {
                id: "basic-bar",
                animations: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },
              colors: ["#072366"],
              xaxis: {
                categories: users['titles'],
              },
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                bar: {
                  borderRadiusApplication: "end",
                  borderRadius: 20,
                },
              },
              grid: {
                show: false,
              },
              legend: {
                show: true,
              },
            }}
            series={[
              {
                name: "total returned",
                data: users['values'],
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-2xl">{t("Login by country (last 30 days)")}</h1>
          </div>
          <Chart
            height={300}
            width="100%"
            type="donut"
            series={totalUsers}
            options={{
              labels: country,
              legend: {
                show: false,
              },
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "50",
                  },
                },
              },
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default MainAdminDashboard;
