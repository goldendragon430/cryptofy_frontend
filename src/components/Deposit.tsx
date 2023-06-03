import React, { useEffect, useState } from "react"
import PaymentModal from "./PaymentModal";
import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
import { toast } from "react-toastify";

const Deposit: React.FC = () => {
  const [{doPost}] = useApi()
  const [user,] = useAuth()
  const username = user?.username
  const wallet = user?.wallet
  const token = user?.token
  const [tron,setTron] = useState(0)
  const [bonus_rate,setBonusRate] = useState(1)
  const [transactions,setTransactions] = useState([])

  const checkDeposite = async()=>{
    const response = await doPost('mining/check_deposite',{
      token : token
    })
    if(response.error || response.result == 'failed') {

    }
    else{
      if(response['is_deposited']){
        const amount = response['amount']
        toast.info( amount + "Trx is newly deposited.")
      }
    }
  }
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
  const getTransaction = async()=>{
    const response = await doPost('transaction/get',{
      token : token,
      type : 'deposite'
    })
    if(response.error || response.result == 'failed') {
      toast.error("Server Error")
    }
    else{
      setTransactions(response.data)
    }
  }
  const refresh = ()=>{
    getTransaction()
    get_config()
  }
  useEffect(()=>{
    if (token)
      refresh()
  },[token])

  useEffect(() => {
    const timeout = setInterval(() => {
      if(token)
          checkDeposite()
    }, 60000);

    return () => clearInterval(timeout);
  }, [token]);

  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4">
        <span className="text-2xl font-semibold text-cblack lg:text-4xl">
          Hi, {username} 👋
        </span>
        <span className="w-full rounded-md border border-cblack bg-gray-200 p-4 text-start text-base font-semibold text-cblack">
          Only today the bonus +5% to the deposit when replenishing from $25
        </span>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          MAKE DEPOSIT
        </span>
        <div className="w-full border-t border-t-gray-200  pt-6">
          <div className="rounded-lg bg-cblack p-4 text-white">
            <div className="flex flex-col border-b border-b-gray-200 lg:grid lg:grid-cols-4">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-gray-500 bg-opacity-25 p-2">
                <img
                  src="https://cryptologos.cc/logos/tron-trx-logo.svg?v=014"
                  className="h-12 w-12 rounded-md bg-white p-1"
                  alt=""
                />
                <p>Tron coin</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 lg:grid lg:grid-cols-2" style = {{paddingTop:10}}>
              <div className="flex flex-col justify-start gap-2 py-3">
                <div>
                  <p className="mb-1 text-sm">Tron amount to deposit</p>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-1 focus:outline-gray-100"
                    value = {tron}
                    onChange = {e=>setTron(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2 py-3">
                <div>
                  <p className="mb-1 text-sm">Power by deposit</p>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-1 focus:outline-gray-200"
                    value = {Math.floor(bonus_rate * tron)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center" style ={{margin:10}} >  <PaymentModal address = {wallet}  /></div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL TRANSACTIONS
        </span>
        <div className="flex w-full items-center justify-center border-t border-t-gray-200">
          <div className="w-full overflow-x-scroll">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
              
            <table>
              <thead style = {{height:50}}>
                <th>No</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
                <th>Type</th>
              </thead>
              <tbody style={{textAlign:'center'}}>

                {transactions.map((item, i) => (
                    <tr
                      style = {{height:40}}
                      key={i}
                    >
                      <td>{i+1}</td>
                      <td>{item.time}</td>
                      <td>{item.amount}</td>
                      <td>{item.hash.substring(0,10)}...</td>
                      <td>{item.type}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
           { transactions.length == 0 &&<p style = {{margin:30,textAlign:'center'}} >No Transactions yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
