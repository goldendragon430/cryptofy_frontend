import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../config";
import { toast } from 'react-toastify'
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";
import Imgsrc from '../../assets/tron.svg'

 
 
const EventBanner: React.FC = () => {
  const [title, setTitle] = useState('Celebrate World Television Day')
  const [rate, setRate] = useState(300)
  const [time, setTime] = useState(2)
 
 
  // const url = BACKEND_URL + 'get_file?name=banner_2.png' ;
  const [image, setImage] = useState(null)
  const [imagedata, setImageData] = useState(null)
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token
  const [curDate,setCurDate] = useState('')
  const [endDate,setEndDate] = useState('')

  useEffect(() => {
    // setEndDate(getEndDate(time))
    const now = new Date();
    const currentDateTime = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes();
    setCurDate(currentDateTime)
    if(isNaN(time)){
      setEndDate(currentDateTime)
    }
    else {
      const later = new Date(now.getTime() + time * 60000);
      const laterDateTime = later.getFullYear() + '-' + (later.getMonth() + 1) + '-' + later.getDate() + ' ' + later.getHours() + ':' + later.getMinutes();
      setEndDate(laterDateTime)
  
    }
  }, [time])


  const handleUploadImage = e => {
    const [file] = e.target.files;
    setImageData(e.target.files[0])
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("files", imagedata);
    const url = BACKEND_URL + 'upload_file?name=banner_2.png';
    if (imagedata)
      await fetch(url, {
        method: "POST",
        body: formData
      })

    const response = await doPost('admin/create_event', {
      token: token,
      title: title,
      rate: rate,
      time: time
    })
    if (response.error || response.result == 'failed') {
      toast.error('Event is created already.')
    }
    else {
      toast.success('Started!')
    }

  }
  return (
    <>
      <div className="fixed left-0 md:left-[30%] lg:left-[30%] top-0 shadow-xl rounded-b-lg z-[9999999] w-[100%] md:w-[60rem] lg:w-[60rem] bg-orange-500  py-4 px-10 text-white flex justify-between" style={{ backgroundImage: `url(${image})` }}>
        <div className="flex flex-col">
          <h1 className="flex justify-between gap-4 text-xl font-semibold text-black">
            {title}, reacharge to get {rate}% bonus
          </h1>
          <h3>{curDate} ~ {endDate}</h3>
          <p className="font-thin mt-3">SPECIAL</p>
        </div>
        <div className="flex items-center justify-center">
          <button type="button" className="w-[100px] flex text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500">
            <img src={Imgsrc} alt="" className="h-6 w-6" />
            Deposit Now
          </button>
        </div>
      </div>
      <div className="flex h-full w-[95%] flex-col items-center gap-8 bg-[#f3f3f9] py-[2rem] pt-[10rem]">
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4 px-2">
          <span className="self-start text-base font-bold uppercase">
            Event Banner
          </span>
          <div className="w-full rounded-lg bg-white p-4">
            <div className="w-full flex items-center flex-col">
              <div className="flex flex-col w-[50%]" style={{ minWidth: 300 }}>
                <div className="flex w-full flex-col justify-start rounded-lg bg-cblack shadow-md">
                  <div className="px-3 py-5">
                    <p className="mb-1 text-white">add image</p>
                    <input
                      type="file"
                      onChange={handleUploadImage}
                      className="mb-4 w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                      required
                    />

                    <p className="mb-1 text-white">add text</p>
                    <input
                      type="text"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className="w-[95%] mb-4 rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                    />
                    <p className="mb-1 text-white">Bonus Rate</p>
                    <input
                      type="number"
                      value={rate}
                      onChange={e => setRate(parseInt(e.target.value))}
                      className="w-[95%] mb-4 rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                    />
                    <p className="mb-1 text-white">Timeline(minutes)</p>
                    <input
                      type="number"
                      value={time}
                      onChange={e => setTime(parseInt(e.target.value))}
                      className="w-[95%] rounded-md border-none bg-slate-500 bg-opacity-40 p-2 text-white outline-none focus:outline-4 focus:outline-slate-500"
                    />
                  </div>

                  <div className="mt-4 flex w-full justify-end border-t border-t-gray-200 p-2 px-10">
                    <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white" onClick={onSubmit}>
                      start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBanner;
