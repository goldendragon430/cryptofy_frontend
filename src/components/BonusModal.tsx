import {useState,useEffect} from "react";

import { useAuth } from "../contexts/SessionContext";
import { useApi } from "../contexts/ApiContext";
const BonusModal = () => {


  const [{doPost}] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [time,setTime] = useState(0)

  const getPower = async()=>{
    const response = await doPost('mining/get_power',{
      token : token,
    })
    if(response.error || response.result == 'failed') {

    }
    else{
      if(response['bonus_expired_time'] >= 0)
       setTime(3600*6 - response['bonus_expired_time'])
    }
  }
  
  const getReward = async()=>{
    const response = await doPost('reward/add_reward',{
      token : token,
    })
    if(response.error || response.result == 'failed') {

    }
    else{
      await getPower()
    }    
  }
  useEffect(()=>{
    if(token)
      getPower()
  },[token])

  useEffect(() => {
    const timeout = setInterval(() => {
      if(time > 0)
          setTime(time-1)
    }, 1000);
    return () => clearInterval(timeout);
  }, [time]);
 

 
  return (
    <>
      <button
        className="btn-outline-warning self-start rounded-md border-[1px] p-2"
        onClick={getReward}
      >
        {time == 0 ? 'get bonus' : (Math.floor(time/3600) + ' : ' + (Math.floor(time%3600/60)) + ' : ' + (Math.floor(time%60)))}
      </button>


    </>
  );
};

export default BonusModal;
